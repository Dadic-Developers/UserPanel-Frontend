import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';

const Register = ({ history }) => {
  const [email] = useState('');
  const [password] = useState('gogo123');
  const [name] = useState(' ');
  const [nationalCode] = useState('123456789');
  const [family] = useState('کاظمی زاده');
  const [fixedNumber] = useState('33123456');
  const [phoneNumber] = useState('09366249218');

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push(adminRoot);
    }
    // call registerUserAction()
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto m-all-outo">
        <Card className="auth-card">
          <div className="position-relative image-side text-justify">
            <p className="text-white h2 text-theme-1">رادپردازن عصر جدید</p>
            <span
              className="text-white mb-0 text-theme-1 "
              style={{ lineHeight: 2 }}
            >
              با سلام و احترام، خوشحالیم که شما را به جامعه ما خوش آمد می‌گوییم!
              لطفا فرم زیر را با دقت پر کرده و اطلاعات درست و کامل را وارد
              نمایید تا بتوانیم تجربه بهتری را برای شما فراهم کنیم.از  زمانی که
              عضو جامعه ما شوید، شما میتوانید از جذابیت‌ های فراوانی که این
              جامعه برای شما فراهم می‌کند بهره‌مند شوید. ما به اطلاعات شما
              احترام می‌گذاریم و هیچگونه اطلاعات شخصی شما را با شخص یا شرکت
              دیگری به اشتراک نمی‌گذاریم. با ارسال این فرم، شما با قوانین و
              شرایط استفاده از خدمات ما موافقت می‌کنید.
              {/* <NavLink to="/user/login" className="white">
                اینجا
              </NavLink>{' '} */}
            </span>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <div className="row" Colxx sm={12}>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.name" />
                    </Label>
                    <Input type="name" defaultValue={name} />
                  </FormGroup>
                </Colxx>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.family" defaultValue={family} />
                    </Label>
                    <Input type="family" />
                  </FormGroup>
                </Colxx>
              </div>
              <div className="row" Colxx sm={12}>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages
                        id="user.national-Code"
                        defaultValue={nationalCode}
                      />
                    </Label>
                    <Input type="tel"  pattern="[0-9]*" />
                  </FormGroup>
                </Colxx>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input type="email" defaultValue={email} />
                  </FormGroup>
                </Colxx>
              </div>
              <div className="row" Colxx sm={12}>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages
                        id="user.fixed-number"
                        defaultValue={fixedNumber}
                      />
                    </Label>
                    <Input type="" />
                  </FormGroup>
                </Colxx>
                <Colxx sm={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages
                        id="user.phone-number"
                        defaultValue={phoneNumber}
                      />
                    </Label>
                    <Input type="" />
                  </FormGroup>
                </Colxx>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  onClick={() => onUserRegister()}
                >
                  <IntlMessages id="user.register-button" />
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
