# ml_train.py
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score
import joblib

# ----------------------------
# Load dataset
# ----------------------------
pairs_df = pd.read_csv("synthetic_pairs.csv")

X = pairs_df[["delta_time_sec", "angular_sep_deg", "cross_source"]]
y = pairs_df["label_correlated"]

# ----------------------------
# Train-test split (stratified)
# ----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# ----------------------------
# Train model
# ----------------------------
model = xgb.XGBClassifier(
    objective="binary:logistic",
    n_estimators=200,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    eval_metric="logloss",
    base_score=0.5
)

model.fit(X_train, y_train)

# ----------------------------
# Evaluate
# ----------------------------
y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

print("Classification Report:\n", classification_report(y_test, y_pred))

if len(set(y_test)) > 1:
    print("ROC-AUC Score:", roc_auc_score(y_test, y_proba))
else:
    print("ROC-AUC cannot be computed (only one class in y_test)")

# ----------------------------
# Save model
# ----------------------------
joblib.dump(model, "event_correlator.pkl")
print("✅ Model saved as event_correlator.pkl")
