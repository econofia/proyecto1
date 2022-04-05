const { model, Schema} = requiere("mongoose");

const ProductSchema = new Schema({
    name: { type: String, required: true, unique: true},
    img: { type: String, required: true},
    inCart: { type: Boolean, default: false},
    price: { type: Number, required: true},
})

module.exports = model("Cart", ProductSchema)