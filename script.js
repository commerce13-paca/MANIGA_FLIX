if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Insertion des données dans la base de données
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    $result = mysqli_query($conn, $sql);
    
    if($result){
        echo "Inscription réussie!";
    } else {
        echo "Erreur lors de l'enregistrement!";
    }
}











// Définissez votre clé API
var apiKey = "UKEzAFqaFUNxjO2gb53sdCZK1UsqL6Gap4S0JHoksbZZHtLv5Hwv1";

// Utilisez votre clé API pour initialiser l'objet API
var api = new API(apiKey);














  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0X5DSFG346');




<!-- Intégration du CMS -->
<script src="https://example.com/cms.js"></script>






  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }







      addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'jeux';
});





      const character = document.querySelector('.character');
      character.addEventListener('click', () => {
        character.style.backgroundColor = '#f00';
      });










//Fonctionnalité 1:
function showMessage() {
  alert("Bienvenue Anao Gasy🫵🏻🇲🇬!");
}

//Fonctionnalité 2:
function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

//Fonctionnalité 3:
function showImage() {
  var img = document.createElement("img");
  img.src = "img/20230129105405.png";
  document.body.appendChild(img);
}

//Fonctionnalité 4:
function showText() {
  var text = document.createElement("p");
  text.innerHTML = "Ceci est un texte supplémentaire.";
  document.body.appendChild(text);
}

//Fonctionnalité 5:
function showLink() {
  var link = document.createElement("a");
  link.href = "https://www.example.com";
  link.innerHTML = "Cliquez ici pour visiter un site externe.";
  document.body.appendChild(link);
}

//Appeler les fonctionnalités
showMessage();
changeBackground();
showImage();
showText();
showLink();
