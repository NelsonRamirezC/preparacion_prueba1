import app from "./app.js";
import sequelize from "./database/database.js"
import initModels from "./models/init-models.js";

const main = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    initModels(sequelize);

    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000.");
    });
}

main();