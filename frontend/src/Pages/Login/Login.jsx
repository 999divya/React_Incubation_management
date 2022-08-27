import Header from "../../Components/Header/Header";
import {
  TextField,
  Container,
  Button,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { pink } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "../../api/axios";
import { useContext, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard'


const Login = () => {
  const [success, setSuccess] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const { setAuth } = useContext(AuthContext);
  const LOGIN_URL = `/api/auth/login`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (datas) => {
    console.log("heyyyyyseemyloginform", datas);
    const { email, password } = datas;
    const response = await axios.post(LOGIN_URL, { email, password });
setSuccess(true)
    console.log("heyyyyyseemydataaaa", JSON.stringify(response?.data));
    const authToken = response.data.authToken?response.data.authToken:response.data.authAdminToken;
    const isAdmin=response?.data?.isAdmin;
    setIsAdmin(isAdmin)
  console.log(authToken+isAdmin);

  setAuth({email, password, isAdmin, authToken});



  };





  return (
    <>

      <Header />

    {
      success ?(
          isAdmin? <Dashboard/>: 
          <Home/>
      ):(
<Box
        style={{ borderColor: "#c8dede" }}
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={500}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={20}
        marginBottom={10}
        paddingTop={10}
        paddingBottom={10}
        borderColor="success.main"
        border={1}
        borderRadius={2}
      >
        <Box alignContent={"center"} alignSelf={"center"} paddingBottom={2}>
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box alignContent={"center"} alignSelf={"center"} paddingBottom={7}>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Container maxWidth="xs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="email"
                fullWidth
                autoComplete="off"
                autoFocus
                {...register("email", {
                  required: "Required field",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />
            </Box>

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="password"
                fullWidth
                autoComplete="password"
                autoFocus
                {...register("password", {
                  required: "Required field",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                    message: "Invalid password",
                  },
                })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
              />
            </Box>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Container>
      </Box>

      )
    }
      
    </>
  );
};

export default Login;
