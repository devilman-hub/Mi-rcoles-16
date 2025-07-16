import db from "../config/database.js";

export default class InfoController{ //Función de Lectura.
    static index(req, res){
        var sql = "SELECT * FROM Personajes"
        db.all(sql,(err, personaje)=>{
            if(err){
                res.status(500).json({'error': err.message})
            }
            res.json(personaje)
        })
    }

    static store(req, res){
        const{title, descript, img, color}=req.body
        const sql = 'INSERT INTO Personajes (title, descript, img, color) VALUES (?, ?, ?, ?)'
        const params = [title, descript, img, color]
        db.run(sql, params, function(err){
            if(err){
                res.status(500).json({'error': err.message})
            }
            req.body.id=this.lastID //Atributo de Paquete SQLite.
            res.json({'title':req.body})
        })
    }
    static details(req, res){ //Función de Creado.
        var sql = "SELECT * FROM Personajes WHERE id = ?"
        db.get(sql, req.params.id,(err, personaje)=>{
            if(err){
                res.status(500).json({'error': err.message})
            }
            res.json(personaje)
       })
    }
    
}