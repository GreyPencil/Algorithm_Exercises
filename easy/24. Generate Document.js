/* 
Sample input: characters = "Bste!hetsi ogEAxpelrt x"   document = "AlgoExpert is the Best!"   
Sample output: true

Sample input: characters = "abcabc" （n）   document = "aabbccc"  (m)
Sample output: false;  coz missing one c
*/
// O(m(n+m)) time   O(1) space 

function generateDocument(characters, document) {
    // Write your code here.
  for (const char of document){
    const documentFrequency = countCharacterFrequency(char, document);
    const characterFrequency = countCharacterFrequency(char, characters);
    if (documentFrequency > characterFrequency) return false;

  }


    return true;
  }

  function countCharacterFrequency(character, target){
    let frequency = 0;
    for (const char of target){
      if(char === character) frequency++
    }
    return frequency;
  }

  function generateDocument2(characters, document) {
    // Write your code here.
    const alreadycounted = new Set();
  for (const char of document){
    if (char in alreadycounted) continue;
    console.log(alreadycounted);
    const documentFrequency = countCharacterFrequency(char, document);
    const characterFrequency = countCharacterFrequency(char, characters);
    if (documentFrequency > characterFrequency) return false;
    alreadycounted.add(char)

  }


    return true;
  }

  // generateDocument2("aaabbbbb", "abaabbbbb");


  function generateDocument3(characters, document) {
    const characterCounts = {};

    for (const char of characters){
      if(!(char in characterCounts)) characterCounts[char] = 0;
      characterCounts[char]++
      console.log(characterCounts);
    }
    for (const char of document){
      if(!(char in characterCounts) || characterCounts[char] === 0) return false;
      console.log(characterCounts);

      characterCounts[char]--;
    }
    return true;


  }

  generateDocument3("aaabbbbb", "abaabbbbb");