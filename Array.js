function generateArray(first, last) {
  const array = [];
  if (first <= last) {
    for (const i = first; i <= last; i++) {
      array.push(i);
    }
  } else {
    for (const i = first; i >= last; i--) {
      array.push(i);
    }
  }
  return array;
}
