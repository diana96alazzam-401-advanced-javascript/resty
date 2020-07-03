import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';


import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';
import Footer from './components/footer/footer';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, results: [] , history:{}};
  }

  formHandler = (headers, results) => {
    const result = { headers, response: results };
    this.setState({ count: results.count, results: result });
  }

  renderHistory = (history) => {
    this.setState({history});
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Route exact path="/">
            <Form prompt='GO!' handler={this.formHandler} renderHistory={this.renderHistory} />
            <Results response={this.state.results} headers={this.state.results.headers} />
          </Route>
          
          <Route exact path="/history">
            <History history={this.state.history} />
          </Route>

        </main>
        <Footer />
      </>
    );
  }
}

export default App;
