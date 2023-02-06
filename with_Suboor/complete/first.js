const sectionA = [
    {
      name: 'danish',
      marks: 8,
    },
    {
      name: 'mahima',
      marks: 9,
    },
    {
      name: 'saurav',
      marks: 8,
    },
    {
      name: 'puneet',
      marks: 10,
    },
    {
      name: 'suboor',
      marks: 7,
    },
  ];
  
  const sectionB = [
    {
      name: 'prashant',
      marks: 12,
    },
    {
      name: 'zahid',
      marks: 4,
    },
    {
      name: 'shivam',
      marks: 17,
    },
    {
      name: 'sanjeet',
      marks: 9,
    },
    {
      name: 'lala',
      marks: 7,
    },
  ];
  
  // function topScorer(...section) {
  
  // }
  
  function topScorer(sectionA, sectionB) {
    sectionA = sectionA.sort((a, b) => a.marks - b.marks);
    sectionB = sectionB.sort((a, b) => a.marks - b.marks);
    let totalStudent = [...sectionA, ...sectionB].sort((a,b) =>a.marks - b.marks)
    return totalStudent.slice(totalStudent.length-3)
  }
  
  console.log(topScorer(sectionA, sectionB));
  