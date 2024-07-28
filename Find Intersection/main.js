function FindIntersection(strArr) {
  const firstElement = strArr[0].split(",").map((item) => item.trim());
  const secondElement = strArr[1].split(",").map((item) => item.trim());
  const intersectionElement = [];

  for (let i = 0; i < firstElement.length; i++) {
    for (let j = 0; j < secondElement.length; j++) {
      if (firstElement[i] === secondElement[j]) {
        intersectionElement.push(firstElement[i]);
        break; // No need to check further for this element
      }
    }
  }

  if (intersectionElement.length === 0) {
    return "false";
  } else {
    return intersectionElement.join(","); // Join elements into a string
  }
}

// keep this function call here
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"]));
