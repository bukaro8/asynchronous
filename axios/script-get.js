const button= document.querySelector('#button');
const list=   document.querySelector('#list');

addEventListener('click',()=>{
  //first call axios
  axios({
    method: 'GET',// method to use
    url:    'https://jsonplaceholder.typicode.com/users'
  }).then((res)=>{
        const fragment= document.createDocumentFragment();
    for (const person of res.data){
      const itemList= document.createElement('li');
      itemList.innerHTML= `${person.id} - ${person.name}`;
      fragment.appendChild(itemList)
    }
    list.appendChild(fragment)
    
  }).catch((err)=>console.log(err))
})