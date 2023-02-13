const controller = require('../controller/index');
const Item = (app) => {
    app.get('/item', controller.getItem);
    app.post('/item', controller.addItem);
    app.delete('/item/:id', controller.deleteItem);
    app.put('/item/:id', controller.updateItem);
    app.delete('/item', controller.deleteOne);
    app.get('/item/search', controller.searchItem);
    app.get('/item/search/:id', controller.searchItemOne);
};
module.exports = Item;
