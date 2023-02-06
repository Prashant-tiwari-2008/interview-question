const root = {
    val: 1,
    leftNode: {
        val: 2,
        leftNode: {
            val: 4
        },
        rightNode: {
            val: 5
        }
    },
    rightNode: {
        val: 3,
        leftNode: {
            val: 6
        },
        rightNode: {
            val: 7
        }
    }
}

const printTree = (rootValue) => {
    console.log(rootValue.val)
    if(rootValue.leftNode) printTree(rootValue.leftNode)
    if(rootValue.rightNode) printTree(rootValue.rightNode)
}

printTree(root)