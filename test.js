//depth of node

function resultDepth(root, key) {
  if (root === null || root.value === key) {
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

console.log(depth(tree, 7)); // Output: 1 2 3 4 5 6 7
