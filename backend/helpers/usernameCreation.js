const animals = [
  'Pig',
  'Squirrel',
  'Rabbit',
  'Whale',
  'Horse',
  'Lion',
  'Cat',
  'Dog',
  'Cow',
  'Tiger',
  'Turtle',
];

const adjective = [
  'Furry',
  'Big',
  'Small',
  'Old',
  'Young',
  'Funny',
  'Tired',
  'Energetic',
  'Cute',
  'Heroic',
];

module.exports = () => {
  const animalNumber = Math.floor(Math.random() * animals.length);
  const adjectiveNumber = Math.floor(Math.random() * adjective.length);
  const randomNumber = Math.floor(Math.random() * 1000);

  return adjective[adjectiveNumber] + animals[animalNumber] + randomNumber;
};
