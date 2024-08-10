let input = ["bat", "tap", "cat", "tab", "pat"];
let ana = [];

for (let i = 0; i < input.length; i++) {
  let sortedWord = input[i].split("").sort().join("");

  let found = false;
  for (let j = 0; j < ana.length; j++) {
    if (ana[j][0].split("").sort().join("") === sortedWord) {
      ana[j].push(input[i]);
      found = true;
      break;
    }
  }

  if (!found) {
    ana.push([input[i]]);
  }
}

console.log(ana);
