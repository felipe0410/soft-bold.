
module.exports = (sequelize, dataTypes) => {
    let alias = "productos";
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
    return productos;
}