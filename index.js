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

function tree(array, start, end) {
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);

  let head = new node(array[mid]);

  head.left = tree(array, start, mid - 1);
  head.right = tree(array, mid + 1, end);

  return head;
}

let seif = [0, 2, 1, 0, 5, 0, 9, 5, 0, 2, 1, 0, 3];

let arrayTree = sort(duplicate(seif));
console.log(arrayTree);
let n = arrayTree.length;
console.log(n);
let root = tree(arrayTree, 0, n - 1);

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

console.log(print(root));