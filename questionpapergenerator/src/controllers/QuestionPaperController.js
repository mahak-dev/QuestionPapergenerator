// QuestionPaperController.js
const express = require('express');
const bodyParser = require('body-parser');
const QuestionPaperGeneratorService = require('../services/QuestionPaperGeneratorService');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const questionStore = require('../data/questionStore.json');
const questionPaperGeneratorService = new QuestionPaperGeneratorService(questionStore);

app.post('/generate-question-paper', (req, res) => {
  const { totalMarks, distribution } = req.body;
  const questionPaper = questionPaperGeneratorService.generateQuestionPaper(totalMarks, distribution);
  res.json({ questionPaper });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
