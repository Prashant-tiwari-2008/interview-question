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
  
  const logTree = (node) => {
    console.log(node.val);
    if(node.leftNode) logTree(node.leftNode)
    if(node.rightNode) logTree(node.rightNode)
  }
  
  logTree(root)
  
  /* function printvalue(rootNode) {
    for(ele in rootNode) {
      if(typeof rootNode[ele] === 'object'){
      printvalue(rootNode[ele])
    }else{
      console.log(rootNode[ele])
    }
    }
  }
  printvalue(root) */