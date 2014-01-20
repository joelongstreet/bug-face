var negativePhrases = [
  'Believe in yourself, cause the rest of us think you\'re an idiot',
  'There\'s nothing to do at this point, except give up',
  'Quit crying, Cry baby, cry cry cry baby',
  'That\'s it, the next bug is coming out of your paycheck',
  'Don\'t worry, you\'ll never get this project done',
  'Herp derp the herp derp, herpin derpin herp herp, fart in your face',
  'Hashtag sigh',
  'For real dog, the tests better pass this time',
  'You\'re not using that code anyways, just delete it.',
  'Yet another pile of fail from you',
  'a s d f a s d f a s d f a s d f a s d f, just type that',
  'By works you must mean. quote doesn\'t work. endquote, jackass',
  'my god, what have you done!',
  'Wheeeeeeeeeeee!',
];

var positivePhrases = [
  'Yahoo',
  'You go get em tiger',
  'That, a boy',
  'Good job sport',
  'High fives all around',
  'Good job, but, I can\'t believe it took you this long'
];

var randomNegative = function(){
  return negativePhrases[Math.floor(Math.random()*negativePhrases.length)];
};

var randomPositive = function(){
  return positivePhrases[Math.floor(Math.random()*positivePhrases.length)];
};

exports.randomNegative = randomNegative;
exports.randomPositive = randomPositive;