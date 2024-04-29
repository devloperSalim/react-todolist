// import { Component } from "react";

import { useEffect, useState } from "react";

// export default class Counter extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             counter:0,
//             date :undefined
//         }
//     }


//     handlClick = () =>{
//         setInterval(()=>{
//             this.setState(
//                 preveState => {
//                     return{counter : preveState.counter+1}
//                 }
//             )
//         },1000)
//     }
//     handelReset = () =>{
//         this.setState({counter:0})
//     }


//     render(){
//         return<>
//         <button onClick={this.handlClick}>clikc to add</button>
//         <button onClick={this.handelReset}>clikc to reset</button>
//             <h2>il ya  {this.state.counter} seconds</h2>
//         </>
//     }
// }


function Counter(props){

    const [count ,  setCount] = useState(0);

    return<>
        <button onClick={()=>{
            setCount(prevState =>{
                return (prevState + props.step)
            })
        }}>
            click to add
        </button>
        <button onClick={()=>{
            setCount(props.initialState)
        }}>
            reset
        </button>

        <h2>{count}</h2>
    </>
}
export default Counter;


