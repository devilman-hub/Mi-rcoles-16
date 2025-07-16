import sqlite from 'sqlite3'

const DBSOURCE =`db_${process.env.NODE_ENV}.sqlite`
let db = new sqlite.Database(DBSOURCE,(err)=>{
    if(err){
        console.log(err.message)
        throw err
    }
    else{
        console.log('Estamos en sqlite')
        db.run(
            `
            CREATE TABLE Personajes(
             
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            descript TEXT,
            img TEXT,
            color TEXT
            )`,
            (err)=>{
                if(err){
                    console.log('Ya está creada la Tabla.')
                }
                else{
                    var insert = 'INSERT INTO Personajes (title, descript, img, color) VALUES (?, ?, ?, ?)' //Id no se pone porque se autoincrementa.
                    db.run(insert,["Boston Terrier", "¡Hola! Mi nombre es Mike y me gustaría tener un cálido hogar; soy travieso y juguetón. Tengo 3 añitos y estoy listo para salir a correr alrededor del parque.", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fanimalpets.co%2Fcachorro%2Fboston-terrier%2F&psig=AOvVaw0yfu2ZGQ7kjZLqQBbnmZgy&ust=1752756478538000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCvls-1wY4DFQAAAAAdAAAAABAE", "#ffffffff"])

                    db.run(insert,["Persa", "¡Hola! Mi nombre es Pelusa y me gustaría tener un cálido hogar; soy tranquilo y me gustan los abrazos. Tengo 4 años y me encanta dormir, comer y brincar.", "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftodaslasrazasdeperros.co%2Fmascota%2Fpersa%2F&psig=AOvVaw1Nk2FECWdz95I19sYsvE4a&ust=1752756692328000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjA4sO2wY4DFQAAAAAdAAAAABAE", "#c0b2a0ff"])
                    
                }
            }

        )
    }
})

export default db