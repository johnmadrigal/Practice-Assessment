
console.log("hello")

function getReminders() {
  //select ul tag
  const ul = document.getElementById('reminders')
  //make a call to the server for reminders
  fetch('/reminder')
    .then( res => res.json())
    .then( reminders => {
      // console.log('data', data)
      reminders.forEach( rem => {
        //create an li tag
        const li = document.createElement('li');
        //set innerHTML to reminder
        li.id = rem._id
        li.innerHTML= rem.text;
        const button = document.createElement('button')
        button.type = 'submit';
        button.innerHTML = 'delete';
        li.append(button);
        //append li tag to ul
        ul.append(li);
      })
    })
    .catch( err => console.log('err', err))

  //loop through the reminders

  //
}

getReminders();