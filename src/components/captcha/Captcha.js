import React, { useState, useEffect } from 'react';
import { Input, Label } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import bgimage from '../../assets/img/login/bg2.png';

function Captcha({ setCaptcha, onChange, inputValue, Flage }) {
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
    <div className="row">
      <Colxx sm={6}>
        <Label className="form-group has-float-label">
          <Input type="text" value={inputValue} onChange={onChange} />
          <span>
            <IntlMessages id="forms.captcha" />
          </span>
        </Label>
      </Colxx>
      <Colxx sm={6}>
        <h1 className="dz-upload talign-center"
          style={{
            backgroundImage: `URL(${bgimage})`,
            width: '100%',
            textAlign: 'center',
           
            letterSpacing: '5',
          }}
        >
          {' '}
          {captchaText}
        </h1>
      </Colxx>
      {/* <button type='submit' onSubmit={() =>{handleSubmit()}}>btn</button> */}
    </div>
  );
}

export default Captcha;
