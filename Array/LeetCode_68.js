/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let curWidth = 0;
  const curArr = [];
  const resultArr = [];
  for (const word of words) {
    // console.log(`current width:${curWidth}, current word: ${word}, current array: ${curArr}`)
    if (
      curWidth + word.length + (curArr.length > 1 ? curArr.length - 1 : 0) >=
      maxWidth
    ) {
      handleRowString(curArr, resultArr, maxWidth, curWidth);
      curArr.length = 0;
      curArr.push(word);
      curWidth = word.length;
    } else {
      curArr.push(word);
      curWidth += word.length;
    }
  }
  handleLastRow(curArr, resultArr, maxWidth, curWidth);
  return resultArr;
};

function handleRowString(curArr, resultArr, maxWidth, curWidth) {
  if (curArr.length === 0) return;
  let spaceCount = maxWidth - curWidth;
  if (curArr.length === 1) {
    resultArr.push(curArr[0] + ' '.repeat(spaceCount));
    return;
  }
  const spaceSplitCount = curArr.length - 1;
  const base = Math.floor(spaceCount / spaceSplitCount);
  let remainder = spaceCount % spaceSplitCount;
  const spaceArray = [];
  // console.log(`spaceCount:${spaceCount}, spaceSplitCount:${spaceSplitCount}, base:${base}, remainder:${remainder}`)
  for (let i = 0; i < spaceSplitCount; i++) {
    const spaces = ' '.repeat((remainder > 0 ? 1 : 0) + base);
    remainder--;
    spaceArray.push(spaces);

    // console.log(`Length of spaceArray: ${spaceArray.length}`)
  }
  const totalLength = spaceSplitCount + curArr.length;
  let resultString = '';
  // console.log(curArr)
  // console.log(spaceArray)
  for (let i = 0; i < totalLength; i++) {
    if (i % 2 === 0) {
      resultString = resultString.concat(curArr[Math.floor(i / 2)]);
    } else {
      resultString = resultString.concat(spaceArray[Math.floor(i / 2)]);
    }
  }
  resultArr.push(resultString);
}

function handleLastRow(curArr, resultArr, maxWidth, curWidth) {
  // console.log(curArr)
  let restSpaces = maxWidth - curWidth - (curArr.length - 1);
  let resultString = '';

  if (curArr.length === 1) {
    resultString = resultString.concat(curArr[0]);
    resultString = resultString.concat(' '.repeat(restSpaces));
    // console.log(resultString)
    resultArr.push(resultString);
  } else {
    for (let i = 0; i < curArr.length; i++) {
      if (i !== curArr.length - 1) {
        resultString = resultString.concat(curArr[i] + ' ');
      } else {
        resultString = resultString.concat(curArr[i]);
      }
    }
    if (restSpaces > 0) {
      resultString = resultString.concat(' '.repeat(restSpaces));
    }
    resultArr.push(resultString);
  }
}
