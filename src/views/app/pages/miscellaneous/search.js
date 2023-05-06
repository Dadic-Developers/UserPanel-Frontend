/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';
import images from 'assets/img/search/black.jpg';
// import LoadListGov from './../../../../Gov/gov.Json';
import {
  Row,
  Input,
  Label,
  CustomInput,
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

// import { NavLink } from 'react-router-dom';
// import axios from 'axios';

// import Pagination from 'containers/pages/Pagination';
// import { servicePath } from 'constants/defaultValues';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Formik, Form, Field } from 'formik';

import {
  FormikReactSelect,
  FormikTagsInput,
  FormikDatePicker,
} from './FormikFields';

// const apiUrl = `${servicePath}/cakes/paging`;
const selectData = [
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کیک', value: 'cake', key: 0 },
  { label: 'کاپ کیک', value: 'cupcake', key: 1 },
  { label: 'دسر', value: 'dessert', key: 2 },
];
const options = [
  { value: 'food', label: 'تهران' },
  { value: 'beingfabulous', label: 'گلستان', disabled: true },
  { value: 'reasonml', label: 'خراسان' },
  { value: 'unicorns', label: 'اصفهان' },
  { value: 'kittens', label: 'فارس' },
];
const Search = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');
  // const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
  const [buttonBasicOpen, setButtonBasicOpen] = useState(false);
  const onSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      state: values.state.value,
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  const togglebtnAdvanced = () => {
    setButtonBasicOpen(!buttonBasicOpen);
  };
  // const [IsLoading ,setIsLoading] = useState(true);
  // const [Items, setItems] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [keyword] = useState('Cake');
  // const [pageSize] = useState(10);
  // const [totalPage, setTotalPage] = useState(0);
  // const [modalBasic, setModalBasic] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     axios
  //       .get(
  //         `${apiUrl}?pageSize=${pageSize}&currentPage=${currentPage}&search=${keyword}`
  //       )
  //       .then((res) => {
  //         return res.data;
  //       })
  //       .then((data) => {
  //         setItems(data.data);
  //         setTotalPage(data.totalPage);
  //         setIsLoading(false);
  //       });
  //   }
  //   fetchData();
  // }, [pageSize, currentPage, keyword]);
  // const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.search" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {/* <Row>
        <Colxx xxs="12" className="mb-4">
  
          <Card>
            <CardBody>
              {!isLoading ? (
                items.map((item, i) => {
                  return (
                    <div
                      key={`item_${i}`}
                      className={`${items.length !== i + 1 ? 'mb-3' : ''}`}
                    >
                      <NavLink to={`#${item.id}`} className="w-40 w-sm-100">
                        <p className="list-item-heading mb-1 color-theme-1">
                          {item.title}
                        </p>
                        <p className="mb-1 text-muted text-small">
                          Products | {item.category}
                        </p>
                        <p className="mb-4 text-small">{item.description}</p>
                      </NavLink>
                      {items.length !== i + 1 && <Separator />}
                    </div>
                  );
                })
              ) : (
                <div className="loading" />
              )}
            </CardBody>
          </Card>
        </Colxx>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={(i) => setCurrentPage(i)}
        />
      </Row>  */}
      {/* مودال اطلاعه به کاربر */}
      {/* <Modal
        isOpen={modalBasic}
        toggle={() => setModalBasic(!modalBasic)}
      >
        <ModalHeader>
          یک پیام از طرف طراح محصول (فاطمه کاظمی) :
        </ModalHeader>
        <ModalBody>
          کاربر عزیزی که الان این صفحه رو باز کردی
          <br />
          شاید برات سوال باشه که چرا این صفحه انگلیسیه. خب باید بگم داده های این صفحه کاملا داره از وب سرویس خونده میشه و من هیچ دخالتی در ویرایش داده ها ندارم
          <br />
          میتونم اونو برات بصورت استاتیک و فارسی بزارم ولی دیگه برات این صفحه کاربردی نداره چون اصل استفاده ی این صفحه نمونه ی وب سرویس و فراخوانی داده از اونه
          <br />
          منم بخاطر همین بهش هیچ دست نمیزنم
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalBasic(false)}
          >
            اکی فهمیدم!
          </Button>{' '}
        </ModalFooter>
      </Modal> */}
      <Row className="mb-4">
        <Colxx xxs="12">
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
                <label>
                  <IntlMessages id="form-organization-selection" />
                </label>
                <Colxx xxs="12" md="7">
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
              <Row className="justify-content-center mb-4">
                <Colxx xxs="12" md="8">
                  <Label className="form-group has-float-label">
                    {/* <LoadListGov
                selectedId={(idGov) => {
                  this.setState({ idGov: idGov });
                }}
              /> */}
                    <Input type="text" />
                    <span>
                      <IntlMessages id="menu.search" />
                      <i className="simple-icon-magnifier" />
                    </span>
                    {/* <span className="search-icon">
              
              </span> */}
                  </Label>
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
              <Row>
                <Button
                  color="primary"
                  size="sm"
                  className="mb-2"
                  onClick={togglebtnAdvanced}
                >
                  <IntlMessages id="button.advanced-search" />
                  {buttonBasicOpen ? 'Close Form' : 'Show Form'}
                </Button>
              </Row>
              <Row>
                {buttonBasicOpen && (
                  <Colxx xxs="12">
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <IntlMessages id="forms.top-labels-over-line" />
                        </CardTitle>

                        <Formik
                          initialValues={{
                            email: 'test@test.com',
                            password: '',
                            tags: [],
                            date: null,
                            state: { value: 'reasonml', label: 'تهران' },
                          }}
                          // validationSchema={SignupSchema}
                          onSubmit={onSubmit}
                        >
                          {({
                            // handleSubmit,
                            setFieldValue,
                            setFieldTouched,
                            // handleChange,
                            // handleBlur,
                            values,
                            errors,
                            touched,
                            // isSubmitting,
                          }) => (
                            <Form className="av-tooltip tooltip-label-bottom">
                              <FormGroup className="form-group has-float-label">
                                <Label>
                                  <IntlMessages id="forms.email" />
                                </Label>
                                <Field className="form-control" name="email" />
                                {errors.email && touched.email ? (
                                  <div className="invalid-feedback d-block">
                                    {errors.email}
                                  </div>
                                ) : null}
                              </FormGroup>
                              <FormGroup className="form-group has-float-label">
                                <Label>
                                  <IntlMessages id="forms.password" />
                                </Label>
                                <Field
                                  className="form-control"
                                  name="password"
                                  type="password"
                                />
                                {errors.password && touched.password ? (
                                  <div className="invalid-feedback d-block">
                                    {errors.password}
                                  </div>
                                ) : null}
                              </FormGroup>

                              <FormGroup className="form-group has-float-label">
                                <Label className="d-block">
                                  <IntlMessages id="form-components.tags" />
                                </Label>
                                <FormikTagsInput
                                  name="tags"
                                  value={values.tags}
                                  onChange={setFieldValue}
                                  onBlur={setFieldTouched}
                                />

                                {errors.tags && touched.tags ? (
                                  <div className="invalid-feedback d-block">
                                    {errors.tags}
                                  </div>
                                ) : null}
                              </FormGroup>

                              <FormGroup className="form-group has-float-label">
                                <Label className="d-block">
                                  <IntlMessages id="form-components.date" />
                                </Label>
                                <FormikDatePicker
                                  name="date"
                                  value={values.date}
                                  onChange={setFieldValue}
                                  onBlur={setFieldTouched}
                                />
                               
                              </FormGroup>

                              <FormGroup className="form-group has-float-label">
                                <Label>
                                  <IntlMessages id="forms.state" />
                                </Label>
                                <FormikReactSelect
                                  name="state"
                                  id="state"
                                  value={values.state}
                                  options={options}
                                  onChange={setFieldValue}
                                  onBlur={setFieldTouched}
                                />
                                {errors.state && touched.state ? (
                                  <div className="invalid-feedback d-block">
                                    {errors.state}
                                  </div>
                                ) : null}
                              </FormGroup>

                              <Button color="primary" type="submit">
                                ارسال فرم
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </CardBody>
                    </Card>
                  </Colxx>
                )}
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default Search;
