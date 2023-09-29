const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerTeacher : async(req, res) => {
        await userRegister(req.body, "teacher", res)
    },
    loginTeacher : async(req, res) => {
        await userLogin(req.body, "teacher", res)
    }
}