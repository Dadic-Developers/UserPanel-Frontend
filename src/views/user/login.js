import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { loginUser } from 'redux/actions';
import Captcha from 'components/captcha/Captcha';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'لطفا رمز را وارد کنید';
  } else if (value.length < 4) {
    error = 'رمز عبور باید بیشتر از 3 کاراکتر باشد';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'لطفا پست الکترونیکی را وارد کن';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'ایمیل مورد نظر نامعتبر است';
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [captchaText, setCaptchaText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [flage, setFlage] = useState(true);
  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        error,
        'ارور ورود به سایت',
        3000,
        null,
        null,
        ''
      );
    }
  }, [error]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        loginUserAction(values, history);
      }
    }
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const setCaptcha = (code) => {
    setCaptchaText(code);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = captchaText.replace(/\s+/g, '');
    if (inputValue.toLocaleLowerCase() === code.toLocaleLowerCase()) {
      alert('OK');

      setInputValue('');
    } else {
      // alert('FAILED');

      setInputValue('');
    }
    setFlage(!flage);
  };

  const initialValues = { email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto m-all-outo">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h5 text-theme-1 ">
              همه به یک دستیار هوشمند نیاز داریم
            </p>
            <p className="text-white mb-0 text-theme-1">
              اگه حساب کاربری نداری نگران نباش، از{' '}
              <NavLink to="/user/register" className=" text-theme-1">
                اینجا
              </NavLink>{' '}
              میتونی تو سایت اسمتو بویسی
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.login-title" />
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form
                  className="av-tooltip tooltip-label-bottom"
                  id="frm-login"
                >
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
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
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.password" />
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <Captcha
                    setCaptcha={setCaptcha}
                    Flage={flage}
                    onChange={onChange}
                    inputValue={inputValue}
                    captchaText={captchaText}
                  />
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <NavLink to="/user/forgot-password">
                      <IntlMessages id="user.forgot-password-question" />
                    </NavLink>
                    <Button
                      onClick={handleSubmit}
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.login-button" />
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
