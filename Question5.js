const input = "Every developer likes to mix kubernetes and javascript";
// output: - "E3y d7r l3s to mix k8s and j8t";
const chars = input.split(" ")
const ans=chars.map(chars=>
    {if(chars.length<4){
    return chars
}
else{
    return chars[0]+(chars.length-2)+chars[chars.length-1]
}}).reduce((sum,num)=>sum+num+" "," ")
  console.log(ans)

