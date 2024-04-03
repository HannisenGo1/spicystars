// <img src={peppar} alt="peppar"/>
import peppar from '../data/peppar.png'

const PepparPicture = () => {
	return (
		<div className='pepparPicture'> 
		<img src={peppar} style={{maxWidth:'20px', minWidth:'20px', maxHeight:'20px', minHeight:'20px'}} />
		</div>
	)
}

export default PepparPicture