import React, {Component} from 'react';
import './index.css';

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody data={this.props.data} removeStock={this.props.removeStock} />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Symbol</th>
            <th>Value</th>
            <th>Quantity</th>
            <th>Total value</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
};

const TableBody = props => {
    const stocks = props.data.map((stock, index) => {
        let totalVal = 0;
        if (!isNaN(stock.quantity) && stock.value !== '') {
            totalVal = (parseFloat(stock.quantity) * stock.value).toFixed(2);
        } else {
            totalVal = String(NaN);
        }
        return (
            <tr key={index}>
                <td>{stock.symbol}</td>
                <td>{stock.value}</td>
                <td>{stock.quantity}</td>
                <td>{totalVal}</td>
                <td><button onClick={() => props.removeStock(index)}>X</button></td>
            </tr>
        );
    });

    return <tbody>{stocks}</tbody>;
};

export default Table;