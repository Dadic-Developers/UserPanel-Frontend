/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Select from 'react-select';
import IntlMessages from 'helpers/IntlMessages';
// import CustomSelectInput from 'components/common/CustomSelectInput';
import { Colxx } from 'components/common/CustomBootstrap';
import { ButtonGroup, Button, Row, CardBody, Card } from 'reactstrap';

const selectDataorderby = [
  { label: 'تاریخ', value: 'date', key: 0  },
  { label: 'ماده', value: 'matter', key: 1 },
];
const selectDatasortby = [
    { label: 'صعودی', value: 'ascending', key: 0 },
    { label: 'نزولی', value: 'descending', key: 1 },
  ];
const optionType = [
  { value: '11', label: 'همه موارد' },
  { value: '1', label: 'ماده', icon: 'simple-icon-layers' },
  // { value: "2", label: "تبصره", icon: "nc-icon nc-map-big" },
  { value: '3', label: 'بخشنامه', icon: 'simple-icon-list' },
  { value: '4', label: 'دستورالعمل', icon: 'iconsminds-notepad' },
  { value: '5', label: 'آیین نامه', icon: 'simple-icon-docs' },
  { value: '6', label: 'رای شورا', icon: 'simple-icon-tag' },
  { value: '7', label: 'دیوان عدالت اداری', icon: 'simple-icon-vector' },
  {
    value: '8',
    label: 'تصویب‌نامه‌ها و تصمیم‌نامه‌ها',
    icon: 'iconsminds-email',
  },
  { value: '9', label: 'دادنامه', icon: 'iconsminds-newspaper' },
  { value: '10', label: 'فرامین رهبری', icon: 'iconsminds-quotes' },
];
const TableResultSearch = () => {
  const [selectedOptionOrderby, setSelectedOptionOrderby] = useState('');
  const [selectedOptionSortby, setSelectedOptionSortby] = useState('');
  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <Row>
              <Colxx xxs="12" md="6" className="mb-5">
                <div className="form-group has-float-label">
                  <Select
                    className="react-select"
                    name="form-field-name"
                    value={selectedOptionOrderby}
                    onChange={(val) => setSelectedOptionOrderby(val)}
                    options={selectDataorderby}
                    placeholder=""
                  />
                  <span>
                    <IntlMessages id="forms.search.orderby" />
                  </span>
                </div>
              </Colxx>
              <Colxx xxs="12" md="6" className="mb-5">
                <div className="form-group has-float-label">
                  <Select
                    className="react-select"
                    name="form-field-name"
                    value={selectedOptionSortby}
                    onChange={(val) => setSelectedOptionSortby(val)}
                    options={selectDatasortby}
                    placeholder=""
                  />
                  <span>
                    <IntlMessages id="forms.search.sortby" />
                  </span>
                </div>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-5">
                <ButtonGroup>
                  {optionType.map(
                    (option) =>
                      option.value !== '11' && (
                        <Button key={option.value}>
                          <i className={option.icon} />
                          {option.label}
                        </Button>
                      )
                  )}
                </ButtonGroup>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default TableResultSearch;
