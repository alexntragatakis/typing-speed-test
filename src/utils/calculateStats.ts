export function calculateWPM (time: number , wordList: string ) {
    const words = wordList.length / 5;
    const minutes = time / 60000;
    return Math.round(words / minutes);
}

export function calculateAccuracy (wordList: string, typed: string) {
    let correct = 0;

    for (let i=0; i<wordList.length; i++) {
        if (wordList[i] === typed[i]) {
            correct++;
        }
    }

    return (Math.round(correct / wordList.length)) * 100;
}
