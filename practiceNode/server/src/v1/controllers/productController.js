
const productService = require('../services/productService')

module.exports = {
  getAllProduct: async (req, res, next) => {
    const users = req.params.id
    const { success, allProducts } = await productService.getAllProduct({ users })
    return res.status(200).json({
      success, data: allProducts
    })
  },
  createProduct: async (req, res, next) => {
    try {
      const { name, color, size, quantity, users } = req.body
      const { success, message, code, data } = await productService.createProduct({
        name,
        color,
        size,
        quantity,
        users
      })
      return res.status(code).json({
        success,
        message,
        data
      })
    } catch (error) {
      next(error)
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const id = req.params.id
      const { name, color, size, quantity } = req.body
      const { success, message } = await productService.updateProduct({
        id,
        name,
        color,
        size,
        quantity
      })
      return res.status(200).json({
        success,
        message
      })
    } catch (error) {
      next(error)
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const id = req.params.id
      const { success, message } = await productService.deleteProduct({ id })
      return res.status(200).json({
        success,
        message
      })
    } catch (error) {
      next(error)
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const name = req.query.name
      return res.status(200).json({
        data: await productService.getProduct({ name })
      })
    } catch (error) {
      next(error)
    }
  },
  getAllProductPaginate: async (req, res, next) => {
    try {
      const activePage = +req.query.activePage || 1
      const limit = +req.query.limit || 5
      const { success, listProduct, totalPage, skip } =
        await productService.getAllProductPaginate({ activePage, limit })
      return res.status(200).json({
        success,
        data: listProduct,
        activePage,
        totalPage,
        skip
      })
    } catch (error) {
      next(error)
    }
  },
  getProductPaginate: async (req, res, next) => {
    try {
      const textSearch = req.query.textSearch
      const activePage = +req.query.activePage || 1
      const limit = +req.query.limit || 5
      const { listProduct, totalPage, skip } =
        await productService.getProductPaginate({
          textSearch,
          activePage,
          limit
        })
      return res.status(200).json({
        data: listProduct,
        activePage,
        totalPage,
        skip
      })
    } catch (error) {
      next(error)
    }
  }
}
