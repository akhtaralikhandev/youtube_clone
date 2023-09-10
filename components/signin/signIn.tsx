import './signIn.css'
const SignIn = () => {
    return (
        <div className="signIn shadow-xl rounded-lg  w-96">
            <div className="signInWrapper flex flex-col gap-6  pl-6 pr-6 p-4 ">
                <input className="input p-2 outline-blue-500" type="text" placeholder="email" />
                <input className="input p-2 outline-blue-500" type="password" placeholder="password" />
                <div className='flex items-center justify-between'>
                    <div className='flex items-center  gap-2'>
                        <input className='checkbox' type="checkbox" name="" id="" />
                        <span className="remember_me">remember me</span>
                    </div>
                    <span className="forgetPassword pr-7">Forgot Password?</span>
                </div>
                <button className="login">Login</button>
                <div className='flex items-center gap-2 mt-6'>
                    <div className="line"></div>
                    <span className="login_with">Or With</span>
                    <div className="line"></div>
                </div>
                <button className="loginWithFacebook flex items-center gap-8 pl-2">
                    <img src="/images/signIn/Facebook Logo.png" alt="" />
                    Login with Facebook</button>
                <button className="loginWithGoogle  flex items-center gap-8 pl-2">
                    <img src="/images/signIn/google.png" alt="" />
                    Login with Google</button>
                <div className='flex items-center gap-8 justify-center'>
                    <span className="dont_have_account">{"Don't have an account ?"}</span>
                    <span className="signUp cursor-pointer">Sign Up</span>
                </div>
            </div>
        </div>
    )
}
export default SignIn