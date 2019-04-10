import React from 'react';
//import './FaceRecognition.css';
const Register = ({ onRouteChange }) => {
	return (
		<article class="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main class="pa4 black-80">
				<form class="measure">
					<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
					  <legend class="f1 fw6 ph0 mh0">Register</legend>
					  <div class="mt3">
					    <label class="db fw6 lh-copy f6" for="email-address">Name</label>
					    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="username" />
					  </div>
					  <div class="mt3">
					    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
					    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
					  </div>
					  <div class="mv3">
					    <label class="db fw6 lh-copy f6" for="password">Password</label>
					    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
					  </div>
					</fieldset>
					<div class="">
					  <input 
					  	onClick={() => onRouteChange('home')}
					  	class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					  	type="submit" 
					  	value="Sign up" />
					</div>
				</form>
			</main>
		</article>
	);
}

export default Register;