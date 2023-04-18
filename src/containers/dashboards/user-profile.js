/* eslint-disable no-param-reassign */
import React, { createRef, useState } from 'react';
import { Card, CardBody, FormGroup, Label, Spinner } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import BottomNavigation from 'components/wizard/BottomNavigation';
import TopNavigation from 'components/wizard/TopNavigation';

// const onlyNumberKey = (e) => {
//   const x = e.which || e.keycode;
//   if (x >= 48 && x <= 57) {
//     return true;
//   }
//   return false;
// };
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'لطفا پست الکترونیکی خودتو وارد کن';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'ایمیل که وارد کردی نامعتبره';
  }
  return error;
};

const validateName = (value) => {
  let error;
  if (!value) {
    error = 'لطفا اسمت رو وارد کن';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const validateFamily = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام خانوادگی رو وارد کن';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const NationalCode = (value) => {
  let error;
  if (!value) {
    error = 'لطفا کد ملی رو وارد کن';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'لطفا رمزت رو وارد کن';
  } else if (value.length < 6) {
    error = 'Password must be longer than 6 characters';
  }
  return error;
};

const Validation = ({ intl }) => {
  const forms = [createRef(null), createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    family: '',
    email: '',
    password: '',
  });

  const onClickNext = (goToNext, steps, step) => {
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    const formIndex = steps.indexOf(step);
    const form = forms[formIndex].current;

    form.submitForm().then(() => {
      if (!form.isDirty && form.isValid) {
        const newFields = { ...fields, ...form.values };
        setFields(newFields);

        if (steps.length - 2 <= steps.indexOf(step)) {
          // done
          setBottomNavHidden(true);
          setLoading(true);
          console.log(newFields);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }
        goToNext();
        step.isDone = true;
      }
    });
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const { messages } = intl;
  return (
    <Card>
      <CardBody className="wizard wizard-default">
        <Wizard>
          <TopNavigation className="justify-content-center" disableNav />
          <Steps>
            <Step
              id="step1"
              name={messages['wizard.step-name-1']}
              family={messages['wizard.step-family-1']}
              desc={messages['wizard.step-desc-1']}
            >
              <div className="wizard-basic-step">
                <Formik
                  innerRef={forms[0]}
                  initialValues={{
                    name: fields.name,
                    family: fields.family,
                  }}
                  validateOnMount
                  onSubmit={() => {}}
                >
                  {({ errors, touched }) => (
                    <Form className="av-tooltip tooltip-label-right">
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={validateName}
                            className="form-control"
                            name="name"
                          />
                          <span>
                            <IntlMessages id="forms.name" />
                          </span>
                        </Label>
                        {errors.name && touched.name && (
                          <div className="invalid-feedback d-block">
                            {errors.name}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={validateFamily}
                            className="form-control"
                            name="family"
                          />
                          <span>
                            <IntlMessages id="forms.lastname" />
                          </span>
                        </Label>
                        {errors.family && touched.family && (
                          <div className="invalid-feedback d-block">
                            {errors.family}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={NationalCode}
                            className="form-control"
                            name="nationalCode"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                          />
                          <span>
                            <IntlMessages id="forms.national-Code" />
                          </span>
                        </Label>
                        {errors.nationalCode && touched.nationalCode && (
                          <div className="invalid-feedback d-block">
                            {errors.nationalCode}
                          </div>
                        )}
                      </FormGroup>
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            <Step
              id="step2"
              name={messages['wizard.step-name-2']}
              desc={messages['wizard.step-desc-2']}
            >
              <div className="wizard-basic-step">
                <Formik
                  innerRef={forms[1]}
                  initialValues={{
                    email: fields.email,
                  }}
                  onSubmit={() => {}}
                  validateOnMount
                >
                  {({ errors, touched }) => (
                    <Form className="av-tooltip tooltip-label-right">
                      <FormGroup>
                        <Label>{messages['forms.email']}</Label>
                        <Field
                          className="form-control"
                          name="email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            <Step
              id="step3"
              name={messages['wizard.step-name-3']}
              desc={messages['wizard.step-desc-3']}
            >
              <div className="wizard-basic-step">
                <Formik
                  innerRef={forms[2]}
                  initialValues={{
                    password: fields.password,
                  }}
                  onSubmit={() => {}}
                  validateOnMount
                >
                  {({ errors, touched }) => (
                    <Form className="av-tooltip tooltip-label-right error-l-75">
                      <FormGroup>
                        <Label>{messages['forms.password']}</Label>
                        <Field
                          className="form-control"
                          name="password"
                          type="password"
                          validate={validatePassword}
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </FormGroup>
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            <Step id="step4" hideTopNav>
              <div className="wizard-basic-step text-center pt-3">
                {loading ? (
                  <div>
                    <Spinner color="primary" className="mb-1" />
                    <p>
                      <IntlMessages id="wizard.async" />
                    </p>
                  </div>
                ) : (
                  <div>
                    <h2 className="mb-2">
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    <p>
                      <IntlMessages id="wizard.registered" />
                    </p>
                  </div>
                )}
              </div>
            </Step>
          </Steps>
          <BottomNavigation
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            className={`justify-content-center ${
              bottomNavHidden && 'invisible'
            }`}
            prevLabel={messages['wizard.prev']}
            nextLabel={messages['wizard.next']}
          />
        </Wizard>
      </CardBody>
    </Card>
  );
};
export default injectIntl(Validation);
