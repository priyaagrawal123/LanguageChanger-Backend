const express = require('express');
const app = express();
const PORT = 5000;
// Import cors package
const cors = require("cors");

app.use(cors());  //here i have used cors to entable conncetion through different origins


const translations = require('./Translations.json').translations;

app.get('/hello', (req, res) => {
  const language = req.query.language || "English";    //default langugae set to english if no language is choosen (in the postman also this default langugage will set if no language is choosen)
//language keys to uniquely identify each langugae
  const languageKey = {
    English: "en",
    Hindi1: "hii",
    Hindi2: "hi",
    French: "fr",
    Marathi: "mr",
  }[language];

  console.log("Language Requested:", language);
  console.log("Mapped Language Key:", languageKey);

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


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
