import { Sequelize } from"sequelize";
import db from "../config/Database.js";
// import db from "server.js";
// import db from "./server.js";


const{DataTypes} = Sequelize;

const Category = db.define('categories', {
    name: DataTypes.STRING,
},{
    freezetableName:true
})

export default Category;


(async()=>{
    await db.sync();
})();






