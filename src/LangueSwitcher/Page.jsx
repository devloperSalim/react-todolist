import { useState } from "react";
import LangueSwitcher from "./LangueSwitcher";

export default function Page({ onlanguagechange}){


    const [currentLang , setCurrentLang] = useState('EN')

    const displayMessage = () =>{
        switch(currentLang){
            case 'Ar': return 'salamon alykom';
            case 'EN': return 'hello';
            case 'TR': return 'merhaba'; 
            default: return 'Language not supported';
        }
    }
    return<>

        <LangueSwitcher onlanguagechange={value => setCurrentLang(value)}/>
        
        <div>
            {displayMessage()}
        </div>
    </>
}