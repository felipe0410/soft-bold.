
module.exports = (sequelize, dataTypes) => {
    let alias = "carrito";
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
        ID_compra_inf: {
            type: dataTypes.INTEGER
        }
        
    }
    let config = {
        tableName: "carrito",
        timestamps: false
    }
    
    const carrito = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsToMany(models.producto, {
            as: "compra-productos",
            through: "productos_carrito",
            foreignKey: "ID_compra",
            otherKey: "ID_producto",
            timestamps: false
        }),
        Product.belongsTo(models.contacto, {
            as: "compra_inf",
            foreignKey: 'ID_compra_inf'
        })
    }

    return carrito;
}