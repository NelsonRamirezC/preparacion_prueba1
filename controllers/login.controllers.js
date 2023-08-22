export const login = (req, res) => {
    try {
        //hardcodeado
        let admin = {
            username: "admin@admin.com",
            password: "123456"
        }

        let { username, password } = req.body;
        console.log(username, password);
        res.json({ code: 200, message:  "Ruta login"})

    } catch (error) {
        res.status(500).json({ code: 500, message: "error en proceso de autenticación" });
    }
}
