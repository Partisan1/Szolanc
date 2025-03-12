const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől","baj", "vaj", "haj", "raj","víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt","fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];

export let startWord = "";
export let endWord = "";
export let inputValues: string[] = [];

function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
}

export function generateWords(){
    const startIndex = getRandomIndex(words.length);
    const endIndex = getRandomIndex(words.length);

    startWord = words[startIndex];
    endWord = words[endIndex];
}


export function validation(input: string, inputValues: string[]): boolean {
    if (input.length !== 3 || input.includes(" ")) {
        alert("Érvénytelen szó! Csak 3 betűs szavakat adj meg!");
        return false;
    }

    if (inputValues.includes(input)) {
        alert("Ez a szó már szerepel!");
        return false;
    }

    return true;
}
