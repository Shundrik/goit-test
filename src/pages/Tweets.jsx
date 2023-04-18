import { Suspense } from "react";
import UserList from "../components/user/userList/UserList";

const UserDatail = () => {
  return (
    <Suspense fallbackElement={<div>loading ...</div>}>
      <UserList />
    </Suspense>
  );
};
export default UserDatail;
