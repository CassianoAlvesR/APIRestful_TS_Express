import {body} from "express-validator"

export const movieCreateValidation = () => {

    return [
        body("title")
        .isString()
        .withMessage("O título é obrigatório e deve ser do tipo texto.")
        .isLength({min: 10})
        .withMessage("O título deve ter no mínimo 10 caracteres"),
        body("rating")
        .isNumeric()
        .withMessage("A nota deve ser um número.")
        .custom((value: number) => {
            if(value < 0 || value > 10){
                throw new Error("A nota deve estar entre 1 à 10.");
            }
            return true;
        }),
        body("description")
        .isString()
        .withMessage("A descrição é obrigatória e deve ser um texto.")
        .isLength({min: 10})
        .withMessage("A descrição deve ter no mínimo 10 caracteres"),
        body("director")
        .isString()
        .withMessage("O nome do diretor deve ser informado."),
        body("poster")
        .isURL()
        .withMessage("A imagem deve ser uma URL."),
    ]
}