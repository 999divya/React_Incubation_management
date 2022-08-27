import Header from "../Header/Header";
import {
  FormLabel,
  TextField,
  Grid,
  Box,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  InputAdornment,
  Typography 
} from "@mui/material";


const AppRegister = () => {
  return (
    <>
      <Header />
      <form>
        <Box style={{borderColor:"#c8dede"}}
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={800}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={20}
          marginBottom={10}
          padding={7}
          borderColor="success.main" 
          border={1} 
          borderRadius={2} 
        >
            <Box
               marginTop={1}
               marginBottom={5}
               color="#89196a"
               font-weight= {700}
            >
            <Typography variant="h4" style={{ fontWeight: 600 }} >APPLICATION FOR INCUBATION</Typography>
            </Box>
          <Grid container spacing={2}>
            <Grid container item xs={6} direction="column">
              <FormLabel>Name</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />
              <FormLabel>Address</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="addr"
              />
              <FormLabel>City</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="city"
              />
              <FormLabel>State</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="state"
              />
            </Grid>
            <Grid container item xs={6} direction="column">
              <FormLabel>Email</FormLabel>
              <TextField
              type="email"
                margin="normal"
                fullWidth
                variant="outlined"
                name="email"
              />
              <FormLabel>Phone no</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="phone"
                InputProps={{
                    startAdornment:<InputAdornment position='start'>+91</InputAdornment>
                }}
              />
              <FormLabel>Company Name</FormLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="compname"
              />
              <FormLabel>Company Logo</FormLabel>
              <br />
              <Button variant="contained" component="label">
                Upload File
                <input type="file" />
              </Button>
            </Grid>
          </Grid>

          <FormLabel>Describe Your Team and Background</FormLabel>
          <TextField variant="outlined" multiline rows={5} />

          <FormLabel> Your Company and Products</FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />

          <FormLabel>Describe the problem you are trying to solve</FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />

          <FormLabel>What is unique about your solution?</FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <FormLabel>
            What is your value proposition for the customer?
          </FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <FormLabel>
            Who are your competitors and what is your competitive advantage?
          </FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <FormLabel>Explain your revenue model</FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <FormLabel>
            What is the potential market size of the product?
          </FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <Box marginTop={2} marginBottom={2}>
            <FormLabel>Types of incubation needed</FormLabel>
            <RadioGroup>
              <FormControlLabel
                control={<Radio />} value="yes"
                label="Physical Incubation"
              />
              <FormControlLabel
                control={<Radio />} value="no"
                label="Virtual Incubation"
              />
       {/* value='' checked={} onChange={} */}
            </RadioGroup>
          </Box>

          <FormLabel>
            How do you market or plan to market your products and services?
          </FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <FormLabel>Upload a detailed business proposal</FormLabel>
          <TextField variant="outlined" multiline rows={5} rowsmax={10} />
          <br />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AppRegister;
