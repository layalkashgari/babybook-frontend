import React, { Component } from 'react';
import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";



const API_URL = 'http://localhost:3000'


class AllBooks extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  // did mount then render, after the state updates it rerenders again 


  fetchAllBooks() {
    console.log("IN FETCH")
    let userId = getUser().id
    const url = API_URL + "/books?auth_token=" + getToken(); // added ?auth_token 
    console.log(getToken());
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }      //  body: JSON.stringify(show) this is removed because i dont want to send anything - and the parameter is also deleted because im not sendind any data e.x. book name 

    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        this.setState({
          books: data
        })

  
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  showOneBook(){ 

    
  }

  renderBooks(allbooks) {
    // use map to return an array of components, where each component has data about the book

    // map through the state "books" 
    // and make a tile for each BOOK 

    return allbooks.map((book) => {
      return (
        <div key={book.id} onClick={() => this.props.showOneBook(book) } >
          {/*  react needs an id  */}
          <p>{book.name}</p>
        </div>
        // <AllBooks  /> // not sure which component
      )
    })
  }


  // showBook() { 

  //   this.setState
  // }



  render() {
    return (
      <div>
        <h1> Your Baby Books: </h1>
        {/* <div className="tile" >
        {this.renderBooks(this.state.books)} 
        </div> */}

<div className="tile">

    
      <h2>  {this.renderBooks(this.state.books)} </h2>
    </div>



      </div>

    );
  }
}

export default AllBooks;