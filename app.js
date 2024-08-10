let input = ["tab", "tap", "cat", "tab", "pat"];
let anagoramArr = [];

for (let i = 0; i < input.length; i++) {
  let flag = false;
  
  for (let j = 0; j < anagoramArr.length; j++) {
    if (
      anagoramArr[j][0].split("").sort().join("") ===
      input[i].split("").sort().join("")
    ) {
      anagoramArr[j].push(input[i]);
      flag = true;
      break;
    }
  }

  if (!flag) {
    anagoramArr.push([input[i]]);
  }
}

console.log(anagoramArr);

