import React from "react";
// import axios from "axios";
import { Button } from "../../components/ui/button";
function Login() {
  const [email, setEmail] = React.useState("");
  const [passWord, setPassWorrd] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [token, setToken] = React.useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !passWord.trim()) {
      setMessage("Veillez remplir tous les champs.");
      return;
    }

    try {
      const resp = await fetch.post("http://localhost:3000/login", {
        email,
        passWord,
      });
      setMessage("Connexion reussie !");
      localStorage.setItem("auth Token", resp.data.token);

      console.log("Token", resp.data.token);
    } catch (err) {
      if (err.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Erreur Serveur");
      }
    }

    return (
      <main className="bg-teal-500 w-full h-auto">
        <section>
          <h1>Log In</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div>
            <form onSubmit={() => handleLogin()}>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your Password"
                value={passWord}
                onChange={(e) => setPassWorrd(e.target.value)}
              />
              <Button type="submit" variant="default" size="lg">
                LogIn
              </Button>
            </form>
          </div>
        </section>
      </main>
    );
  };
}

export default Login;
