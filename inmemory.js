export class inMemoryDB{
    notes = []
    nextId = 0

    create(note){
        this.notes.push({
            id : this.nextId,
            note : note
        })
        this.nextId++
        console.log(this.notes)
    }

    read(id){
        this.notes.forEach((note) =>{
            if (note.id == id){
                return note
            }
        })
        return null
    }

    update(id, text){
        const note = this.read(id)
        if (note){
            note.note.text = text
        }
    }

    delete(id){
        this.notes = this.notes.splice(note => note.id != id)
        return this.notes
    }
}