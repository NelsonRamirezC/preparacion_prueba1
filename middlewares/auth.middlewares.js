import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    
    let token = req.query.token;

    if (token) {
        console.log("token recibido:", token);

        //VERIFICAR EL TOKEN
        jwt.verify(token, "palabrasecretafirmatoken", (error, decoded) => {
            if (error) {
                if (req.route.path.includes("/api")) {
                    return res
                        .status(401)
                        .json({
                            code: 401,
                            message: "Token invalido, intente iniciar sesión nuevamente."
                        });
                } else {
                    return res.render("error", {
                        code: 401,

                            message: "Token invalido, intente iniciar sesión nuevamente."
                    });
                }
            }
            return next();
        });
    } else {
        if (req.route.path.includes("/api")) {
            return res.status(401).json({ code: 401, message: "Usted no tiene permisos para acceder"})
        } else {
            return res.render("error", {
                code: 401,
                message: "Usted no tiene permitido acceder a esta página, intente iniciando sesión."
            });
        }
    } 
}
