import React from 'react';

const DataTable = props => {
    let columns = props.data.map((item) =>
        <tr key={item.id}>
            {props.columns.map((column) =>
                <td key={`${item.id}${item[column]}`}>{item[column]}</td>)}
        </tr>);

    return (
        <table className='centered highlight'>
            <thead>
                <tr>
                    <th>{props.title}</th>
                </tr>
            </thead>
            <tbody>
                {columns}
            </tbody>
        </table>
    );

}
export default DataTable;