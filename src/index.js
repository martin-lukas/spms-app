import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import AddPortfolioForm from './AddPortfolioForm';

class App extends Component {
    state = {
        portfolios: []
    };

    removePortfolio = name => {
        this.setState({
            portfolios: this.state.portfolios.filter((portfolio) => {
                return portfolio.name !== name;
            })
        });
    };

    handleSubmit = portfolio => {
        let exists = false;
        this.state.portfolios.forEach(function(portf) {
            if (portf.name === portfolio.name) {
                exists = true;
            }
        });
        if (!exists) {
            this.setState({
                portfolios: [...this.state.portfolios, portfolio]
            });
        }
    };

    // addStockToPortfolio = stock => {
    //
    // };

    render() {
        const objects = this.state.portfolios.map((portfolio, index) => {
            return (
                <Portfolio
                    name={portfolio.name}
                    data={portfolio.data}
                    key={index}
                    removePortfolio={this.removePortfolio}
                    // addStockToPortfolio={this.addStockToPortfolio}
                />
            );
        });
        return (
            <div className="global">
                <AddPortfolioForm handleSubmit={this.handleSubmit} />
                <div className="portfolios-container">
                    {objects}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
