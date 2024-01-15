import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./register.css";
import "react-toastify/dist/ReactToastify.css";
import Request from "../../utilities/axios/axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, ref, string } from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    password: "",
    retypePassword: "",
  };

  const validationSchema = object({
    name: string().required("Doldurulması zorunlu alan*"),
    lastname: string().required("Doldurulması zorunlu alan*"),
    email: string()
      .email("Geçersiz e-posta adresi*")
      .required("Doldurulması zorunlu alan*"),
    password: string().required("Doldurulması zorunlu alan*"),
    retypePassword: string()
      .required("Doldurulması zorunlu alan*")
      .oneOf([ref("password")], "Şifreler Eslesmiyor"),
  });

  const submit = async (initialValues) => {
    console.log(initialValues);
    setLoading(true);
    var request = new Request({});
    await request.axios_request
      .post("/Students", {
        firstName: initialValues.name,
        lastName: initialValues.lastname,
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
        toast("Bu Maile Ait Bir Kullanici Zaten Var");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="register-base " style={{ minHeight: "80vh" }}>
      <div className="register">
        <Formik
          initialValues={initialValues}
          onSubmit={(initialValues) => {
            console.log(initialValues);
            submit(initialValues);
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <div class="d-flex align-items-center justify-content-center">
              <img
                className="register-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
            <div>
              <h1>Hemen Kayıt Ol</h1>
            </div>
            <div className="register-events">
              <FormikInput
                name="name"
                className="register-input"
                placeholder="Ad"
              />
              <FormikInput
                name="lastname"
                className="register-input"
                placeholder="Soyad"
              />
              <FormikInput
                name="email"
                className="register-input"
                placeholder="E-Mail"
              />
              <FormikInput
                name="password"
                type="password"
                className="register-input"
                placeholder="Şifre"
              />
              <FormikInput
                name="retypePassword"
                type="password"
                className="register-input"
                placeholder="Şifre Tekrar"
              />
              <button
                class="register-btn"
                type="submit"
                onClick={submit}
                disabled={loading}
              >
                {loading ? "Yükleniyor..." : "Kayıt Ol"}
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <small>
                Zaten bir hesabın var mı? <Link to="/login">Giriş Yap</Link>
              </small>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer position="bottom-right" theme="light"></ToastContainer>
    </div>
  );
};
