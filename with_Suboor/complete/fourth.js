const heirarchy = {
    john: ['jane', 'mike', 'ric'],
    mike: ['richard', 'okey', 'zach'],
    richard: ['abi', 'dean'],
    okey: ['suboor', 'rico'],
    rico: ['div'],
    jane: ['prashant', 'danish'],
    suboor: [],
  };
  
  function heirarchySystem(name) {
    heirarchy[name].forEach((cv) => {
      console.log(cv);
      if (cv in heirarchy) {
        heirarchySystem(cv);
      }
    });
  }
  
  heirarchySystem('okey');