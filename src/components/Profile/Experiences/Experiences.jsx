import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";
import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";

function Experiences() {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Kurum Adi*</label>
              <FormikInput name="companyName" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Pozisyon*</label>
              <FormikInput name="position"></FormikInput>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Sektor*</label>
              <FormikInput name="sector"></FormikInput>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Il*</label>
              <FormikInput name="city"></FormikInput>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Is Baslangic Tarihi</label>
              <FormikInput name="startDate" type="date"></FormikInput>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Is Bitisi*</label>
              <FormikInput name="endDate" type="date"></FormikInput>
              <div className="d-flex gap-4 mt-4">
                <FormikInput name="continue" type="checkbox"></FormikInput>
                <small>Calismaya Devam Ediyorum</small>
              </div>
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Is Aciklamasi</label>
              <FormikInput name="description"></FormikInput>
            </div>
          </div>
          <button className="save-button">Kaydet</button>
          <div className="col-12 mt-5">
            <ExperiencesCard />
            <ExperiencesCard />
            <ExperiencesCard />
            <ExperiencesCard />
            <ExperiencesCard />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Experiences;
