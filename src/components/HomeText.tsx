import { Box, Typography } from "@mui/material";

  
function HomeText() {
    return (
        <>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center' }}>
            <Box
                component="span"
                sx={{
                    fontWeight: 100,
                    fontSize: 24,
                }}>
                Hi! My name is Jordi,
            </Box>
        </Typography>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center' }}>
            <Box
                component="span"
                sx={{
                    fontWeight: 400,
                }}>
                I'm a Software Engineer & Artist.{' '}
            </Box>
            <Box
                component="span"
                sx={{
                    fontWeight: 700,
                    fontStyle: "italic"
                }}>
                I believe art and design are not choices, but rather necessities{' '}
            </Box>
            <Box
                component="span"
                sx={{
                    fontWeight: 100,
                }}>
                to have more human experiences on everywhere we interact with.
            </Box>
        </Typography>
        </>
    );
}
  
export default HomeText;