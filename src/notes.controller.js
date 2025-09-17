import { Router } from "express";
import { NoteService } from "./notes.service.js";

//Создаем роутер
const router = Router()

//Создаем экземляр сервиса
const noteService = new NoteService()

//Создаем твит через сервис, отправляем твит на фронт
router.post('/', (req, res) => {
    if (!req.body?.text?.length){
        return res.status(400).json({message : "Text is required!"})
    }

    const note = noteService.createNote(req.body)
    res.status(200).json(note)
})

router.get('/', (req, res) => {
    res.status(200).json(noteService.getNotes())
})

export const noteRouter = router