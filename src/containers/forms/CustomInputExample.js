import React from 'react';
import { FormGroup, Label, CustomInput, Form } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';

const CustomInputExample = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exCustomCheckbox">
          <IntlMessages id="form-components.checkboxes" />
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox"
            label="این چک باکس رو علامت بزنین"
          />
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox2"
            label="یا این یکی"
          />
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox3"
            label="ولی نه این یکی چون غیرفعاله"
            disabled
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exCustomRadio">
          <IntlMessages id="forms.gender" />
        </Label>
        <div>
          <CustomInput
            type="radio"
            id="exCustomRadio"
            name="customRadio"
            label="مطابق با عبارت"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio2"
            name="customRadio"
            label="همراه با تشابه"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio3"
            label="ولی نه این یکی چون غیرفعاله"
            disabled
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exCustomInline">
          <IntlMessages id="form-components.inline" />
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exCustomInline"
            label="یه اینپوت خطی"
            inline
          />
          <CustomInput
            type="checkbox"
            id="exCustomInline2"
            label="یکی دیگه کنارش"
            inline
          />
        </div>
      </FormGroup>
    </Form>
  );
};

export default CustomInputExample;
