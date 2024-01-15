import FormikInput from "../../FormikInput/FormikInput";
import "./PersonalInformations.css";
import * as Yup from "yup";
import "yup-phone-lite";
import { Form, Formik } from "formik";
import { useRef } from "react";

function PersonalInformations() {
  const fileInputRef = useRef(null);

  const handleEditImageClick = () => {
    fileInputRef.current.click();
  };

  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    birthDate: "",
    nationalIdentity: "",
    email: "",
    country: "",
    city: "",
    district: "",
    addressDetail: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Doldurulması zorunlu alan*"),
    surname: Yup.string().required("Doldurulması zorunlu alan*"),
    birthDate: Yup.string().required("Doldurulması zorunlu alan*"),
    country: Yup.string().required("Doldurulması zorunlu alan*"),
    city: Yup.string().required("Doldurulması zorunlu alan*"),
    district: Yup.string().required("Doldurulması zorunlu alan*"),
    email: Yup.string()
      .email("Lutfen Gecerli Bir E-Posta Adresi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    phone: Yup.string()
      .phone("TR", "Lutfen Gecerli Bir Telefon Numarasi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    nationalIdentity: Yup.number()
      .required("*Aboneliklerde fatura için doldurulması zorunlu alan")
      .typeError("*Aboneliklerde fatura için doldurulması zorunlu alan")
      .min(11, "Lutfen Gecerli Bir TC Kimlik Numarasi Giriniz")
      .max(11, "Lutfen Gecerli Bir TC Kimlik Numarasi Giriniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="personal-informations row">
            <div className="col-12 mb-5 text-center">
              <div className="profile-photo">
                <img src="https://pbs.twimg.com/profile_images/1697250796906348546/JAYDV2ix_400x400.jpg"></img>
                <div className="profile-photo-remove"></div>
                <div
                  className="profile-photo-edit"
                  onClick={handleEditImageClick}
                >
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Adiniz*</label>
              <FormikInput name="name" label="Adiniz*" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Soyadiniz*</label>
              <FormikInput name="surname" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Telefon Numaraniz*</label>
              <FormikInput name="phone" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Dogum Tarihiniz*</label>
              <FormikInput name="birthDate" type="date" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>TC Kimlik No*</label>
              <FormikInput name="nationalIdentity" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>E-Posta*</label>
              <FormikInput name="email" />
            </div>
            <div className="profile-input col-12 mb-4">
              <label>Ulke*</label>
              <FormikInput name="country" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Il*</label>
              <FormikInput name="city" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Ilce*</label>
              <FormikInput name="district" />
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Mahalle / Sokak</label>
              <FormikInput name="addressDetail" as="textarea" rows={4}/>
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Hakkkimda</label>
              <FormikInput name="description" as="textarea" rows={4}/>
            </div>
          </div>
          <button className="save-button">Kaydet</button>
        </Form>
      </Formik>
    </div>
  );
}

export default PersonalInformations;
