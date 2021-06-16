const button = document.querySelector('#button');
/*when I want to send information to to the api I have to send it in JSON Format
=============JSON.stringify(variable)===============*/
button.addEventListener('click',()=>{
  const newPost = {
    title: 'a new post',
    body: 'lorem ipsun dolor sit amet consectutor adipisicing ',
    userId: 1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',//method to do the petition
    body: JSON.stringify(newPost),//the data I'm sending
    headers:{ //the type of content I'm sending
      'Content-type':'application/json'
    }
  })
  .then(resp=>resp.json())// receive the answer and convert it to json
  .then(data=>console.log(data))// print the data

})