# MMEC_ASTRO


## Overview
MMEC_ASTRO is a full-stack prototype project that combines a modern React frontend with a Python FastAPI backend. The system is designed for event correlation and analysis, with future plans to support live event checks, real-time data processing, and big data integration using MongoDB. The project aims to provide users with insights into astronomical or synthetic events, leveraging machine learning for event correlation and prediction.

---


## Features

### Frontend
- Built with **React** (using Vite for fast development and build)
- Styled with **Tailwind CSS** for rapid, responsive design
- Multiple pages: Home, About, Team, Check, Input
- Modular components: Dome Gallery, Infinite Menu, Navigation, and more
- API integration for dynamic data and event checking
- Modern UI/UX with focus on accessibility and performance
- Ready for deployment on Vercel or any static hosting

### Backend
- **Python FastAPI** server for high-performance APIs
- Hosts a machine learning model (pickle file) for event correlation
- API endpoints for event correlation, predictions, and data analysis
- Designed for easy deployment with Vercel (`vercel.json` included)
- Dependency management via `requirements.txt`
- Structured for future integration with databases (MongoDB, etc.)
- Handles synthetic and real event data

### Machine Learning
- Utilizes pre-trained models stored as `.pkl` files
- Supports event correlation and prediction tasks
- Can be extended to support additional ML models and data sources

### Data
- Includes synthetic event datasets for demonstration and testing
- Ready for integration with real astronomical or event data sources

---


## Current Status
This project is currently a prototype. Not all features are implemented yet. We are working to:
- Enable live event correlation checks for users
- Provide extra information about events as they happen
- Integrate big data support using MongoDB
- Improve model accuracy and add more event types
- Enhance frontend interactivity and visualization

---


## Project Structure
```
frontend/             # React app (UI)
   src/                # Source code (components, pages, assets)
   public/             # Static assets
   ...
ml_model/             # Machine learning model and backend
   model/              # Model files (.pkl), synthetic datasets
   model_server/       # FastAPI server (main.py, requirements.txt)
```

---


## Getting Started

### Prerequisites
- Node.js and npm (for frontend)
- Python 3.10+ (for backend)

### Frontend
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (or as indicated in the terminal)

### Backend
1. Navigate to the backend server directory:
   ```sh
   cd ml_model/model_server
   ```
2. (Optional) Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   venv\Scripts\activate  # On Windows
   source venv/bin/activate  # On macOS/Linux
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```sh
   uvicorn main:app --reload
   ```
5. The API will be available at `http://localhost:8000`

---


## Deployment
- The backend is configured for Vercel deployment using `render` (supports serverless deployment).
- The frontend can be deployed to Vercel, Netlify, or any static hosting provider.
- For production, ensure environment variables and secrets are managed securely.

---


## Future Plans
- Live event correlation and real-time updates
- Big data analytics and storage with MongoDB
- Enhanced user features and event insights
- Real-time notifications and alerting system
- Integration with external APIs for real event data
- Advanced data visualization (charts, graphs, timelines)
- User authentication and personalized dashboards
- Admin panel for managing events and users
- Support for additional machine learning models
- Automated testing and CI/CD pipeline
- Internationalization (i18n) and accessibility improvements
- Mobile-friendly and PWA (Progressive Web App) support
- Documentation website and API docs (Swagger/OpenAPI)

---


## Technologies Used
- React, Vite, Tailwind CSS (Frontend)
- Python, FastAPI, Uvicorn (Backend)
- scikit-learn, pandas, numpy (ML/Data)
- MongoDB (planned)
- Vercel (deployment)

## Usage
1. Start both frontend and backend servers as described above.
2. Use the frontend UI to submit event data and view results.
3. Check API documentation (if available) at `/docs` on the backend server.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License
This project is for educational and demonstration purposes.

