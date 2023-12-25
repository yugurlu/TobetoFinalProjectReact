import React, { useState } from "react";
import "./login.css";
import Request from "../../utilities/axios/axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    var request = new Request({});
    
    await request.axios_request
      .post("/Auth/Login", { email: email, password: password })
      .then((response) => {
        localStorage.setItem(
          "user",
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
                .trim();
              toast(specificErrorMessage);
            }
          }
        }
      })
      .finally(() => setLoading(false))
  };

  return (
    <div className="login-base">
      <div className="login">
        <div>
          <img
            className="login-img"
            src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
          />
        </div>
        <div className="login-events">
          <div>
            <input
              type="email"
              class="login-input"
              id="email"
              placeholder="E-posta"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              class="login-input"
              id="password"
              placeholder="Sifre"
              required
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
            ></input>
          </div>
          <button
            class="login-btn"
            type="submit"
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Giriş Yap"}
          </button>
        </div>
        <div>
          <label>
            <small>
              Henüz üye değil misin? <Link to="/register">Kayıt ol!</Link>
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
