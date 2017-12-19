import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
    this.onEventChange = this.onEventChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  onEventChange(e) {
    this.setState({term: e.target.value});
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          placeholder="Get a five day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onEventChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button> 
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
