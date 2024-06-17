function analyzeSentence(sentence) {
    sentence = sentence.trim();  
    const sentenceLength = sentence.length;  
    let wordCount = 0;  // Initialize word count
    let vowelCount = 0;  // Initialize vowel count
    const vowels = "aeiouAEIOU";  // Define vowels
    
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        if (char === ' ') {  // Check if character is a space to count words
            wordCount++;
        } else if (vowels.includes(char)) {  // Check if character is a vowel to count vowels
            vowelCount++;
        }
    }
    
    // Count the last word (since the sentence ends with a point)
    wordCount++;
    
    // Output the results
    console.log(`Length of the sentence: ${sentenceLength} characters`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example usage:
const sentence = "Hello world. This is a test sentence.";
analyzeSentence(sentence);
