FROM python:3.11-slim

WORKDIR /app

COPY ./Pipfile ./Pipfile
COPY ./Pipfile.lock ./Pipfile.lock

RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --system

COPY ./myapp ./myapp

CMD ["uvicorn", "myapp.main:app", "--host", "0.0.0.0", "--port", "81"]