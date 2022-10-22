const sortWords = (inputString) => {
	
    const individualWord = inputString.split('-'); //split individual words width '-' delimiter    
    let sortedWords = individualWord.sort(); // 1st step sort the acquired array of words based on alphebetical order
	
    let lowIndex = 97;
    let upIndex = 65;
    let letterSums = 0;
    
    const letterValue = {}; // create empty hashtable(object) to store key-value pairs eg a : 1, b : 1 and so on 
	
	
    // populate the hashtable with key-value pairs
    for (let i = lowIndex; i <= 'z'.charCodeAt(0); i++) {
        letterValue[String.fromCharCode(i)] = i - lowIndex + 1;
    }
    
	
	
    for (let i = 0; i < sortedWords.length; i++) {
        for (let j = 0; j < sortedWords[i].length; j++) {
            letterSums += letterValue[sortedWords[i][j].toLowerCase()]; // maintain separate variable to store the sum of values associated with each letter
        }
        
        if (letterSums % 2 == 0) { //if value is even sort in acending order with making each letter lowercase
            sortedWords[i] = sortedWords[i].toLowerCase().split('').sort().join('');
            letterSums = 0;
        } else { //else sort in decending order with making each letter lowercase
            sortedWords[i] = sortedWords[i].toLowerCase().split('').sort().reverse().join('');
            letterSums = 0;
        }
        
    }
    
    console.log(sortedWords.join('-')); //finally join the words with '-' attached to them;
}


sortWords('Rjbu-rJhIryk-QATuUF-OyyjOoUAq-YNhbs');

