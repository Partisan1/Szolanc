import { endWord, generateWords, inputValues, startWord} from "./model.js"
import { disableInput, renderGame,validation } from "./view.js"

window.addEventListener("DOMContentLoaded",init)



function init(){
    
    const button= document.querySelector(".start")?.addEventListener("click",()=>{
        console.log(startWord);
        generateWords()
        renderGame(startWord,endWord)
        validation(startWord,endWord,inputValues)
    })
}
