const button= document.querySelector('#button');

addEventListener('click',()=>{
  axios({
    method:'POST',//method to use
    url:'https://jsonplaceholder.typicode.com/posts',
    //data you are going to send
    data:{
      title:'a new post',
      body:'este es el cuerpo de lo que voy a enviar',
      userId: 1
    }

  }).then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
})