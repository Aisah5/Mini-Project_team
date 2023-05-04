import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import db from "server.js";
// import db from "./server.js";


const{DataTypes} = Sequelize;

const User = db.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    storename: DataTypes.STRING
},{
    freezetableName:true
})

export default User;


(async()=>{
    await db.sync();
})();






