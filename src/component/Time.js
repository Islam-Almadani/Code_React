import React from "react";

function Time (){
    const time = new Date();
    var houers = time.getHours();
    let element;
    if (houers < 12){
        element = 'good moring'
    }else if (houers => 12 && houers < 17){
        element = 'good afternoon'
    }else if (houers > 17 ){
        element = 'good evning'
    }
    return(
        <h2>{element}</h2>

    )
}
export default Time; 

