 const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ]

  const sectori = employees.filter(x=>x.department=="IT")
  const sectorh = employees.filter(x=>x.department=="HR")
    // console.log(sectori)
    // console.log(sectorh)
const avgi=sectori.reduce((a,b)=>a+b.salary,0)/sectori.length
const avgh=sectorh.reduce((a,b)=>a+b.salary,0)/sectorh.length
 if(avgi>65000)
  console.log({department: "IT", salary : avgi.toFixed(0)})
 if(avgh>65000)
  console.log({department: "HR", salary : avgh.toFixed(0)})
