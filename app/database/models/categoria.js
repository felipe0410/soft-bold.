
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
    
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasOne(models.producto, {
            foreignKey: 'productos_ID_ producto'
          });
    }

    return categoria;
}