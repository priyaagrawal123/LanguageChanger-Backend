const express = require('express');
const app = express();
const PORT = 5000;
// Import cors package
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());


// Import translations.json
const translations = require('./Translations.json').translations;

// Define route to serve translations based on language
app.get('/hello', (req, res) => {
  const language = req.query.language || "English"; // Default to English if language is not provided

  // Language mapping to avoid duplicate keys
  const languageKey = {
    English: "en",
    Hindi1: "hii",
    Hindi2: "hi",
    French: "fr",
    Marathi: "mr",
  }[language];

  console.log("Language Requested:", language);
  console.log("Mapped Language Key:", languageKey);

  // Check if the language key exists in translations.json
  if (languageKey && translations[languageKey]) {
    const translationContent = translations[languageKey].content;

    res.json({
      success: true,
      message: translationContent.helloMessage.replace("{name}", "Priya"),
      welcome: translationContent.welcomeMessage,
      explore: translationContent.explore,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Please choose a valid language",
    });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
