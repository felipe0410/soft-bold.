
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
        total:{
            type: dataTypes.INTEGER
        }
        
        
        
    }
    let config = {
        tableName: "categoria",
        timestamps: false
    }
    
    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = function(models){
        categoria.hasMany(models.producto, {
            as: "categoria",
            foreignKey: 'categoria'
        })
    }
    return categoria;
}