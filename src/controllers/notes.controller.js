console.log('Импорт работает!');

import { Router } from "express";
import { NoteService } from "../services/notes.service.js";
import { createNoteSchema } from '../validators/note.validator.js';
import validate from '../middlewares/validate.js';


const router = Router()
const noteService = new NoteService()


router.post('/', validate(createNoteSchema), async (req, res, next) => {
    try{
        const note = await noteService.createNote(req.body)
        res.status(201).json(note)
    }catch(err){
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try{
        res.status(200).json( await noteService.getNotes())
    }catch(err){
        next(err)
    }
})

router.delete("/:id",validate(createNoteSchema), async (req, res, next) => {
    try{
        const noteId = parseInt(req.params.id)

        const result = await noteService.deleteNote(noteId)
        if (!result){
            return res.status(404).json({ message: 'Заметка не найдена' });
        }   
        return res.status(200).json({message: "Задача удалена", data: result})
    }catch(err){
        next(err)
    }
    
  })
  
 router.put("/:id",validate(createNoteSchema), async (req, res, next) => {
    try{
        const noteId = parseInt(req.params.id)
        const result = await noteService.updateData(noteId, req.body)
        if (!result){
            return res.status(404).json({message: "Задача не найдена"})
        }
        return res.status(200).json({message: "Задача обновлена", data: result})
    }catch(err){
        next(err)
    }
})

export const noteRouter = router