import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
// import db from "./server.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));


app.use(UserRoute);
app.use(CategoryRoute);
app.use(ProductRoute);



app.listen(3001, ()=>
    console.log("running backend INDEX.JS is working")
);