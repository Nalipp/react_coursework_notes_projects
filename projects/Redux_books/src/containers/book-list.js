import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';  
// ensures that the actions that are being created flow through all of the reducers (selectBook)

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {  
  // anything returned from this function will end up as props on the book list container
  return bindActionCreators({selectBook: selectBook}, dispatch); 
  // whenever selectbook is called the result is passed to all of the reducers (dispatch)
}  
// allows you to call this.props.selectBook

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// promote BookList from a component to a continer, also allows access to selectBook prop
