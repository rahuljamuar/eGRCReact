import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { GrClose } from "react-icons/gr";
import Swal from "sweetalert2";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    fetch(`${process.env.REACT_APP_API}/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    }).then(
      (response) => {
        setLoading(false);
        if (response.status === 200) {
          navigate("/signin");
        }
      },
      (error) => {
        Swal.fire({
          title: "Error!",
          text: "Invalid Details",
          icon: "error",
          confirmButtonText: "Try again",
        }).then(() => setLoading(false));
      }
    );
  };

  return (
    <section className="overflow-hidden max-h-screen">
      <Loader active={loading} />
      <div className="flex h-screen font-nunito">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-0 w-2/3 h-3/4">
          <div className="order-last rounded-r-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="flex justify-end transform -translate-x-5 translate-y-5">
              <GrClose
                size={20}
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center text-white text-3xl font-bold">
                Already a User?
              </h1>
              <p className="text-center text-white text-xl"> Sign in here</p>
              <Link
                to="/signin"
                className="ring-2 ring-white text-white rounded-full
              mt-5 py-2 px-4 bg-transparent"
              >
                {" "}
                Sign In
              </Link>
            </div>
          </div>
          <div className="rounded-l-2xl bg-slate-100 shadow-2xl">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center font-nunito font-bold text-3xl">
                Register
              </h1>
              <form className="mt-4 p-6 w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                  <div className="col-span-1">
                    <input
                      className="rounded-full appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                    />
                  </div>

                  <div className="col-span-1">
                    <input
                      className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      className="appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="text-center mt-9">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white rounded-full font-bold py-2 px-5 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
