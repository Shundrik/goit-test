import { useEffect, useState } from "react";
import styled from "styled-components";
import UserItem from "../userItem/UserItem";
import { editUser, getUsers, getUsersById } from "../../../servises/api";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";

const WraperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserListStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, 380px);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 10px;

  list-style: none;
`;

const ButtonGoBack = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 15px;
  border-color: transparent;
  border-radius: 3px;
  background-color: rgb(235, 216, 255);
  color: #0e0b0b;
  cursor: pointer;
`;

const ButtonLoadMore = styled.button`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 40px;
  background-color: rgb(235, 216, 255);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UserList = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [dataLength, setDataLength] = useState(12);
  const [update, setUpdate] = useState(false);

  const handleLoadmore = () => {
    setPage((prevState) => prevState + 1);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
   
    getUsersById(id).then((user) => {
      let checkFollowing = Object.keys(user).includes("following");
      const { followers, following } = user;
      let newNumFollowers = 0;

      if (checkFollowing && following === "true") {
        newNumFollowers = followers - 1;
        checkFollowing = "false";
      } else {
        newNumFollowers = followers + 1;
        checkFollowing = "true";
      }

      const newData = { following: checkFollowing, followers: newNumFollowers };

      editUser(id, newData).then((data) => {
        setUpdate(!update);
      });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((data) => {
        setUsers((prevState) =>
          page === 1 ? [...data] : [...prevState, ...data]
        );
        if (data.length < 12) {
          setDataLength(false);
          setIsLoading(false);
        }
      })
      .finally(() => setIsLoading(false));
  }, [page, update]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  return (
    <>
      <WraperSection>
        <ButtonGoBack type="button" onClick={handleGoBack}>
          <AiFillCaretLeft /> Go back{" "}
        </ButtonGoBack>
        <UserListStyle>
          <UserItem handleClick={handleClick} users={users} page={page} />
        </UserListStyle>

        {!!dataLength &&
          (!isLoading ? (
            <ButtonLoadMore onClick={handleLoadmore}> load more</ButtonLoadMore>
          ) : (
            "loading..."
          ))}
      </WraperSection>
    </>
  );
};
export default UserList;
