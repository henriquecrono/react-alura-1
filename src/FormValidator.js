import validator from 'validator';

class FormValidator {

    constructor(validacao) {
        this.validacao = validacao;
    };

    valida(state) {
        const campoValor = state[this.validacao.campo.toString()];
        const metodoValidacao = validator[this.validacao.metodo];

        if (metodoValidacao(campoValor, [], state)) {
            console.log("FORM INVÁLIDO");
            return false;
        } else {
            console.log("FORM VÁLIDO");
            return true;
        }
    }
}

export default FormValidator;