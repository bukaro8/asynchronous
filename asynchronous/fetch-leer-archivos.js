const buttonImg= document.querySelector('#buttonImg');
const buttonPDF= document.querySelector('#buttonPDF');



buttonImg.addEventListener('click',()=>{
fetch('clase39/dog.jpg')
  .then(resp=>resp.blob())//blob means binary long Object
  .then(img=>{
    document.querySelector('#img').src=URL.createObjectURL(img)//creates a valid url
  })
})

buttonPDF.addEventListener('click',()=>{
  fetch('clase39/demo.pdf')
    .then(resp=>resp.blob())
    .then(pdf=>{
      document.querySelector('#pdf').href= URL.createObjectURL(pdf)
    })
})
