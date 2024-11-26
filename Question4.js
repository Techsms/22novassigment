const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    }, 
  ];
   const b=input.map((a)=>a.age)
     console.log(b)
 const youngestAge = Math.min(...b);
const oldestAge = Math.max(...b);
const min=oldestAge-youngestAge

   console.log(youngestAge,oldestAge,min)
//    console.log(input[2].age)
// 7 methods 