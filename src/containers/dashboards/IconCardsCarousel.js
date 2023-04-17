/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import IconCard from 'components/cards/IconCard';
import axios from "axios";
// import data from 'data/iconCards';
import GlideComponent from 'components/carousel/GlideComponent';
import { ENDPIONTS, createAPIEndpoint } from 'api';
import { getCurrentToken } from 'helpers/Utils';

const IconCardsCarousel = ({ className = 'icon-cards-row' }) => {
  const [data, setData] = useState([
    { title: 'dashboards.pending-orders', icon: 'iconsminds-clock', value: 0 ,typePlan:''},
    {
      title: 'dashboards.completed-orders',
      icon: 'iconsminds-basket-coins',
      value: 0,
    },
    {
      title: 'dashboards.refund-requests',
      icon: 'iconsminds-arrow-refresh',
      value: 0,
    },
    { title: 'dashboards.new-comments', icon: 'iconsminds-mail-read', value: 0 }]
  );
  const totalDays =  (dateExpire) => {
    try {
      const dateNow = new Date(); //  data.date_started
      const datePlan = new Date(dateExpire);
      // console.log(date_1, date_2);
      const difference = datePlan.getTime() - dateNow.getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      // console.log("TotalDays", TotalDays);
      if (TotalDays < 0) TotalDays = 0;
     return TotalDays;
    } catch {
      return 0;
    }
  };
  
  const getPlan =  (typePlan) => {
    try {
      const typeofoplan = typePlan.split("_");
      let planString = "";
      switch (typeofoplan[0]) {
        case "silver":
          planString = "طرح نقره‌ای ";
          // this.setState({ color: this.colorList[0] });
          break;
        case "bronze":
          planString = "طرح برنز ";
          // this.setState({ color: this.colorList[1] });
          break;
        case "gold":
          planString = "طرح طلایی ";
          // this.setState({ color: this.colorList[2] });
          break;
          default:
        /* code */
        break;
      }
      switch (typeofoplan[1]) {
        case "3":
          planString += " ۳ ماهه ";
  
          break;
        case "6":
          planString += " ۶ ماهه ";
          break;
        case "12":
          planString += " ۱۲ ماهه ";
          break;
          default:
        /* code */
        break;
      }
      
     return planString;
    } catch {
      return "";
    }
  };
 const loadData = async () => {
  try {
    axios.defaults.headers.common.Authorization=getCurrentToken();
      // localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] = "application/json";
    await createAPIEndpoint(ENDPIONTS.PlanStatus)
      .fetchAll()
      .then((res) => {
        const result = res.data[0];
        console.log("datad>>>>", res.data[0]);
        const type=getPlan(result.plan) ;
        const totalDay=totalDays(result.date_expire);
        
        if (result) {
         console.log(type,totalDay)
         setData([
          { title: `روزشمار ${type}`, icon: 'iconsminds-clock', value:totalDay,typePlan:type},
          {
            title: 'dashboards.completed-orders',
            icon: 'iconsminds-basket-coins',
            value:  result.search_usage,
          },
          {
            title: 'dashboards.refund-requests',
            icon: 'iconsminds-arrow-refresh',
            value: result.statemant_usage,
          },
          { title: 'dashboards.new-comments', icon: 'iconsminds-mail-read', value: 20000 }
        ])
        
        }
      })
    
      .catch((error) => {
        console.log(error);
      });
  } catch {
    console.log("");
  }
};

useEffect(() => {
  loadData();
}, []);
  return (
    <div className={className}>
     
      <GlideComponent
        settings={{
          gap: 5,
          perView: 4,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
            1600: { perView: 3 },
            1800: { perView: 4 },
          },
          hideNav: true,
        }}
      >
        {data.map((item, index) => {
          return (
            <div key={`icon_card_${index}`}>
              <IconCard {...item} className="mb-4" />
            </div>
          );
        })}
      </GlideComponent>
    </div>
  );
};
export default IconCardsCarousel;
