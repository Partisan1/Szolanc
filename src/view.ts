import { startWord, endWord, validation } from "./model.js";


export function renderGame(): void {
        const form = document.querySelector("form") as HTMLElement;
        form.innerHTML = `
            <div class="input-elements">
                <input type="text" id="start-word" disabled value="${startWord}">
                <input type="text" id="intermediate-word" maxlength="3">
                <input type="text" id="end-word" disabled value="${endWord}">
            </div>
            
        `
    }


export function clearInput(): void {
    const input = document.querySelector("#intermediate-word") as HTMLInputElement;
    input.value = "";
    input.focus();
}

export function disableInput(): void {
    (document.querySelector("#intermediate-word") as HTMLInputElement).disabled = true;
}

export function enableStartButton(): void {
    (document.querySelector(".start") as HTMLButtonElement).disabled = false;
}




console.log(startWord);
console.log(endWord);
