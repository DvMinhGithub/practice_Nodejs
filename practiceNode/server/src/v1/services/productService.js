const _Product = require('../models/ProductModel')
module.exports = {
  getAllProduct: async () => {
    try {
      const allProducts = await _Product.find({})
      return allProducts
    } catch (error) {
      console.log(error)
    }
  },
  createProduct: async ({ name, color, size, quantity }) => {
    try {
      const product = _Product({
        name,
        color,
        size,
        quantity
      })
      await product.save()
      return {
        success: true,
        data: product,
        message: 'Add Product successfully'
      }
    } catch (error) {
      console.error(error)
    }
  },
  updateProduct: async ({ id, name, color, size, quantity }) => {
    try {
      await _Product.findByIdAndUpdate(id, { name, color, size, quantity })
      return {
        success: true,
        message: 'Update Product successfully'
      }
    } catch (error) {
      console.error(error)
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      await _Product.findByIdAndDelete(id)
      return {
        success: true,
        message: 'Delete Product successfully'
      }
    } catch (error) {
      console.error(error)
    }
  },
  getProduct: async ({ name }) => {
    try {
      const Product = await _Product.find({
        name: { $regex: name, $options: 'i' }
      })
      return Product
    } catch (error) {
      console.error(error)
    }
  },
  getAllProductPaginate: async ({ activePage, limit }) => {
    try {
      const totalRecord = await _Product.countDocuments()
      const totalPage = Math.ceil(totalRecord / limit)
      const skip = (activePage - 1) * limit
      const listProduct = await _Product
        .find()
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit)
      return {
        listProduct,
        totalPage,
        skip
      }
    } catch (error) {
      console.error(error)
    }
  },
  getProductPaginate: async ({ textSearch, activePage, limit }) => {
    try {
      const totalRecord = await _Product.countDocuments({
        name: { $regex: textSearch, $options: 'i' }
      })
      const totalPage = Math.ceil(totalRecord / limit)
      const skip = (activePage - 1) * limit
      const listProduct = await _Product
        .find({ name: { $regex: textSearch, $options: 'i' } })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
      return {
        listProduct,
        totalPage,
        skip
      }
    } catch (error) {
      console.error(error)
    }
  }
}
