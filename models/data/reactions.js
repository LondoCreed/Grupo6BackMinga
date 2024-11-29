import "dotenv/config.js"
import "../../config/database.js"
import Reaction from "../Reaction.js"

//pendiente modificar la data con ids reales

let reactions = [
    {
        manga_id: "6713be5e871e9c8407a2d645",
        author_id: "6713be5e871e9c8407a2d646",
        company_id: "6713be5e871e9c8407a2d647",
        reaction: "1"
    },
    {
        manga_id: "6713be5e871e9c8407a2d648",
        author_id: "6713be5e871e9c8407a2d649",
        company_id: null,
        reaction: "2"
    },
    {
        manga_id: "6713be5e871e9c8407a2d650",
        author_id: null,
        company_id: "6713be5e871e9c8407a2d651",
        reaction: "3"
    },
    {
        manga_id: "6713be5e871e9c8407a2d652",
        author_id: null,
        company_id: null,
        reaction: "4"
    },
    {
        manga_id: "6713be5e871e9c8407a2d653",
        author_id: "6713be5e871e9c8407a2d654",
        company_id: "6713be5e871e9c8407a2d655",
        reaction: "1"
    },
    {
        manga_id: "6713be5e871e9c8407a2d656",
        author_id: "6713be5e871e9c8407a2d657",
        company_id: null,
        reaction: "2"
    },
    {
        manga_id: "6713be5e871e9c8407a2d658",
        author_id: null,
        company_id: "6713be5e871e9c8407a2d659",
        reaction: "3"
    },
    {
        manga_id: "6713be5e871e9c8407a2d660",
        author_id: "6713be5e871e9c8407a2d661",
        company_id: "6713be5e871e9c8407a2d662",
        reaction: "4"
    },
    {
        manga_id: "6713be5e871e9c8407a2d663",
        author_id: null,
        company_id: null,
        reaction: "1"
    },
    {
        manga_id: "6713be5e871e9c8407a2d664",
        author_id: "6713be5e871e9c8407a2d665",
        company_id: null,
        reaction: "2"
    }
]

Reaction.insertMany(reactions)
    .then(() => {
        console.log("Reactions inserted successfully.")
    })
    .catch((error) => {
        console.error("Error inserting Reactions:", error)
    })