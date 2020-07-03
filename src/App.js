import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';


import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';
import HistoryPage from './components/history/history-page';
import Footer from './components/footer/footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading:false, count: 0, results: [] , history:{}, method:'', url:'', body:''};
  }

  formHandler = (headers, results, loading) => {
    const result = { headers, response: results };
    this.setState({ loading, count: results.count, results: result });
  }

  renderHistory = (history) => {
    this.setState({history});
  }

  historyRecall = (method, url, body)=> {
    this.setState({method, url, body});
  }
  
  loading = (bool) => {
    this.setState({loading:bool});  
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Route exact path="/">
            <Form prompt='GO!' handler={this.formHandler} renderHistory={this.renderHistory} historyRecall={{method:this.state.method, url:this.state.url, body:this.state.body}} progress={this.loading}/>
            <Results response={this.state.results} headers={this.state.results.headers} progress={this.state.loading}/>
            <History history={this.state.history} historyRecall={this.historyRecall}/>
          </Route>
          
          <Route exact path="/history">
            <HistoryPage historyList={this.state.history} />
          </Route>

        </main>
        <Footer />
      </>
    );
  }
}

export default App;
