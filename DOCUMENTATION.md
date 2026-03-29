# FoodRev Documentation (Supplement)

## Purpose
FoodRev is a learning project demonstrating a small full-stack web app for restaurant reviews.

## System architecture
- frontend: React SPA (components, routing, axios service)
- backend: Express REST API (controllers + DAO pattern)
- database: MongoDB Atlas (restaurants + reviews collections)

## Key files
- backend/index.js: server start and DB connect
- backend/server.js: express app + routes
- backend/api/restaurants.controller.js: list/get/cuisines endpoints
- backend/api/reviews.controller.js: review CRUD endpoints
- backend/dao/restaurantsDAO.js: restaurants queries + joins
- backend/dao/reviewsDAO.js: review create/update/delete
- frontend/src/App.js: route and auth-state control
- frontend/src/components/restaurants-list.js: search/list UI
- frontend/src/components/restaurants.js: detail + reviews
- frontend/src/components/add-review.js: create/edit review
- frontend/src/components/login.js: local login page

## DB field references
- restaurants: `_id`, `name`, `cuisine`, `address.{building,street,zipcode}`
- reviews: `_id`, `restaurant_id`, `user_id`, `name`, `text`, `date`

## Run instructions
See README.md in root.

## Deployment notes
- adjust `REACT_APP_API_URL` and `PORT` for production
- add `npm run build` and serve static files from backend or separate host
- add secure auth and HTTPS
