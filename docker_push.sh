# Frontend
docker build -f ./app_frontend/Dockerfile -t frontend ./app_frontend
docker tag frontend:latest gcr.io/host-website-261608/frontend:latest
docker push gcr.io/host-website-261608/frontend:latest

# Backend
docker build -f ./app_backend/Dockerfile -t backend ./app_backend
docker tag backend:latest gcr.io/host-website-261608/backend:latest
docker push gcr.io/host-website-261608/backend:latest

# Hot Redeploy
gcloud container clusters get-credentials primary-cluster
kubectl rollout restart deployment/react-frontend
kubectl rollout restart deployment/flask-backend
