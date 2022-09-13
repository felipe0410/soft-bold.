
module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        ID_usuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        E_mail: {
            type: dataTypes.STRING
        },
        Nombre: {
            type: dataTypes.STRING
        },
        Apellido: {
            type: dataTypes.STRING
        },
        Contraseña: {
            type: dataTypes.STRING
        },
        
    }
    let config = {
        tableName: "Usuario",
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasOne(models.carrito, {
            foreignKey: 'Carrito_productos_ID_ producto'
          });
    }

    return Usuario;
}