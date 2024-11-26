const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ]
  // const highAchievers = students
  // .map(student => ({
  //   name: student.name,
  //   average: student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length
  // }))
  // .filter(student => student.average > 90)
  // console.log(highAchievers)
 const res=students.filter((student)=>{
  const avg= student.scores.reduce((sum,el)=>sum+el,0)/student.scores.length
   return avg>90
 })
  console.log(res)
  