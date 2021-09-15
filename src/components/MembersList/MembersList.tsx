import React from "react";

import Grid from "@material-ui/core/Grid/Grid";

import Member from "../Member/Member";
import { IMember } from "../Member/Member";

interface IMembersList {
  users: IMember[];
}

const MembersList = ({ users }: IMembersList): JSX.Element => {
  return (
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
