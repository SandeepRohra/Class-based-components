import React from "react"
import "semantic-ui-css/semantic.min.css"
import "./Seasons.css"
const SeasonConfig={
    Winter:{
        text:"So Cold",
        iconName:"snowflake"
    },
    Summer:{
        text:"Hot Hot Hot",
        iconName:"sun"
    }
}
const getSeason=(lat,date)=>{
        if(date <3 && date>8){
            return ( lat>0 ? "Summer": "Winter")
               
            
        }
        else{
           return (lat > 0 ? "Winter" : "Summer")
        }
}
const SeasonDisplay=(props)=>{
    const SeasonDisplay = getSeason(props.latitude,new Date().getMonth())
    console.log(SeasonDisplay);
    const {text:SeasonText,iconName:SeasonIcon}=SeasonConfig[SeasonDisplay] 
//Ye object spread operator ka  h last m note h is component m
    return(
        <div  className={`season-display ${SeasonDisplay}`}>
        <div>
            <i className={`${SeasonIcon} icon massive icon-left`}/>
            <h1>{SeasonText}</h1>
            <i className={`${SeasonIcon} icon massive icon-right`}/>
                    </div>
                    </div>
    )
}

export default SeasonDisplay



                //-------------------- Notes------------------------------------//
   // Spreed Operator pata h n 
    //Agar Object ko spreed karna ho to apan syntax likhte h
    //const {ObjectKey1,ObjectKey2} = someObject
    //Ye un object ko spreed karega aur someObject Ka data leke usko Object 1 Me dal dega
    //e.g


    // const Brother ={
    //     FirstBrother:"Sandeep Rohra",
    //     SecondBrother: "Ravi Rohra",
    //     ThirdBrother: "Ajay Rohra"
    // }


    // Ab agar mko firstBrother Alag karna h to m spred operator use karunga 


    // const {FirstBrother} = Brother
    // console.log(FirstBrother);
    // // an aise hi m usko koi aur variable m b daal sakta hu for e.g
    // const{SecondBrother:PythonVala}= Brother
    // console.log(PythonVala);

    // and agar  koi object k andar koi aur object ho to apan . use karke usko denote kar sakte h
    //e.g
    
    // const Parrents={
    //     SandeepParent:{
    //         Mother:"Harsha Rohra",
    //         Father:"Dinesh Rohra"
    //     },
    //     PallaviParent:{
    //         Mother:"Manisha Rohra",
    //         Father:"Anil Rohra"
    //     }
    // }

    // const {Mother:SandeepMother,Father:SandeepFather}= Parrents.SandeepParent


    // Apan ek const/var b declare kar ke 
    // usme us object key ko string m daalke 
    //baad m squar brackets [] use kar ke usko acesses kar sakte h 

// const Sandeep = "SandeepParent"


// // const {Mother:SandeepMother,Father:SandeepFather}= Parrents[Sandeep]



// console.log(SandeepFather,SandeepMother); 

