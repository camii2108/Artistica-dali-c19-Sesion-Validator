/* validaciones del lado del servidor, tiene que ver con una cuestion de seguirdad, como guardar el email, pwd. Esta es una capa de seguridad porque los formularios en las paginas web son caps muy debiles en cuanto a seguridad, ya que peide entrar eal json "subir datos, cambiar contraseñas, ect" o que tamben se hagan algunas ocndiciones. Agregar la validaciones al formulario. Srpint 7 pide validaciones=> y mejor pedir las validaciones*/
/* CONSIGNA: vamos a corroborar que la contraseña y email, sean validadas en el formulario y que acepte terminos y condiciones */


const { check, body } = require("express-validator");
const { users } = require("../database");

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

    check("last_name")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),

    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Email inválido"),

    body("email")
    .custom((value) => {
        let user = users.find(user => user.email === value);

        return user === undefined;
    })
    .withMessage("Email ya registrado"),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña').bail()
    .isLength({
        min: 6
    })
    .withMessage('La contraseña debe tener como mínimo 6 caracteres'),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')
]