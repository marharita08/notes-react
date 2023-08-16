function capitalizeFirstLetter(word: string): string {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
}

export function convertKeyToHeader(key: string): string {
    const words = key.split(/(?=[A-Z])/);
    words[0] = capitalizeFirstLetter(words[0])
    return words.join(' ');
}
