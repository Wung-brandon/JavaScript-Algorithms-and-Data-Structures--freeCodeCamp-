// const array = [2, 4, 6, 5]
// let sum = 0
// array.map((num) => sum += num)
// console.log("map", sum)

// const result = array.reduce((acc, current) => acc + current)
// console.log("reduce", result)

// const mean = sum / array.length
// console.log("mean", mean)

// const sortedArray = array.sort((a, b) => a - b)
// const numbers = [1, 2, 3, 4, 5];
// const middleNumber = numbers[Math.floor(numbers.length / 2)];
// console.log("middleNumber", middleNumber); // 3
// console.log("sorted array", sortedArray)

// const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;


// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);
// const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
// console.log(oddListMedian);
// const firstMiddleNumber = testArr2[testArr2.length / 2];
// const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1];

// const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
// console.log(evenListMedian);

// const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
// const counts = {};
// numbersArr.forEach((el) => {
//   if (counts[el]) {
//     counts[el] += 1;
//   } else {
//     counts[el] = 1;
//   }
// });

// // method 1 for getting the mode
// const getMode = (array) => {
//     const counts = {};
//     array.forEach((el) => (counts[el] = counts[el] ? counts[el] + 1 : 1));
  
//     // Check if all values in counts have the same frequency
//     const uniqueCounts = new Set(Object.values(counts));
//     if (uniqueCounts.size === 1) {
//       return null; // No mode
//     }
  
//     // Find the maximum frequency
//     const maxCount = Math.max(...Object.values(counts));
  
//     // Get the mode(s) based on the maximum frequency
//     const mode = Object.keys(counts).filter((key) => counts[key] === maxCount);
  
//     // Return single mode or array of modes
//     return mode.length === 1 ? Number(mode[0]) : mode.map(Number);
//   };
  


const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers)


  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
}