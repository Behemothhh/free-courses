function sortArr(sentence) {
  const vowels = 'aeiouy';
  const consonants = 'bcdfghjklmnpqrstvwx';
  const numbers = '1234567890';
  const answerArr = ['', '', ''];

  [].forEach.call(sentence, (word) => {
    wordToCompare = word.toLowerCase();
    if (vowels.includes(wordToCompare)) {
      answerArr[0] += word;
    } else if (consonants.includes(wordToCompare)) {
      answerArr[1] += word;
    } else if (numbers.includes(wordToCompare)) {
      answerArr[2] += word;
    }
  });

  return answerArr.filter(str => str).join(' ');
}

process.stdout.write(sortArr(process.argv[2]));
