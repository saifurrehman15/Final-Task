let input = ["heart", "earth", "cat", "tab", "pat"];
let anagoram= [];

for (let i = 0; i < input.length; i++) {
  let save = input[i].split("").sort().join("");

  let flag = false;
  for (let j = 0; j < anagoram.length; j++) {
    if (anagoram[j][0].split("").sort().join("") === save) {
      anagoram[j].push(input[i]);
      flag = true;
      break;
    }
  }

  if (!flag) {
    anagoram.push([input[i]]);
  }
}

console.log(anagoram);
