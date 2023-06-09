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
function minValue(node) {
  let minimum = node;
  while (node.left !== null) {
    minimum = node.left;
    node = node.left;
  }
  return minimum;
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
    deleteNode: function (node, key) {
      if (node === null) {
        return null;
      }

      if (key < node.value) {
        node.left = deleteNode(node.lef, key);
      } else if (key > node.value) {
        node.right = deleteNode(node.right, key);
      } else if (key === node.value) {
        //no children + one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
        //two children case
        else if (node.right !== null && node.left !== null) {
          let min = minValue(node.right);
          node.value = min.value;
          node.right = deleteNode(node.right, min.value);
        }
      }
      return node;
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
