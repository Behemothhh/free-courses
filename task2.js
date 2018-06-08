function fib(num) {
  const absNum = Math.abs(num);
  const fibArray = ['0', '1'];

  while(fibArray.length <= absNum) {
    const arrLength = fibArray.length;
    fibArray[arrLength] = sum(fibArray[arrLength - 1], fibArray[arrLength - 2]);
  }

  return num < 0 ? -fibArray[absNum] : fibArray[absNum];
}

function sum(num1, num2) {
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();
  const maxLength = Math.max(num1Arr.length, num2Arr.length);
  let carryNum = 0;
  const answerArr = [];
  for (let i = 0; i < maxLength; i++) {
    const first = num1Arr[i] ? Number.parseInt(num1Arr[i]) : 0;
    const second = num2Arr[i] ? Number.parseInt(num2Arr[i]) : 0;
    const tempSum = (first + second) % 10;
    answerArr[i] = (tempSum + carryNum) % 10;
    carryNum = (first + second + carryNum) >= 10 ? 1 : 0;
  }
  if (carryNum === 1) answerArr.push(1);
  return answerArr.reverse().join('');
}

process.stdout.write(fib(process.argv[2]).toString());
