
module.exports = (sequelize, dataTypes) => {
    let alias = "contacto_compra";
    let cols = {
        ID_compra_inf: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
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
        Whatsapp:{
            type: dataTypes.INTEGER
        },
        
    }
    let config = {
        tableName: "contacto_compra",
        timestamps: false
    }
    
    const contacto_compra = sequelize.define(alias, cols, config);

    contacto_compra.associate = function(models){
        contacto_compra.hasOne(models.carrito, {
            foreignKey: 'ID_compra_inf'
          });
    }

    return contacto_compra;
}