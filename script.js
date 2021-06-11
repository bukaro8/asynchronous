const button= document.querySelector('#button');
const list=   document.querySelector('#list')
button.addEventListener('click',()=>{

  let xhr
  if (window.XMLHttpRequest){//create an if to check if the browser is old
    xhr= new XMLHttpRequest()
  }else xhr= new ActiveXObject('Microsoft.XMLHTTP')

  xhr.open('GET','https://jsonplaceholder.typicode.com/users')//open the connection
  // =================here you have to tell what to do with the data
  xhr.addEventListener('load',(data)=>{//load will be trigger when all the data arrive
    const dataJSON = JSON.parse(data.target.response)// will convert all the data to JSON
    const fragment= document.createDocumentFragment()
    for (const userInfo of dataJSON){
      const itemList= document.createElement('li');
      itemList.innerHTML= `  ${userInfo.id} - ${userInfo.name}  `
      fragment.appendChild(itemList)
    }  
    list.appendChild(fragment)
  })

  xhr.send()//sent the 

})