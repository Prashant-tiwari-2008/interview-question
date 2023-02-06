const arr = [
    1,
    2,
    99,
    56,
    56,
    '56',
    '44',
    null,
    undefined,
    NaN,
    9,
    43,
    5,
    '55',
    '55',
    false,
    true,
    'abc',
  ];
  
  let m = arr.map((ele) => parseInt(ele)).filter((ele) => ele);
  const set = [...new Set(m)];
  let total = set.reduce((acc, cv) => {
    acc += cv;
    return acc;
  }, 0);
  console.log(total);