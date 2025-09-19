import express from "express"
import { noteRouter } from "./src/controllers/notes.controller.js"
import dotenv from "dotenv"
import cors from "cors"
import db from './models/index.js';

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
    app.options('/api/notes/:id', cors());
    //Поддержка json
    app.use(express.json())

    //Обрабатываем корневой роут
    app.use("/api/notes", noteRouter)

    //Обрабатываем не существующие роуты
    app.use((req, res) => {
        res.status(404).json({message: "Not Found"})

    })

    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 4200
    //Включаем сервер
    app.listen(port, () => {
        console.log('Server is running on port ' + port)
    })

}

main()