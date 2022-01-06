import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      /*<header>
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
            <h2>Paugels Website</h2>
       </header>*/
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="favicon" href="favicon.ico">
    <link rel="stylesheet" href="css/Master.css">
    <title>Home</title>
</head>
<div class="container">
  <body>
      <header className="App-header">
        <img id="Logo" src="images/Logo.png" alt="Clone music shop logo">
              <nav aria-label="Main Menu">
                  <ul aria-label="Main Menu" role="menubar">
                      <li role="none"><a href=index.html>Home</a></li>
                      <li role="none"><a href=Products.html>Products</a></li>
                      <li role="none"><a href=Members.html>Members</a></li>
                      <li role="none"><a href=AboutUs.html>About Us</a></li>
                  </ul>
              </nav>
      </header>

<main>
    <h1 id="mainContent" id="storeheader">Welcome to the Store</h1>
    <section>
        <img id="cloneVinyl"src="images/CloneVinyl.png" alt="clone trooper vinyl">
        <p class="width">This is our music store we have everything from cds, vinyl, mp3s and more! There is so much to choose from. We also have everything priced according to value or use. I sincerely hope you enjoy our store and leave us a review.</p>
        <img src="images/tripple.png" alt="">
    </section>

    <section>
        <p class="width">You can find out more about us on our About us page. There we go indepth about who we are, our mission and what makes us groove.Like M*A*S*H is my personal groove it's my favorite TV show!</p>
        <img id="mash" src="images/MASH.png" alt="mash actors wayne rogers and alan alda">
    </section>
    </main>
</div>
<footer>
    <h3>Find us here<hr></h3>
    <p>2505 Atwood Ave. Madison, WI 53558</p>
    <p>(608)-518-9902</p>
    <p>Clonemusicshop@gmail.com</p>

    <h3>Store Hours<hr></h3>
    <p>Mon-Fri: 9am-8pm <br><br> Sat-Sun: 10am-7pm</p>

    <h3>Add us here</h3>
    <a href="https://www.instagram.com/"><img class="InstaHandle" src="images/instagram.svg" alt="Instagram Logo" target="blank"></a>
        <a href="https://www.facebook.com/"><img class="InstaHandle" src="images/facebook.svg" alt="Facebook Logo" target="blank"></a>
        <a href="https://www.twitter.com/"><img class="InstaHandle" src="images/twitter.svg" alt="Twitter Logo" target="blank"></a>
        <a href="https://www.youtube.com/"><img class="InstaHandle" src="images/youtube.svg" alt="Youtube Logo" target="blank"></a>
</footer>

  </body>
  <a href="#mainContent" class="skipLink"></a>
    </div>
  );
}

export default App;
