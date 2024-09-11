
class Tree{
    constructor(array){
        this.root = this.buildTree(mergeSort(removeDuplicates(array)));
    }

    buildTree(array){
        if(array.length <= 0) return null;
        console.log(array);

        let mid = Math.floor(array.length/2);
        let node = new Node(array[mid]);
        node.left = this.buildTree(array.slice(0, mid));
        node.right = this.buildTree(array.slice(mid+1));

        return node;
    }

    insert(value){
        let node = this.root;

        if(this.find(value)){
            return null
        }else{
            while(node.left != null && node.right != null){
                if(value < node.data){
                    node = node.left;
                }else{
                    node = node.right;
                }
            }
            
            if(value < node.data){
                node.left = new Node(value);
            }else{
                node.right = new Node(value);
            }
        }
    }

    deleteItem(value){

        let node = this.find(value);
        let nodeParent;
        if(node == null){
            return null;
        }else{
            nodeParent = this.findParent(value);
        }

        if(node.left == null && node.right == null){
            if(nodeParent.left == node){
                nodeParent.left = null;
            }else{
                nodeParent.right = null;
            }
            console.log("Leaf node deleted");
        } else if(node.left == null && node.right != null){
            node.data = node.right.data;
            node.left = null;
            node.right = node.right.right;
        } else if(node.left != null && node.right == null){
            node.data = node.left.data;
            node.left = node.left.left;
            node.right = null;
        }else{
            let nextBiggestNode = node.right;

            while(nextBiggestNode.left != null){
                nextBiggestNode = nextBiggestNode.left;
            }
            let tempNodeData = nextBiggestNode.data;
            console.log("next biggest found " +nextBiggestNode.data +" , now delete exchanged node");
            this.deleteItem(nextBiggestNode.data);
            node.data = tempNodeData;
        }

    }

    find(value){
        let node = this.root;
        while(node != null){
            if(node.data == value){
                return node;
            }
            if(value < node.data && node.left != null){
                node = node.left;
            }else if(value > node.data && node.right != null){
                node = node.right;
            }else{
                node = null;
            }
        }
        return node;
    }

    findParent(value){
        let node = this.root;
        if(value == node.data){
            return node;
        }
        while(node != null){
            if(node.left.data == value || node.right.data == value){
                console.log("Parent node found " + node.data);
                return node;
            }
            if(value < node.data && node.left != null){
                node = node.left;
            }else if(value > node.data && node.right != null){
                node = node.right;
            }
        }
        return node;
    }

    levelOrder(callback){

        if(callback == undefined){
            throw new Error('A callback function is required');
        }
        let levelArray = []; //array stacking nodes
        let node = this.root;
        levelArray.push(node);

        while(levelArray.length > 0){
            node = levelArray.shift();
            if(node.left != null) levelArray.push(node.left);
            if(node.right != null) levelArray.push(node.right);
            callback(node); 
        }
    }

    inOrder(callback){
        if(callback == undefined){
            throw new Error('A callback function is required');
        }

        let inOrderNode = function(node){
            if(node == null) return;
            inOrderNode(node.left);
            callback(node);
            inOrderNode(node.right);
        }
        inOrderNode(this.root);
    }

    preOrder(callback){
        if(callback == undefined){
            throw new Error('A callback function is required');
        }

        let levelArray = []; //array stacking nodes
        let node = this.root;
        levelArray.push(node);

        while(levelArray.length > 0){
            node = levelArray.shift();
            if(node.right != null) levelArray.unshift(node.right);
            if(node.left != null) levelArray.unshift(node.left);
            callback(node); 
        }
    }

    postOrder(callback){
        if(callback == undefined){
            throw new Error('A callback function is required');
        }

        let postOrderNode = function(node){
            if(node == null) return;
            postOrderNode(node.left);
            postOrderNode(node.right);
            callback(node);
        }
        postOrderNode(this.root);
    }
    // Returns the given node’s height. Height is defined as the number of edges 
    //in the longest path from a given node to a leaf node.
    height(node){

    }

    // Returns the given node’s depth. Depth is defined as the number of edges
    // in the path from a given node to the tree’s root node.
    depth(node){

    }

    // Function that checks if the tree is balanced. 
    //A balanced tree is one where the difference between heights of the left subtree and 
    //the right subtree of every node is not more than 1.
    isBalanced(){

    }

    rebalance(){

    }
}

function mergeSort(array){
    let sortedArray = [];
    if(array.length == 1) return array;
    
    //Split array in two
    let half = array.length%2 == 0 ? array.length/2 : (array.length+1)/2 ;
    let arrayLeft = array.splice(0,half);
    let arrayRight = array;
    //Call the mergeSort again on each subarray
    let arrayLeftMerge = mergeSort(arrayLeft);
    let arrayRightMerge = mergeSort(arrayRight);

    //Loop over the subarrays to reorder them
    while (arrayLeftMerge.length>0 && arrayRightMerge.length>0) {
        if(arrayLeftMerge[0] <= arrayRightMerge[0]){
            sortedArray.push(arrayLeftMerge.shift());
        }else if(arrayLeftMerge[0] > arrayRightMerge[0]){
            sortedArray.push(arrayRightMerge.shift());
        }
    }
    //Lastly, add any bit that is already ordered than did not enter before
    if(arrayLeftMerge.length==0){
        sortedArray = sortedArray.concat(arrayRightMerge);
    }else if(arrayRightMerge.length==0){
        sortedArray = sortedArray.concat(arrayLeftMerge);
    } 

    return sortedArray;
}

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}


