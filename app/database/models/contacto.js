
module.exports = (sequelize, dataTypes) => {
    let alias = "Contacto_compra";
    let cols = {
        ID_compra_inf: {
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
        Tipo_documento: {
            type: dataTypes.STRING
        },
        Ndocumento:{
            type: dataTypes.INTEGER
        },
        Direccion:{
            type: dataTypes.STRING
        },
        referencia:{
            type: dataTypes.STRING
        },
        Departamento:{
            type: dataTypes.STRING
        },
        Ciudad:{
            type: dataTypes.STRING
        },
        Ndocumento:{
            type: dataTypes.INTEGER
        },

        
    }
    let config = {
        tableName: "Contacto_compra",
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasOne(models.carrito, {
            foreignKey: 'Carrito_productos_ID_producto'
          });
    }

    return Contacto_compra;
}