// import { Component } from "react";

import { useEffect, useState } from "react";

// export default class Counter extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             counter:0,
//         }
//     }


//     handlClick = () =>{

//             this.setState(
//                 preveState => {
//                     return{counter : preveState.counter+1}
//                 }
//             )
//     }
//     handelReset = () =>{
//         this.setState({counter:0})
//     }


//     componentDidMount(){
//         console.log('component mounted')
//     }

//     componentDidUpdate(){
//         console.log('component updated')
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
    const [time , setTime] = useState(new Date());
    let timer = null



    // useEffect(()=>{
    //     console.log('every time');
    // })


    useEffect(()=>{
        console.log('counter changed');
    },[count])

    // useEffect(()=>{
    //     console.log('component mounted');
    //     timer = setInterval(()=>{
    //         console.log('teck')
    //         setTime(new Date)
    //     },1000)

    //     return () =>{
    //         clearInterval(timer)
    //     }
    // },[])

    return<>
        <button onClick={()=>{
            setCount(prevState =>{
                return (prevState + props.step)
            })
        }}>
            click to add
        </button>
        <button onClick={()=>{
            setCount(0)
        }}>
            reset
        </button>

        <h2>{count}</h2>
        <h3>{time.toLocaleString()}</h3>
    </>
}
export default Counter;


