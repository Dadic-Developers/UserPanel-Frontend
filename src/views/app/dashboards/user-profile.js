/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef, useState, useRef } from 'react';
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Spinner,
  Row,
  CardTitle,
} from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import BottomNavigation from 'components/wizard/BottomNavigation';
import TopNavigation from 'components/wizard/TopNavigation';
import Select from 'react-select';
import { Colxx } from 'components/common/CustomBootstrap';
import DropzoneExample from 'containers/forms/DropzoneExample';
import CustomSelectInput from 'components/common/CustomSelectInput';
import {
  AvGroup,
  AvInput,
  AvFeedback,
  AvForm,
} from 'availity-reactstrap-validation';

const selectData = [
  { label: 'زیردیپلم', value: 'prediploma', key: 0 },
  { label: 'دیپلم', value: 'diploma', key: 1 },
  { label: 'کاردانی', value: 'associate', key: 2 },
  { label: 'لیسانس', value: 'bachelor', key: 3 },
  { label: 'فوق لیسانس', value: 'master', key: 4 },
  { label: 'دکترا', value: 'phd', key: 5 },
  { label: 'فوق دکترا ', value: 'postdoc', key: 6 },
];
const selectGender = [
  { label: 'زن', value: 'woman', key: 0 },
  { label: 'مرد', value: 'man', key: 1 },
];
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
const validateCity = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام شهر رو وارد کن';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const validateState = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام استان رو وارد کن';
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
    error = 'پسورد دارای حداقل 6 کاراکتر باشد';
  }
  return error;
};

const Phonenumber = (value) => {
  let error;
  if (!value) {
    error = 'لطفا شماره موبایل رو وارد کن';
  } else if (value.length < 6) {
    error = 'شماره موبایل دارای 11 رقم میباشد';
  }
  return error;
};

const fixednumber = (value) => {
  let error;
  if (!value) {
    error = 'لطفا شماره ثابت رو وارد کن';
  } else if (value.length < 6) {
    error = 'شماره ثابت دارای 8 رقم میباشد';
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
  // start select dependency for select / option
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

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
  const dropzone = useRef();
  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };
  const onSubmit = (errors, values) => {
    console.log(errors);
    console.log(values);
    if (errors.length === 0) {
      // submit
    }
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
              nationalCode={messages['wizard.step-nationalCode-1']}
              Phonenumber={messages['wizard.step-Phonenumber-1']}
              fixednumber={messages['wizard.step-fixednumber-1']}
              desc={messages['wizard.step-desc-1-description']}
            >
              <div className="wizard-basic-step">
                <Formik
                  innerRef={forms[0]}
                  initialValues={{
                    nationalCode: fields.nationalCode,
                    Phonenumber: fields.Phonenumber,
                    fixednumber:fields.fixednumber
                  }}
                  validateOnMount
                  onSubmit={() => {}}
                >
                  {({ errors, touched }) => (
                    <Form className="av-tooltip tooltip-label-right col-md-6" style={{margin:'0 auto'}}>
                      <FormGroup >
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={NationalCode}
                            className="form-control"
                            name="nationalCode"
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
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={Phonenumber}
                            className="form-control"
                            name="Phonenumber"
                          />
                          <span>
                            <IntlMessages id="forms.phone-number" />
                          </span>
                        </Label>
                        {errors.Phonenumber && touched.Phonenumber && (
                          <div className="invalid-feedback d-block">
                            {errors.Phonenumber}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={fixednumber}
                            className="form-control"
                            name="fixednumber"
                          />
                          <span>
                            <IntlMessages id="forms.fixed-number" />
                          </span>
                        </Label>
                        {errors.fixednumber && touched.fixednumber && (
                          <div className="invalid-feedback d-block">
                            {errors.fixednumber}
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
              family={messages['wizard.step-family-2']}
              fname={messages['wizard.step-name-2']}
              email={messages['wizard.step-email-2']}
              city={messages['wizard.step-city-2']}
              state={messages['wizard.step-state-2']}
              
              desc={messages['wizard.step-desc-2-description']}
            >
              <div className="wizard-basic-step">
                <Formik
                  innerRef={forms[1]}
                  initialValues={{
                    email: fields.email,
                    family: fields.family,
                    name: fields.name,
                  }}
                  onSubmit={() => {}}
                  validateOnMount
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
                            validate={validateEmail}
                            className="form-control"
                            name="email"
                          />
                          <span>
                            <IntlMessages id="forms.email" />
                          </span>
                        </Label>
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={validateState}
                            className="form-control"
                            name="state"
                          />
                          <span>
                            <IntlMessages id="forms.state" />
                          </span>
                        </Label>
                        {errors.state && touched.state && (
                          <div className="invalid-feedback d-block">
                            {errors.state}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            validate={validateCity}
                            className="form-control"
                            name="city"
                          />
                          <span>
                            <IntlMessages id="forms.city" />
                          </span>
                        </Label>
                        {errors.city && touched.city && (
                          <div className="invalid-feedback d-block">
                            {errors.city}
                          </div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label className="form-group has-float-label">
                          <Field
                            type="text"
                            className="form-control"
                            name="getting-know"
                          />
                          <span>
                            <IntlMessages id="forms.getting-know" />
                          </span>
                        </Label>
                      </FormGroup>
                      <AvForm
                        className="av-tooltip tooltip-label-right"
                        onSubmit={(event, values) => onSubmit(event, values)}
                      >
                        <AvGroup>
                          <Label className="form-group has-float-label">
                            <span>
                              <IntlMessages id="forms.address" />
                            </span>
                            <AvInput
                              type="textarea"
                              name="details"
                              id="details"
                              required
                            />
                          </Label>
                          <AvFeedback>آدرس هم باید وارد کنی!</AvFeedback>
                        </AvGroup>
                      </AvForm>
                      <Row>
                        <Colxx xxs="12" md="6" className="mb-5">
                          <label>
                            <IntlMessages id="forms.gender" />
                          </label>
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedGender}
                            onChange={setSelectedGender}
                            options={selectGender}
                          />
                        </Colxx>
                        <Colxx xxs="12" md="6" className="mb-5">
                          <label>
                            <IntlMessages id="forms.education" />
                          </label>
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOption}
                            onChange={setSelectedOption}
                            options={selectData}
                          />
                        </Colxx>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Step>
            <Step
              id="step3"
              name={messages['wizard.step-name-3']}
              desc={messages['wizard.step-desc-3-description']}
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
                      <Row className="mb-4">
                        <Colxx xxs="12" md="4">
                          <Card>
                            <CardBody>
                              <CardTitle>
                                <IntlMessages id="form-components.person" />
                              </CardTitle>
                              <DropzoneExample ref={dropzone} />
                            </CardBody>
                          </Card>
                        </Colxx>
                        <Colxx xxs="12" md="4">
                          <Card>
                            <CardBody>
                              <CardTitle>
                                <IntlMessages id="form-components.national-card" />
                              </CardTitle>
                              <DropzoneExample ref={dropzone} />
                            </CardBody>
                          </Card>
                        </Colxx>
                        <Colxx xxs="12" md="4">
                          <Card>
                            <CardBody>
                              <CardTitle>
                                <IntlMessages id="form-components.license" />
                              </CardTitle>
                              <DropzoneExample ref={dropzone} />
                            </CardBody>
                          </Card>
                        </Colxx>
                      </Row>
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
