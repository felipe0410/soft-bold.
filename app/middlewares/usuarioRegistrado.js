
const db = require('../../database/models')
const userLoggedMiddleware = function(req, res, next){
    res.locals.isLogged = false;
    if(req.cookies.username){
        db.User.findOne({where: {username: req.cookies.username}}).then(function(user){
            req.session.userLogged = user
        })
    }

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    next();

    
}

module.exports = userLoggedMiddleware;

//usuario registrado 