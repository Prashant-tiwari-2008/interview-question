const maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([, a], [, b]) => a - b)
);

console.log(sortable);


// BASED ON KEY
const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
};

console.log(JSON.stringify(unordered));
// → '{"b":"foo","c":"bar","a":"baz"}'

const ordered = Object.keys(unordered).sort().reduce(
    (obj, key) => {
        obj[key] = unordered[key];
        return obj;
    },
    {}
);

console.log(JSON.stringify(ordered));
  // → '{"a":"baz","b":"foo","c":"bar"}