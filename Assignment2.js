//Merge Sort
function mergeSort(list) {
  if (list.length === 0) return [];
  if (list.length === 1) return list;

  const sortedFirstHalf = mergeSort(list.slice(0, Math.round(list.length / 2)));
  const sortedSecondHalf = mergeSort(list.slice(Math.round(list.length / 2)));
  let results = [];

  for (
    let i = 0, j = 0;
    results.length < sortedFirstHalf.length + sortedSecondHalf.length;

  ) {
    if (sortedFirstHalf[i] >= sortedSecondHalf[j]) {
      results.push(sortedSecondHalf[j]);
      j++;
    }
    if (sortedFirstHalf[i] < sortedSecondHalf[j]) {
      results.push(sortedFirstHalf[i]);
      i++;
    }
    if (i >= sortedFirstHalf.length) {
      results = results.concat(sortedSecondHalf.slice(j));
    }
    if (j >= sortedSecondHalf.length) {
      results = results.concat(sortedFirstHalf.slice(i));
    }
  }
  return results;
}

console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));
