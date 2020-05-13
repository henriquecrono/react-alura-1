import React, { Component } from 'react';

import { Table as TableMUI } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const DeleteCell = ({ removeData, id }) => {
    if (!removeData) {
        return null;
    }

    return (
        <TableCell>
            <Button
                variant='contained'
                color='primary'
                onClick={() => {
                    removeData(id)
                }}
            >
                Remover
            </Button>
        </TableCell>
    )
}

const DeleteTitle = ({ removeData }) => {
    if (!removeData) {
        return null;
    }

    return <TableCell>Remover</TableCell>
}

class Table extends Component {
    render() {
        const { fields, data, removeData } = this.props;

        return (
            <TableMUI>
                <TableHead>
                    <TableRow>
                        {
                            fields.map(field =>
                                <TableCell key={field.title}>{field.title}</TableCell>
                            )
                        }
                        <DeleteTitle removeData={removeData} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((datum) => (
                        <TableRow key={datum.id}>
                            {
                                fields.map(field =>
                                    <TableCell>
                                        {datum[field.field]}
                                    </TableCell>
                                )
                            }
                            <DeleteCell id={datum.id} removeData={removeData} />
                        </TableRow>
                    ))}
                </TableBody>
            </TableMUI>
        );
    }
}

export default Table;