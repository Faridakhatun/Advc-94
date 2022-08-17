var firebaseConfig = {
      apiKey: "AIzaSyC8zIMGSPiwbVWyAgMGXtK89FZ9tIgmax4",
      authDomain: "kwitter-dcdfb.firebaseapp.com",
      databaseURL: "https://kwitter-dcdfb-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcdfb",
      storageBucket: "kwitter-dcdfb.appspot.com",
      messagingSenderId: "36711200805",
      appId: "1:36711200805:web:a81992f58ae307c79427cc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
