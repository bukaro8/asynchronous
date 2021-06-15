// const getUser = (id,cb)=>{
//   const user={
//     name:'victor',
//     id:id
//   }
//   if (id==2) cb('no user')
//   else cb(null,user)
// }
// getUser(1, (err,user)=>{
//   err?console.log(err):console.log(`user name is ${user.name}`)
// })

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
    email:'bukaro8@SpeechGrammarList.com'
  },
  {
    id:2,
    email: 'perroloco@gmail.com'
  }
]

const getUser= (id,cb)=>{
  const user= users.find((user)=>user.id==id);
  if (!user) return console.log(`the id ${id} doesn't exist`)
  else cb(null,user)
}
// =================================
const getEmail=(user,cb)=>{
  const email= emails.find((email)=>email.id==user.id);
  if (!email){return cb(`user ${user.name} doesn't have email`)}
  else cb(null, {
    id:email.id,
    name:user.name,
    email:email.email,
  })
}
// ===================================
getUser(1,(err,user)=>{
  if (err){console.log(err)}
    getEmail(user,(err,res)=>{
      if (err) return console.log(err)
        else console.log(res)
})

})

