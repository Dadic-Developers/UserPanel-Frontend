import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
// import { AreaChart } from 'components/charts';

// import { areaChartData } from 'data/charts';
import { BarChart } from 'components/charts';
import { barChartData } from 'data/charts';
import { getCurrentToken } from 'helpers/Utils';
import axios from 'axios';
import { createAPIEndpoint, ENDPIONTS } from 'api';


const BarChartCard = ({
  className = '',
  controls = true,
  graphType = 'statement',
  
}) => {
  
  const weeks = ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم'];
  const month = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  const [data, setData] = useState(barChartData);

  const items = [
    { label: 'week', filter: <IntlMessages id="dashboards.weekly" /> },
    { label: 'month', filter: <IntlMessages id="dashboards.monthly" /> },
    { label: 'year', filter: <IntlMessages id="dashboards.yearly" /> },
  ];
  const [filter, setFilter] = useState(items[0]);
  const convertDate = (date, duration) => {
    try {
      const arrayDate = date.split('/');
      switch (duration) {
        case 'week':
          return `${arrayDate[0]}-${weeks[arrayDate[2] - 1]}-${
            month[arrayDate[1] - 1]
          }`;
        case 'month':
          return `${arrayDate[0]}-${month[arrayDate[1] - 1]}`;
        default:
          return date;
      }
    } catch {
      return '';
    }
  };
  const loadStatus = async () => {
 
      const bodyArray = {
        duration: filter.label, // ["year", "month", "week"]
        graph_type: graphType, // ["search", "statement"]
      };
      axios.defaults.headers.common.Authorization = getCurrentToken('token');

      axios.defaults.headers.post['Content-Type'] = 'application/json';
     
  
      createAPIEndpoint(ENDPIONTS.statusTimeline)
        .getInfo(bodyArray)
        .then((res) => {
          console.log(res.data)
          // console.log(duration, graph_type)
          // console.log("datad>>>>", res.data);

          if (res.data.length <= 0) {
            setData([]);
          } else {
            const labels=res.data.map((obj) => convertDate(obj.date, filter.label))
            const dataObj=res.data.map((a) => a.value*2)
            console.log({data})
            const dataNew={...data}
            dataNew.labels=labels;
            dataNew.datasets[0].data=dataObj;
            
            setData(dataNew);
            // console.log({dataNew})
          }
        })
        .catch((error) => {
          console.log(
            '>>>>: src/containers/dashboards/BarChartCard.js  : loadStatus -> error',
            error
          );
          setData([]);
        });
    
  };
  useEffect(() => {
    loadStatus();
  }, [filter.label]);
  return (
    <Card className={`${className} dashboard-filled-line-chart`}>
      <CardBody>
        <div className="float-left float-none-xs">
          <div className="d-inline-block">
            <h5 className="d-inline">
              <IntlMessages id={graphType === 'search'?"dashboards.report-layehe":"dashboards.report-search"} />
            </h5>
            <span className="text-muted text-small d-block">
              <IntlMessages id="dashboards.report-label" />
             {` : ${data.labels[0]} لغایت ${data.labels[data.labels.length-1]}`}
            </span>
          </div>
        </div>
        {controls && (
          <div className="btn-group float-right float-none-xs mt-2">
            <UncontrolledDropdown>
              <DropdownToggle caret color="primary" className="btn-xs" outline>
                {filter.filter}
              </DropdownToggle>
              <DropdownMenu right>
                {items.map((item, index) => (
                  <DropdownItem
                    key={item.label}
                    name={`${index}`}
                    onClick={() => setFilter(item)}
                  >
                    {item.filter}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )}
      </CardBody>

      <div className="chart card-body pt-0">
        <BarChart shadow data={data} />
        {/* <AreaChart shadow data={areaChartData} /> */}
      </div>
    </Card>
  );
};

export default BarChartCard;
