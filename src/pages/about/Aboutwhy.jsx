import React from "react";
import Featured from "../../components/featured/Featured";
import "./About.scss";
import Divider from '@mui/material/Divider';
import FourPillars from "../../components/fourpillars/FourPillars";
const AboutWhy = () => {
  return (
    <div className="mainContainer">
      <div className="top">
        <div className="image">
          <img src="/img/kids.webp" alt="" />
          <div className="titlecontainer">
            <div className="text">WHY CHOOSE US</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomup">
          <div className="bottomupleft">
            <img src="/img/imgg/2.jpeg" alt="" />
          </div>
          <div className="bottomupright">
            <div className="text">
              <p className="texthead">Proprietor:  <span>Pst.Kolapo</span> </p>
              <p className="textbody">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. luta
             
                facere! Nihil quo commodi repellendus deleniti aspernatur, a
                repellat nemo est ab? Minus sed aliquid aspernatur doloribus
                aliquam repellat, ad quas inventore, quidem ea libero officia so
                atque maxime recusandae. facere! Nihil quo commodi repellendus 
                deleniti aspernatur, a
                repellat nemo est ab? Minus sed aliquid aspernatur doloribus
                aliquam repellat, ad quas inventore, quidem ea libero officia so
                atque maxime recusandae.
              </p>
   <hr style={{height:`0px`,backgroundColor:`grey`}}/>
              <p>Text about the owner of the schooll</p>
            </div>
          </div>
        </div>
        <div className="bottomlow">
           <FourPillars/>
        </div>
      </div>
    </div>
  );
};

export default AboutWhy;
