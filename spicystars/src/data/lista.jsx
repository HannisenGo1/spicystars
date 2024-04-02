function Menu() {
  const menuFood = [
    {
      name: 'Kyckling Vindaloo',
      ingredients: ['Kyckling', 'lök', 'vitlök', 'ingefära', 'vinäger'],
      spices: ['chili', 'ingefära', 'salt', 'peppar'],
      description: 'En het indisk rätt med kyckling serveras med ris',
      strength: '4/5',
      price: '109',
      image: 'https://www.gronagardar.se/website/var/tmp/image-thumbnails/0/1481/thumb__detailimage/Vindaloo_710px@2x.jpeg'
    },
    {
      name: 'Aloo Gobi',
      type: 'Vegetarisk',
      ingredients: ['Potatis', 'blomkål', 'lök', 'tomater', 'vitlök', ],
      spices: ['chili', 'ingefära', 'garam masala'],
      description: 'En indisk rätt med potatis och blomkål kokta i en kryddig sås',
      strength: '2/5',
      price: '99',
      image: 'https://res.cloudinary.com/coopsverige/image/upload/ar_1.0,f_auto,c_fill,w_300,g_center/v1576589656/387309.jpg'
    },
    {
      name: 'Lamm Vindaloo',
      ingredients: ['Lammkött', 'vinäger', 'lök', 'vitlök', 'ingefära'],
      spices: ['chili', 'kryddor'],
      description: 'En kryddig och smakrik lammgryta',
      strength: '5/5',
      price: '119',
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2023/10/Lamb-Vindaloo-1-1025x1536.jpg'
    },
    {
      name: 'Szechuan Stir-Fry',
      type: 'Vegetarisk',
      ingredients: ['broccoli', 'paprika', 'lök', 'Szechuan-sås', 'vitlök', 'ingefära'],
      spices: ['chili'],
      description: 'En kinesisk klassiker',
      strength: '4/5',
      price: '109',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F12%2F14%2Fszechuan-chicken-stir-fry-1711p46.jpg'
    },
    {
      name: 'Aloo Baingan',
      type: 'Vegansk',
      ingredients: ['Potatis', 'aubergine', 'lök', 'tomater', 'ingefära', 'vitlök'],
      spices: ['chili', 'garam masala'],
      description: 'En kryddig och smakrik lammgryta',
      strength: '3/5',
      price: '99',
      image: 'https://www.jcookingodyssey.com/wp-content/uploads/2023/04/aloo-baingan.jpg.webp'
    }
    ]

return (
	 <div>
      {menuFood.map((mat, index) => (
        <div key={index}>
          <h2>{mat.name}</h2>
		  <img src={mat.image} alt={mat.name} style={{maxWidth:'230px'}} />
          {mat.type && <p> {mat.type}</p>}
          <p>Ingredienser: {mat.ingredients.join(', ')}</p>
          <p>kryddor: {mat.spices.join(', ')}</p>
          <p>Beskrivning: {mat.description}</p>
          <p>styrka: {mat.strength}</p>
          <p>Pris: {mat.price}</p>
          
        </div>
      ))}
    </div>
)};

export default Menu