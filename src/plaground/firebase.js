// database.ref('expenses').push({
  //   createdAt:8987987,
  //   description:'dssdsd',
  //   note:'doe1',
  //   amount:222
  // }).then(()=>{
  //   console.log("works");
  // }).catch((e)=>{
  //   console.log("error",e);
  // })


  database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[]
    snapshot.forEach((item)=>{
      expenses.push({
        id:item.key,
        ...item.val()
      });
    });
    console.log(expenses);
  },(e)=>{
    console.log("error",e);
  });
  // database.ref('expenses').on("value",(snapshot)=>{
  //   console.log("hey there!!",snapshot.val());
  // })