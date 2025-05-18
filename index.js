import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "514554",
  port: 5432,
});

const app = express();
const port = 3000;

let quiz = [];
let totalCorrect = 0;
let currentQuestion = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function startServer() {
  // try {
  await db.connect();
  await db.query("SELECT * FROM flags", (err, res) => {
    if (err) {
      console.error("Error executing query", err.stack);
    } else {
      quiz = res.rows;
    }
    db.end();
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  // } catch (err) {
  //   console.error("Error starting server:", err);
  // }
}

startServer();
