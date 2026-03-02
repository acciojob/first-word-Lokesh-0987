function firstWord(s) {
  if (!s || s.length === 0) {
    return "";
  }

  let i = 0;

  // Skip leading spaces
  while (i < s.length && s[i] === " ") {
    i++;
  }

  // If string had only spaces
  if (i === s.length) {
    return "";
  }

  let start = i;

  // Move until first space or end of string
  while (i < s.length && s[i] !== " ") {
    i++;
  }

  return s.slice(start, i);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));