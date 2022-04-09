const { User, Role } = require('../db.js');
const bcrypt = require('bcrypt');

const signUp = async (req,res) => {
    const { username, email, password, roles } = req.body;
    console.log(req.body);
    const [newUser, created] = await User.findOrCreate({
        where: {username},
        defaults: {
            username,
            email,
            password
        }
    })
    console.log(newUser);
    let roleDb = await Role.findAll({
        where: {
            name: roles
        }
    })
    newUser.addRoles(roleDb);
    console.log('user', newUser);
    res.json('user');
}

const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword); //Retorna true o false dependiendo si es igual o no la contraseña
  }

const logIn = async (req,res) => {
    res.json('login')
}

module.exports = {
    signUp,
    logIn
}