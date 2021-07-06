const form = document.querySelector('#form')
const keys = document.querySelector('#keys')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  // sessionStorage.setItem(key,value)
  sessionStorage.setItem(form.key.value, form.value.value)
  keys.innerHTML+=`<option>${form.key.value}</option>`
  form.reset()
})
keys.addEventListener('change',()=>{
  
  document.getElementById('infoValue').textContent=
    sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})
// sessionStorage.clear() clear what you save