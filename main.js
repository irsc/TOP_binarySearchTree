const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let inputArray;
inputArray = [3,52,12,6,51,2,12,87,37,67,10,99,45,76, 15, 44];
//inputArray = Array.apply(null, Array(16)).map(()=> Math.floor(Math.random()*100));
console.log(inputArray);
let tree = new Tree(inputArray);
console.log(tree);

prettyPrint(tree.root);
console.log(tree.find(36));

tree.insert(34);
tree.insert(21);
console.log("Insert");
prettyPrint(tree.root);
tree.deleteItem(21);
console.log("Delete");
prettyPrint(tree.root);

tree.deleteItem(99);
console.log("Delete");
prettyPrint(tree.root);

tree.deleteItem(10);
console.log("Delete");
prettyPrint(tree.root);

tree.deleteItem(44);
console.log("Delete");
prettyPrint(tree.root);
