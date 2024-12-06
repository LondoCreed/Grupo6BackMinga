import Company from "../../models/Company.js";

const getCompanyById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        return res.status(200).json({
            success: true,
            response: company
        });
    } catch (error) {
        next(error);
    }
};

export default getCompanyById;