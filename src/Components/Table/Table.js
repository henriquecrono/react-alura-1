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
    const linhas = props.authors.map((obj) => {
        return (
            <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.book}</td>
                <td>{obj.price}</td>
                <td>
                    <button
                        onClick={() => { props.removeAuthor(obj.id) }}
                        className="waves-effect waves-light indigo lighten-2 btn">
                        Remover
                    </button>
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

class Table extends Component {
    render() {
        const { authors, removeAuthor } = this.props;

        return (
            <div className="App">
                <table className="centered highlight">
                    <TableHead />
                    <TableBody authors={authors} removeAuthor={removeAuthor} />
                </table>
            </div>
        );
    }
}

export default Table;