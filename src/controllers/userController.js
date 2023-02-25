const  {users, writeUserJson} =  require("/database")
const { validationResult } = require("../database");

module.exports = {
    login: (req, res) => {
      res.render("login")
    },
    register: (req, res) => {
      res.render("register")
    },
    processRegister:(req, res) => {
       
            let lastId = 0; /* el id que arranca en cero es un contador */

            users.forEach(user => {
                if(user.id > lastId) {
                    lastId = user.id;
                }
            })
            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                pass: req.body.pass1,
                avatar: req.file ? req.file.filename : "default-image.png",/*  lo unico que hace es guardar el nombre del archivo */
                rol: "USER",
                tel: "",
                address: "",
                postal_code: "",
                province: "",
                city: ""
            }
            users.push(newUser);
            writeUserJson(users);

            res.send("Usuario creado")

    }
}