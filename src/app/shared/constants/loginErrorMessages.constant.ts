import { MessagesIndex } from "../models/indexErrorMessages.model";

export const LOGIN_ERROR_MESSAGES: MessagesIndex = {
    'email-already-in-use': 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.',
    'wrong-password': 'La contraseña no es válida o el usuario no tiene contraseña.',
    'user-not-found': 'No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.',
    'invalid-email': 'La dirección de correo electrónico está mal formateada.',
}