const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől","baj", "vaj", "haj", "raj","víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt","fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];

export let startWord = "";
export let endWord = "";
export let inputValues: string[] = [];

function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
}

function generateWords(){
    const startIndex = getRandomIndex(words.length);
    const endIndex = getRandomIndex(words.length);

    startWord = words[startIndex];
    endWord = words[endIndex];
}


export function validation() {
    const inputField = document.getElementById("intermediate-word") as HTMLInputElement;
    const input = inputField.value;
    if (input.length !== 3 || input.includes(" ")) {
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
}