import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>

    );
}

const TableBody = props => {
    const linhas = props.autores.map((obj, index) => {
        return (
            <tr key={index}>
                <td>{obj.nome}</td>
                <td>{obj.livro}</td>
                <td>{obj.preco}</td>
                <td>
                    <button onClick={() => { props.removeAutor(index) }}>Remover</button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props;

        return (
            <div className="App">
                <table>
                    <TableHead />
                    <TableBody autores={autores} removeAutor={removeAutor} />
                </table>
            </div>
        );
    }
}

export default Tabela;