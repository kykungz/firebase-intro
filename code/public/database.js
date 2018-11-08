function setData() {
  firebase.database().ref('profile').set({
    name: "Jacky",
    age: 20,
    faculty: "Engineering",
    devices: {
      iphone: true,
      macbook: true,
      huawei: true,
    },
  })
}

function updateData() {
  firebase.database().ref('profile').update({
    name: 'Johnson',
  })
}

function pushData() {
  firebase.database().ref('messages').push("ไอบ้า")
}

function removeData() {
  firebase.database().ref('profile').remove()
}

firebase.database().ref().on('value', function(snapshot) {
  const data = snapshot.val()
  document.getElementById('realtime-data').innerText = JSON.stringify(data, null, 2)
})
