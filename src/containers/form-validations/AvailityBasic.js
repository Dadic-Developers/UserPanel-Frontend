import React from 'react';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody } from 'reactstrap';

const AvailityBasic = () => {
  const onSubmit = (event, errors, values) => {
    console.log(errors);
    console.log(values);
    if (errors.length === 0) {
      // submit
    }
  };

  return (
    <Card className="mb-5">
      <CardBody>
        <h6 className="mb-4">ساده</h6>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup>
            <Label>نام</Label>
            <AvInput name="name" required />
            <AvFeedback>نام اجباری است!</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Label>رتبه</Label>
            <AvInput name="rank" required />
            <AvFeedback>یه ارور همینطوری</AvFeedback>
          </AvGroup>

          <AvField
            type="select"
            name="select"
            required
            label="مثلا یه گزینه"
            errorMessage="یکی از گزینه هارو باید انتخاب کنی!"
          >
            <option value="0" />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>

          <AvGroup>
            <Label>جزئیات</Label>
            <AvInput type="textarea" name="details" id="details" required />
            <AvFeedback>جزئیات هم باید وارد کنی!</AvFeedback>
          </AvGroup>

          <AvRadioGroup
            className="error-l-150"
            name="radioCustomInputExample"
            required
          >
            <Label className="d-block">رادیوباتن های سفارشی</Label>
            <AvRadio customInput label="کیک" value="Cake" />
            <AvRadio customInput label="کاپ کیک" value="Cupcake" />
            <AvRadio customInput label="دسر" value="Dessert" />
          </AvRadioGroup>

          <AvCheckboxGroup
            className="error-l-150"
            inline
            name="checkboxCustomInputExample2"
            required
          >
            <Label className="d-block">چک باکس های سفارشی</Label>
            <AvCheckbox customInput label="بله" value="Yes" />
            <AvCheckbox customInput label="خیر" value="No" />
          </AvCheckboxGroup>
          <Button color="primary">ارسال فرم</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityBasic;
