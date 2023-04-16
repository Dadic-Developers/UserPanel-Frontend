import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { forgotPassword } from 'redux/actions';
import { NotificationManager } from 'components/common/react-notifications';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'لطفا پست الکترونیکی خودتو وارد کن';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'ایمیل که وارد کردی نامعتبره';
  }
  return error;
};

const ForgotPassword = ({
  history,
  forgotUserMail,
  loading,
  error,
  forgotPasswordAction,
}) => {
  const [email] = useState('demo@coloredstrategies.com');

  const onForgotPassword = (values) => {
    if (!loading) {
      if (values.email !== '') {
        forgotPasswordAction(values, history);
      }
    }
  };

  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        error,
        'Forgot Password Error',
        3000,
        null,
        null,
        ''
      );
    } else if (!loading && forgotUserMail === 'success')
      NotificationManager.success(
        'لطفا ایمیلت رو چک کن',
        'Forgot Password Success',
        3000,
        null,
        null,
        ''
      );
  }, [error, forgotUserMail, loading]);

  const initialValues = { email };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto m-all-outo">
        <Card className="auth-card">
          <div className="position-relative image-side text-justify">
            <p className="text-white text-theme-1 h2">رادپردازن عصر جدید</p>
            <span className="text-white mb-0 text-theme-1 ql-editor  ">
              {/* <NavLink to="/user/register" className="white">
                اینجا
              </NavLink> */}
              از طریق این صفحه شما می‌توانید حساب کاربری خود را بازیابی کنید.
              پست الکترونیکی وارد شده می‌بايست پیش از این در سامانه ثبت شده باشد
              در غیر اینصورت کد اعتبارسنجی به آدرس پست الکترونیکی شما ارسال
              نخواهد شد. پس از ارسال کد اعتبارسنجی به آدرس پست الکترونیکی، ۵
              دقیقه فرصت خواهید داشت تا این کد را وارد کنید در غیر این صورت کد
              منقضی شده و می‌بايست مجددا تلاش کنید.
            </span>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.forgot-password" />
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onForgotPassword}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
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

                  <div className="d-flex justify-content-end align-items-center">
                    {/* <NavLink to="/user/forgot-password">
                      <IntlMessages id="user.forgot-password-question" />
                    </NavLink> */}
                    <Button
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
                        <IntlMessages id="user.reset-password-button" />
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
  const { forgotUserMail, loading, error } = authUser;
  return { forgotUserMail, loading, error };
};

export default connect(mapStateToProps, {
  forgotPasswordAction: forgotPassword,
})(ForgotPassword);
