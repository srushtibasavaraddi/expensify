export default (expenses)=>{
    let sum=0;
    expenses.map((item)=>{
        sum=sum+item.amount
    })
   return sum
}