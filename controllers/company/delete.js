import Comnpany from "../../models/Company.js"

const deleteCompany = async (req, res, next) => {
    try {
         const deleted = await Comnpany.findByIdAndDelete(req.body._id)

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