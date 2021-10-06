import React from "react";
import Grid, { GridDirection } from "@material-ui/core/Grid/Grid";
import Member from "../Member/Member";
import { IUser } from "../../interfaces";

interface IMembersList {
  data: IUser[];
  loading: boolean;
  isLobbyPage: boolean;
  isMaster: boolean;
  handlerDeleteUser: (id: string) => void;
}

const MembersList = ({
  data,
  loading,
  isLobbyPage,
  isMaster,
  handlerDeleteUser,
}: IMembersList): JSX.Element => {
  const users = data.map((item) => ({
    id: item.id,
    avatar: item.image,
    name: item.first_name,
    surname: item.last_name,
    position: item.position,
    is_master: item.is_master,
  }));

  const dir: GridDirection = isLobbyPage ? "row" : "column";

  return loading ? (
    <div>загрузка... ... ...</div>
  ) : (
    <Grid container spacing={2} direction={dir} alignItems="stretch">
      {users.map((user) => {
        if (!user.is_master)
          return (
            <Member
              id={user.id}
              key={user.id}
              avatar={user.avatar}
              name={user.name}
              surname={user.surname}
              position={user.position}
              handlerDeleteUser={handlerDeleteUser}
            />
          );
      })}
    </Grid>
  );
};

export default MembersList;
