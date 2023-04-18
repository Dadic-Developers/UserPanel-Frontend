import React, { useState, useEffect } from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
// import bgimage from '../../assets/img/login/bg2.png';

function Captcha({ setCaptcha, onChange, inputValue, Flage, setFlag }) {
  const [captchaText, setCaptchaText] = useState('');
  // const [inputValue, setInputValue] = useState('');

  const generateCaptcha = () => {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    const choices = [...charset];
    const array = [];
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const randomItem = choices.splice(randomIndex, 1)[0];
      array.push(randomItem);
    }
    setCaptchaText(array.join(' '));
    setCaptcha(array.join(' '));
  };
  useEffect(() => {
    generateCaptcha();
  }, [Flage]);

  return (
    <div>
      <FormGroup row>
        <Colxx sm={7}>
          <Label className="form-group has-float-label">
            <Input
              type="text"
              value={inputValue}
              onChange={onChange}
              style={{ width: '185%' }}
            />
            <span>
              <IntlMessages id="forms.captcha" />
            </span>
          </Label>
        </Colxx>
        <Colxx sm={3}>
          <h1
            style={{
              background: 'linear-gradient(#29332e, #898c80)',
              color: 'white',
            }}
          >
            {captchaText}
          </h1>
        </Colxx>
        <Colxx sm={2}>
          <button
            type="button"
            className="btn btn-header-light icon-button "
            onClick={() => setFlag()}
          >
            <i className="simple-icon-refresh" style={{ fontSize: '20px' }} />
          </button>
        </Colxx>
      </FormGroup>
    </div>
  );
}

export default Captcha;
