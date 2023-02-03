/**
 * You are given the root node of a binary search tree (BST) and a value to insert
 * into the tree. Return the root node of the BST after the insertion. It is guaranteed
 * that the new value does not exist in the original BST.
 * 
 * Notice that there may exist multiple valid ways for the insertion, as long as the
 * tree remains a BST after insertion. You can return any of them.
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

    // base case when root is null
    if (root == null) {
        return new TreeNode(val);
    }

    let currentNode = root;
    while (true) {
        if (currentNode.val > val) {
            if (currentNode.left != null) {
                currentNode = currentNode.left;
            } else {
                currentNode.left = new TreeNode(val);
                break;
            }
        } else {
            if (currentNode.right != null) {
                currentNode = currentNode.right;
            } else {
                currentNode.right = new TreeNode(val);
                break;
            }
        }
    }

    return root;
};

