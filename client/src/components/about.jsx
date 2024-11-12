import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Copyright from "./Copyright"

const About = () => {
  return (
    <>
      <Container maxWidth='md' sx={{
        bgcolor: 'background.paper',
        boxShadow: 2,
        my: 10,
        py: 10
      }}>
        <div align="center">
          Check out the repository! <a href="https://github.com/haseebshaik00/Sterlingo">GitHub</a>
        </div>
      </Container>
    </>
  )
}

export default About