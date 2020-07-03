import React from 'react';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner';

import './results.scss';



class Results extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if(!this.props.progress){
      return (
        <div id="resultsDiv">
          <section className="results">
            <span>Headers</span>
            <ReactJson id="headersID" src={this.props.headers} theme="shapeshifter:inverted" />
            <span>Response</span>
            <ReactJson id="responseID" src={this.props.response} theme="shapeshifter:inverted" />
          </section>
        </div>
      );
    } else {
      return <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />;
    }
  };
}

export default Results;