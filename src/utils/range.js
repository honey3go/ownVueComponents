export default function (start, length) {
  if (length > 0) {
    return new Array(length).fill(start).map((item, index) => item + index);
  }
  return  null;
}
