var ItemModal = require('../model/index')
var fs = require('fs')
var XLSX = require('xlsx')

const readFile = async (req, res) => {
    try {
        let file = req.files
        let arrFile = []
        for (let i = 0; i < file.length; i++) {
            arrFile.push(file[i])
            let wb = XLSX.readFile(arrFile[i].path)
            console.log(XLSX.utils.sheet_to_json(wb.Sheets),'day la wb');
            let ws = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
            console.log(ws,'day la ws');
            ItemModal.insertMany(ws, (err, data) => {  //nhu kieu create nhung tao duoc nhieu phan tu su dung d
                res.send(data)
                console.log(data);
            })
        }
    } catch (error) {
        res.send(error)
    }
}

const getItem = async (req, res) => {
    try {
        const data = await ItemModal.find().select(["-__v"])
        res.send({ data })
    } catch (error) {
        res.send(error)
    }
}

const deleteItem = async (req, res) => {
    try {
        const ItemDelete = await ItemModal.findByIdAndDelete(req.params.id)
        res.send({ ItemDelete })
    } catch (error) {
        res.send({ message: 'loi roi' })
    }
}

const updateItem = async (req, res) => {
    try {
        const ItemUpdate = await ItemModal.findByIdAndUpdate(req.params.id, { name: req.body.nameUpdate, age: req.body.ageUpdate })
        res.send({})
    } catch (error) {
        res.send({ message: 'loi roi' })
    }
}

const addItem = async (req, res) => {
    try {
        const ItemAdd = await ItemModal.create({ name: req.body.nameAdd, age: req.body.age })
        res.send({ItemAdd})
    } catch (error) {
        res.send({ message: 'loi roi' })
    }
}
module.exports = { readFile, getItem, deleteItem, updateItem, addItem }