function CodelandUsernameValidation(str) {
  // code goes here
  let regEx = /^[a-zA-Z]\w{3,24}(?<!_)$/;

  if (str.match(regEx)) {
    return "true";
  } else {
    return "false";
  }
}

// keep this function call here
console.log(CodelandUsernameValidation("b3333434_"));
