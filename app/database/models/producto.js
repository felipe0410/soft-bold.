
module.exports = (sequelize, dataTypes) => {
    let alias = "producto";
    let cols = {
        ID_producto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NombreProducto: {
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
        Descripion: {
            type: dataTypes.STRING
        },
        Componentes: {
            type: dataTypes.STRING
        },
        Imagen: {
            type: dataTypes.STRING
        }
        
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }
    
    const categoria = sequelize.define(alias, cols, config);

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
    return categoria;
}