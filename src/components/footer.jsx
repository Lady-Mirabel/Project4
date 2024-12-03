function Footer() {
  return (
    <div className="flex flex-col h-36 bg-slate-800 rounded-lg text-white justify-center items-center">
      <div className="h-10">
        Copyright All Right Reserved 2024, Oluaka Institute Of Technology,
        Obinze Powered by BossLady
      </div>
      <div className="flex-1">
        <p>For more information, call:+2348133328698</p>
        <p>Send Feedback: ogbujimirabel@gmail.com</p>
        <div className="flex-1">
          <button>
            <a href="http://wa.me/+2348133328698">
              <span className="icon-whatsapp text-3xl text-green-500"></span>{" "}
            </a>
          </button>
          <button>
            <a href="http://t.me/Daddys_Girl7">
              <span className="icon-telegram text-3xl text-blue-500"></span>
            </a>
          </button>
          <button>
            <a href="https://www.facebook.com/profile.php?id=100085493441695">
              <span className="icon-facebook text-3xl"></span>
            </a>
          </button>
          <button>
            <a href="http://mail.ogbujimirabel@gmail.com">
              <span className="icon-mail-1 text-xl text-red-500"></span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
