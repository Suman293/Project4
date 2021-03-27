// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBor4tyZurfJDHbFlweAIQtg2dTg2ifXvs",
    authDomain: "kwitter-b6b2d.firebaseapp.com",
    databaseURL: "https://kwitter-b6b2d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b6b2d",
    storageBucket: "kwitter-b6b2d.appspot.com",
    messagingSenderId: "270460200133",
    appId: "1:270460200133:web:1373b09ee1fbf3f064bcac",
    measurementId: "G-CS4N8K5FV4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  