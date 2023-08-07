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

export function findDates(str: string) {
    const dateRegex =
        /\d{1,2}-\d{1,2}-\d{2,4}|\d{4}-\d{1,2}-\d{1,2}|\d{1,2}\/\d{1,2}\/\d{2,4}|\d{4}\/\d{1,2}\/\d{1,2}|\d{4}.\d{1,2}.\d{1,2}|\d{1,2}.\d{1,2}.\d{2,4}|\d{1,2}\\\d{1,2}\\\d{2,4}|\d{4}\\\d{1,2}\\\d{1,2}/g;
    // get array of results
    const dates = str.match(dateRegex);
    let datesStr = "";
    // convert array to string
    if (dates !== null) {
        for (let i = 0; i < dates.length; i++) {
            datesStr += dates[i];
            if (i !== dates.length - 1) {
                datesStr += ", "
            }
        }
    }
    return datesStr;
}
