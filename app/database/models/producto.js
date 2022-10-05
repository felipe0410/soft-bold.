const categoria = require("./categoria");

module.exports = (sequelize, dataTypes) => {
    let alias = "producto";
    let cols = {
        ID_producto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        Nombre_Producto: {
            type: dataTypes.STRING
        },
        Marca: {
            type: dataTypes.STRING
        },
        Precio: {
            type: dataTypes.INTEGER
        },
        Unidades: {
            type: dataTypes.STRING
        },
        Descripcion: {
            type: dataTypes.STRING
        },
        Componentes: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        categoria:{
            type: dataTypes.INTEGER
        },
        
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }
    
    const producto = sequelize.define(alias,cols,config);

    producto.associate = function(models){
        producto.belongsTo(models.categoria, {
            as: "productos-categoria",
            foreignKey: 'categoria'
        })

       /*  producto.belongsToMany(models.carrito, {
            as: "productos_carrito",
            through: "productos",
            foreignKey: "ID_producto",
            otherKey: "ID_compra",
            timestamps: false
        }) */
    }
    return producto;
}