import { Sequelize } from"sequelize";
import db from "../config/Database.js";


const{DataTypes} = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    decription: DataTypes.TEXT
}, {
    freezeTableName: true
});

export default Product;


(async()=>{
    await db.sync();
})();






