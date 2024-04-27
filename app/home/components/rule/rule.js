// Define rules and responses
const rules = [
    {
      pattern: /hi|hello|hey/i,
      response: "Hello! How can I assist you today?",
    },
    {
      pattern: /how are you/i,
      response: "I'm just a bot, but thank you for asking!",
    },
    {
      pattern: /what are you|what is your function|what is your purpose/i,
      response: "I'm a bot, design by Ayodele to assist you with information!",
    },
    {
      pattern: /bye|goodbye/i,
      response: "Goodbye! Have a great day!",
    },
    {
      pattern: /what is a web dev portfolio|portfolio for web developer/i,
      response:
        "Sure, I can help with that! A web dev portfolio is a website that showcases your skills and experience.",
    },
    // Rule for specific portfolio aspects
    {
      pattern: /portfolio (.*) (.*)/i, // Capture details in groups
      response: (userInput) => {
        const details = userInput.match(this.pattern).slice(1); // Extract details
        const aspect = details[0].toLowerCase(); // Convert to lowercase
        let response = "Great question about portfolio ";
        switch (aspect) {
          case "content":
            response +=
              "Content is king! Include well-structured project descriptions, highlighting the challenges and your solutions. Showcasing code snippets and visuals is also a plus.";
            break;
          case "design":
            response +=
              "Design matters! Make sure your portfolio is user-friendly, visually appealing, and responsive across devices.";
            break;
          case "technologies":
            response +=
              "Highlight your expertise! Clearly list the technologies you're proficient in, like HTML, CSS, JavaScript, etc.";
            break;
          default:
            response += "I need more information on that specific aspect.";
        }
        return response;
      },
    },
    // Default response
    {
      pattern: /.*/, // Matches any input
      response: "I'm sorry, I didn't understand that. Let me know if you have any questions about web dev portfolios.",
    },
  ];
  
  // Function to match user input with rules and return corresponding response
  function getBotResponse(userInput) {
    for (let i = 0; i < rules.length; i++) {
      if (userInput.match(rules[i].pattern)) {
        // Check if rule has a custom response function
        if (typeof rules[i].response === "function") {
          return rules[i].response(userInput);
        } else {
          return rules[i].response;
        }
      }
    }
    return "I'm sorry, I didn't understand that.";
  }
  
  module.exports = { getBotResponse };
  