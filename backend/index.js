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



 
// app.post('/signup', (req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phone = req.body.phone;
//     const storename = req.body.storename;

//     db.query("INSERT INTO user (username, email, password, phone, storename) VALUES (?, ?, ?, ?, ?)", [username, email, password, phone, storename],
//         (err, result) => {
//             if (result) {
//                 res.send(result);
//             } else {
//                 res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
//             }
//         }
//     )
// })


// app.post("/login", (req, res) => {
//     const sql = "SELECT * FROM user WHERE email = ? and password = ?";
//     db.query(sql, [req.body.email, req.body.password], (err, result) => {
//         if(err) return res.json({Message: "Error inside server"}); 
//         if(result.length > 0) {
//             return res.json({Login: true});
//         } else {
//             return res.json({Login: false})
//         }
//     })
// })




app.listen(3001, ()=>
    console.log("running backend INDEX.JS is working")
);