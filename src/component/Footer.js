// import React from 'react';

// function Footer (){return(
//     <h1>this is footer</h1>)
// }

// export default Footer 

import React ,{Component} from "react";

class Footer extends Component {
    constructor(){
        super()
        this.state ={
            isloged : true, 
        }
    }
    render(){
        var answer 
        if(this.state.isloged = true){
            answer = "out"
        }else{
            answer= "in"
        }
        return(
            <h1>{answer}</h1>
        )
    }
}

export default Footer;