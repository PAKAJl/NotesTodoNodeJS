import fs from "fs"
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class inMemoryDB{
    notes = []
    nextId = 0
    filePath ='data.json';

    constructor(){
        this.readNotes()
    }

    create(note){
        this.notes.push({
            id : this.nextId,
            note : note
        })
        this.nextId++
        console.log(this.notes)
        this.saveNotes()
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

    saveNotes(){
        const data = {
            lastId : this.nextId,
            notes : this.notes
        }
        fs.writeFileSync(path.join(__dirname,this.filePath), JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error("Ошибка при записи файла:", err);
            } else {
                console.log("✅ JSON-файл успешно создан:", this.filePath);
            }})
    }

    readNotes(){
        if (fs.existsSync(path.join(__dirname, this.filePath))) {
            const data = JSON.parse(fs.readFileSync(path.join(__dirname, this.filePath)))
            this.nextId = data.lastId
            this.notes = data.notes
        } else {
            this.nextId = 0
            this.notes = []
        }
        
    }
}