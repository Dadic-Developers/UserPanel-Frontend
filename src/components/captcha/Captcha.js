import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';


import { Colxx } from 'components/common/CustomBootstrap';

function Captcha({
  setCaptcha,
  onChange,
  inputValue,
  Flage,

}) {
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
      <Colxx xxs="6">
        <h1>Security Code : {captchaText}</h1>

        <h4 color="light"> {captchaText}</h4>
      </Colxx>

      {/* <button type='submit' onSubmit={() =>{handleSubmit()}}>btn</button> */}
      <div>
        <Input type="text" value={inputValue} onChange={onChange} />
      </div>
    </div>
  );
}

export default Captcha;
