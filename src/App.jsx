import React from "react"
// const App =()=>{
//     navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
// return(
//     <div>Hello</div>
// )
//     )
// }   
//how the class based component is formed 
class App extends React.Component{ 
    constructor(props){// to initalise state this is required 
        super(props) // the React.Component above has a constructor function too super is called so the our overide constructor doesn't hinder the work of it 
        this.state={lat:null} // how to initialise state in the class based omponents
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position),
            (err)=>console.log(err)
        )
        return(
        <div>
        <h1>Latitude :</h1>
    </div>
        )
        
    }
}


export default App