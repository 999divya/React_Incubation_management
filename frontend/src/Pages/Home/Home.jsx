import Header from '../../Components/Header/Header';
import axios from 'axios';
import CardData from '../../Components/Card/CardData'
import {
  Box,

} from '@mui/material';
import Footer from '../../Components/Footer/Footer';
import {useEffect, useState} from 'react';

const Home = () => {
const [imageArray, setImageArray]=useState([])

useEffect(() => {

    try{
      const getItems =async ()=>{
      const response = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
      setImageArray(response.data);
      console.log("pipipipi", response.data);
    }
    getItems();
    }catch(err){
    console.log(err.message);
    }
    
}, [])
console.log("kikikikikiiki");
const results =  imageArray.map((item)=>{
 
return <CardData key={item.id} value={item} />
})
console.log(results,"results is this");

  return (
    <>
     <Header/>



     <Box
    style={{ borderColor: "#c8dede" }}
    display="flex"
    flexDirection="column"
    justifyContent={"center"}
    alignContent={"center"}
    alignSelf={"center"}
    marginLeft={"auto"}
    marginRight="auto"
    padding={10}
    paddingTop={20}
    borderColor="success.main"
    border={1}
    borderRadius={2}
  >


{results}


    </Box>
    {/* <Footer/> */}
    </>

  )
}

export default Home