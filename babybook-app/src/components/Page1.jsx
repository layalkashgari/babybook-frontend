import React, { Component } from 'react';
// import Book from "./Book"; 
import ImageUpload from './ImageUpload';
import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";
import Upload from './Upload'


const API_URL = 'http://localhost:3000'


class Page1 extends Component {
  constructor() {
    super()
    this.state = {

      imageurl: '',
      page_id: '1'
      // textData: []
    }
  }

 


  // to get and save the text the info users enter in the page when filling out 
  // handleInput(event) {
  //   const input = event.target.value;
  //   const input_name = event.target.name
  //   const uploaded_img = event.target.image
  //   this.setState({
  //     [input_name]: input
  //   });
  //   console.log(event.target.value);
  // }

  // 
  // API_URL + `/books/${id}`

  // data in the stete?????? is equal to user 

  
  // updateColor(event){
  //   const url = API_URL + '/texts';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(color)

  //   })
 
//   componentDidMount(){
//     this.getData()
//   }

//  getData(){ 
//   const url = API_URL + "/texts";
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json"
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data) // data im getting back 
//       const motherName = data.find(text => text.name == "motherName") // loop and find the in the database
//       const fatherName = data.find(text => text.name == "fatherName")  // can i add it here? 

//       console.log(motherName, fatherName)


//       this.setState({motherName: motherName.content,
//         fatherName: fatherName.content
//       })
//       // setstate  motherName = data where the text name is mothername filter thru and get the content of it 
    
//       //  data.text.name == 'motherName' ?  this.setState ({ motherName: data.text.content})
//     //  }) : '' /// ? keeef 

//         // this.state.motherName == 'motherName' ? 
//         // if event.target.name = motherName set event.target.image = event.target.name

//       // })

    
//     }).catch(e=> {console.log(e)})
// }


// getTexts(){
//   const url = `http://localhost:3000/texts`
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
        
//         console.log(data);

//        this.setState({ // what what what 

//         motherName: data.text.content
        

//       })
//       .catch(error => {
//         console.log(error);
//       })
// } 


// updateInputValue(event){
//   const newValue = this.state.motherName;
//   newValue[event.target.name] = event.target.value;
//   this.setState({motherName: newValue})
// }

  // fetchdata(data){
  //   let userId = getUser().id
  //   let auth_token = getToken().auth_token // doesnt do nothing 
  //   const url = API_URL + "/texts";

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({text: data ,  user_id: userId, name: "this doesnt show why/?", auth_token: auth_token })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data) // data im getting back 
  //     }).catch(e=> {console.log(e)})
  // }


  // componentDidMoun

  

  handleFile(event) {
    this.setState({
        imageurl: event.target.files[0]
    })
}


// getImageUrl(data) { 
//   this.setState({ 
//     imageurl: data.image_url

//   })
// }





  render() {
    return (

      <div className="Page1">

        {/* <div> <h1> Book name:   <input type="text" name="bookName" value= {this.props.babyName}  placeholder="Book's name" onChange={this.props.handleInput} />  </h1></div> */}



        <form className="UserInput" onSubmit={(event) => this.props.handleSaveButton(event)}>
         
          Hello Mum
           <input type="text" name="motherName" value= {this.props.motherName}  placeholder="Mother's name" onChange={this.props.handleInput} /> and Dad 
          <input type="text" name="fatherName"  value= {this.props.fatherName}  placeholder="Father's name" onChange={this.props.handleInput} />


     
     
     {/* <label>Image: </label> <ImageUpload setImgUrl={this.setImgUrl.bind(this)} name="imageurl"  onChange={this.props.handleInput} /><br /> */}
 {/* <h3> please enter your book's name: <input type="text" name="motherName" onChange={this.handleInput.bind(this)} /> </h3> */}

          <button type="submit">save</button>
          {/* <button onClick={this.props.editData()}> EDITTTTT </button> */}

        </form>
        <Upload page={this.props.page.id} handleFile={this.handleFile.bind()} /> 
        

                         {/* <input type="file" name="image" onChange={this.handleFile.bind(this)} /> */}




      </div>



    );
  }
}


export default Page1;


  // this.fetchdata({name: this.state.imageurl})




  // takes the data from input and save it to database 
  // handleSave(event) {
  //   event.preventDefault();
  //   this.props.handleSaveButton(this.state.input);
  // };

  // fetch post - need: page its on post for each text 

