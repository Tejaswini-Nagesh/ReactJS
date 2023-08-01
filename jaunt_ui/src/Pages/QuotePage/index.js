import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import moment from 'moment';
import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import BasicInfo from "./BasicInfo";
import PricePage from "./PricePage";
import "./Style.scss";
import AboutPage from './AboutPage';
import PaymentPage from './PaymentPage';

const { Option } = Select;




const QuotePage = () => 
  {
    const [coverStartValue, setCoverStartValue] = useState("today");
    const [dateStartValue, setDateStartValue] = useState(moment().add(1, 'days'));
    const [finalStartDate, setFinalStartDate] = useState();
    const [timeValue, setTimeValue] = useState('8:15');
    const [endDateValue, setEndDateValue] = useState("1");
    const [finalEndDate, setFinalEndDate] = useState("1");
    const [vehicleNumber, setVehicleNumber] = useState();
    const [emailValue, setEmailValue] = useState();
    const [insuranceDay, setInsuranceDay] = useState("oneDay");
    const [bacicInfoShow, setBacicInfoShow] = useState(true);
    const [continueDetailsInfo, setContinueDetailsInfo] = useState(false);
    const [aboutPage, setAboutPage] = useState(false);
    const [paymentPage, setPaymentPage] = useState(false);

    useEffect(() => {
      if(coverStartValue === "today"){
        setFinalStartDate(moment());
      }else if(coverStartValue === "tomorrow"){
        setFinalStartDate(moment().add(1, 'days'));
      }else if(coverStartValue === "other"){
        setFinalStartDate(moment(dateStartValue));
      }

      if(insuranceDay === "oneDay"){
        setFinalEndDate(moment(finalStartDate).add(1, 'days'))
      }else if(insuranceDay === "sevenDay"){
        setFinalEndDate(moment(finalStartDate).add(7, 'days'))
      }else if(insuranceDay === "twentyEightDay"){
        setFinalEndDate(moment(finalStartDate).add(28, 'days'))
      }else if(insuranceDay === "othersDay"){
        setFinalEndDate(moment(finalStartDate).add(endDateValue, 'days'))
      }
    }, [coverStartValue, insuranceDay, dateStartValue, finalStartDate, endDateValue]);
    
    
    const insuranceDayList = [];
    const insuranceHoursList = [];

    const onChangeStartValue = (e) => {
      console.log('radio checked$$$', e.target.value);
      setCoverStartValue(e.target.value);
    };
    const insuranceDayOnChange = (e) => {
      console.log('radio checked', e.target.value);
      setInsuranceDay(e.target.value);
    };

    const timeValueOnChange = (time, timeString) => {
      console.log(time, timeString)
      setTimeValue(timeString);
    };

   
    
    const dateStartValueOnChange = (date, dateString) => {
      console.log(date, dateString);
      console.log(date, dateString);
      
    setDateStartValue(date, dateString);
    }

    for (let i = 1; i < 31; i++) {
      insuranceDayList.push(<Option key={`${i}`}>{i} Day{i !== 1 && "s"}</Option>);
    }

    // for (let i = 1; i < 31; i++) {
    //   insuranceDayList.push(
    //     {value: `D${i}`}
    //   );
    // }

    for (let i = 1; i < 5; i++) {
      insuranceHoursList.push(<Option key={`${i}Hours`}>{i} Hour{i !== 1 && "s"}</Option>);
    }
    const contactInfoOptions=["Email", "SMS", "Telephone"]
    const tearmsOptions= ["Breakdown Cover IPID", "Comprehensive European Motor Insurance Cover IPID", "Excess Protection IPID"];
    const contactInfoOnChange = () => {

    }
    const continueDetails = () => {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      // if (regEx.test(email)) {
      //   setMessage("Valid Email");
      // } else if (!regEx.test(email`enter code here`) && email !== "") {
      //     setMessage("Invalid email");
      // } else {
      //     setMessage("");
      // }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setContinueDetailsInfo(true);
      setBacicInfoShow(false);
    }
    const endDateOnChange = (value) => {
      console.log(value, "endDateOnChange")
      setEndDateValue(value);

    }
    //console.log(dateStartValue, "dateStartValue");
    const continueAboutDetails = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setAboutPage(true);
      setContinueDetailsInfo(false);
      setBacicInfoShow(false);
    }
    const continuePayment = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setPaymentPage(true);
      setAboutPage(false);
      setContinueDetailsInfo(false);
      setBacicInfoShow(false);
    }
    return(
      <>
        <HeaderComponent />
        {bacicInfoShow && (
          <BasicInfo
            coverStartValue={coverStartValue}
            insuranceDay={insuranceDay}
            onChangeStartValue={onChangeStartValue}
            insuranceDayOnChange={insuranceDayOnChange}
            contactInfoOptions={contactInfoOptions}
            contactInfoOnChange={contactInfoOnChange}
            continueDetails={continueDetails}
            insuranceDayList={insuranceDayList}
            insuranceHoursList={insuranceHoursList}
            timeValue={timeValue}
            timeValueOnChange={timeValueOnChange}
            dateStartValue={dateStartValue}
            dateStartValueOnChange={dateStartValueOnChange}
            endDateValue={endDateValue}
            endDateOnChange={endDateOnChange}
            vehicleNumber={vehicleNumber}
            setVehicleNumber={setVehicleNumber}
            finalStartDate={finalStartDate}
            finalEndDate={finalEndDate}
          />
        )}
        
        {continueDetailsInfo && 
        <PricePage
          insuranceDayList={insuranceDayList}
          insuranceHoursList={insuranceHoursList}
          tearmsOptions={tearmsOptions}
          continueAboutDetails={continueAboutDetails}/>
        }
        {aboutPage && 
        <AboutPage continuePayment={continuePayment}/>
        }
        {paymentPage && <PaymentPage/>}
        
        
        <FooterComponent/>
        </>
    );
  }

export default QuotePage;