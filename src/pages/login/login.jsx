import React, { useState } from "react";
import "./login.css";
import Request from "../../utilities/axios/axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string().required("Doldurulması zorunlu alan*"),
    password: string().required("Doldurulması zorunlu alan*"),
  });

  async function submit(initialValues) {
    setLoading(true);
    var request = new Request({});
    await request.axios_request
      .post("/Auth/Login", {
        email: initialValues.email,
        password: initialValues.password,
      })
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
        toast("Yanlış E-mail veya Şifre Lütfen Tekrar Deneyiniz!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-base" style={{ minHeight: "72.2vh" }}>
      <div className="login">
        <Formik
          initialValues={initialValues} 
          onSubmit={(initialValues) => {
            submit(initialValues)
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <div class="d-flex align-items-center justify-content-center">
              <img
                className="login-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
            <div className="login-events">
              <FormikInput
                name="email"
                className="login-input"
                placeholder="E-Mail"
              />
              <FormikInput
                name="password"
                type="password"
                className="login-input"
                placeholder="Şifre"
              />
              <button class="login-btn" type="submit" disabled={loading}>
                {loading ? "Yükleniyor..." : "Giriş Yap"}
              </button>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-2">
              <small>
                Henüz üye değil misin? <Link to="/register">Kayıt ol!</Link>
              </small>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer position="bottom-right" theme="light" />
    </div>
  );
};
