export function randomSlice(arr : any, sliceSize: number) {
  if (sliceSize > arr.length) {
    return [];
  }

  const startIndex = Math.floor(Math.random() * (arr.length - sliceSize + 1));

  return arr.slice(startIndex, startIndex + sliceSize);
}
