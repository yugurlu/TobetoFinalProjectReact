import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./register.css";
import "react-toastify/dist/ReactToastify.css";
import Request from "../../utilities/axios/axios";

export const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    var request = new Request({});

    if (passwordControl()) {
        await request.axios_request
          .post("/Students", {
            firstName: name,
            lastName: lastname,
            email: email,
            password: password,
          })
          .then((response) => {
            localStorage.setItem("user",
              JSON.stringify({
                name: response.data.userFirstName,
                lastName: response.data.userLastName,
                id: response.data.studentId,
              })
            );
            navigate("/");
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              const errorMessage = error.response.data;
              const colonIndex = errorMessage.indexOf(":");
              if (colonIndex !== -1) {
                const nextLineIndex = errorMessage.indexOf("\n", colonIndex);
                if (nextLineIndex !== -1) {
                  const specificErrorMessage = errorMessage
                    .substring(colonIndex + 1, nextLineIndex)
                    .trim(); //
                  toast(specificErrorMessage);
                }
              }
            }
          })
          .finally(() => setLoading(false));
      }
  };

  const passwordControl = () => {
    if (!password.length || !password.length) {
      toast("Lütfen Tüm Alanları Doldurunuz.");
      return false;
    } else if (password != passwordAgain) {
      toast("Şifreler Eşleşmedi.");
      return false;
    }
    return true;
  };

  return (
    <div className="register-base">
      <div className="register">
        <div>
          <img
            className="register-img"
            src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
          />
        </div>
        <div>
          <h1>Hemen Kayıt Ol</h1>
        </div>
        <div className="register-events">
          <div>
            <input
              class="register-input"
              id="name"
              placeholder="Ad*"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              class="register-input"
              id="lastname"
              placeholder="Soyad*"
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="email"
              class="register-input"
              id="email"
              placeholder="E-posta*"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              class="register-input"
              id="password"
              placeholder="Sifre*"
              required
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            ></input>
          </div>
          <div>
            <input
              type="password"
              class="register-input"
              id="password-again"
              placeholder="Sifre Tekrar*"
              required
              onChange={(e) => setPasswordAgain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            ></input>
          </div>
          <button
            class="register-btn"
            type="submit"
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Kayıt Ol"}
          </button>
        </div>
        <div>
          <label>
            <small>
              Zaten bir hesabın var mı?{" "}
              <Link to="/login">Giriş Yap</Link>
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
              </style>
            </small>
          </label>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="light"></ToastContainer>
    </div>
  );
};
