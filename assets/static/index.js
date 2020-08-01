console.log("hello")

function getReminders(e) {
  //select ul tag
  const ul = document.getElementById('reminders')
  ul.innerHTML = '';
  //make a call to the server for reminders
  fetch('/reminder')
    .then( res => res.json())
    .then( reminders => {
      // console.log('data', data)
      reminders.forEach( rem => {
        const reminder = createReminder(rem)
        ul.append(reminder);
      })
    })
    .catch( err => console.log('err', err))

  //loop through the reminders

  //
}

function createReminder(reminder) {
 //create an li tag
 const li = document.createElement('li');
 //set innerHTML to reminder
 li.id = reminder._id
 li.innerHTML= reminder.text;
 const button = document.createElement('button')
 button.type = 'submit';
 button.innerHTML = 'delete';
 button.addEventListener('submit', (e) => {
   e.preventDefault();
   
 })
 li.append(button);
 //append li tag to ul
 return li
}

getReminders();

//refresh getreminders
document.getElementById('reset').addEventListener('click', getReminders)

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formText = document.getElementById('text')
  // console.log(formText.value)
  const body = {
    text: formText.value
  }
  fetch('/reminder', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then( res => res.json)
  .then( reminder => 
    {
      formText.value = ''
    })
  .catch( err => console.log(err))
})