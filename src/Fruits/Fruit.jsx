// function Fruit({fruta}){
//     const displayFruits = () =>fruta.map(frut => <li>{frut}</li>)
//     return(
//         <>
//         <h1>list fruits</h1>
//             <ul>
//                 {displayFruits()}
//             </ul>
//         </>
//     )
// }
// export default Fruit;

import { Component } from "react";

export default class Fruit extends Component {
    displayFruits = () =>this.props.fruta.map(frut => <li>{frut}</li>)
     render(){
        return<>
              <h1>list fruits</h1>
              <ul>
                {this.displayFruits()}
              </ul>
        </>
     }
}