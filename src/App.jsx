import React from "react"
import SeasonDisplay from "./SeasonDisplay"
import Loading from "./Loding"
class App extends React.Component{ 
   state ={lat:null,errorMessage:""} 
   
   componentDidMount(){
   
       window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({
                lat:position.coords.latitude,
                errorMessage:"",
            }),
            (err)=>{  
                this.setState({errorMessage:err.message })
            }       
        )
   }
   renderContent(){
    if(this.state.errorMessage && !this.state.lat){
        return(
            <div>
                <h1>Error: {this.state.errorMessage}</h1>
            </div>
        )
    }
    if(this.state.lat && !this.state.errorMessage){
        return(
            <div>
                <SeasonDisplay latitude={this.state.lat}/>
            </div>
        )
    }
    return(
        <Loading message="Please accept loactaion permission to continue"/>
    )
   }
    render() {
return(
    <div style={{border:"10px"}}>
    {this.renderContent()}
</div>

)
    }
}


export default App