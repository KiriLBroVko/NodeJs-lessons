// - task for filter
// Create a function that returns a list of objects with names "Liza" and "Ira";

var arrayItems = [
    {
        id: 1,
        name: "Erik"
    },
    {
        id: 2,
        name: "Alena"
    },
    {
        id: 3,
        name: "Liza"
    },
    {
        id: 4,
        name: "Kirill"
    },
    {
        id: 5,
        name: "Ira"
    },
    {
        id: 6,
        name: "Katya"
    }
];

function findLizaAndIra(arr) {
    var newArray = arr.filter(item => (item.name === "Liza") || (item.name === "Ira"));
    return newArray;
}

var result = findLizaAndIra(arrayItems);
console.log(result);// [{ id: 3, name: "Liza" }, { id: 5, name: "Ira" }]

