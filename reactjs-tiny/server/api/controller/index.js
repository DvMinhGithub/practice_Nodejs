const ItemModel = require('../model/index');
const fs = require('fs');

const getItem = async (req, res) => {
    try {
        let data = await ItemModel.find();
        res.send({ data });
    } catch (error) {
        res.send({ message: 'loi roi' });
    }
};
const addItem = async (req, res) => {
    try {
        const fileImg = req.files;
        const arrImg = [],
            arrLink = [];
        for (let i = 0; i < fileImg.length; i++) {
            const url = `http://localhost:3001/${fileImg[i].filename}`;
            arrLink.push(url);
            arrImg.push(fileImg[i].filename);
        }
        res.send({ arrImg, arrLink });
    } catch (error) {
        res.send({ message: 'loi roi' });
    }
};

const addTiny = async (req, res) => {
    try {
        console.log(req.body, 'bodyyy');
        const title = req.body.title;
        const content = req.body.content;
        const arrImg = req.body.arrImg;
        const TinyItem = await ItemModel.create({
            title,
            content,
            img: arrImg,
        });
        res.send({ TinyItem, message: 'Add tiny item successfully' });
    } catch (error) {
        res.send({ message: 'Add tiny item failed' });
    }
};

const deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        const ItemDelete = await ItemModel.findByIdAndDelete(id);
        console.log(ItemDelete.img, 'day la itemDeleeeeeeeee');
        for (let i = 0; i < ItemDelete.img.length; i++) {
            fs.unlinkSync(`Media/${ItemDelete.img[i]}`);
        }
        res.send({ ItemDelete });
    } catch (error) {
        res.send({ message: 'deleteItem failed' });
    }
};
const updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const content = req.body.content;
        const title = req.body.title;
        const Item = await ItemModel.findByIdAndUpdate(id, { content, title });
        res.send({
            Item,
        });
    } catch (error) {
        res.send({ message: 'updateItem failed' });
    }
};

const paginate = async (req, res) => {
    try {
        const activePage = parseInt(req.query.activePage);
        const Item = await ItemModel.find();
        const totalItem = Item.length;
        const limit = parseInt(req.query.limit);
        const totalPage = Math.ceil(totalItem / limit);
        const skip = (activePage - 1) * limit;
        const ItemPage = await ItemModel.find().limit(limit).skip(skip);
        res.send({
            ItemPage,
            activePage,
            totalPage,
        });
    } catch (error) {
        res.send({
            message: 'paginate failure',
        });
    }
};

const searchItem = async (req, res) => {
    try {
        const nameSearch = req.query.textSearch;
        const activePage = parseInt(req.query.activePage);
        const Item = await ItemModel.find({
            title: { $regex: nameSearch, $options: 'i' },
        });
        const totalItem = Item.length;
        const limit = parseInt(req.query.limit);
        const totalPage = Math.ceil(totalItem / limit);
        const skip = (activePage - 1) * limit;
        const ItemPage = await ItemModel.find({
            title: { $regex: nameSearch, $options: 'i' },
        })
            .limit(limit)
            .skip(skip);
        res.send({
            ItemPage,
            activePage,
            totalPage,
            nameSearch,
        });
    } catch (error) {
        res.send({
            message: 'paginate failure',
        });
    }
};
module.exports = {
    getItem,
    addItem,
    addTiny,
    deleteItem,
    updateItem,
    paginate,
    searchItem,
};
