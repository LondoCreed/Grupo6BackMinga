import Company from '../../models/Company.js'

const registerCompany = async (req, res, next) => {
    try {
        let company = req.body
        company.online = true
        company.user_id.role = "2"

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