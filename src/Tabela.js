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
            <tr>
                <td>{ obj.nome }</td>
                <td>{ obj.livro }</td>
                <td>{ obj.preco }</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            { linhas }
        </tbody>
    );

    // return (
    //     <tbody>
    //         <tr>
    //             <td>Paulo</td>
    //             <td>React</td>
    //             <td>1000</td>
    //             <td><button>Remover</button></td>
    //         </tr>
    //         <tr>
    //             <td>João</td>
    //             <td>Node JS</td>
    //             <td>500</td>
    //             <td><button>Remover</button></td>
    //         </tr>
    //         <tr>
    //             <td>Henrique</td>
    //             <td>Python</td>
    //             <td>2000</td>
    //             <td><button>Remover</button></td>
    //         </tr>
    //     </tbody>
    // );
}

class Tabela extends Component {
    render() {
        const { autores } = this.props;

        return (
            <div className="App">
                <table>
                    <TableHead />
                    <TableBody autores={autores} />
                </table>
            </div>
        );
    }
}

export default Tabela;