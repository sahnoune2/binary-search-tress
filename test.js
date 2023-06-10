function height(node) {
  if (node === null) {
    return -1;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}
//checking balance
function isBalanced(root) {
  if (root === null) {
    return true;
  }

  let lh = height(root.left);
  let rh = height(root.right);

  if (
    Math.abs(lh - rh) <= 1 &&
    isBalanced(root.left === true && isBalanced(root.right === true))
  ) {
    return true;
  }
  return false;
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
