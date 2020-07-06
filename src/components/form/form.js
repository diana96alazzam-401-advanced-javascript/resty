import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: '',
      method: '',
      request: {},
    };
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (this.state.url && this.state.method) {
        let request = {
          url: this.state.url,
          method: this.state.method,
        };
        let url = '';
        let method = '';

        this.setState({ request, url, method });

        const raw = await fetch(request.url);

        let headers = [];
        raw.headers.forEach(item=>headers.push(item));
        const fetchedResults = await raw.json();
        this.props.handler(headers,fetchedResults);
      }

      else {
        alert('missing information');
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <form id='form' onSubmit={this.handleSubmit}>
        <label >
          <span>URL: </span>
          <input id='textInput' name='url' type='text' onChange={this.handleChangeURL} className={this.state.url ? this.state.url : ''} />
          <button type="submit">{this.props.prompt}</button>
        </label>
        <label className="methods">
          <span name='method' className={this.state.method === 'GET' ? 'active' : ''} id="GET" onClick={this.handleChangeMethod}>GET</span>
          <span name='method' className={this.state.method === 'POST' ? 'active' : ''} id="POST" onClick={this.handleChangeMethod}>POST</span>
          <span name='method' className={this.state.method === 'PUT' ? 'active' : ''} id="PUT" onClick={this.handleChangeMethod}>PUT</span>
          <span name='method' className={this.state.method === 'DELETE' ? 'active' : ''} id="DELETE" onClick={this.handleChangeMethod}>DELETE</span>
        </label>
      </form>
    );
  }
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {method: 'Method', url: 'URL'};
//   }

//   render(){
//     return (
//       <main className="formArea">
//         <form onSubmit={this.submitHandler}>

//             <label htmlFor="url">URL <input type="text" name="url" id="url"/></label><br/>
//             <label htmlFor="GET">GET <input type="radio" name="method" id="GET" value="GET" /></label> <span/>
//             <label htmlFor="POST">POST <input type="radio" name="method" id="POST" value="POST"/></label><span/>
//             <label htmlFor="PUT">PUT <input type="radio" name="method" id="PUT" value="PUT"/></label><span/>
//             <label htmlFor="PUT">DELETE <input type="radio" name="method" id="DELETE" value="DELETE"/></label><br/><br/>

//             <input type="submit" value="GO!" />
//         </form>
//         <p>{this.state.method} - {this.state.url}</p>
//       </main>
//           )
//   }

//   submitHandler = (e)=> {
//     e.preventDefault();
//     const method = e.target.method.value;
//     const url = e.target.url.value;
//     this.setState({method, url});
//     e.target.method.checked = false;
//     e.target.url.value = '';
//     // e.target.reset();
//   }

// }

export default Form;
