
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


