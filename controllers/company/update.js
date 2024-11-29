import Company from '../../models/Company.js'

const updateCompany = async (req, res, next) => {
    try {
        let update = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            response: update,
            message: "Company successfully updated"
        })

    } catch (error) {
        next(error)
    }
}

export default updateCompany