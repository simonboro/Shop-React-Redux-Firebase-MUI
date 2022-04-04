import React, { useState } from "react";
import UserData from "../../components/molecules/UserData";
import { WrapperUserProfile } from "./StyledUserProfile";

const UserProfile = () => {
  const [isEdit, changeIsEdit] = useState(false);

  const toggleIsEdit = () => {
    changeIsEdit(!isEdit);
  };

  return (
    <div>
      <WrapperUserProfile>
        <UserData
          header={"User Profile"}
          isEdit={isEdit}
          toggleIsEdit={toggleIsEdit}
          showButtons={true}
        />
      </WrapperUserProfile>
    </div>
  );
};

export default UserProfile;
