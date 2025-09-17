import { inMemoryDB } from "../inmemory.js";

//класс сервиса
export class NoteService{
    db = new inMemoryDB()
    //Создаем твит
    createNote(note){
        this.db.create(note)
        console.log(note)
        return note
    }

    getNotes(){
        return this.db.notes
    }

    deleteNote(id){
        return this.db.delete(id)
    }
}