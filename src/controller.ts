import { endWord, generateWords, inputValues, startWord,validation} from "./model.js"
import { disableInput, enableStartButton, renderGame, } from "./view.js"

window.addEventListener("DOMContentLoaded",init)

function init(){ 
    const button= document.querySelector(".start")?.addEventListener("click",buttonclickhandler)
}

function buttonclickhandler(){
    generateWords()
    renderGame(startWord,endWord)
    validation(startWord,endWord,inputValues)
    enableStartButton()
}
