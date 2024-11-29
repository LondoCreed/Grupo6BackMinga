import "dotenv/config.js"
import "../../config/database.js"
import Comment from "../Comment.js"

const comments = [
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "What an exciting chapter! I loved the character development."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "The art in this part of the manga is simply stunning."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "I didn't expect that plot twist, it totally caught me off guard."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "I think this chapter was a bit slow, but I hope the next one picks up."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "The dialogue in this chapter felt very meaningful and deep."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "I can't wait to see what happens next in the story!"
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "The villain's backstory is so well-written in this chapter."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "This chapter was the perfect mix of action and emotion."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "I really appreciated the humor in this chapter, it balanced the tension well."
        },
        {
            charperId: null,
            authorId: null,
            companyId: null,
            message: "This might be my favorite chapter so far, everything was perfect."
        }
    ]
    
Comment.insertMany(comments)