import React from "react";
import styled from "styled-components";
import { navdata } from "../data/navdata";

const NavTabs = () => {
  return (
    <>
      <TabsWrapper>
        <div className="tabs-div">
          {navdata.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.img} alt={data.label} />
                <h5>{data.label}</h5>
              </div>
            );
          })}
        </div>
      </TabsWrapper>
    </>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  .tabs-div {
    padding: 1rem 0;
    display: flex;
    gap: 4rem;
    justify-content: space-around;
    h1{
        font-weight: 500;
    }
    img {
      width: 4rem;
    }
  }
  border-bottom: 0.08rem solid #EDEFF1;
  @media screen  and (max-width : 1250px){
    transform: scale(1);
    .tabs-div{
      gap:1rem;
    }
  }
  @media screen  and (max-width : 750px){
    transform: scale(0.95);
    .tabs-div{
      gap:1rem;
    }
  }
  @media screen  and (max-width : 450px){
    transform: scale(1);
    .tabs-div{
      gap:1rem;
    }
  }
`;

export default NavTabs;
