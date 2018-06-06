function fib(num) {
  num = Number.parseInt(num);
  const absNum = Math.abs(num);
  const fibArray = [0, 1];

  while(fibArray.length <= absNum) {
    const arrLength = fibArray.length;
    fibArray[arrLength] = fibArray[arrLength - 1] + fibArray[arrLength - 2];
  }

  return num < 0 ? -fibArray[absNum] : fibArray[absNum];
}

process.stdout.write(fib(process.argv[2]).toString());
