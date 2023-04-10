import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';

import { FormGroup, Label, Input } from 'reactstrap';
// import { Field } from 'formik';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

class Captcha extends Component {
  componentDidMount() {
    loadCaptchaEnginge(4);
  }

  doSubmit = () => {
    const userCaptcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(userCaptcha) === true) {
      alert('Captcha Matched');
      loadCaptchaEnginge(4);
      document.getElementById('user_captcha_input').value = '';
    } else {
      alert('Captcha Does Not Match');
      document.getElementById('user_captcha_input').value = '';
    }
  };

  render() {
    return (
      // <div>
      //   <FormGroup className="form-group has-float-label">
      //     <Label className="form-group has-float-label">
      //       <Input type="email" />
      //       <span>
      //         <IntlMessages id="forms.captcha.message" />
      //         <LoadCanvasTemplate />
      //       </span>
      //     </Label>
      //   </FormGroup>
      // </div>

      <FormGroup className="form-group has-float-label">
        <Label className="form-group has-float-label">
          <Input type="email" />
          <span>
            <IntlMessages id="forms.captcha.message" />
            <LoadCanvasTemplate />
          </span>
        </Label>
      </FormGroup>
    );
  }
}

export default Captcha;
