import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Category from "./CategoryModel.js"


const{DataTypes} = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    description: DataTypes.TEXT
}, {
    freezeTableName: true
});

// // memiliki
// Product.hasOne(Category, {foreignKey: 'id'})
// // milik
// Product.belongsTo(Category, {foreignKey: 'id'})

export default Product;


(async()=>{
    await db.sync();
})();






