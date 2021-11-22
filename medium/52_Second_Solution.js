function groupAnagrams(words) {
    // O(w*n*logn)time  O(wn)space
    const anagrams = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('')
        console.log("0:",sortedWord);
        if(sortedWord in anagrams){
            anagrams[sortedWord].push(word)
            console.log("1:", anagrams[sortedWord]);
        }else {
            // sortedWord 赋值一个新数组给他
            anagrams[sortedWord] = [word]
            console.log("2", anagrams[sortedWord]);
        }
    }
    return Object.values(anagrams)
}

let words = ["yo","act", "flop", "tac", "foo", "cat", "oy", "olfp"];
groupAnagrams(words);