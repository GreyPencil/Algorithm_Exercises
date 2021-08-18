/* non-empty string and returns its run-ength encoding
"AAA"   returns  "3A"
max 9  
"AAAAAAAAAAAAABBCCCCDD"   sample out put "9A4A2B4C2D"
*/
// O(n) time and O(n) space

function runLengthEncoding(string) {
    // Write your code here.
    const encodedStringCharacters = [];
    let num = 1;

    for (let i = 1; i < string.length; i++){
        const current = string[i];
        const pre = string[i-1]
        if(num === 9 || current !== pre){
            encodedStringCharacters.push(num.toString());
            console.log(encodedStringCharacters);
            console.log(num);
            encodedStringCharacters.push(string[i-1]);
            num = 0;
        }
        num++;
    }
    encodedStringCharacters.push(num.toString());
    encodedStringCharacters.push(string[string.length-1]);

    return encodedStringCharacters.join('');

  }

  runLengthEncoding("AAAABB");
  