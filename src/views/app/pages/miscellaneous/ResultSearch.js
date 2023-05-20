/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Select from 'react-select';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

import { ButtonGroup, Button, Row, CardBody, Card, Table } from 'reactstrap';

const selectDataorderby = [
  { label: 'تاریخ', value: 'date', key: 0 },
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
  const [selectedOptionType, setSelectedOptionType] = useState('ماده');
  const handleButtonClickLableOption = (event) => {
    const selectedLabel = event.currentTarget.getAttribute('data-label');
    setSelectedOptionType(selectedLabel);
  };
  return (
    <Row className="mb-4">
      <Colxx>
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
              <Colxx md="12" className="mb-5">
                <ButtonGroup className="d-flex flex-column flex-lg-row">
                  {optionType.map(
                    (option) =>
                      option.value !== '11' && (
                        <Button
                          key={option.value}
                          data-label={option.label}
                          className="mb-1 mb-lg-0"
                          onClick={handleButtonClickLableOption}
                        >
                          <i className={option.icon} />
                          {option.label}
                        </Button>
                      )
                  )}
                </ButtonGroup>
              </Colxx>
              <Colxx md="12" className="mb-5">
                <Table borderless>
                  <thead>
                    <tr>
                      <th scope="col-4">{selectedOptionType}</th>
                      <th scope="col-4">باب</th>
                      <th scope="col-4">فصل</th>
                    </tr>
                    <tr>
                      <td>شماره سند</td>
                      <td>
                        <i className="iconsminds-profile" />
                      </td>
                      <td>
                        {' '}
                        <i className="iconsminds-profile" />
                      </td>
                      <td>
                        <i className="iconsminds-profile" />
                      </td>
                      <td>نظرسنجی</td>
                    </tr>
                  </thead>
                </Table>
                <span>
                  لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                  آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                  می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                  گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                  نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای
                  صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
                  تا صرفا به مشتری یا صاحب کار خود نشان دهند
                </span>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default TableResultSearch;
