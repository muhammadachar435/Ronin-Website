const scriptURL = 'https://script.google.com/macros/s/AKfycbz9zCf_QJG3THak1ofeUlyN_yrlatv_HpQQet3T1JkuN1hCVrUwAFGaPw8VO09bn0LK/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})