import app from "./app.js";


const main = () => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000.");
    });
}

main();