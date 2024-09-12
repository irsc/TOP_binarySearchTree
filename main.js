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

console.log("Level order:")
tree.levelOrder((node)=>{
    console.log(node.data);
});

console.log("Pre Order");
tree.preOrder((node)=>{
    console.log(node.data);
});

console.log("In Order");
tree.inOrder((node)=>{
    console.log(node.data);
});

console.log("Post Order");
tree.postOrder((node)=>{
    console.log(node.data);
});

console.log("Height");
console.log(tree.height(tree.find(12)));
console.log(tree.height(tree.find(15)));
console.log(tree.height(tree.find(87)));
console.log(tree.height(tree.find(37)));

console.log("Depth");
console.log(tree.depth(tree.find(12)));
console.log(tree.depth(tree.find(67)));
console.log(tree.depth(tree.find(87)));
//console.log(tree.depth(4));

prettyPrint(tree.root);
console.log("is it balanced?");
console.log(tree.isBalanced());

console.log("let's remove some nodes");
tree.deleteItem(15);
tree.deleteItem(37);
prettyPrint(tree.root);
console.log("is it balanced?");
console.log(tree.isBalanced());

console.log("Let's get back to previous tree and add more nodes");
tree.insert(15);
tree.insert(37);
tree.insert(120);
tree.insert(110);
tree.insert(132);
tree.insert(131);
tree.insert(133);
prettyPrint(tree.root);
console.log("is it balanced?");
console.log(tree.isBalanced());

console.log("let's rebalance it...");
tree.rebalance();
prettyPrint(tree.root);
console.log("is it balanced?");
console.log(tree.isBalanced());

console.log("let's print the elements:")
console.log("Level order:")
tree.levelOrder((node)=>{
    console.log(node.data);
});

console.log("Pre Order");
tree.preOrder((node)=>{
    console.log(node.data);
});

console.log("In Order");
tree.inOrder((node)=>{
    console.log(node.data);
});

console.log("Post Order");
tree.postOrder((node)=>{
    console.log(node.data);
});

