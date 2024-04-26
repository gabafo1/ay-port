// botRules.js

// Define rules and responses
const rules = [
     { 
         pattern: /hi|hello|hey/i, 
         response: "Hello! How can I assist you today?" 
     },
     {
         pattern: /how are you/i,
         response: "I'm just a bot, but thank you for asking!"
     },
     {
         pattern: /bye|goodbye/i,
         response: "Goodbye! Have a great day!"
     },
     // Add more rules as needed
  ];
  
  // Function to match user input with rules and return corresponding response
  function getBotResponse(userInput) {
     for (let i = 0; i < rules.length; i++) {
         if (userInput.match(rules[i].pattern)) {
             return rules[i].response;
         }
     }
     // Default response if no match is found
     return "I'm sorry, I didn't understand that.";
  }
  
  module.exports = { getBotResponse };