//depth of node
let result = 0;
function resultDepth(root, key) {
  if (root === null) {
    return null;
  }
  if (root.value === key) {
    return result;
  }

  if (key < root.value) {
    result += 1;
    return resultDepth(root.left, key);
  } else if (key > root.value) {
    result += 1;
    return resultDepth(root.right, key);
  }
  return result;
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

console.log(resultDepth(tree, 100)); // Output: 1 2 3 4 5 6 7
