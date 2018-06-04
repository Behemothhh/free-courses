function fib(num) {
  num = Number.parseInt(num);
  if (num <= 0) {
    return 0;
  }

  const fibArray = [0, 1];

  while(fibArray.length !== num + 1) {
    const arrLength = fibArray.length;
    fibArray[arrLength] = fibArray[arrLength - 1] + fibArray[arrLength - 2];
  }

  return fibArray[fibArray.length - 1];
}

process.stdout.write(fib(process.argv[2]).toString());
