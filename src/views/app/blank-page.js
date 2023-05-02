/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React , { useState }  from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import ReactSelectExample from 'containers/forms/ReactSelectExample';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';


const selectData = [
  { label: 'سازمان امور مالیاتی کشور', value: 'stateTaxOrganization', key: 0 },
  { label: 'قوه قضائیه', value: 'Judiciary', key: 1 },
  { label: 'دسر', value: 'dessert', key: 2 },
];

const BlankPage = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');
//  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.blank-page" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
      <Colxx xxs="12" md="6" className="mb-5">
        <label>
          <IntlMessages id="form-components.state-single" />
        </label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          value={selectedOption}
          onChange={setSelectedOption}
          options={selectData}
        />
      </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
