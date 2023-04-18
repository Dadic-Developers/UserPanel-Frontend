/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
// import data from 'data/products';
import { adminRoot } from 'constants/defaultValues';
import { getCurrentToken } from 'helpers/Utils';
import axios from 'axios';
import {createAPIEndpoint ,ENDPIONTS } from 'api';


const RecentNews = () => {
  const [bodyArray] = useState([{ limit: 12 }]);
  const emptyData=[
    {
      id: 1,
      title: '',
      image_url: '',
      createDate: ' ',
      statusColor: 'primary',
      description: '',
      url:'',
    
    },
  ]
  const [data, setData] = useState(
    emptyData
  );

  const loadNews = async () => {
    
   
    axios.defaults.headers.common.Authorization =      getCurrentToken();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    createAPIEndpoint(ENDPIONTS.News)
      .getInfo(bodyArray)
      .then((res) => {
        
        if (data.message) {
          console.log('>>>>: src/containers/dashboards/RecentNews.js : loaNews -> warning', data.message);
          setData(emptyData)
        } else {
          setData(res.data)
        
        }
      })
      .catch((error) => {
        console.log('>>>>: src/containers/dashboards/RecentNews.js : loaNews -> warning', error);
        setData(emptyData)
      });
  };
  useEffect(() => {
    loadNews();
  }, []);
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <NavLink to={`${adminRoot}/pages/product/details`}>
        <button type="button" className="btn btn-header-light icon-button">
          <i className="simple-icon-arrow-right" />
        </button>
        </NavLink>
      

      </div>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-news" />
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.slice(0, 6).map((item, index) => {
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <a
                    // to={`${adminRoot}/pages/product/details`}
                    rel="noreferrer"
                    target="_blank"
                    href={item.url}
                    className="d-block position-relative"
                  >
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="list-thumbnail border-0"
                    />
                    {/* <Badge
                      key={index}
                      className="position-absolute badge-top-right"
                      color={order.statusColor}
                      pill
                    >
                      {order.status}
                    </Badge> */}
                  </a>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    {/* <NavLink to={`${adminRoot}/pages/product/details`}> */}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <p className="list-item-heading">{item.title}</p>
                      <div className="pr-4">
                        <p className="text-muted mb-1 text-small">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {item.date_str}
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default RecentNews;
