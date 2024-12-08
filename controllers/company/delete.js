import Company from "../../models/Company.js"

const deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Company.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            response: deleted,
            message: "Company successfully deleted"
        })
        
    } catch (error) {
        next(error)
    }
}

export default deleteCompany