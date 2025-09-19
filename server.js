import express from "express"
import { noteRouter } from "./src/controllers/notes.controller.js"
import dotenv from "dotenv"
import cors from "cors"
import db from './models/index.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

dotenv.config()
//Подключаем Express
const app = express()

async function main() {
    

try {
  await db.sequelize.sync({ alter: true }); // или { force: true } для пересоздания
  console.log('База данных синхронизирована');
} catch (err) {
  console.error('Ошибка при синхронизации:', err);
}
    app.use(cors())
    app.use(express.json())
    app.use("/api/notes", noteRouter)
    
    app.use((req, res, next) => {
        const error = new Error("Not Found");
        error.statusCode = 404;
        next(error);
    });

    app.use(errorHandler);


    const port = process.env.PORT || 4200
    app.listen(port, () => {
        console.log('Server is running on port ' + port)
    })

}


main().catch((err) => {
  console.error('Ошибка при запуске приложения:', err);
  process.exit(1); 
});
