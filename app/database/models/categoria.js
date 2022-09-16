
module.exports = (sequelize, dataTypes) => {
    let alias = "categoria";
    let cols = {
        idcategoria: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        
    }
    let config = {
        tableName: "categoria",
        timestamps: false
    }
    
    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = function(models){
        categoria.belongsToMany(models.producto, {
            as: "categoria_producto",
            through: "categoria_has_productos",
            foreignKey: "IDcategoria",
            otherKey: "ID_producto",
            timestamps: false
        })
    }
    return categoria;
}