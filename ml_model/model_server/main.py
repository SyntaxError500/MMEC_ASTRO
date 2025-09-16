from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import os

app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model at startup
MODEL_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '../model/event_correlator.pkl'))
model = joblib.load(MODEL_PATH)

class PredictRequest(BaseModel):
    delta_time_sec: float
    angular_sep_deg: float
    cross_source: int  # 0 = same, 1 = different

@app.post("/predict")
async def predict(req: PredictRequest):
    # Prepare features for the model
    features = np.array([
        req.delta_time_sec,
        req.angular_sep_deg,
        req.cross_source
    ]).reshape(1, -1)
    pred_label = int(model.predict(features)[0])
    print(f"Prediction: {pred_label} for features {features}")
    if hasattr(model, "predict_proba"):
        conf = float(model.predict_proba(features)[0][1])
        print(f"Confidence: {conf}")
    else:
        conf = None
    return {
        "predicted_label": pred_label,
        "correlation_confidence": conf
    }
