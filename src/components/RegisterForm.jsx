function RegisterForm(){
    return(
        <div className=" flex flex-col gap-4 p-4 text-white px-32 bg-gradient-to-b from-slate-400 to-transparent">
            <div className="flex flex-col md:flex-row gap-3">
                <input type="text" placeholder="Surname" className="rounded-md" />
                <input type="text" placeholder="First Name" className="rounded-md" />
                <input type="text" placeholder="Last Name" className="rounded-md" />
            </div>
            <div><p className="text-xs">DATE OF BIRTH:</p>
                <input type="date" placeholder="Date" className="rounded-md w-36" />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <input type="text" placeholder="Residencial Address" className="rounded-md" />
                <input type="text" placeholder="L.G.A" className="rounded-md" />
                <input type="text" placeholder="State" className="rounded-md" />
            </div>
            <div><p><b>PHONE NUMBER:</b></p>
                <input type="tel" placeholder="Tel" className="rounded-md" />
            </div>
            <div><p><b>Email:</b></p>
                <input type="email" placeholder="Email" className="rounded-md"/>
            </div> 
            <div><p><b>Password:</b></p>
                <input type="password" placeholder="Password" className="rounded-md"/>
            </div> 
            <div><p><b>Confirm Password:</b></p>
                <input type="password" placeholder="Confirm Password" className="rounded-md"/>
            </div>
            <div><p><b>Input Username:</b></p>
                <input type="text" placeholder="Username" className="rounded-md"/>
            </div>
            <div className="flex gap-5"><p><b>Gender:</b></p>
                <input type="radio" name="gender" /><p><b>Male</b></p>
                <input type="radio" name="gender" /><p><b>Female</b></p>
            </div>
            <div>
                <button className="bg-slate-300 w-20 h-[25px] rounded-md">Sign up</button>
            </div>
            <div className="flex gap-4 text-white">
                <p><b>Already have an account?</b></p>
                <button>Log in</button>
            </div>
        </div>
    )
}
export default RegisterForm