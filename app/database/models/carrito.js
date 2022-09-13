
module.exports = (sequelize, dataTypes) => {
    let alias = "Carrito";
    let cols = {
        ID_compra: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Unidades: {
            type: dataTypes.INTEGER
        },
        Precio: {
            type: dataTypes.INTEGER
        },
        
    }
    let config = {
        tableName: "Carrito",
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasOne(models.producto, {
            foreignKey: 'productos_ID_ producto1'
          });
    }

    return Carrito;
}