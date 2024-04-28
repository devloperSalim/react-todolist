// function HelloWorld(props){
//     const age = 24;
//     return(
//         <h1>hello {props.name} {age>=18 ? 'adult' : 'minor'}</h1>
//     )
// }
// export default HelloWorld;


//class component
import { Component } from "react";

export default class HelloWorld extends Component {
    age = 24
    render(){
        return <h1>hello {this.props.name} {this.age >= 18 ? 'adult' : 'minor'} from class</h1>
    }
}