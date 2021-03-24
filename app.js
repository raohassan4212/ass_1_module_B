// extracting of keys and values from an object.

let studentDetail = {
    rollNo: 01,
    name: "Hassan",
    course: "Web & Mobile Hybrid App Development",
    batch: 1,
    gender: "male"
};

console.log(Object.keys(studentDetail));
console.log(Object.values(studentDetail));


//  Destructuring of nested Array

let arr = ["value_1","value_2",["value_3_1", "value_3_2"],"value_4"];
let [v1,v2,[a,b],v4] = arr;
console.log(v1,v2,a,b,v4);