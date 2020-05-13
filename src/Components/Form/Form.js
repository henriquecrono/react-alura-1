import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <TextField
                            variant="outlined"
                            id="name"
                            name="name"
                            value={name}
                            label="Nome"
                            onChange={this.inputListener}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            id="book"
                            name="book"
                            value={book}
                            label="Livro"
                            onChange={this.inputListener}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant="outlined"
                            id="price"
                            name="price"
                            value={price}
                            label="Preço"
                            onChange={this.inputListener}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant='contained'
                            color="primary"
                            onClick={this.submitForm}
                            type="button"
                        >
                            Salvar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default Form;