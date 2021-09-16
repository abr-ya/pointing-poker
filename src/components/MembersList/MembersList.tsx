import React from "react";

import Grid from "@material-ui/core/Grid/Grid";

import Member from "../Member/Member";
import { IMember } from "../Member/Member";
import { IUser } from "../../interfaces";

interface IMembersList {
  data: IUser[];
  loading: boolean;
}

const MembersList = ({ data, loading }: IMembersList): JSX.Element => {
  const users = data.map((item) => ({
    id: item.id,
    avatar: item.image,
    name: item.first_name,
    surname: item.last_name,
    position: item.position,
  }));

  return loading ? (
    <div>загрузка... ... ...</div>
  ) : (
    <Grid container spacing={2} direction="row" alignItems="stretch">
      {users.map((user) => (
        <Member
          id={user.id}
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          surname={user.surname}
          position={user.position}
        />
      ))}
    </Grid>
  );
};

export default MembersList;
