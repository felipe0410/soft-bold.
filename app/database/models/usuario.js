
module.exports = (sequelize, dataTypes) => {
    let alias = "usuario";
    let cols = {
        ID_usuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
            type: dataTypes.STRING
        },
        Nombres: {
            type: dataTypes.STRING
        },
        Apellidos: {
            type: dataTypes.STRING
        },
        Contraseña: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.STRING
        }
        
    }
    let config = {
        tableName: "usuario",
        timestamps: false
    }
    
    const usuario = sequelize.define(alias, cols, config);


    return usuario;
}