import logo from './logo.svg';
import './App.css';
import'./index.html';
// import'./index.html';
// import'./index.html';
// import'./index.html';
function App() {
  return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
<div className="App">
/*Sam Paugel 2021*/
 <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type="favicon" href="favicon.ico"/>
    <link rel="stylesheet" href="css/Master.css"/>
    <title>Home</title>
</head>
<div className="container">
  <body>
      <header>
        <img id="Logo" src="images/Logo.png" alt="Clone music shop logo"/>
              <nav aria-label="Main Menu">
                  <ul aria-label="Main Menu" role="menubar">
                
                  </ul>
              </nav>
      </header>

<main>
    <h1 id="mainContent" id="storeheader">Welcome to the Store</h1>
    <section>
        <img id="cloneVinyl"src="images/CloneVinyl.png" alt="clone trooper vinyl"/>
        <p className="width">This is our music store we have everything from cds, vinyl, mp3s and more! There is so much to choose from. We also have everything priced according to value or use. I sincerely hope you enjoy our store and leave us a review.</p>
        <img src="images/tripple.png" alt=""/>
    </section>

    <section>
        <p className="width">You can find out more about us on our About us page. There we go indepth about who we are, our mission and what makes us groove.Like M*A*S*H is my personal groove it's my favorite TV show!</p>
        <img id="mash" src="images/MASH.png" alt="mash actors wayne rogers and alan alda"/>
    </section>
    </main>
  </body>
</div>

<footer>
    <h3>Find me here<hr/></h3>
    <p>6180 Perrot Place McFarland, WI 53558</p>
    <p>(608)-514-4097</p>
    <p>Clonemusicshop@gmail.com</p>

    <h3>Store Hours<hr/></h3>
    <p>Mon-Fri: 9am-8pm <br/><br/> Sat-Sun: 10am-7pm</p>

    <h3>Add us here</h3>
    <a href="https://www.instagram.com/"><img className="InstaHandle" src="images/instagram.svg" alt="Instagram Logo" target="blank"/></a>
        <a href="https://www.facebook.com/"><img className="InstaHandle" src="images/facebook.svg" alt="Facebook Logo" target="blank"/></a>
        <a href="https://www.twitter.com/"><img className="InstaHandle" src="images/twitter.svg" alt="Twitter Logo" target="blank"/></a>
        <a href="https://www.youtube.com/"><img className="InstaHandle" src="images/youtube.svg" alt="Youtube Logo" target="blank"/></a>
</footer>


  <a href="#mainContent" className="skipLink"></a>
</div>
  );
}

export default App;
