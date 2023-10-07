import './LogIn.css';
import React from "react";
var isLoggedIn = true ;
// function conditionCheck(){
//     if (isLoggedIn === true) {
//         return <h1> wellcom keshav</h1>
//     } else {
//         return logIn();
//     }
// }






 function logIn() {
    return( 
    <div className='login-form'>
    <h1>create account</h1>
    <input type='text' placeholder='userame' required/>
    <input type='password' placeholder='password'/>
    <input type='button' value='LogIn'/> 
    </div>
        );
    }
    
    function LogIn(){
        return(
            <>
           {isLoggedIn === true ? <h1>hello keshav</h1> : logIn()} 
            </>
        )
    }
    export default LogIn;














    // <div className="Login-form">
    //     <React.Fragment className="singup-container">
    //     <form action="#">
    //         <h1>Create Account</h1>
    //         <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    //         <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    //         <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    //         <article>or use your email to registration</article>
    //         <input type="text" placeholder="name" required />
    //         <input type="email" placeholder="Email" pattern=".+@globex\.com" required />
    //         <input type="password" placeholder="passwor" required />
    //         <input type="button" value="SIGN UP" />
    //     </form>
    //     </React.Fragment>

    //     <React.Fragment className="signin-container">
    //     <form action="#">
    //         <h1>Sign in</h1>
    //         <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    //         <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    //         <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    //         <article>or use your Account</article>
    //         <input type="email" placeholder="Email" pattern=".+@globex\.com" required />
    //         <input type="paswword" placeholder="password" />
    //         <a href="#">Forgot your password</a>
    //         <input type="button" value="SIGN in" />
            
    //     </form>
    //     </React.Fragment>



    //     <div>
    //         <h1>Hello, Users</h1>
    //         <p>Enter your username an password and join with us</p>
    //         <input type="button" value="SIGN UP" />
    //     </div>
    // </div>