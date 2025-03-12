export function renderGame(startWord:string,endWord:string): void {
        const form = document.querySelector("form") as HTMLElement;
        form.innerHTML += `
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

export function validation(startWord:string, endWord:string, inputValues:string[]) {
    const inputField = document.getElementById("intermediate-word") as HTMLInputElement;
    const input = inputField.value;
    inputField.addEventListener("change",()=>{
        if (input.length < 3 || input.includes(" ")) {
            alert("Érvénytelen szó! Csak 3 betűs szavakat adj meg!");
            inputField.value = "";
            inputField.focus();
            return;
        }
        
        inputValues.push(input);
        startWord = input;
        
        if (input === endWord) {
            inputField.disabled = true;
            alert("Gratulálok, elérted a célszót!");
        }
    })
}
