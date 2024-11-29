import 'dotenv/config.js'
import '../../config/database.js'
import Company from '../Company.js'

const companies = [
    {
        name: "Tech Innovators",
        website: "https://techinnovators.example.com",
        description: "Leading company in tech innovation, delivering cutting-edge solutions for the modern world.",
        photo: "https://example.com/photo4.jpg",
        user_id: "674918c188dc8942cc7c58ec",
        active: true
    },
    {
        name: "Creative Minds",
        website: "https://creativeminds.example.com",
        description: "A company dedicated to bringing creative solutions to complex problems across various industries.",
        photo: "https://example.com/photo5.jpg",
        user_id: "674918c188dc8942cc7c58ed",
        active: false
    }
]

Company.insertMany(companies)