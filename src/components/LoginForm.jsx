function LoginForm(){
    return(
        <div className="flex-1 flex flex-col justify-center items-center gap-4 bg-transparent">
                <div>
                    <input type="email" placeholder="Email" className="bg-red-800 rounded-md"/>
                </div> 
                <div>
                    <input type="password" placeholder="Password" className="bg-red-800 rounded-md"/>
                </div> 
                <div>
                    <input type="text" placeholder="Username" className="bg-red-800 rounded-md"/>
                </div>
                    <button className="bg-slate-300 rounded-md h-[25px] w-20">Log in</button>
                <div className="flex justify-between items-center gap-4 text-white">
                    <p><b>Don't have an account?</b></p>
                    <button>Sign up</button>
                </div>
         </div>
    )
}
export default LoginForm