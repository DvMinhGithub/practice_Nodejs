const {
    deleteStudent,
    updateStudent,
    searchStudent,
    getStudent,
    addStudent,
} = require('../controller/index.js')
const { register, login } = require('../controller/account.js')
const { verify, role } = require('../middleware/jwt.js')

const routes = (app) => {
    app.route('/student/:id')
        .delete(verify, role, deleteStudent)
        .put(verify, role, updateStudent);
    app.route('/student/search').get(verify, searchStudent);
    app.route('/register').post(register);
    app.route('/login').post(login);
    app.route('/student')
        .get(verify, getStudent)
        .post(verify, role, addStudent);
};
module.exports = routes;
