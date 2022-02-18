import './App.css';
function App() { return (
<div className="App">
<div className="container">
  <body>
      <header>
        <img id="mainLogo" src="./images/Logo.png" alt="Music-shop-logo"/>
              <nav aria-label="Main Menu">
                  <ul role="menubar">

                  </ul>
              </nav>
      </header>

<main>
    <h1 id="mainContent" id="storeheader">Welcome to the Store</h1>
    <section>
        <img class="mainContentPics" src="./images/CloneVinyl.png" alt="clone trooper vinyl"/>
        <p className="width">This is our music store we have everything from cds, vinyl, mp3s and more!
        There is so much to choose from. We also have everything priced according to value or use.
        I sincerely hope you enjoy our store and leave us a review.</p>
        <img class="mainContentPics" id="bwGuitar" src="./images/bw-guitar.png" alt="Black and White guitar"/>
        <img class="mainContentPics" id="eltonJohn" src="./images/elton-john.png" alt="Elton John"/>
        <img class="mainContentPics" id="mashGroupPic" src="./images/Mash-group-picture.png" alt="Mash Group Picture"/>
    </section>

    <section>
        <p className="width">You can find out more about us on our About us page.
        There we go in-depth about who we are, our mission and what makes us groove.
        Like M*A*S*H is my personal groove it's my favorite TV show!</p>
        <img id="mash" src="./images/MASH.png" alt="mash actors wayne rogers and alan alda"/>
    </section>
    </main>
  </body>
</div>

<footer>
    <h2>Find me here</h2>
    <p>Madison College 1701 Wright St, Madison, WI 53704</p>

    <p><a href="tel:+16085144097">(608)-514-4097</a></p>
    <p><a href="mailto:shpaugel@madisoncollege.edu">shpaugel@madisoncollege.edu</a></p>

    <h2>Store Hours</h2>
    <p>Mon-Fri: 9am-8pm</p>
    <p>Sat-Sun: 10am-7pm</p>

    <h2>Add Me here</h2>
        <a href="https://www.instagram.com/"><img className="socialMedia" src="./instagram.svg" alt="Instagram Logo" target="blank"/></a>
        <a href="https://www.facebook.com/"><img className="socialMedia" src="./facebook.svg" alt="Facebook Logo" target="blank"/></a>
        <a href="https://www.twitter.com/"><img className="socialMedia" src="./twitter.svg" alt="Twitter Logo" target="blank"/></a>
        <a href="https://www.youtube.com/"><img className="socialMedia" src="./youtube.svg" alt="Youtube Logo" target="blank"/></a>
        <i>Sam Paugel 2022©</i>
</footer>
    <a href="#mainContent" className="skipLink"></a>
</div>
);}
export default App;
