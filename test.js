//height function
function height(node) {
  if (node === null) {
    return -1;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}
const tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};
const h = height(tree);
console.log(h); // Output: 1 2 3 4 5 6 7
