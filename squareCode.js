const squareCode = function(message) {
  let result = '';
  let squareMessage = [];
  let newMessage = message.split(' ').join('');
  let root = Math.ceil(Math.sqrt(newMessage.length));
  for (let i = 0; i < newMessage.length; i += root) {
    squareMessage.push(newMessage.slice(i, i + root));
  }
  for (let i = 0; i < root; i++) {
    for (let j = 0; j < squareMessage.length; j++) {
      if (squareMessage[j][i]) {
        result += squareMessage[j][i];
      }
    }
    result += ' ';
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

//expected output:
//clu hlt io
//fto ehg ee dd
//hae and via ecy
//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
