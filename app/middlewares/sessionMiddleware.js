const sessionMiddleware = function (req, res, next) {
    if (req.session.userLogged) {
        if (req.session.userLogged.admin) {
            res.redirect('/users/ingreso')
        }else{
            res.redirect('/users/ingreso2')
        }
    } else{
        next();
    }
    
}


module.exports = sessionMiddleware;

//invitado