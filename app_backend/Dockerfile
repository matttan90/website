FROM python:3.8.0-slim-buster

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt /app
RUN pip install --upgrade pip setuptools && \
    pip install --no-cache-dir -r /app/requirements.txt

# Bundle app source
COPY src /app
ENV PYTHONPATH=/app

# Default running
CMD gunicorn -b 0.0.0.0:8000 app:app
