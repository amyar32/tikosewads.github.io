var sendBtn = document.getElementById(`send-button`);

function sendMsg() {
  var name = document.getElementById(`name-input`).value;
  var email = document.getElementById('email-input').value;

  if(name == "") {
    alert("Mohon isi form nama.");
  }

  if(email == "") {
    alert("Mohon isi form email.")
  }

  if(name && email != "") {
    alert("Terimakasih " + name + ", pesanmu TIDAK terkirim. Karena ini masih web statis.");
  }
}

sendBtn.addEventListener('click', sendMsg);
