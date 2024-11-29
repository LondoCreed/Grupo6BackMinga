import 'dotenv/config.js'
import '../../config/database.js'
import Author from '../Author.js'

const authors = [
    {
        name: "John",
        last_name: "Doe",
        city: "New York",
        country: "USA",
        date: new Date("1990-05-15"),
        photo: "https://example.com/photo2.jpg",
        user_id: "674918c188dc8942cc7c58ea",
        active: false
    },
    {
        name: "Jane",
        last_name: "Smith",
        city: "London",
        country: "UK",
        date: new Date("1985-03-22"),
        photo: "https://example.com/photo3.jpg",
        user_id: "674918c188dc8942cc7c58eb",
        active: true
    }
]

Author.insertMany(authors)
