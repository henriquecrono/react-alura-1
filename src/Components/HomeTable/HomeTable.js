import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class HomeTable extends Component {
    render() {
        const { authors, removeAuthor } = this.props;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Autores</TableCell>
                        <TableCell>Livros</TableCell>
                        <TableCell>Preços</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.map((author) => (
                        <TableRow key={author.id}>
                            <TableCell>{author.name}</TableCell>
                            <TableCell>{author.book}</TableCell>
                            <TableCell>{author.price}</TableCell>
                            <TableCell>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={() => { removeAuthor(author.id) }}
                                >
                                    Remover
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default HomeTable;