function Footer() {
  return (
    <div className="flex flex-col bg-slate-800 h-44 rounded-lg text-white pt-10 justify-center items-center">
      <div className="flex-1">
        Copyright All Right Reserved 2024, Oluaka Institute Of Technology,
        Obinze Powered by BossLady
      </div>
      <div className="flex-1">
        <p>For more information, call: <a href="http://tel.me/+2348133328698"></a></p>
        <p>Send Feedback: ogbujimirabel@gmail.com</p>
        <div className="gap-5">
          <button className="icon-whatsapp text-3xl text-green-500">
            <a href="http://wa.me/+2348133328698"></a>
          </button>
          <span className="icon-telegram text-3xl text-blue-500"></span>
          <span className="icon-facebook text-3xl"></span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
