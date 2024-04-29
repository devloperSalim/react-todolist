// function Event(){

import { Component } from "react";

//     const handelCalick = () =>{
//         alert('booom!')
//     }
//     return<>
//         <button onClick={handelCalick}>
//             click me
//         </button>
//     </>
// }
// export default Event


export default class Event extends Component{

    handlClick = () =>{
        alert('booom!')
    }

    render(){
        return<>
            <button onClick={this.handlClick}>
                click me
            </button>
        </>
    }
}