import React, { Component } from 'react';

import FormValidator from '../../Utils/FormValidator/FormValidator';
import PopUp from '../../Utils/PopUp/PopUp';

class Form extends Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um nome'
            },
            {
                field: 'book',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um livro'
            },
            {
                field: 'price',
                method: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validWhen: true,
                message: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            name: '',
            book: '',
            price: '',
            validation: this.validator.isValid(),
        }

        this.state = this.stateInicial;
    }


    inputListener = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        const validation = this.validator.validate(this.state);

        if (validation.isValid) {
            this.props.submitListener(this.state);
            this.setState(this.stateInicial);
        } else {
            const { name, book, price } = validation;
            const fields = [name, book, price];

            const invalidFields = fields.filter(elem => {
                return elem.isInvalid;
            });
            invalidFields.forEach(field => PopUp.showMessage('error', field.message));
        }
    }

    render() {
        const { name, book, price } = this.state;
        return (
            <form className="validade">
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="name">Nome</label>
                        <input
                            className="validate"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.inputListener} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="book">Livro</label>
                        <input
                            className="validate"
                            id="book"
                            type="text"
                            name="book"
                            value={book}
                            onChange={this.inputListener} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field col s4" htmlFor="price">Preço</label>
                        <input
                            className="validate"
                            id="price"
                            type="text"
                            name="price"
                            value={price}
                            onChange={this.inputListener} />
                    </div>
                </div>
                <button onClick={this.submitForm} className="btn waves-effect waves-light indigo lighten-2" type="button">Salvar
                </button>
            </form>
        );
    }
}

export default Form;