function stringLength(string) {
  // Check if the string is not empty.
  if (string === "") {
    throw new Error("The string must not be empty");
  }

  // Check if the string is at least 1 character long.
  if (string.length < 1) {
    throw new Error("The string must be at least 1 character long");
  }

  // Check if the string is not longer than 10 characters.
  if (string.length > 10) {
    throw new Error("The string must not be longer than 10 characters");
  }

  // Get the length of the string.
  const length = string.length;

  // Return the length of the string.
  return length;
}
module.exports = stringLength;
