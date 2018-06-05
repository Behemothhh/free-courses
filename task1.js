function isPalindrom(sentence) {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
  const reverseWordArray = sentence.split('').reverse();

  return reverseWordArray.join('') === sentence ? 'YES' : 'NO';
}

process.stdout.write(isPalindrom(process.argv[2]));
