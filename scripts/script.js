function addInput(element, event) {
  event.preventDefault();
  var val = document.getElementById('input').value;
  axios.post('/api/input', {
    input: val
  })
  .catch(err => console.error(err));
}

function prevInput() {
  axios.get('/api/input')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
}