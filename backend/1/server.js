const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");
import CategoryRoute from "./routes/categoryRoute.js";

// import app from "./index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(CategoryRoute);


import { Sequalize } from"sequelize";

const db = new Sequalize('kasir_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "kasir_db"
// })

// const db = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     auth: {
//         user: "root",
//         pass: "root123"
//     }
// })



  
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const storename = req.body.storename;

    db.query("INSERT INTO user (username, email, password, phone, storename) VALUES (?, ?, ?, ?, ?)", [username, email, password, phone, storename],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
            }
        }
    )
})


app.post("/login", (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ? and password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({Message: "Error inside server"}); 
        if(result.length > 0) {
            return res.json({Login: true});
        } else {
            return res.json({Login: false})
        }
    })
})

// app.get("/category", (req, res) => {
//     const sql = "SELECT * FROM category WHERE email = ? and password = ?";
//     db.query(sql, [req.body.email, req.body.password], (err, result) => {
//         if(err) return res.json({Message: "Error inside server"}); 
//         try {
//             const response = Category.findAll();
//             res.status(200).json(response);
//         } catch (error) {
//             console.log(error.message);
//         }
//     })
// })
// try {
//     const response = await Category.findAll();
//     res.status(200).json(response);
// } catch (error) {
//     console.log(error.message);
// }
// app.post("/login", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     db.query("SELECT * FROM user WHERE email = ? AND password = ?", [email, password],
//         (err, result) => {
//             if (err) {
//                 req.setEncoding({ err: err });
//             } else {
//                 if (result.length > 0) {
//                     res.send(result);
//                 } else {
//                     res.send({ message: "WRONG EMAIL OR PASSWORD!" })
//                 }
//             }

//         }
//     )
// })

app.get('/', (req, res)=> {
    return res.json("/ is Working");
})


app.listen(3001, () => {
    console.log("running backend server is working");
})