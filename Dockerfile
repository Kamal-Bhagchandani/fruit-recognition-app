FROM python:3.11-slim

WORKDIR /app


# Copy production requirements
COPY requirements-prod.txt .


# Install production dependencies
RUN pip install --no-cache-dir -r requirements-prod.txt


# Copy only necessary folders/files
COPY app ./app
COPY model ./model


EXPOSE 5000


CMD ["gunicorn", "-b", "0.0.0.0:5000", "app.app:app"]