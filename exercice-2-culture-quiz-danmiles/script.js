/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
    {
        // Texte de la question
        question:
            "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
        // Réponses possibles
        answers: [
            "Darth Vader",
            "Anakin Skywalker",
            "Les deux réponse",
            "Aucune réponse",
        ],
        // Index de la réponse correcte
        correctAnswerIndex: 2,
    },
    {
        question:
            'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
        answers: ["1967", "1974", "1962", "1980"],
        correctAnswerIndex: 0,
    },
    {
        question:
            'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
        answers: ["Zelda", "Ganon", "Tom", "Link"],
        correctAnswerIndex: 3,
    },
    {
        question:
            "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
        answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
        correctAnswerIndex: 2,
    },
    {
        question:
            "Merci d'avoir répondu. :) Je suis désolé, mais j'ai dû ajouter ce texte aux CONST Questions. C'était beaucoup plus facile pour ma function :) :) :) ",
        answers: [],
    },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
    // A FAIRE: Compléte le code pour de faire fonctionner le quizz, pour plus d'informations consulte le sujet

    // Element
    const questionBox = document.getElementById("question");
    const answersBox = document.getElementById("answers");
    const answer = document.getElementsByClassName("answer");
    const score = document.getElementById("score");

    let qeustionСounter = 0;

    // Show first question
    (function showFirstQestion() {
        return questionBox.innerHTML = questions[qeustionСounter].question;
    })();

    // Show first answer
    (function showFirstAnswers() {
        let dataAnswers = questions[qeustionСounter].answers;

        dataAnswers.forEach(function (el) {
            let li = document.createElement("li");
            li.classList.add("answer");
            li.innerHTML = el;
            return answersBox.appendChild(li);
        });
    })();

    // Answer click action
    answersBox.addEventListener("click", (e) => {
        let answerCorrect =
            questions[qeustionСounter].answers[
            questions[qeustionСounter].correctAnswerIndex
            ];

        // Correct answer action
        if (
            e.target.innerText == answerCorrect &&
            qeustionСounter < questions.length
        ) {
            qeustionСounter++;

            // Next question
            questionBox.innerHTML = questions[qeustionСounter].question;

            // Clear questions box
            answersBox.innerHTML = "";

            // Show next answers
            let dataAnswers = questions[qeustionСounter].answers;

            dataAnswers.forEach(function (el) {
                let li = document.createElement("li");
                li.classList.add("answer");
                li.innerHTML = el;
                answersBox.appendChild(li);
            });

            // Add one point for a correct answer
            score.innerHTML++;

            console.log("Correct");
        }
        // NOT Correct answer action
        if (
            e.target.innerText != answerCorrect &&
            qeustionСounter < questions.length
        ) {
            qeustionСounter++;

            // Next question
            questionBox.innerHTML = questions[qeustionСounter].question;

            // Clear questions box
            answersBox.innerHTML = "";

            // Show next answers
            let dataAnswers = questions[qeustionСounter].answers;

            dataAnswers.forEach(function (el) {
                let li = document.createElement("li");
                li.classList.add("answer");
                li.innerHTML = el;
                answersBox.appendChild(li);
            });
            console.log("Not correct");
        }
    });
});
