import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardHeader,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Separator, Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import GlideComponentThumbs from 'components/carousel/GlideComponentThumbs';
import { detailImages, detailThumbs } from 'data/carouselItems';
import detailsQuestionsData from 'data/questions';
import CommentWithLikes from 'components/pages/CommentWithLikes';
import { commentWithLikesData } from 'data/comments';
import QuestionAnswer from 'components/pages/QuestionAnswer';
import GalleryDetail from 'containers/pages/GalleryDetail';

const DetailsPages = ({ match, intl }) => {
  const [activeTab, setActiveTab] = useState('details');

  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>چیز کیک یا کیک پنیر</h1>
          <div className="text-zero top-right-button-container">
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                color="primary"
                size="lg"
                outline
                className="top-right-button top-right-button-single"
              >
                <IntlMessages id="pages.actions" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>
                  <IntlMessages id="pages.header" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.delete" />
                </DropdownItem>
                <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <Breadcrumb match={match} />
          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="12" xl="8" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <GlideComponentThumbs
                    settingsImages={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 5,
                      perView: 1,
                      data: detailImages,
                    }}
                    settingsThumbs={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 10,
                      perView: 5,
                      data: detailThumbs,
                      breakpoints: {
                        576: {
                          perView: 4,
                        },
                        420: {
                          perView: 3,
                        },
                      },
                    }}
                  />
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <Nav tabs className="card-header-tabs ">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'details',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('details')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.details-title" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'comments',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('comments')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.comments-title" />
                        (19)
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'questions',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('questions')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.questions-title" />
                        (6)
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="details">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          <p className="font-weight-bold">
                            بیاین یکم درباره این خوشمزه براتون بگم
                          </p>
                          <p>
                            «چیز‌کیک» یا «کیک پنیر» به عنوان یکی از قدیمی‌ترین و محبوب‌ترین دسرهای دنیا ریشه در آشپزی یونان باستان دارد. شاید برای‌تان جالب باشد که بدانید این دسر ۴ هزار ساله با برش مشهور مثلثی‌اش یکی از مقوی‌ترین و سالم‌ترین خوراکی‌ها در آن زمان محسوب می‌شده است. ۳۰ جولای (۸ مرداد) هر سال مصادف است با روز یکی از پرطرفدارترین شیرینی‌های دست‌ساز بشر یعنی همین چیز‌کیک. با ما باشید تا هم کمی در مورد تاریخچه چیز‌کیک بدانید و هم در فصل آلبالو، طرز تهیه چیز‌کیک یخچالی آلبالو با بیسکویت پتی بور یا ساقه طلایی را از سایت آشپزی pepper به شما آموزش بدهیم. <br />
                            <br />
                            از کیک عروسی گرفته تا کیکی مقوی که برای ورزشکاران یونانی در بازی‌های المپیک باستانی در ۷۷۶ سال قبل از میلاد مسیح سرو می‌شد همه تنها مخلوطی از آرد، عسل و پنیر بودند. در حقیقت نخستین بار اهالی جزیره «ساموس» در یونان این دسر خوشمزه را درست کردند. پس از شکست یونانی‌ها از سپاه رم، دستور چیز‌کیک مثل بسیاری از خوراکی‌ها و شیرینی‌های دیگر به رم باستان رسید. رمی‌ها به دستور پخت این دسر تخم‌مرغ هم اضافه کردند و با برگ‌بو، بوی زهم تخم‌مرغ را گرفتند.
                          </p>
                          <br />
                          <p className="font-weight-bold">
                            تاریخچه
                          </p>
                          <p>
                            بعد از کشورگشایی گسترده رمی‌ها بود که دستور طبخ چیز‌کیک به همراه خوراکی‌های دیگر به سرتاسر اروپا رسید و انگلیسی‌ها که مثل همیشه دوست داشتند سنت‌شکن باشند به دستور پخت این شیرینی پنیری مواد دیگری اضافه کردند. پنیر خوابانده شده در شیر، کره، شکر و تخم‌مرغ به علاوه مواد قبلی، چیز‌کیک محبوب هنری هشتم را تشکیل می‌دادند
                            <br />
                            <br />
                            بعد از آن پای چیزکیک توسط اروپایی‌ها به آمریکا هم باز شد. آمریکایی‌ها این بار پنیر خامه‌ای را که بعدها به پنیر «فیلادلفیا» مشهور شد را به مواد این کیک اضافه کردند تا آن‌جا که چیز‌کیک‌های آماده شده با پنیر خامه‌ای به «چیز‌کیک نیویورکی» مشهور شدند و از آن‌جا بود که پای چیز‌کیک با طعم‌های مختلف به یخچال قنادی‌ها و شیرینی فروشی‌ها باز شد. برای مثال چیزکیک ایتالیایی با پنیر «ریکوتا» و «توفو»، نوع آلمانی و هلندی این دسر با پنیر کاتیج و چیز‌کیک ژاپنی با سفیده و نشاسته فراوان از جمله مشهورترین چیز‌کیک‌ها در دنیا هستند.

                          </p>
                          <br />
                          <p className="font-weight-bold">نسبت استفاده مواد کیک</p>
                          <Table borderless>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">اسم</th>
                                <th scope="col">میزان</th>
                                <th scope="col">اجباری</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>پنیر ماسکارپونه</td>
                                <td>1 بسته</td>
                                <td>بله</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>پودر ژلاتین</td>
                                <td>1 ق.غ</td>
                                <td>بله</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>خامه قنادی</td>
                                <td>250 گرم</td>
                                <td>بله</td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="comments">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          {commentWithLikesData.map((item) => {
                            return (
                              <CommentWithLikes
                                data={item}
                                key={`comments_${item.key}`}
                              />
                            );
                          })}
                          <InputGroup className="comment-container">
                            <Input placeholder={messages['pages.addComment']} />
                            <InputGroupAddon addonType="append">
                              <Button color="primary">
                                <span className="d-inline-block">
                                  {messages['pages.send']}
                                </span>{' '}
                                <i className="simple-icon-arrow-right ml-2" />
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="questions">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          {detailsQuestionsData.map((item) => {
                            return (
                              <QuestionAnswer
                                data={item}
                                key={`qa_${item.key}`}
                              />
                            );
                          })}
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Colxx>

            <Colxx xxs="12" xl="4" className="col-right">
              <Card className="mb-4">
                <CardBody>
                  <div className="mb-3">
                    <div className="post-icon mr-3 d-inline-block">
                      <NavLink to="#" location={{}}>
                        <i className="simple-icon-heart mr-1" />
                      </NavLink>
                      <span>4 {messages['pages.likes']}</span>
                    </div>

                    <div className="post-icon mr-3 d-inline-block">
                      <NavLink to="#" location={{}}>
                        <i className="simple-icon-bubble mr-1" />
                      </NavLink>
                      <span>2 {messages['pages.comments-title']}</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    برای درست کردن چیز کیک آلبالو یخچالی با پتی بور ابتدا باید بیسکوییت‌ها را خرد کنید. بیسکویت‌ها را با دست خرد کنید و در غذاساز یا میکسر بریزید تا پودر شوند. کره را به روش بن‌ماری آب کنید که نسوزد و با بیسکویت‌ها خرد شده مخلوط کنید. برای تهیه چیز‌ کیک باید قالب کمربندی داشته باشید (اگر قالب کمربندی ندارد از یک ظرف مناسب که قطر بالا و پایین یکسانی داشته باشد استفاده کنید و کف آن دو لایه سلفون بگذارید).
                    <br />
                    <br />
                    مخلوط بیسکویت و کره را کف قالب بریزید و با ته قاشق یا کفگیر پلاستیکی خوب فشار بدهید تا تمام ذرات بیسکویت به هم بچسبند. ظرف قالبی را به مدت یک ساعت در یخچال بگذارید تا مخلوط بیسکویت و کره خوب خودش را بگیرد. در این فاصله مواد داخل چیز‌ کیک را آماده کنید. 
                    <br />
                    <br />
                    در یک ظرف مناسب کمی آب سرد بریزید و پودر ژلاتین را روی آن بپاشید و هم بزنید. وقتی که مخلوط آب و ژلاتین حالت اسفنجی پیدا کرد، به روش بن‌ماری روی بخار این ترکیب را روان و نرم کنید و کنار بگذارید تا خنک شود.
                  </p>
                  <p className="text-muted text-small mb-2">
                    {messages['forms.tags']}
                  </p>
                  <p className="mb-3">
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      پخت کیک
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      دستور کیک
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      چیز کیک
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      کیک پنیر
                    </Badge>
                  </p>
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    <IntlMessages id="pages.similar-projects" />
                  </CardTitle>
                  <GalleryDetail />
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DetailsPages);
