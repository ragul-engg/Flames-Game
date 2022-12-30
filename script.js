const doFlames = (event) => {
  event.preventDefault();
  const firstPersonName = document.getElementsByClassName("form")[0][0].value;
  const secondPersonName = document.getElementsByClassName("form")[0][1].value;
  const flameResults = [
    "Friends :) - We are friends 🫂",
    "Love - Are we in Love 💕",
    "Affectionate - You like me 😼",
    "Marriage - We are gonna get married 👩🏻‍❤‍👨🏼",
    "Enemy :( - We are enemies 😤",
    "Sister - Ah! shit We are Siblings 😫",
    "Ghost - Bruh!!! is it a ghost with no name 👻",
  ];
  const resultOfFlamesIdx = findFlamesValue(firstPersonName, secondPersonName);
  const resultDiv = document.getElementById("flamesResult");
  resultDiv.innerText = flameResults[resultOfFlamesIdx];
  return false;
};

const getUniqCharsCtr = (firstPersonName, secondPersonName) => {
  const asciiArray = new Array(26).fill(0);
  [...firstPersonName].forEach((element) => {
    if (element !== " ") {
      element = element.toLowerCase();
      asciiArray[element.charCodeAt(0) - 97]++;
    }
  });
  [...secondPersonName].forEach((element) => {
    element = element.toLowerCase();
    asciiArray[element.charCodeAt(0) - 97]--;
  });
  return asciiArray.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
};

const findFlamesValue = (firstPersonName, secondPersonName) => {
  firstPersonName.replace(" ", "");
  secondPersonName.replace(" ", "");
  if (firstPersonName.length === 0 || secondPersonName.length === 0) {
    return 6;
  }
  const uniqCharsCtr = getUniqCharsCtr(firstPersonName, secondPersonName);
  let flamesIndex = [0, 1, 2, 3, 4, 5];
  while (flamesIndex.length > 1) {
    toRemoveIdx = (uniqCharsCtr % flamesIndex.length) - 1;
    if (toRemoveIdx >= 0) {
      flamesIndex = flamesIndex
        .slice(toRemoveIdx + 1)
        .concat(flamesIndex.slice(0, toRemoveIdx));
    } else {
      flamesIndex.splice(flamesIndex.length - 1, 1);
    }
  }
  return flamesIndex;
};

const resetResult = () => {
  const div = document.getElementById("flamesResult");
  div.innerText = "";
};
