import React from "react";
import "../css/app.css";
import { Button, Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";


function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript with REDUX
          </Typography>
        </Box>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;