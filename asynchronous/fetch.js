const button= document.querySelector('#button');

button.addEventListener('click',()=>{
  fetch('https://jsonplaceholder.typicode.com/users')//get the data from the api
  //if the response of ok is true  will return the resolve
  //if the response of ok es false will return the reject
    .then(resp=>resp.ok==true?Promise.resolve(resp):Promise.reject(resp))
  //now having the data you have to convert it to json to be use by js
    .then(resp=>resp.json())
    .then(resp=>{
      const fragment= document.createDocumentFragment()
      for (data of resp){
        const itemList= document.createElement('li');
        itemList.innerHTML=`${data.id} - ${data.name}`;
        fragment.appendChild(itemList)
      }
      list.appendChild(fragment)
    })
  
})


// const list=   document.querySelector('#list')
// button.addEventListener('click',()=>{

//   let xhr
//   if (window.XMLHttpRequest){//create an if to check if the browser is old
//     xhr= new XMLHttpRequest()
//   }else xhr= new ActiveXObject('Microsoft.XMLHTTP')

//   xhr.open('GET','https://jsonplaceholder.typicode.com/users')//open the connection
//   // =================here you have to tell what to do with the data
//   xhr.addEventListener('load',(data)=>{//load will be trigger when all the data arrive
//     const dataJSON = JSON.parse(data.target.response)// will convert all the data to JSON
//     const fragment= document.createDocumentFragment()
//     for (const userInfo of dataJSON){
//       const itemList= document.createElement('li');
//       itemList.innerHTML= `  ${userInfo.id} - ${userInfo.name}  `
//       fragment.appendChild(itemList)
//     }  
//     list.appendChild(fragment)
//   })

//   xhr.send()//sent the 

// })