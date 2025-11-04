let result = ''
for(let i = 5; i > 0; i--){
  for (let j = 0; j < 5 - i; j++) {
    result += ' '
  }
  for(let k = 0; k < i; k++) {
    result += '*'
  }
  result += '\n'
}
console.log(result);