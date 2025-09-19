import db from '../../models/index.js';
const { Note } = db;

export class NoteService{
    constructor(db){
        this.db = db
    }

    createNote(note){
        if (!note || !note.text){
            throw new Error('Note text is required');
        }else{
            const newNote = Note.create(note)
            return newNote
        }
    }

    getNotes(){
        return Note.findAll()
    }

    deleteNote(id){
        const deletedNote = Note.findByPk(id).destroy()
        if (!deletedNote){
            return Error(`Note with id ${id} not found`)
        }
        return deletedNote
    }

    updateData(id, note){
        const updatedNote = Note.findByPk(id).update(note)
        if (!updatedNote){
            return Error(`Note with id ${id} not found`)
        }
        return updatedNote
    }
}