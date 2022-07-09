// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyBwcohzD6Cfm6ZPDzGGxO_B6hdLEZzY-SI",
    authDomain: "lcwa-c2eab.firebaseapp.com",
    projectId: "lcwa-c2eab",
    storageBucket: "lcwa-c2eab.appspot.com",
    messagingSenderId: "726404900353",
    appId: "1:726404900353:web:77c36b39a7263fdaa70200"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
        purpose : "adding user"
    };
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    




