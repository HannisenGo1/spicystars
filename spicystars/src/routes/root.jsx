import framsidabild from "../data/framsidabild.png";
const Root = () => (
  <>
    <header>
      <h1>Spicy Food</h1>
    </header>
    <main>
      <p className="adress">Spice gatan 3 444 44 SpicyLand</p>
      <div className="startpage-flexcontainer">
        <img className="welcomeImg" src={framsidabild} alt="framsida bild" />
        <div className="info-resturant">
          <p>
            vår restaurang tar dig med på en smakresa fylld av hetta och kryddor
            från hela världen. Med vårt fokus på stark mat erbjuder vi en
            spännande meny som lockar de modiga smakäventyrarna.
          </p>
        </div>
        <p className="phone">Tele: 0202-020202 </p>
        <button className="meny-btn">Meny</button>
      </div>
    </main>
    <footer>
      <p>Mejl: Spicy.Stars@gmail.se</p>
    </footer>
  </>
);

export default Root;
