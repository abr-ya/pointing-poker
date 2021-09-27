import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const Footer = (): JSX.Element => (
  <footer>
    <Box
      px={{ xs: 3, sm: 8 }}
      py={{ xs: 5, sm: 8 }}
      bgcolor="#2B3A67"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Github</Typography>
            </Box>
            <Box>
              <Link href="https://github.com/abr-ya" color="inherit">
                Yaroslav
              </Link>
            </Box>
            <Box>
              <Link href="https://github.com/taccianka" color="inherit">
                Tatyana
              </Link>
            </Box>
            <Box>
              <Link
                href="https://github.com/AnastasiyaGolovaryova"
                color="inherit"
              >
                Anastasiya
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="subtitle1">Created in 2021</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Link href="https://rs.school/react/" color="inherit">
                <img
                  alt="Logo"
                  src="https://rs.school/images/rs_school_js.svg"
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </footer>
);

export default Footer;
