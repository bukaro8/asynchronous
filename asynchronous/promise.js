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
    name:'nepeno',
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
const getUser= (id)=>{
  const user =    users.find((user)=>user.id==id)
  return promise=  new Promise((resolve, reject)=>{
    if (!user) reject(`the id ${id} doesn't exist`)
    else resolve(user)
  })
  
}
const getEmail=(user)=>{
  const email= emails.find((email)=>email.id==user.id);
  return promise = new Promise((resolve, reject)=>{
    if (!email){reject(`user ${user.name} doesn't have email`)}
  else resolve( {
    id:email.id,
    name:user.name,
    email:email.email,
  })
  })
  
}
getUser(4)
      .then(user=> {
        return getEmail(user)})
        .then(res=> console.log(res))
      .catch(err=>console.log(err))