const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ]
    const cate=products.filter(x=>x.category=="Electronics")
    const sume=cate.reduce((a,b)=>a+b.price,0)
     const avge=sume/cate.length
       console.log(sume)
       if(sume>50)
        console.log("Electronics: "+avge)
       const catc=products.filter(x=>x.category=="Electronics")
       const sumc=catc.reduce((a,b)=>a+b.price,0)
       const avgc=sumc/catc.length
          console.log(sumc)
          if(sume>50)
            console.log("Clothes: "+avgc)

        


