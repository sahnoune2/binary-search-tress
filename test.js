function levelOrder(node) {
  if (node === null) {
    return null;
  }

  let result = [];
  let queue = [node];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    result.push(currentNode.value);

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return result;
}
