const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerStudent : async(req, res) => {
        await userRegister(req.body, "student", res)
    },
    loginStudent : async(req, res) => {
        await userLogin(req.body, "student", res)
    }
}