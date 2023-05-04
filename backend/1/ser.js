const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const { check, validationResult } = require('express-validator');

app.use = express.json();
app.use(cors());
const app = express();app.use(cors());app.use(express.json());
const db = mysql.createConnection({    
    host: "localhost",    
    user: "root",    
    password: "",    
    database: "kasir_db"
})

app.post('/signup', (req, res) => {    
    const sql = "INSERT INTO users (username, email, password, phone, storename) VALUES (?)";    
    const values = [        
        req.body.username,        
        req.body.email,        
        req.body.password,
        req.body.phone,    
        req.body.storename
            
    ]    
        db.query(sql, [values], (err, data) => {        
            if(err) {
                return res.json("Error");
            }
            return res.json(data);    
    })
})


// app.post("/signup", async (req, res) => {

//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phone = req.body.phone;
//     const storename = req.body.storename;

//     connection.query("INSERT INTO account (username, email, password, phone, storename) VALUES (?,?,?,?,?)", 
//     [username, email, password, phone, storename], (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         res.status(200).send("registeration successful");
//     });
// });

app.post('/login',[    
    check('email', "Email length error").isEmail().isLength({min: 10, max:30}),    
    check('password', "password length 8-15").isLength({min: 8, max: 15})], (req, res) => {    
        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";    
        db.query(sql, [req.body.email,req.body.password ], (err, data) => {
        const errors = validationResult(req);        
        if(!errors.isEmpty()) {            
            return res.json(errors);        
        } else {            
            if(err) {                
            return res.json("Error");            
        }            
        if(data.length > 0) {                
            return res.json("Success");            
        } else {                
            return res.json("Faile");            
        }        
    }            
    })
})

app.listen(3001, ()=> {    
    console.log("listening");
})

// app.listen(port, function () {
//     console.log(`Server is Running on Localhost ${port}`)
// })
    