import mongoose from 'mongoose'
const { Schema } = mongoose

const reqString = {
    type: String,
    // required: true,
}

const productDetailsSchema = new Schema({
    id: {type:Number},
    title: reqString,
    img: reqString,
    price: reqString,
    mrp: reqString,
    rating: reqString,
    category: reqString,
    review: reqString
})

const Product = mongoose.model("product", productDetailsSchema);
export default Product