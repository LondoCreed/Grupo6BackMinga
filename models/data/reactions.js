import "dotenv/config.js"
import "../../config/database.js"
import Reaction from "../Reaction.js"

//pendiente modificar la data con ids reales

let reactions = [
    {
        manga_id: "674a4b9ea643451aa760d1d2",
        author_id: "674a14de0258387b16b79577",
        company_id: "674a153cf93819cccf43ca4c",
        reaction: "1"
    },
    {
        manga_id: "674a4b9ea643451aa760d1d2",
        author_id: "674a14de0258387b16b79577",
        company_id: "674a153cf93819cccf43ca4c",
        reaction: "2"
    },
    {
        manga_id: "674a4b9ea643451aa760d1d2",
        author_id: "674a14de0258387b16b79577",
        company_id: "674a153cf93819cccf43ca4c",
    }
]

Reaction.insertMany(reactions)
    .then(() => {
        console.log("Reactions inserted successfully.")
    })
    .catch((error) => {
        console.error("Error inserting Reactions:", error)
    })