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
  
  //Get top 3 student
const getTopthree = (secA,secB) =>{
    let total = [...secA,...secB];
    const sortedStudent = total.sort((a,b) => a.marks - b.marks);
    return sortedStudent.slice(-3)

}

console.log(getTopthree(sectionA,sectionB))