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
        let name = req.body.name;
        const fileImg = req.files;
        const arrImg = [];
        for (let i = 0; i < fileImg.length; i++) {
            const url = `http://localhost:3001/${fileImg[i].filename}`;
            arrImg.push(url);
        }
        const response = await ItemModel.create({
            name,
            img: arrImg,
            time: Date.now(),
        });
        res.send({ data: response });
    } catch (error) {
        res.send({ message: 'loi roi' });
    }
};

const deleteItem = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ItemModel.findByIdAndDelete(id);
        let oldUrl = data.img;
        console.log(oldUrl, 'h');
        for (let i = 0; i < oldUrl.length; i++) {
            fs.unlink(`Media/${oldUrl[i].slice(22)}`, () => {});
        }
        res.send({});
    } catch (error) {
        res.send({ message: 'loi roi' });
    }
};
const updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const arrImg = [];
        const name = req.body.name;
        const images = req.files;
        const oldItem = await ItemModel.findById(id);
        const oldImg = oldItem.img;
        if (images.length === 0) {
            await ItemModel.findByIdAndUpdate(id, { name: name, img: oldImg });
        } else {
            for (let i = 0; i < images.length; i++) {
                arrImg.push(`http://localhost:3001/${images[i].filename}`);
            }
            await ItemModel.findByIdAndUpdate(id, { name: name, img: arrImg });
        }
        for (let i = 0; i < oldImg.length; i++) {
            fs.unlink(`Media/${oldImg[i].slice(22)}`, () => {});
        }
        res.send({
            message: 'success',
        });
    } catch (error) {
        res.send({
            message: 'loi roi',
        });
    }
};

const deleteOne = async (req, res) => {
    try {
        let id = req.query.id;
        let index = req.query.index;
        const oldUrl = await ItemModel.findById(id);
        const img2 = oldUrl.img;
        fs.unlink(`Media/${oldUrl.img[index].slice(22)}`, () => {});
        img2.splice(index, 1);
        await ItemModel.findByIdAndUpdate(id, { img: oldUrl.img });
        res.send({});
    } catch (error) {
        res.send({
            message: 'loi roi',
        });
    }
};

const searchItem = async (req, res) => {
    try {
        let nameSearch = req.query.nameSearch;
        const search = await ItemModel.find({
            name: { $regex: nameSearch, $options: 'i' },
        }).sort({ time: -1 });
        res.send({
            search,
        });
    } catch (error) {
        res.send({
            message: 'loi roi',
        });
    }
};

const searchItemOne = async (req, res) => {
    try {
        let id = req.params.id;
        const search2 = await ItemModel.findById(id);
        res.send({
            search2,
        });
    } catch (error) {
        res.send({
            message: 'Error: ' + error.message,
        });
    }
};

module.exports = {
    getItem,
    addItem,
    deleteItem,
    updateItem,
    deleteOne,
    searchItem,
    searchItemOne,
};
