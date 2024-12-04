import Company from '../../models/Company.js'
import Author from '../../models/Author.js';
import User from '../../models/User.js';
const registerCompany = async (req, res, next) => {
    try {
        let company = req.body
        company.active = true

        let user = await User.findById(req.body.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        let haveAuthor = await Author.findOne({ user_id: req.body.user_id });
        if (haveAuthor) {
            return res.status(400).json({
                success: false,
                message: "User already has an author."
            });
        }

        let haveCompany = await Company.findOne({ user_id: req.body.user_id });
        if (haveCompany) {
            return res.status(400).json({
                success: false,
                message: "User already has an company."
            });
        }
       
        
        user = await User.findByIdAndUpdate(
            req.body.user_id ,
            { role: 2 },
            { new: true }
        );

        let create = await Company.create(company)
        return res.status(201).json({
            success: true,
            message: "Company successfully created",
            response: create
        })

    } catch (error) {
        next(error)
    }
}

export default registerCompany