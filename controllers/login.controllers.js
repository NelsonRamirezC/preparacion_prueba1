import jwt from "jsonwebtoken";

export const login = (req, res) => {
    try {
        //hardcodeado
        let admin = {
            username: "admin@admin.com",
            password: "123456"
        }

        let { username, password } = req.body;

        if (admin.username == username && admin.password == password) {
            let token = jwt.sign({ usuario: username }, "palabrasecretafirmatoken");

            return res.json({ code: 200, message: "Login correcto.", token })
            
        } else {
            return res.status(401).json({ code: 401, message: "Login invalido." });
        }

        

    } catch (error) {
        res.status(500).json({ code: 500, message: "error en proceso de autenticación" });
    }
}
