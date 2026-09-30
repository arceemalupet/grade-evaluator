document.getElementById("startBtn").onclick = function () {
  // Welcome Alert
  alert("Welcome to Group 4's Grade Evaluator Website!");

  // Prompt user to enter name
  let nameInput = prompt("Please enter your name:");

  // VALIDATION
  if (nameInput === null || nameInput.trim() === "") {
    displayResult(
      "Unknown User",
      "Invalid Name Input (Empty or Canceled). Click the button to try again.",
    );
    return;
  }

  let userName = nameInput.trim();

  // Prompt user to enter score
  let scoreInput = prompt(
    `Hello ${userName}, please enter your score (0 - 100):`,
  );

  // VALIDATION
  if (scoreInput === null || scoreInput.trim() === "") {
    displayResult(
      userName,
      "Invalid score (Empty input). Click the button to try again.",
    );
    return;
  }

  let score = Number(scoreInput);

  // VALIDATION: (Invalid / Non-numeric)
  if (isNaN(score) || scoreInput.trim() === "") {
    displayResult(
      userName,
      "Invalid score (Non-numeric input). Click the button to try again.",
    );
    return;
  }

  // VALIDATION: Check if negative (Negative input)
  if (score < 0) {
    displayResult(
      userName,
      "Invalid score (Negative input is not allowed). Click the button to try again.",
    );
    return;
  }

  // VALIDATION: Check if score exceeds 100 (Score beyond 100)
  if (score > 100) {
    displayResult(
      userName,
      "Invalid score (Score cannot exceed 100). Click the button to try again.",
    );
    return;
  }

  // Ask user if they want to proceed and view the evaluation result
  let proceed = confirm(
    "Do you want to proceed and view your evaluation result?",
  );

  if (!proceed) {
    displayResult(
      userName,
      "Evaluation process was canceled by the user. Click the button to restart.",
    );
    return;
  }

  // Evaluate the score and get the remark
  let remark = evaluateScore(score);

  // Display the result
  displayResult(userName, `Your Score is ${score}. Remark: ${remark}`, score);
};

/**
 * Evaluates the numeric score and returns the final grading remark.
 */
function evaluateScore(score) {
  if (score >= 90 && score <= 100) {
    return "Excellent";
  } else if (score >= 75 && score <= 89) {
    return "Passed";
  } else if (score >= 0 && score < 75) {
    return "Failed";
  } else {
    return "Invalid score";
  }
}

function displayResult(name, message, score) {
  if (score >= 75) {
    document.getElementById("myH1").textContent = `Congrats, ${name}!`;
    document.querySelector(".tagline").textContent = message;

    document.getElementById("confetti").style.display = "block";
  } else {
    document.getElementById("myH1").textContent = `It's okay, ${name}.`;
    document.querySelector(".tagline").textContent = message;

    document.getElementById("confetti").style.display = "none";
  }
}
