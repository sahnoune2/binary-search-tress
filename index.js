let result = "";
let resultDepth = 0;
function duplicate(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function sort(array) {
  let c;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        c = array[i];
        array[i] = array[j];
        array[j] = c;
      }
    }
  }
  return array;
}

function node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function tree() {
  return {
    buildTree: function (array, start, end) {
      if (start > end) {
        return null;
      }

      let mid = parseInt((start + end) / 2);

      let head = new node(array[mid]);

      head.left = this.buildTree(array, start, mid - 1);
      head.right = this.buildTree(array, mid + 1, end);

      return head;
    },

    search: function (root, key) {
      if (root === null || root.data === key) {
        return root;
      }
      if (key > root.data) {
        return this.search(root.right, key);
      } else if (key < root.data) {
        return this.search(root.left, key);
      }
    },
    insert: function (root, key) {
      if (root === null) {
        return new node(key);
      }
      if (key < root.data) {
        root.left = this.insert(root.left, key);
      } else if (key > root.data) {
        root.right = this.insert(root.right, key);
      }
      return root;
    },
    inOrder: function (node) {
      if (node === null) {
        return;
      }

      this.inOrder(node.left);
      result += node.value + " ";

      this.inOrder(node.right);
    },
    preOrder: function (node) {
      if (node === null) {
        return;
      }

      result += node.value;

      this.preOrder(node.left);
      this.preOrder(node.right);
    },
    postOrder: function (node) {
      if (node === null) {
        return;
      }

      this.postOrder(node.left);

      this.postOrder(node.right);
      result += node.value + " ";
    },
    height: function (node) {
      if (node === null) {
        return -1;
      }
      return this.Math.max(height(node.left), height(node.right)) + 1;
    },
    //depth of node

    resultDepth: function (root, key) {
      if (root === null) {
        return null;
      }
      if (root.value === key) {
        return result;
      }

      if (key < root.value) {
        result += 1;
        return this.resultDepth(root.left, key);
      } else if (key > root.value) {
        result += 1;
        return this.resultDepth(root.right, key);
      }
      return result;
    }, //checking balance
    isBalanced: function (root) {
      if (root === null) {
        return true;
      }

      let lh = this.height(root.left);
      let rh = this.height(root.right);

      if (
        Math.abs(lh - rh) <= 1 &&
        this.isBalanced(root.left) === true &&
        this.isBalanced(root.right) === true
      ) {
        return true;
      }
      return false;
    },
  };
}

let seif = [0, 2, 1, 0, 5, 0, 9, 5, 0, 2, 1, 0, 3];

let arrayTree = sort(duplicate(seif));
let total = tree();

console.log(arrayTree); // [0, 1, 2, 3, 5, 9]
let n = arrayTree.length;
console.log(n); //6
let root = total.buildTree(arrayTree, 0, n - 1); //2 0 1 5 3 9

function print(node) {
  let result = "";
  if (node === null) {
    return result;
  }
  result += node.data + " ";
  result += print(node.left);
  result += print(node.right);
  return result;
}

console.log(print(root)); //2 0 1 5 3 9

let find = total.search(root, 9);

console.log(find); //{data: 9, left: null, right: null}

root = total.insert(root, 4);
console.log(print(root));

// const tree = {
//   value: 4,
//   left: {
//     value: 2,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 6,
//     left: {
//       value: 5,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 7,
//       left: null,
//       right: null,
//     },
//   },
// };

// postOrder(tree);
// console.log(result.trim()); // Output: 1 2 3 4 5 6 7
