import Header from "../../Components/Header/Header";
import { TextField, Container, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";
import Login from '../Login/Login'
import {useState} from 'react';

const Register = () => {

const[success, setSuccess] = useState(false);

  const REGISTER_URL = `/api/auth`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log("data is this" + values);
    const { name, email, mobile, password } = values;

    const { data } = await axios.post(REGISTER_URL, {
      name,
      email,
      mobile,
      password,
    });
 
    if(data.name){
      setSuccess(true);
    }
  
    console.log("data", data.name);
  };
  return (
    <>
      <Header />
{
  success?(
<Login/>
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
    paddingTop={15}
    paddingBottom={10}
    borderColor="success.main"
    border={1}
    borderRadius={2}
  >
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="name"
            fullWidth
            autoComplete="name"
            autoFocus
            {...register("name", {
              required: "Required field",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                message: "Invalid name, type fullname",
              },
            })}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
        </Box>

        <Box mb={2}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
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
            label="mobile"
            fullWidth
            autoComplete="mobile"
            autoFocus
            {...register("mobile", {
              required: "Required field",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid mobile number",
              },
            })}
            error={!!errors?.mobile}
            helperText={errors?.mobile ? errors.mobile.message : null}
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
          SignUp
        </Button>
      </form>
    </Container>
  </Box>

  )
}


    
    </>
  );
};

export default Register;
