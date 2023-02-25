const path = require("path");
const fs = require("fs");
const { Router } = 

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    carousel: JSON.parse(fs.readFileSync(path.join(__dirname, "/banner.json"), "utf-8")),
    categories: JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    user: JSON.parse(fs.readFileSync(path.join(__dirname, "/user.json"), "utf-8")),
    writeUserJson: (data) => {
        fs.writeFileSync(path.join(__dirname, "../database/users,json"),JSON.stringify(data), "utf-8")
    }
}