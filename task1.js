function isPalindrom(sentence) {
  sentence = sentence.toLowerCase();
  const wordArray = sentence.split('').filter(word => word !== ' ');
  reverseWordArray = wordArray.slice().reverse();

  return reverseWordArray.join('') === wordArray.join('') ? 'YES' : 'NO';
}

process.stdout.write(isPalindrom(process.argv[2]));
