export class NoteService{
    constructor(db){
        this.db = db
    }

    createNote(note){
        if (!note || !note.text){
            throw new Error('Note text is required');
        }else{
            this.db.create(note)
            return note
        }
    }

    getNotes(){
        return this.db.notes
    }

    deleteNote(id){
        const deletedNote = this.db.delete(id)
        if (!deletedNote){
            return Error(`Note with id ${id} not found`)
        }
        return deletedNote
    }

    updateData(id, note){
        const updatedNote = this.db.updateNote(id, note)
        if (!updatedNote){
            return Error(`Note with id ${id} not found`)
        }
        return updatedNote
    }
}