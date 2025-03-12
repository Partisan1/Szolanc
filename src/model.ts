export function renderGame(startWord:string,endWord:string): void {
    const form = document.querySelector("form") as HTMLElement;
    form.innerHTML = "";

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-elements");

    const startWordInput = document.createElement("input");
    startWordInput.type = "text";
    startWordInput.id = "start-word";
    startWordInput.disabled = true;
    startWordInput.value = startWord;

    const intermediateWordInput = document.createElement("input");
    intermediateWordInput.type = "text";
    intermediateWordInput.id = "intermediate-word";
    intermediateWordInput.maxLength = 3;

    const endWordInput = document.createElement("input");
    endWordInput.type = "text";
    endWordInput.id = "end-word";
    endWordInput.disabled = true;
    endWordInput.value = endWord;

    inputContainer.appendChild(startWordInput);
    inputContainer.appendChild(intermediateWordInput);
    inputContainer.appendChild(endWordInput);

    form.appendChild(inputContainer);
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
    const startBTN = document.querySelector(".start") as HTMLButtonElement;
    startBTN.disabled = false;
}

