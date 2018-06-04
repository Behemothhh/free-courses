function fib(num) {
  num = Number.parseInt(num);
  if (num === 1) {
    return 1;
  } else if (num <= 0) {
    return 0;
  }

  return fib(num - 1) + fib(num - 2);
}

process.stdout.write(fib(process.argv[2]).toString());