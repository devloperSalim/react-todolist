import { Component } from "react";

import { useEffect, useState } from "react";

export default class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter:0,
            date :undefined
        }
    }


    handlClick = () =>{
        setInterval(()=>{
            this.setState(
                preveState => {
                    return{counter : preveState.counter+1}
                }
            )
        },1000)
    }
    handelReset = () =>{
        this.setState({counter:0})
    }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState(
    //             preveState => {
    //                 return{counter : preveState.counter+1}
    //             }
    //         )
    //     },1000)
    // }


    render(){
        return<>
        <button onClick={this.handlClick}>clikc to add</button>
        <button onClick={this.handelReset}>clikc to reset</button>
            <h2>il ya  {this.state.counter} seconds</h2>
        </>
    }
}

// function Counter(){

//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCounter(prevCounter => prevCounter + 1);
//         }, 1000); // 1000 milliseconds = 1 second

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []); // Empty dependency array to run effect only once after initial render

//     return (
//         <div>
//             <h1>Counter: {counter}</h1>
//         </div>
//     );
// }
// export default Counter;