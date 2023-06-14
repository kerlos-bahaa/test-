function reverseString(string) {
  // Check if the string is not empty.
  if (string === "") {
    throw new Error("The string must not be empty");
  }

  // Check if the string is at least 1 character long and not longer than 10 characters.
  if (string.length < 1 || string.length > 10) {
    throw new Error(
      "The string must be at least 1 character long and not longer than 10 characters"
    );
  }

  // Reverse the string.
  const reversedString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }

  // Return the reversed string.
  return reversedString.join("");
}
module.exports = reverseString;
