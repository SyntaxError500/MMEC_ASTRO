# Run this from the model_server directory:
#
# Install dependencies:
#   pip install -r requirements.txt
#
# Start the server:
#   uvicorn main:app --reload --host 0.0.0.0 --port 8000
#
# The API will be available at http://localhost:8000
#
# The /predict endpoint expects JSON like:
# {
#   "ra": 123.45,
#   "dec": -54.32,
#   "event_type": "Supernova",
#   "time_window": 24,
#   "start_date": "2025-09-01T00:00:00Z",
#   "end_date": "2025-09-02T00:00:00Z"
# }
