import React from "react";
import Box from "@material-ui/core/Box";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { chatOpenClose } from "../../redux/actions/gameActions";
import { useDispatch } from "react-redux";

interface IHeaderProps {
  isMain: boolean;
}

const Header = ({ isMain }: IHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleChatOpen = () => {
    dispatch(chatOpenClose());
  };

  return (
    <header>
      <Box bgcolor="#2B3A67" color="white" sx={{ minHeight: "60px" }}>
        {!isMain && (
          <Grid container justifyContent="flex-end">
            <IconButton
              color="inherit"
              aria-label="open chat"
              onClick={handleChatOpen}
            >
              <ChatOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
        )}
      </Box>
    </header>
  );
};

export default Header;
