function checkAge(age) {
  // driving age: 16
  isAllowedToDrive = false;
  if (age >= 16) {
    isAllowedToDrive = true;
  }

  // gambling age: 18
  isAllowedToCasino = false;
  if (age >= 18) {
    isAllowedToCasino = true;
  }

  // drinking age: 19
  isAllowedToDrink = false;
  if (age >= 19) {
    isAllowedToDrink = true;
  }

  reply = "\n\n";

  if (!isAllowedToDrive && !isAllowedToCasino && !isAllowedToDrink) {
    reply =
      reply + "Sorry, you are not yet allowed to drive, gamble, nor drink...";
  } else {
    reply = reply + "You are now of legal age to ";

    if (isAllowedToDrive && isAllowedToCasino && isAllowedToDrink) {
      reply = reply + "drive, gamble, and drink!";
    } else if (isAllowedToDrive && isAllowedToCasino && !isAllowedToDrink) {
      reply = reply + "drive and gamble!";
    } else {
      reply = reply + "drive!";
    }
  }

  return reply;
}

function clickSubmit() {
  // Get user input
  ageInput = parseInt(document.getElementById("ageInput").value);

  // Build page reply
  if (ageInput) {
    reply = "Hi! You are " + ageInput + " years old. ";
    // Append age check to reply
    reply = reply + checkAge(ageInput);
  } else {
    reply = "Please input your age.";
  }

  // Display reply in an alert
  alert(reply);
}
