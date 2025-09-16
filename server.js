import express from "express"
import { tweetRouter } from "./src/tweet.controller.js"
import dotenv from "dotenv"

dotenv.config()
//Подключаем Express
const app = express()

async function main(params) {

    //Поддержка json
    app.use(express.json())

    //Обрабатываем корневой роут
    app.use("/api/tweets", tweetRouter)

    //Обрабатываем не существующие роуты
    app.use((req, res) => {
        res.status(404).json({message: "Not Found"})
    })

    const port = process.env.PORT || 4200
    //Включаем сервер
    app.listen(port, () => {
        console.log('Server is running on port ' + port)
    })

}

main()