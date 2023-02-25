const multer = require("multer");vc/* cambiar la variablede la ruta de la carpeta donde quiero guardar el archivo */
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, "../../public/images/avatar"))
    },
    filename: ( req, file, cb => {
            cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`)
    })
});
/* 
const uploadFile = multer({storage}); */

module.exports = multer({storage});