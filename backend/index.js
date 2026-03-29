
import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
dotenv.config(); //load env variables

//get access from mongoClient
const MongoClient = mongodb.MongoClient;

const dbUri =
  process.env.RESTREVIEWS_DB_URI ||
  process.env.ATLAS_URI ||
  process.env.MONGO_URI;
const dbNS = process.env.RESTREVIEWS_NS || process.env.MONGO_DB_NAME || "sample_restaurants";

if (!dbUri) {
  console.error(
    "Missing database URI: set RESTREVIEWS_DB_URI (or ATLAS_URI/MONGO_URI) in backend/.env"
  );
  process.exit(1);
}

//if 5000 cannot be accessed use 8000
const port = process.env.PORT || 8000;

//connect the database
MongoClient.connect(dbUri, {
  maxPoolSize: 50, //50 people
  connectTimeoutMS: 2500, //every 2500 millisec request will timeout
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    //get the initial reference to the restaurants collection in db
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
