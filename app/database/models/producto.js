
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
        }
        
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }
    
    const producto = sequelize.define(alias, cols, config);

    producto.associate = function(models){
        producto.belongsToMany(models.categoria, {
            as: "producto_categoria",
            through: "categoria_has_productos",
            foreignKey: "ID_producto",
            otherKey: "IDcategoria",
            timestamps: false
        }),
        producto.belongsToMany(models.carrito, {
            as: "productos_carrito",
            through: "productos",
            foreignKey: "ID_producto",
            otherKey: "ID_compra",
            timestamps: false
        })
    }
    return producto;
}