import React, { useState } from 'react';
import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import InfoPage from "./InfoPage";
import "./style.scss"
import { useAuth } from '../../Auth/Auth';

const ProfilePage = () => 

  {
    const auth = useAuth();
    const [cancelPolicyStepOne, setCancelPolicyStepOne] = useState(true);
    const [cancelPolicyStepTwo, setCancelPolicyStepTwo] = useState(false);
    const [cancelPolicyStepThree, setCancelPolicyStepThree] = useState(false);
    const cancelPolicy = () => {
      setCancelPolicyStepOne(false);
      setCancelPolicyStepTwo(true);
    }
    const agreeCancelPolicy = () => {
      setCancelPolicyStepTwo(false);
      setCancelPolicyStepThree(true);
    }
    const backToCancel = () => {
      setCancelPolicyStepOne(true);
      setCancelPolicyStepTwo(false);
    }
    console.log(auth.user, "auth")
    return(
      <>
        <HeaderComponent />
        <InfoPage
          auth={auth}
          cancelPolicy={cancelPolicy}
          cancelPolicyStepOne={cancelPolicyStepOne}
          cancelPolicyStepTwo={cancelPolicyStepTwo}
          cancelPolicyStepThree={cancelPolicyStepThree}
          agreeCancelPolicy={agreeCancelPolicy}
          backToCancel={backToCancel}
          />
        <FooterComponent/>
        </>
    );
  }

export default ProfilePage;