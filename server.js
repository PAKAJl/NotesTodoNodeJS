import express from "express"
import { noteRouter } from "./src/notes.controller.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
//Подключаем Express
const app = express()

async function main() {
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