// function TextFields(props){

//     return(
//         <>
//             <label>{props.lebelName}</label>
//             <input  name={props.inputName}/>
//             <div>
//                 {props.children}
//             </div>
//         </>
//     )
// }
// export default TextFields;

// class
 import { Component } from "react";

 export default class TextFields extends Component{

    render(){
        return<>
            <label>{this.props.lebelName}</label>
            <input name={this.props.inputName}/>
            <div>
                {this.props.children}
            </div>
        </>
    }
 }