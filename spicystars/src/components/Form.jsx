import { useState } from "react";
// import Joi from 'joi'

const Form = () => { 
const [email,setEmail] = useState ('');
const [emailFilled, setEmailFilled] = useState(false);
const [password,setPassword] = useState('');
const [passwordFilled,setPasswordFilled] = useState(false);

const isValidEmail= (email) => { 
return email.length > 0 && email.includes("@"); 
}
// email kan inte vara tom, behöver vara ifylld
const isFormValid = emailFilled && passwordFilled && isValidEmail(email);



const handleLogIn = () => {
	if (isFormValid) { 
		const formData = {
			email,
			password: 'mums'
		};
		console.log('Data from form: ', formData)
		// Skicka datan dit den ska användas
		// Lifting state, Zustand, eller skicka till ett API
	}else {
		console.log('Formuläret är inte utfört korrekt')
	}
};

return ( 
<div className="form"> 
<section className="form-Info"> 
<label> E-post: </label> 
<input value={email} onChange={(event) => setEmail(event.target.value)}
onBlur={() => setEmailFilled(true)} type="text"/>
</section>

<section className="form-Info"> 
<label> Lösenord: </label> 
<input value={password} onChange={ (event) => setPassword(event.target.value)}
onBlur={() => setPasswordFilled(true)} type="password"/>
</section>

<button onClick={handleLogIn} disabled={!isFormValid}> Logga in</button>

	</div>
)
}
export default Form;