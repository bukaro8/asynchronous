
// const getName = async()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('Pepo')
//     },1500) 
//   })
// }

// // getName().then((name=>console.log(name)))
// const sayHello=async()=>{
//   const hello= await getName()
//   return `hello ${hello}`
// }
// sayHello().then(res=>console.log(res))

const users=[
  {
    id:1,
    name:'victor',
  },
  {
    id:2,
    name:'pepe',
  },
  {
    id:3,
    name:'Nepeno',
  }
]
const emails=[
  {
    id:1,
    email:'bukaro8@SrList.com'
  },
  {
    id:2,
    email: 'perroloco@gmail.com'
  }
]
const getUser= async (id)=>{ //when we use async this will return a promise
  const user =    users.find((user)=>user.id==id)
  // return promise=  new Promise((resolve, reject)=>{we dont need to return promises
    if (!user) throw new Error(`the id ${id} doesn't exist`)// we have to replace reject for throw new Error('action')
    else return (user) //we replace the resolve with return
  // })
  
}
const getEmail= async (user)=>{
  const email= emails.find((email)=>email.id==user.id);
  // return promise = new Promise((resolve, reject)=>{
    if (!email){throw new Error(`user ${user.name} doesn't have email`)}
  else return( {
    id:email.id,
    name:user.name,
    email:email.email,
  // })
  })
  
}
// we have to create a async funtion 
const  getInfo = async (id)=>{
  try{
    const user=  await getUser(id)// the function have to wait for the results to continue
    const resp=  await getEmail(user)
    return `${user.name} email is ${resp.email}`
  }catch(error){
    console.log(error)
  }
  
}
getInfo(4).then((resp)=>console.log(resp))

// getUser(4)
//       .then(user=>  getEmail(user))
//         .then(res=> console.log(res))
//       .catch(err=>console.log(err))
 