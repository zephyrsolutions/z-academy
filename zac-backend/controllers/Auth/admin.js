const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerAdmin : async(req, res) => {
        await userRegister(req.body, "admin", res)
    },
    loginAdmin : async(req, res) => {        
        await userLogin(req.body, "admin", res)
    },    
}