const input = [
    { "name": "Elroy", "color": "indigo" },
    { "name": "Kaitlin", "color": "orchid" },
    { "name": "Malachi", "color": "indigo" },
    { "name": "Alayna", "color": "orchid" },
    { "name": "Federico", "color": "silver" },
    { "name": "Jannie", "color": "orchid" },
    { "name": "Kavon", "color": "silver" },
    { "name": "Braeden", "color": "silver" },
    { "name": "Jarrett", "color": "indigo" },
    { "name": "Bell", "color": "orchid" },
          { "name": "k'Nox", "color": "orange" }
];

bucket(array, key) {
Let hash = {};
for(ele of array){
if(hash[ele[key]){
    hash[ele[key]].push(ele)
}else{
Hash[ele[key]] = [ele]
}	
}
Return hash;
}

useEffect(() =>{
Normal task,
Return () =>{

}
},[a])















bucket(input, “color”)

Result =>

{
indigo: [
    { name: 'Elroy', color: 'indigo' }, 
    { name: 'Malachi', color: 'indigo' },
    { name: 'Jarrett', color: 'indigo' }
],
orchid: [
    { name: 'Kaitlin', color: 'orchid' },
    { name: 'Alayna', color: 'orchid' },
    { name: 'Jannie', color: 'orchid' },
    { name: 'Bell', color: 'orchid' }     	
],
silver: [
    { name: 'Federico', color: 'silver' },
    { name: 'Kavon', color: 'silver' },
    { name: 'Braeden', color: 'silver' }
],
orange: [ { name: "k'Nox", color: 'orange' } ]
}

