# API Documentation

## Introduction

### This document provides the API documentation for the Person API. The Person API is a RESTful API that provides endpoints for creating, reading, updating, and deleting people.

## Endpoints

### The Person API has the following endpoints:

### Create a New Person

## Endpoint: /api

## HTTP Method: POST

## Request Format:

```json
{
  "name": "Oduah Michael",
  "track": "backend",
  "email": "oduahmichaelebuka@gmail.com"
}
```

## Response Format:

```json
{
  "id": 1,
  "message": "Person created successfully."
}
```

# Fetch Details of a Person

## Endpoint: /api/user_id

## HTTP Method: GET

## Response Format:

```json
{
  "id": 1,
  "name": "Oduah Michael",
  "email": "oduahmichaelebuka@gmail.com"
}
```

# Update Details of an Existing Person

## Endpoint: /api/user_id

## HTTP Method: PATCH

## Request Format:

```json 
{
  "name": "Updated Name",
  "track": "backend",
  "email": "updated@example.com"
}
```

## Response Format

```json
{
  "message": "Person updated successfully."
}
```

# Remove a Person

## Endpoint: /api/user_id

## HTTP Method: DELETE

## Response Format:

```json
{
  "message": "Person removed successfully."
}
```

# Sample Usage

## Create a New Person

## Request:

```json
POST 
Host: https://hng-stage2-backend.vercel.app/api/
Content-Type: application/json

{
  "name": "Jane Doe",
  "track": "backend",
  "email": "janedoe@example.com"
}

```

## Response:

```json
{
  "id": 2,
  "message": "Person created successfully."
}
```

## Fetch Details of a Person

## Request:

```json
GET 
Host: https://hng-stage2-backend.vercel.app/api/user_id
```

## Response

```json
{
  "id": 1,
  "name": "Oduah Michael",
  "track": "backend",
  "email": "oduahmichaelebuka@gmail.com"
}
```

## Update Details of an Existing Person

### Request:

```json
PATCH 
Host: https://hng-stage2-backend.vercel.app/api/user_id
Content-Type: application/json

{
  "name": "Updated Name",
  "track": "backend",
  "email": "Updated Email"
}

```

## Response:

```json
{
  "message": "Person updated successfully."
}
```

## Remove a Person
## Request:
```json
DELETE 
Host: https://hng-stage2-backend.vercel.app/api/user_id
```

## Response:
```json
{
  "message": "Person removed successfully."
}

```

# Known Limitations and Assumptions

-  This API is designed for moderate usage and may not scale seamlessly to handle extremely high request volumes. 

- The API follows RESTful conventions and assumes clients will use the appropriate HTTP methods (GET, POST, PUT, DELETE) for CRUD operations.

-  The API assumes that users are already authenticated through a separate system and does not handle user authentication.


# UML DIAGRAM
 ![uml diagram](uml.png)

# Local Setup and Deployment

## To set up and deploy the API locally or on a server, follow these steps:

### Clone the repository from GitHub: git clone https://github.com/Michaeloduah/hng-stage2-backend

### Navigate to the project directory: cd hng-stage2-backend

### Install dependencies:

## `npm install`

### Start the API server:

## `npm start`

### Access the API at https://hng-stage2-backend.vercel.app/ .
