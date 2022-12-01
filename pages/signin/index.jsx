import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const SignIn = () => {
    const userValues={
        username:'tgtg3',
        password:'Meowwwwww'
    }
    const localSignIn=async ()=>{
      const req=await fetch('https://localhost:4343/users/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      let data = await req.json();
      console.log(JSON.stringify(user));
      console.log(data);
    }

    const [user,setUser]=useState(userValues);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    }
    const signInwithGoogle=async ()=>{
        try{
          window.open('https://localhost:4343/users/auth/google','_self');
          }
        
        catch(err){
          console.error(err);
        }
    }
    const signInwithFacebook=async ()=>{
        console.log('facebook');
    }
  return (
    <div className='signin'>
      <div className='signin--header'>
      <h1>Online Classroom Dashboard</h1>
      <p>Sign in to OCD</p>
      </div>
        <form onSubmit={
            (e)=>{
              e.preventDefault();
            }
        }  className='signin--form'>
          <div className="signin--form__email">
          <label htmlFor='email'>Email</label>
          <input onChange={(e)=>handleChange(e)} name='username' type='text' placeholder='Username' />
          </div>
          <div className="signin--form__password">
          <label htmlFor='password'>Password</label>
          <input onChange={(e)=>handleChange(e)} name='password' type='password' placeholder='Password' />
          </div>
          <button onClick={localSignIn} className='signin--button' type='submit'>Sign in</button>
        </form>

      <div className='signin--without'>
        <button onClick={
            signInwithGoogle 
        } className='signin--google'>
          <FontAwesomeIcon icon={faGoogle} /> Sign in with Google</button>
        <button onClick={
            signInwithFacebook 
        } className='sign--facebook'>
          <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook</button>
      </div>

    </div>
  )
}

export default SignIn