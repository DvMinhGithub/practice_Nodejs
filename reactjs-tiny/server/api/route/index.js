const controller = require('../controller');
const Item = (app) => {
    app.route('/item').get(controller.getItem).post(controller.addItem);
    app.route('/item/add').post(controller.addTiny);
    app.route('/item/:id')
        .delete(controller.deleteItem)
        .put(controller.updateItem);
    app.route('/item/search').get(controller.searchItem);
    app.route('/item/paginate').get(controller.paginate);
};
module.exports = Item;
