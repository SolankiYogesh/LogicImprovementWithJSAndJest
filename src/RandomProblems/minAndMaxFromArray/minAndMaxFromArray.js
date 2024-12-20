// Find the minimum and maximum element in an array

const minAndMaxFromArray = (array = []) => {
  let min = array[0];
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    min = element < min ? element : min;
    max = element > max ? element : max;
  }
  return {
    max,
    min,
  };
};

export default minAndMaxFromArray;
