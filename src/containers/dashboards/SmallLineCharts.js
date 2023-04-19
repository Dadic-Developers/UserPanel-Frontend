import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';

import { Colxx } from 'components/common/CustomBootstrap';
import { SmallLineChart } from 'components/charts';

import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4,
} from 'data/charts';
// import { ENDPIONTS, createAPIEndpoint } from 'api';
// import axios from 'axios';

const SmallLineCharts = ({ itemClass = 'dashboard-small-chart' }) => {
  // const [data, setData] = useState(smallChartData1);
  // const refreshData = async () => {
  //   axios.defaults.headers.common.Authorization = localStorage.getItem('token');
  //   axios.defaults.headers.post['Content-Type'] = 'application/json';
  //   createAPIEndpoint(ENDPIONTS.GetCurrency)
  //     .fetchAll()
  //     .then((res) => {
  //       // console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(
  //         '>>>>: src/containers/dashboards/SmallLineCharts.js  : refreshData -> error',
  //         error
  //       );
  //       setData(smallChartData1);
  //     });
  // };
  // useEffect(() => {
  //   refreshData();
  // }, []);
  return (
    <Row>
      <Colxx xxs="6" className="mb-4">
        <Card className={itemClass}>
          <CardBody>
            <SmallLineChart data={smallChartData1} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="6" className="mb-4">
        <Card className={itemClass}>
          <CardBody>
            <SmallLineChart data={smallChartData2} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="6" className="mb-4">
        <Card className={itemClass}>
          <CardBody>
            <SmallLineChart data={smallChartData3} />
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="6" className="mb-4">
        <Card className={itemClass}>
          <CardBody>
            <SmallLineChart data={smallChartData4} />
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default SmallLineCharts;
