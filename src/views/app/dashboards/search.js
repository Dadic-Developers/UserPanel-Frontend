/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';
import images from 'assets/img/search/black.jpg';

import {
  Row,
  Input,
  Label,
  CustomInput,
  Form,
  FormGroup,
  Button,
  // Dropdown,
  // DropdownMenu,
  // DropdownToggle,
  Card,
  CardBody,
  CardTitle,

  // ModalHeader,
  // ModalBody,
  // ModalFooter,
  // Modal,
  // Button,
} from 'reactstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { DatePicker } from 'react-advance-jalaali-datepicker';
import LoadList from './gov.json';
import ResultSearch from './ResultSearch';

const selectDataTypeSearch = [
  { value: '1', label: 'ماده قانونی' },
  { value: '2', label: 'تبصره' },
  { value: '3', label: 'بخشنامه' },
  { value: '4', label: 'دستورالعمل' },
  { value: '5', label: 'آیین نامه' },
  { value: '6', label: 'رای شورا' },
  { value: '7', label: 'دیوان عدالت اداری' },
  { value: '8', label: 'تصویب‌نامه‌ها و تصمیم‌نامه‌ها' },
  { value: '9', label: 'دادنامه' },
  { value: '10', label: 'فرامین رهبری' },
];

const Search = ({ match }) => {
  // const [selectedOption, setSelectedOption] = useState('');
  // const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
  const [buttonBasicOpenAdvanceSearch, setbuttonBasicOpenAdvanceSearch] =
    useState(false);
  const [selectedOptionAdvanceSearch, setSelectedOptionAdvanceSearch] =
    useState('');
  const [startDateLO, setStartDateLO] = useState('');
  const [numberOfInputsPlas, setNumberOfInputsPlas] = useState(1);
  const [numberOfInputsMinus, setNumberOfInputsMinus] = useState(0);
  const [isMinusDisabled, setIsMinusDisabled] = useState(true);

  function datePickerInput(props) {
    return <input className="popo form-control" {...props} />;
  }

  useEffect(() => {
    setIsMinusDisabled(numberOfInputsPlas + numberOfInputsMinus <= 1);
  }, [numberOfInputsPlas, numberOfInputsMinus]);
  const togglebtnAdvanced = () => {
    setbuttonBasicOpenAdvanceSearch(!buttonBasicOpenAdvanceSearch);
  };

  const handlePlusClick = () => {
    setNumberOfInputsPlas(numberOfInputsPlas + 1);
    if (numberOfInputsPlas > 1) {
      setIsMinusDisabled(false);
    }
  };
  const handlemMinusClick = () => {
    setNumberOfInputsMinus(numberOfInputsMinus - 1);
  };

  const optionsListSearch = LoadList.flatMap((listItem) => {
    return listItem.Ejrai.flatMap((getItem) => {
      return getItem.suborg.map((setItem) => ({
        label: setItem.title,
        value: setItem.id,
      }));
    });
  });
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.search" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Colxx xxs="12" className="mb-4">
        <Card>
          <CardBody>
            <Row className="justify-content-center mb-2">
              <img
                src={images}
                alt="daadic"
                className="img-thumbnail border-0 list-thumbnail align-self-center "
              />
            </Row>
            <Row className="justify-content-center mb-2">
              <label className="mt-2">
                <IntlMessages id="form-organization-selection" />
              </label>
              <Colxx xxs="12" md="5">
                <Select
                  // components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  placeholder="انتخاب سازمان"
                  options={optionsListSearch}
                  // value={selectedOption}
                  // onChange={setSelectedOption}
                />
              </Colxx>
            </Row>
            <Row className="justify-content-center">
              <Colxx xxs="12" md="5">
                <FormGroup className="form-group has-float-label">
                  <Label>
                    <IntlMessages id="forms.search" />
                  </Label>
                  <Input className="form-control" name="search" />
                  <i className="simple-icon-magnifier" />
                </FormGroup>
              </Colxx>
              <Colxx xxs="12" md="2">
                <Button
                  color="primary"
                  size="sm"
                  className="mb-2"
                  onClick={togglebtnAdvanced}
                >
                  <IntlMessages id="button.advanced-search" />
                  {setbuttonBasicOpenAdvanceSearch}
                </Button>
              </Colxx>
            </Row>
            <Row className="justify-content-center">
              <FormGroup>
                <div className="d-flex m-1">
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
                </div>
              </FormGroup>
            </Row>
            {buttonBasicOpenAdvanceSearch && (
              <Row className="mb-4">
                <Colxx xxs="12">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="forms.advanced-search" />
                      </CardTitle>
                      <Form className="form-group">
                        <FormGroup row>
                          <Colxx xxs="12" md="6">
                            <Label className="form-group has-float-label">
                              <Input type="number" />
                              <span>
                                <IntlMessages id="forms.search.number" />
                              </span>
                            </Label>
                          </Colxx>
                          <Colxx xxs="12" md="6">
                            <div className="form-group has-float-label">
                              <Select
                                components={{ Input: CustomSelectInput }}
                                className="react-select"
                                classNamePrefix="react-select"
                                name="form-field-name"
                                value={selectedOptionAdvanceSearch}
                                onChange={(val) =>
                                  setSelectedOptionAdvanceSearch(val)
                                }
                                options={selectDataTypeSearch}
                                placeholder="انتخاب نوع جستجو"
                              />
                              <span>
                                <IntlMessages id="forms.search.type" />
                              </span>
                            </div>
                          </Colxx>
                          <Colxx xxs="12" md="6">
                            <div className="form-group has-float-label">
                              <DatePicker
                                inputComponent={datePickerInput}
                                format="jYYYY/jMM/jDD"
                                onChange={(val) => setStartDateLO(val)}
                                selected={startDateLO}
                                idStart="rangePickerStart"
                              />
                              <span>
                                <IntlMessages id="forms.search.data.start" />
                              </span>
                            </div>
                          </Colxx>
                          <Colxx xxs="12" md="6">
                            <div className="form-group has-float-label">
                              <DatePicker
                                inputComponent={datePickerInput}
                                selected={startDateLO}
                                format="jYYYY/jMM/jDD"
                                onChange={(val) => setStartDateLO(val)}
                                idEnd="rangePickerEnd"
                              />
                              <span>
                                <IntlMessages id="forms.search.data.end" />
                              </span>
                            </div>
                          </Colxx>
                          <Row className="w-100">
                            {[
                              ...Array(
                                numberOfInputsPlas + numberOfInputsMinus
                              ),
                            ].map((i) => (
                              <Row key={i} className="col-12 col-md-10">
                                <Colxx xxs="12" md="4">
                                  <Label className="form-group has-float-label">
                                    <Input type="text" />
                                    <span>
                                      <IntlMessages id="forms.search.legalarticle" />
                                    </span>
                                  </Label>
                                </Colxx>
                                <Colxx xxs="12" md="4">
                                  <Label className="form-group has-float-label">
                                    <Input type="text" readOnly />
                                    <span>
                                      <IntlMessages id="forms.search.season" />
                                    </span>
                                  </Label>
                                </Colxx>
                                <Colxx xxs="12" md="3">
                                  <Label className="form-group has-float-label">
                                    <Input type="text" readOnly />
                                    <span>
                                      <IntlMessages id="forms.search.bob" />
                                    </span>
                                  </Label>
                                </Colxx>
                              </Row>
                            ))}
                            <Colxx xxs="12" md="1">
                              <Button color="primary" onClick={handlePlusClick}>
                                <IntlMessages id="+" />
                              </Button>
                            </Colxx>
                            <Colxx xxs="12" md="1">
                              <Button
                                color="primary"
                                onClick={handlemMinusClick}
                                disabled={isMinusDisabled}
                              >
                                <IntlMessages id="-" />
                              </Button>
                            </Colxx>
                          </Row>
                          <Colxx xxs="12" md="6">
                            <Label className="form-group has-float-label">
                              <Input type="text" />
                              <span>
                                <IntlMessages id="forms.search.document.number" />
                              </span>
                            </Label>
                          </Colxx>
                          <Colxx xxs="12" md="6">
                            <FormGroup>
                              <CustomInput
                                type="checkbox"
                                id="forms.search.document.history"
                                label="جستجو بر اساس تاریخجه سند"
                              />
                            </FormGroup>
                          </Colxx>
                        </FormGroup>
                        <Button color="primary">
                          <IntlMessages id="forms.search" />
                        </Button>
                      </Form>
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
            )}
          </CardBody>
        </Card>
      </Colxx>

      <ResultSearch />
    </>
  );
};
export default Search;
