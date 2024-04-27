// function HelloWorld(props){
    
//     return(
//         <h1>hello {props.name}</h1>
//     )
// }
// export default HelloWorld;


//class component
import { Component } from "react";

export default class HelloWorld extends Component {

    render(){
        return <h1>hello {this.props.name} from class</h1>
    }
}