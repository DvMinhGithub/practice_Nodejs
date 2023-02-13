const userModel = require('../models');
const getUser = async (req, res) => {
    try {
        const user = await userModel.find();
        res.send({ data: user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const addUser = async (req, res) => {
    try {
        const user = userModel({
            name: req.body.name,
            age: req.body.age,
        });
        await user.save();
        res.send({ message: 'User add successfully.' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.send({ message: 'User deleted successfully.' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong',
        });
    }
};
const updateUser = async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age,
        });
        res.send({ message: 'User updated successfully.' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const searchUser = async (req, res) => {
    try {
        const user = await userModel.find({
            name: { $regex: req.query.name, $options: 'i' },
        });
        res.send({ data: user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const paginate = async (req, res) => {
    try {
        var activePage = parseInt(req.query.activePage);
        var limit = parseInt(req.query.limit);
        var listUsers = await userModel.find();
        var totalUsers = listUsers.length;
        var totalPages = Math.ceil(totalUsers / limit);
        var skip = (activePage - 1) * limit;
        var paginate = await userModel.find().skip(skip).limit(limit);
        res.send({
            data: paginate,
            activePage,
            totalPages,
            skip,
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const searchPaginate = async (req, res) => {
    try {
        let activePage = parseInt(req.query.activePage);
        let limit = parseInt(req.query.limit);
        let totalUsers = await userModel.countDocuments({
            name: { $regex: req.query.name, $options: 'i' },
        });
        let totalPages = Math.ceil(totalUsers / limit);
        let skip = (activePage - 1) * limit;
        let paginate = await userModel
            .find({ name: { $regex: req.query.name, $options: 'i' } })
            .skip(skip)
            .limit(limit);
        res.send({
            data: paginate,
            totalPages,
            activePage,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Something went wrong.',
        });
    }
};
const sortById = async (req, res) => {
    try {
        let result = await userModel.find().sort({ _id: 1 }).limit(50);
        res.send({ result });
    } catch (err) {
        console.log(err);
    }
};
module.exports = {
    getUser,
    addUser,
    deleteUser,
    updateUser,
    searchUser,
    paginate,
    searchPaginate,
    sortById,
};
