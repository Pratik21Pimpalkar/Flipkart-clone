import Product from "../Modals/productSchema.js"

export const getProducts = async (req, res) => {
    try {
        const response = await Product.find({})
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

export const getProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        
        const data = await Product.findOne({ "id": id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}