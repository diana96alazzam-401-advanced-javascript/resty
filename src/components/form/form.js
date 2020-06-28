import React from 'react';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {method: 'Method', url: 'URL'};
  }

  render(){
    return (
      <main className="formArea">
        <form onSubmit={this.submitHandler}>

            <label htmlFor="url">URL <input type="text" name="url" id="url"  /></label><br/>
            <label htmlFor="GET">GET <input type="radio" name="method" id="GET" value="GET" /></label> <span/>
            <label htmlFor="POST">POST <input type="radio" name="method" id="POST" value="POST"/></label><span/>
            <label htmlFor="PUT">PUT <input type="radio" name="method" id="PUT" value="PUT"/></label><span/>
            <label htmlFor="PUT">DELETE <input type="radio" name="method" id="DELETE" value="DELETE"/></label><br/><br/>
  
            <input type="submit" value="GO!" />
        </form>
        <p>{this.state.method} {this.state.url}</p>
      </main>
          )
  }

  submitHandler = (e)=> {
    e.preventDefault();
    const method = e.target.method.value;
    const url = e.target.url.value;
    this.setState({method, url});
  }
  
}

export default Form;