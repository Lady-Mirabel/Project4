function Footer(){
    return(
        <div className="flex text-white">
            <div className="flex-1 flex justify-items-start flex-col p-4">
             Copyright All Right Reserved 2024, Oluaka Institute Of Technology, Obinze
             Powered by BossLady
            </div>
            <div className="flex-1 flex-col gap-4">
                <div className="m-4">
                    <textarea name="text" id="comment....." className="rounded-md"></textarea>
                </div>
                <div>
                    <input type="email" placeholder="Email" className="w-60 rounded-md m-4"/>
                </div>
                <div>
                    <button className="bg-slate-300 w-20 rounded-md m-4 text-black">Submit</button>
                </div>
            </div>
            <div className="flex-1">
                <p><b>For bookings, call: 08133328698</b></p>
                <p><b>Send Feedback:</b></p>
            </div>
        </div>
    )
}
export default Footer