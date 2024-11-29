import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'
import bcrypt from 'bcryptjs'

const users = [
    {
        email: "user1@example.com",
        password: "password123",
        photo: "https://example.com/photo1.jpg",
        role: 0,
        online: false
    },
    {
        email: "user2@example.com",
        password: "password456",
        photo: "https://example.com/photo2.jpg",
        role: 0,
        online: false
    },
    {
        email: "user3@example.com",
        password: "password789",
        photo: "https://example.com/photo3.jpg",
        role: 0,
        online: false
    },
    {
        email: "user4@example.com",
        password: "password101",
        photo: "https://example.com/photo4.jpg",
        role: 0,
        online: false
    },
    {
        email: "user5@example.com",
        password: "password202",
        photo: "https://example.com/photo5.jpg",
        role: 0,
        online: false
    }
];

const userWithHashed = users.map((user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    return user;
}); 

const userWithHash = await User.insertMany(userWithHashed);
console.log(userWithHash);