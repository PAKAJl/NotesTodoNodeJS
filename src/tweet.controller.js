import { Router } from "express";
import { TweetService } from "./tweet.service.js";

//Создаем роутер
const router = Router()

//Создаем экземляр сервиса
const tweetService = new TweetService()

//Создаем твит через сервис, отправляем твит на фронт
router.post('/', (req, res) => {
    //обработка пустого твита
    if (!req.body?.text?.length){
        return res.status(400).json({message : "Text is required!"})
    }

    const tweet = tweetService.createTweet(req.body)
    res.status(200).json(tweet)
})

export const tweetRouter = router