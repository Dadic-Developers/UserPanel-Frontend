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
  { label: 'اعتراض', value: '1', key: 0 },
  { label: 'قبولی ', value: '2', key: 1 },
  { label: 'بخشودگی جرائم', value: '3', key: 2 },
  { label: ' تقسیط بدهی', value: '4', key: 3 },
];

const selectDataTypeHayehe = [
  { label: 'اعتراض', value: '1', key: 0 },
  { label: 'قبولی ', value: '2', key: 1 },
  { label: 'بخشودگی جرائم', value: '3', key: 2 },
  { label: ' تقسیط بدهی', value: '4', key: 3 },
];
const selectDataProtest = [
  { label: 'برگ تشخیص', value: '1', key: 0 },
  { label: 'رای هیات بدوی', value: '2', key: 1 },
  { label: 'رای هیات تجدید نظر', value: '3', key: 2 },
  { label: ' رای شورای عالی مالیاتی', value: '4', key: 3 },
];
const selectDatadesiredSection = [
  { label: 'شمال', value: '1', key: 0 },
  { label: 'شرق', value: '2', key: 1 },
  { label: 'غرب', value: '3', key: 2 },
  { label: 'جنوب', value: '4', key: 3 },
  { label: 'مرکز', value: '5', key: 4 },
  { label: 'مودیان بزرگ', value: '6', key: 5 },
];
const selectDataProtestType = [
  { label: 'ماخذ دذآمد عملکرد', value: '1', key: 0 },
  { label: 'ارزش افزوده', value: '2', key: 1 },
  { label: 'ماده 169', value: '3', key: 2 },
  { label: 'حقوق', value: '4', key: 3 },
  { label: 'تکلیفی', value: '5', key: 4 },
  { label: 'سایر', value: '6', key: 5 },
];
const selectDataDesiredReference = [
  { label: 'ممیزکل', value: '1', key: 0 },
  { label: 'هیات بدوی', value: '2', key: 1 },
  { label: 'هیات تجدید نظر', value: '3', key: 2 },
  { label: 'شورای عالی مالیاتی', value: '4', key: 3 },
  { label: 'دیوان عالی اداری', value: '5', key: 4 },
];
const voteNumber = (value) => {
  let error;
  if (!value) {
    error = 'لطفا شماره رای را وارد کنید';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const validateNameOrganization = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام شرکت را وارد کنید';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};

const companyName = (value) => {
  let error;
  if (!value) {
    error = 'لطفا نام سازمان را وارد کنید';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const subjectActivity = (value) => {
  let error;
  if (!value) {
    error = 'لطفا موضوع فعالیت را وارد کنید';
  } else if (value.length < 2) {
    error = 'باید بیشتر از 2 تا کاراکتر باشه';
  }
  return error;
};
const nationalCode = (value) => {
  let error;
  if (!value) {
    error = 'لطفا کدملی را وارد کنید';
  } else if (value.length < 6) {
    error = 'Password must be longer than 6 characters';
  }
  return error;
};
const Layehe = ({ match, intl }) => {
  const forms = [createRef(null), createRef(null), createRef(null)];
  const [bottomNavHidden, setBottomNavHidden] = useState(false);
  const [selectedOptionOrganization, setSelectedOptionOrganization] =
    useState('');
  const [selectedOptionTypeHayehe, setselectedOptionTypeHayehe] = useState('');
  const [selectedOptionProtest, setselectedOptionProtest] = useState('');
  const [selectedOptionDesiredReference, setselectedOptionDesiredReference] =
    useState('');
  const [selectedOptionProtestType, setselectedOptionProtestType] =
    useState('');
  const [selectedOptionCity, setselectedOptionCity] = useState('');
  const [selectedOptionFiscalYear, setselectedOptionFiscalYear] = useState('');
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
                    name={
                      <i className="simple-icon-question d-block text-center" />
                    }
                    nameOrganization={
                      messages['wizard.step-nameOrganization-1']
                    }
                    desc={messages['wizard.step-Summary-topic-question-1']}
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
                                    name="form-field-name nameOrganization"
                                    value={selectedOptionOrganization}
                                    onChange={(val) =>
                                      setSelectedOptionOrganization(val)
                                    }
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
                                    name="form-field-name"
                                    value={selectedOptionTypeHayehe}
                                    onChange={(val) =>
                                      setselectedOptionTypeHayehe(val)
                                    }
                                    options={selectDataTypeHayehe}
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
                                    name="form-field-name"
                                    value={selectedOptionProtestType}
                                    onChange={(val) =>
                                      setselectedOptionProtestType(val)
                                    }
                                    options={selectDataProtestType}
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
                                    name="form-field-name"
                                    value={selectedOptionProtest}
                                    onChange={(val) =>
                                      setselectedOptionProtest(val)
                                    }
                                    options={selectDataProtest}
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
                                    name="form-field-name"
                                    value={selectedOptionDesiredReference}
                                    onChange={(val) =>
                                      setselectedOptionDesiredReference(val)
                                    }
                                    options={selectDataDesiredReference}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.desired-reference" />
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
                    name={<i className="simple-icon-check   d-block text-center" />}
                    desc={messages['wizard.step-Create-Layehe']}
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
                            <Row>
                              <Colxx xxs="12" md="6">
                                <div className="form-group has-float-label">
                                  <Select
                                    components={{ Input: CustomSelectInput }}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="form-field-"
                                    value={selectedOptionCity}
                                    onChange={(val) =>
                                      setselectedOptionCity(val)
                                    }
                                    options={selectDataProtest}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.city-message" />
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
                                    name="form-field-name"
                                    value={selectedOptionProtest}
                                    onChange={(val) =>
                                      setselectedOptionProtest(val)
                                    }
                                    options={selectDatadesiredSection}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.desired-section" />
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
                                    name="form-field-name"
                                    value={selectedOptionFiscalYear}
                                    onChange={(val) =>
                                      setselectedOptionFiscalYear(val)
                                    }
                                    options={selectDataProtest}
                                    placeholder=""
                                    validate={validateNameOrganization}
                                  />
                                  <span>
                                    <IntlMessages id="forms.fiscal-year" />
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
                                <FormGroup>
                                  <Label className="form-group has-float-label">
                                    <Field
                                     type="text"
                                      className="form-control"
                                      name="voteNumber"
                                      validate={voteNumber}
                                    />
                                    <span>
                                      <IntlMessages id="forms.vote-number" />
                                    </span>
                                  </Label>

                                  {errors.voteNumber && touched.voteNumber && (
                                    <div className="invalid-feedback d-block">
                                      {errors.voteNumber}
                                    </div>
                                  )}
                                </FormGroup>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <FormGroup>
                                  <Label className="form-group has-float-label">
                                    <Field
                                       type="text"
                                      className="form-control"
                                      name="companyName"
                                      validate={companyName}
                                    />
                                    <span>
                                      <IntlMessages id="forms.company-name" />
                                    </span>
                                  </Label>

                                  {errors.companyName && touched.companyName && (
                                    <div className="invalid-feedback d-block">
                                      {errors.companyName}
                                    </div>
                                  )}
                                </FormGroup>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <FormGroup>
                                  <Label className="form-group has-float-label">
                                    <Field
                                     type="text"
                                      className="form-control"
                                      name="subjectActivity"
                                      validate={subjectActivity}
                                    />
                                    <span>
                                      <IntlMessages id="forms.subject-activity" />
                                    </span>
                                  </Label>

                                  {errors.subjectActivity && touched.subjectActivity && (
                                    <div className="invalid-feedback d-block">
                                      {errors.subjectActivity}
                                    </div>
                                  )}
                                </FormGroup>
                              </Colxx>
                              <Colxx xxs="12" md="6">
                                <FormGroup>
                                  <Label className="form-group has-float-label">
                                    <Field
                                     type="text"
                                      className="form-control"
                                      name="nationalCode"
                                      validate={nationalCode}
                                    />
                                    <span>
                                      <IntlMessages id="forms.national-code" />
                                    </span>
                                  </Label>

                                  {errors.nationalCode && touched.nationalCode && (
                                    <div className="invalid-feedback d-block">
                                      {errors.nationalCode}
                                    </div>
                                  )}
                                </FormGroup>
                              </Colxx>
                            </Row>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </Step>
                  <Step
                    id="step3"
                    hideTopNav
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
                                // validate={validatePassword}
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
