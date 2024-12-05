import 'dotenv/config'
import '../../config/database.js'
import Reaction from '../Reaction.js'

let reactions = [
    {
        manga_id: '507f1f77bcf86cd799439011',
        author_id: null,
        company_id: null,
        reaction: "like"   
    },
    {
        manga_id: '507f1f77bcf86cd799439012',
        author_id: null,
        company_id: null,
        reaction: "love"     
    },
    {
        manga_id: '507f1f77bcf86cd799439013',
        author_id: null,
        company_id: null,
        reaction: "favorite" 
    },
    {
        manga_id: '507f1f77bcf86cd799439014',
        author_id: null,
        company_id: null,
        reaction: "amazing" 
    }
]

Reaction.insertMany(reactions)
    .then(docs => console.log('Reactions created:', docs))
    .catch(err => console.log('Error:', err))