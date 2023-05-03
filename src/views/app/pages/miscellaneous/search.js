/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import CustomSelectInput from 'components/common/CustomSelectInput';
import Select from 'react-select';
import images from 'assets/img/search/Dadic1.png';
// import { LoadListGov } from "./Gov/index";
import {
  Row,
  Input,
  Label,
  Form,
  CustomInput,
  FormGroup,
  Button,
  // Card,
  // CardBody,
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
const Search = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');

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
      <Row>
        {/* <span
            className="search-icon"
            onClick={(e) => handleSearchIconClick(e)}
          >
            <i className="simple-icon-magnifier" />
          </span> */}
      </Row>
      <Row>
        <Colxx xxs="12" md="1">
          <img
            src={images}
            alt="daadic"
            className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
          />
        </Colxx>
        <Colxx xxs="12" md="6">
          <Form className="form-group">
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
          </Form>
        </Colxx>
        <Colxx xxs="12" md="5">
          <label>
            <IntlMessages id="form-organization-selection" />
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
      <FormGroup>
        {/* <Label for="exCustomRadio">
          <IntlMessages id="forms.gender" />
        </Label> */}
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
          {/* <CustomInput
            type="radio"
            id="exCustomRadio3"
            label="ولی نه این یکی چون غیرفعاله"
            disabled
          /> */}
        </div>
      </FormGroup>
      <div className="mb-4">
        <Button color="primary" size="sm" className="mb-2">
          <IntlMessages id="button.advanced-search" />
        </Button>{' '}
      </div>
      {/* <Card> */}
      {/* <CardBody> */}
      {/* <CardTitle>
          <IntlMessages id="dashboards.tickets" />
        </CardTitle> */}
      <div className="dashboard-list-with-user">
        {/* <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          > */}

        <div
          // key={index}
          className="d-flex flex-row mb-3 pb-3 border-bottom"
        >
          {/* <NavLink to={`${adminRoot}/pages/product/details`}> */}

          {/* </NavLink> */}

          <div className="pl-3 pr-2">
            {/* <NavLink to={`${adminRoot}/pages/product/details`}>
                      <p className="font-weight-medium mb-0 ">{ticket.title}</p>
                      <p className="text-muted mb-0 text-small">
                        {ticket.detail}
                      </p>
                    </NavLink> */}
          </div>
        </div>

        {/* </PerfectScrollbar> */}
      </div>
      {/* </CardBody> */}
      {/* </Card> */}
    </>
  );
};

export default Search;
