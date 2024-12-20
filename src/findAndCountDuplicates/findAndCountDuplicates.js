// Find the frequency of each element in a sorted array containing duplicates
const findAndCountDuplicates = (array = []) => {
  const pairs = {};
  array.map((i) => {
    if (!Object.hasOwn(pairs, i)) {
      pairs[i] = array.filter((j) => j === i).length;
    }
  });
  return pairs;
};

// best way to do this
// const findAndCountDuplicates = (array = []) => {
//     const counts = {};  // An object to store counts
//     for (const item of array) {
//       counts[item] = (counts[item] || 0) + 1;  // Increment count for each item
//     }
//     return counts;
//   };

export default findAndCountDuplicates;
