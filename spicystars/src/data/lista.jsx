// <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f336.svg"/> 
//  <p> {mat.type}</p>
import PepparPicture from '../components/pepparimage'

function Menu() {
  const menuFood = [
    {
      name: 'Kyckling Vindaloo',
      ingredients: ['Kyckling', 'lök', 'vitlök', 'ingefära', 'vinäger'],
      description: 'En indisk rätt med kyckling serveras med ris',
      strength: '4/5',
	  type: 'kyckling', 
      price: '109',
      image: 'https://cdn2.cdnme.se/1610674/8-3/chicken-vindaloo-curry-kyckling-indisk-mat-middag-tips_5fd7011d9606ee0ecc3ac546.jpg',
	  id:'1'
    },
    {
      name: 'Aloo Gobi',
      type: 'Vegetarisk',
      ingredients: ['Potatis', 'blomkål', 'lök', 'tomater', 'vitlök', ],
      description: 'En indisk rätt med potatis och blomkål',
      strength: '2/5',
      price: '99',
      image: 'https://res.cloudinary.com/coopsverige/image/upload/ar_1.0,f_auto,c_fill,w_300,g_center/v1576589656/387309.jpg',
	  id:'2'
    },
    {
      name: 'Lamm Vindaloo',
      ingredients: ['Lammkött', 'vinäger', 'lök', 'vitlök', 'ingefära'],
      description: 'En kryddig och smakrik lammgryta',
      strength: '5/5',
      price: '119',
	  type: 'kött',
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2023/10/Lamb-Vindaloo-1-1025x1536.jpg',
	  id:'3'
    },
    {
      name: 'Szechuan Stir-Fry',
      type: 'Vegansk',
      ingredients: ['broccoli', 'paprika', 'lök', 'ingefära'],
      description: 'En kinesisk klassiker',
      strength: '4/5',
      price: '109',
      image: 'https://monkeyandmekitchenadventures.com/wp-content/uploads/2019/07/Szechuan-Veggie-Stir-Fry_04.jpg',
	  id:'4'
    },
    {
      name: 'Aloo Baingan',
      type: 'Vegansk',
      ingredients: ['Potatis', 'aubergine', 'lök', 'tomat', 'ingefära'],
      description: 'En kryddig och smakrik lammgryta',
      strength: '3/5',
      price: '99',
      image: 'https://www.jcookingodyssey.com/wp-content/uploads/2023/04/aloo-baingan.jpg.webp',
	  id:'5'
    }
    ]

	

return (
	<> 
	<div className="textmeny"> <h1> MENY </h1> </div>
	 <div className="menyFoodDiv">
		
      {menuFood.map((mat, index) => (
        <div key={index} className="meny-container">
          <h2>{mat.id}. {mat.name}</h2>
		  <img src={mat.image} alt={mat.name} style={{maxWidth:'125px', minWidth:'125px', maxHeight:'125px', minHeight:'125px'}} />
         <p> {PepparPicture()}  {mat.strength} </p>
		   <p>{mat.description}</p>
          <p>Ingredienser: {mat.ingredients.join(', ')}</p>
          
          <p>Pris: {mat.price}<button> Lägg till</button></p>
		  //koppla button med price och id för att räkna ut i beställning som ska hamna i 'kundvagnen'
          
        </div>
      ))}
    </div>
	</>
)};

export default Menu