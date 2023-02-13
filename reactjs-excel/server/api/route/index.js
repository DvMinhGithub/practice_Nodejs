var ItemController = require('../controller/index')
const routes = (app)=>{
    app.route('/item').post(ItemController.readFile)
    app.route('/item/excel').get(ItemController.getItem).post(ItemController.addItem)
    app.route('/item/:id').delete(ItemController.deleteItem).put(ItemController.updateItem)
}
module.exports = routes