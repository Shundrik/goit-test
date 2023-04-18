import React, { Suspense } from "react";
import styled from "styled-components";

import lineSvg from "../../../images/userCard/Rectangle 1.svg";
import elipseSvg from "../../../images/userCard/Ellipse 1 (Stroke).svg";
import bgSvg from "../../../images/userCard/picture2 1.svg";
import logoSvg from "../../../images/userCard/Logo.svg";


const UserCardStyle = styled.li`
  display: block;
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
`;
const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  transform: translate(-50%, -73%);
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const LineSvg = styled.img`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
`;
const ElipseSvg = styled.img`
  position: absolute;
  z-index: 2;
  top: 178px;
  left: 150px;
  width: 80px;
`;
const BgSvg = styled.img`
  width: 308px;
  height: 168px;

  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
`;
const LogoSvg = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 76px;
  height: 22px;
`;
const TextTwits = styled.p`
  padding-top: 284px;
  margin-bottom: 0;
  text-align: center;
  font-size: 20px;
  color: #ebd8ff;
`;
const TextFollowers = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  text-align: center;
  font-size: 20px;

  color: #ebd8ff;
`;
const Buttom = styled.button`
  width: 196px;
  height: 50px;
  display: block;
  padding: 14px 28px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  cursor: pointer;
`;

const UserItem = ({ users, handleClick }) => {
  return (
    <>
      <Suspense fallbackElement={<div>loading ...</div>}>
        {users.map(({ id, user, tweets, followers, avatar, following }) => (
          <UserCardStyle key={id} id={id}>
            <Avatar src={avatar} aria-label={user}></Avatar>
            <LineSvg src={lineSvg} alt="Line" />
            <ElipseSvg src={elipseSvg} alt="central elipse"></ElipseSvg>
            <BgSvg src={bgSvg} alt="background" />
            <LogoSvg src={logoSvg} alt="logo goit" />

            <TextTwits>
              <span>{tweets}</span> TWEETS
            </TextTwits>
            <TextFollowers>
              <span>
                {followers.toLocaleString("en-US", { useGrouping: true })}
              </span>{" "}
              FOLLOWERS
            </TextFollowers>

            <Buttom
              style={{
                backgroundColor:
                  !following || following === "false" ? " #ebd8ff" : "#5CD3A8",
              }}
              type="button"
              onClick={() => handleClick(id)}
            >
              {!following || following === "false" ? "FOLLOW" : "FOLLOWING"}
            </Buttom>
          </UserCardStyle>
        ))}
      </Suspense>
    </>
  );
};

export default UserItem;
