/* eslint-disable no-param-reassign */
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import React, { createRef, useState } from 'react';
import { Card, CardBody, FormGroup, Label, Spinner, Row } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { Formik, Form, Field } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import BottomNavigation from 'components/wizard/BottomNavigation';
import TopNavigation from 'components/wizard/TopNavigation';
import { injectIntl } from 'react-intl';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';

const selectData = [
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کاپ کیک', value: 'cupcake', key: 1 },
  { label: 'دسر', value: 'dessert', key: 2 },
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

const validateNameOrganization = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام سازمان را وارد کنید';
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
const Layehe = ({ match, intl }) => {
  const forms = [createRef(null), createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [selectedOptionOrganization, setSelectedOptionOrganization] = useState('');
  const [selectedOptionLO, setSelectedOptionLO] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: '',
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
  console.log(intl);
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.layehe" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody className="wizard wizard-default">
              <Wizard>
                <TopNavigation className="justify-content-center" disableNav />
                <Steps>
                  <Step
                    id="step1"
                    name={messages['wizard.step-nameOrganization-1']}
                    desc={messages['wizard.step-desc-1']}
                  >
                    <div className="wizard-basic-step">
                      <Formik
                        innerRef={forms[0]}
                        initialValues={{
                          nameOrganization: fields.nameOrganization,
                        }}
                        validateOnMount
                        onSubmit={() => {}}
                      >
                        {({ errors, touched }) => (
                          <Form className="av-tooltip tooltip-label-right">
                            <Row>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-organization"
                                    value={selectedOptionOrganization}
                                    onChange={(val) => setSelectedOptionOrganization(val)}
                                    options={selectData}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.name-organization" />
                                  </span>
                                  {errors.nameOrganization &&
                                    touched.nameOrganization && (
                                      <div className="invalid-feedback d-block">
                                        {errors.nameOrganization}
                                      </div>
                                    )}
                                </div>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-organization"
                                    value={selectedOptionLO}
                                    onChange={(val) => setSelectedOptionLO(val)}
                                    options={selectData}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.layehe-type" />
                                  </span>
                                  {errors.nameOrganization &&
                                    touched.nameOrganization && (
                                      <div className="invalid-feedback d-block">
                                        {errors.nameOrganization}
                                      </div>
                                    )}
                                </div>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-organization"
                                    value={selectedOptionLO}
                                    onChange={(val) => setSelectedOptionLO(val)}
                                    options={selectData}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.Protest-type" />
                                  </span>
                                  {errors.nameOrganization &&
                                    touched.nameOrganization && (
                                      <div className="invalid-feedback d-block">
                                        {errors.nameOrganization}
                                      </div>
                                    )}
                                </div>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-organization"
                                    value={selectedOptionLO}
                                    onChange={(val) => setSelectedOptionLO(val)}
                                    options={selectData}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.protest" />
                                  </span>
                                  {errors.nameOrganization &&
                                    touched.nameOrganization && (
                                      <div className="invalid-feedback d-block">
                                        {errors.nameOrganization}
                                      </div>
                                    )}
                                </div>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-organization"
                                    value={selectedOptionLO}
                                    onChange={(val) => setSelectedOptionLO(val)}
                                    options={selectData}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.authority-under-consideration" />
                                  </span>
                                  {errors.nameOrganization &&
                                    touched.nameOrganization && (
                                      <div className="invalid-feedback d-block">
                                        {errors.nameOrganization}
                                      </div>
                                    )}
                                </div>
                              </Colxx>
                              <Colxx xxs="12">
                                <FormGroup>
                                  <Label className="form-group has-float-label">
                                    <Field
                                      className="form-control"
                                      name="details"
                                      component="textarea"
                                    />
                                    <span>
                                      <IntlMessages id="forms.file-summary" />
                                    </span>
                                  </Label>
                                  {errors.details && touched.details ? (
                                    <div className="invalid-feedback d-block">
                                      {errors.details}
                                    </div>
                                  ) : null}
                                </FormGroup>
                              </Colxx>
                            </Row>
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
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Layehe);
