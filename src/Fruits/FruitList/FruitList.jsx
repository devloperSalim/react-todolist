import { useState } from "react";

function FruitList(){


    const [fruit , setFruit] = useState();
    const [fruitList , setFruitList] = useState([]);

    const inputValue = () =>{
        const fruitInput = document.querySelector('#fruit').value
            setFruit(fruitInput)
    }

    const handlAddFruit = (e) =>{
        e.preventDefault()

        setFruitList([...fruitList , fruit])
    }

    const displayFruit = () => fruitList.map((fruit , fruitKey)=><li key={fruitKey}>{fruit}</li>)
    return<>

        <h2>List fruit</h2>
        <form>
            <input type="text" id="fruit" onChange={inputValue}  placeholder="add fruit"/>
            <input type="submit" value='add' onClick={handlAddFruit}/>
        </form>
        <ul>
            {displayFruit()}
        </ul>
    </>

}
export default FruitList;