# FoodRev (Restaurant_App)

## Overview
FoodRev is a MERN-style restaurant review demo. Users can search restaurants, view details, and add/edit/delete their own reviews. Authentication is currently client-managed (username/id). Backend is Express + MongoDB, frontend is React.

## Features
- List restaurants with search filters (name, zipcode, cuisine)
- Restaurant detail view with embedded review list
- Add review / edit review / delete review (user id check)
- Client-side login state via `src/components/login.js`
- API endpoints in `backend/api/*`
- MongoDB access via DAO layer in `backend/dao/*`

## Tech stack
- Backend: Node.js + Express + MongoDB driver + dotenv + cors
- Frontend: React 18 + react-router-dom v5 + axios + bootstrap
- Dev: nodemon (optional), CRA tooling

## Project structure
- `/backend` (server code)
  - `index.js` app start + DB connect
  - `server.js` express setup
  - `api/` routes + controllers
  - `dao/` Mongo data access objects
- `/frontend` (React client)
  - `src/App.js` router + login state
  - `src/components/` pages and widgets
  - `src/services/restaurant.js` API wrappers
  - `src/http-common.js` axios baseURL

## Environment configuration
### Backend `.env` (in backend/)
- `RESTREVIEWS_DB_URI` (preferred)
- `ATLAS_URI` (alias fallback)
- `MONGO_URI` (alias fallback)
- `RESTREVIEWS_NS` (database name, or fallback `sample_restaurants`)
- `MONGO_DB_NAME` (alias fallback)
- `PORT` (optional; defaults `8000`)

Example:
```
RESTREVIEWS_DB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/?retryWrites=true&w=majority
RESTREVIEWS_NS=sample_restaurants
PORT=5000
```

### Frontend `.env` (in frontend/)
- `REACT_APP_API_URL` (defaults: `http://localhost:5000/api/v1/restaurants`)

Example:
```
REACT_APP_API_URL=http://localhost:5000/api/v1/restaurants
```

## Run locally
### Backend
1. `cd backend`
2. `npm install`
3. create `.env`
4. `node index.js` or install nodemon and run `npx nodemon index.js`
5. verify: `GET http://localhost:5000/api/v1/restaurants` returns JSON

### Frontend
1. `cd frontend`
2. `npm install`
3. ensure `.env` has `REACT_APP_API_URL`
4. `npm start`
5. open `http://localhost:3000`

## API endpoints
- GET `/api/v1/restaurants` (query: `name`, `cuisine`, `zipcode`, `page`)
- GET `/api/v1/restaurants/id/:id`
- GET `/api/v1/restaurants/cuisines`
- POST `/api/v1/restaurants/review`
- PUT `/api/v1/restaurants/review`
- DELETE `/api/v1/restaurants/review?id=<reviewId>`

## To-do (this run)
1. fix env/port mismatch (done)
2. add input validation and error handling
3. implement JWT auth + user model
4. add tests for backend and frontend

## Notes
- In frontend, login is unprotected (id and name are plain text).
- Review author operations compare `user.id` to `review.user_id`.
- `restaurantsDAO.getRestaurantByID()` uses aggregation lookup to include reviews.

