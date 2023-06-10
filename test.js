//left ->root -> right
function inOrder(node) {
  if (node === null) {
    return;
  }

  inOrder(node.left);
  result += node.value + " ";

  inOrder(node.right);
}

// root -> left -> right

function preOrder(node) {
  if (node === null) {
    return;
  }

  result += node.value;

  preOrder(node.left);
  preOrder(node.right);
}

//left -> right -> root
let result = "";
function postOrder(node) {
  if (node === null) {
    return;
  }

  postOrder(node.left);

  postOrder(node.right);
  result += node.value + " ";
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

postOrder(tree);
console.log(result.trim()); // Output: 1 2 3 4 5 6 7
