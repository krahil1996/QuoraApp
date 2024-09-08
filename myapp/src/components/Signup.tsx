import welcome from "../assets/background-img.jpeg";
import google from "../assets/google.png";
import facebook from "../assets/fb.png";
import "../App.css";

const Signup = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${welcome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="bg-white h-5/6 w-auto rounded-sm p-8">
        <h1 className="text-red-700 text-6xl font-bold font-serif text-center ">
          Quora
        </h1>
        <h1 className="text-center font-bold text-gray-600 mt-3">
          A place to share knowledge and better understand the world
        </h1>
        <div className="flex  mt-10">
          <div>
            <h1 className="text-zinc-400 text-sm w-72">
              By continuing you indicate that you agree to Quora’s
              <span className="text-cyan-700">Terms of Service</span> and
              <span className="text-cyan-700">Privacy Policy.</span>
            </h1>
            <div className=" flex flex-col gap-2 mt-4">
              <div className="flex p-1 border border-spacing-1 rounded-md items-center cursor-pointer hover:bg-gray-100">
                <img className="w-6 h-6 m-2 " src={google} />
                <h1>Continue with Google</h1>
              </div>
              <div className="flex p-1 border border-spacing-1 rounded-md items-center cursor-pointer hover:bg-gray-100">
                <img className="w-6 h-6 m-2" src={facebook} />
                <h1>Continue with Facebook</h1>
              </div>
              <div className=" p-1 rounded-3xl items-center text-center text-ssm text-gray-500 font-semibold cursor-pointer hover:bg-gray-100">
                <h1>Sign up with Email</h1>
              </div>
            </div>
          </div>
          <a className="border border-r-0 m-7 "></a>
          <div className="">
            <h1 className="p-2 border  ">Login</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
