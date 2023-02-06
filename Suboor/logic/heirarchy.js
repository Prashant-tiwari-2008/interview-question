const heirarchy = {
    john: ['jane', 'mike', 'ric'],
    mike: ['richard', 'okey', 'zach'],
    richard: ['abi', 'dean'],
    okey: ['suboor', 'rico','prashant'],
    rico: ['div'],
    jane: ['prashant', 'danish'],
    suboor: [],
};

// Get employee in a heirarcy system
const getJuniorList = (currentEmp) => {
    heirarchy[currentEmp].map((ele) =>{
        console.log(ele);
        if(ele in heirarchy){
            getJuniorList(ele)
        }
    })
}

getJuniorList('okey')