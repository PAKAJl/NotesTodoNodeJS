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

router.delete("/:id", (req, res) => {
    const noteId = parseInt(req.params.id)

    const result = noteService.deleteNote(noteId)
    console.log(result)
    if (result == "404"){
        return res.status(404).json({ message: 'Заметка не найдена' });
    }
    return res.status(200).json({message: "Задача удалена"})
  })
  
 router.put("/:id", (req, res) => {

    const result = noteService.updateNote(req.params.id, req.body)
    console.log(result)
    return res.status(200).json({message: "Задача обновлена"})
})

export const noteRouter = router