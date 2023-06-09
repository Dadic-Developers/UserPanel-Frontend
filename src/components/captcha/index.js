import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Label, FormGroup } from 'reactstrap';
import { Field } from 'formik';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';

class Captcha extends Component {
  componentDidMount() {
    loadCaptchaEnginge(4);
  }
//  validatePassword = (value) => {
//     let error;
//     if (!value) {
//       error = 'لطفا رمز را وارد کنید';
//     } else if (value.length < 4) {
//       error = 'رمز عبور باید بیشتر از 3 کاراکتر باشد';
//     }
//     return error;
//   };
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

      <>
        <LoadCanvasTemplate />
        <FormGroup className="form-group has-float-label">
          <Label>
            <IntlMessages id="forms.captcha" />
          </Label>
          <Field
            className="form-control"
            type="text"
            name="capcha"

            // validate={validatePassword}
          />
        </FormGroup>
      </>
    );
  }
}

export default Captcha;
