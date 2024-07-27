function LongestWord(sen) {
  // Remove all non-letter characters and replace them with a space
  let regEx = /[^a-zA-Z0-9]+/g;
  let cleanWords = sen.replace(regEx, " ");

  // Split the cleaned string into an array of words
  let words = cleanWords.split(" ");

  // Initialize the longestWord variable to store the longest word found
  let longestWord = "";

  // Iterate through the array of words
  for (let i = 0; i < words.length; i++) {
    // If the current word is longer than the longestWord, update longestWord
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  // Return or log the longest word
  console.log(longestWord);
  return longestWord;
}

LongestWord("fun6454 & !!time");
