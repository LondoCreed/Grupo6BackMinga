
import Company from '../../models/Company.js'

const allCompanies = async (req, res, next) => {
    try {
        let { company, user_id } = req.query
        let query = {}

        if (company) {
            query.company = { $regex: company, $options: "i" }
        }
        if (user_id) {
            query.user_id = user_id
        }

        let companies = await Company.find(query).populate('user_id')

        return res.status(200).json({
            response: companies
        })

    } catch (error) {
        next(error)
    }
}

export default allCompanies