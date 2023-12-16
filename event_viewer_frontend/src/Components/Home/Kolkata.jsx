import React, { useEffect, useState } from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import "./All.css";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import {
  Link as RouterLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Kolkata() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [event, setEvent] = useState([]);

   let obj = {
    params: {
       name: searchParams.getAll("name"),
       title: searchParams.getAll("title").map(el => el.toUpperCase()),
    },
   };
      const getProducts = async (paramsObj) => {
     const res = await axios.get("http://localhost:3001/event", paramsObj);
     return res.data;
   };
   useEffect(() => { 
     getProducts(obj).then((res) => {
       setEvent([...res]);
     });
   }, [location.search]);

  return (
    <div className="outerbody">
    <div className="product-parent">
       
       <div className="filterprice">
      <div className="firsttop">
           <div className="first-heading">
            All Events available here
          </div>
           <div className="second-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit laboriosam illum consectetur fugiat quibusdam eligendi ducimus qui labore necessitatibus?
           </div>
       </div>

       <div className="filterright">
        <div className="filterinternal">
        <h4 className="filterby">Filter by</h4>
        <div className="filterbtn">
          <Dropdown/>
        </div>
        </div>
        </div>     

       </div>

       <div className="filtericon">
        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>

        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>

        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>

        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>

        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>

        <div className="icon1">
          <img className="micimg" src="https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg"/>
          <h5 className="icontext">Mic</h5>
        </div>
        
       </div>

    <Grid w={"100%"} templateColumns={"repeat(2,1fr)"} gap={"20px"} m={"auto"} >
        {event.length>0
          ? event?.map((el) => {
              return (
                <Box className="mainbodytop"
                key="280"
                  h={"320px"}
                  maxW={"540px"}
                  w={"full"}
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  }
                  textAlign={"center"}
                >
                  <div className="tutorfirst">
                    <Avatar
                      size={"full"}
                      src= {el?.img}
                      pos={"relative"}
                      borderRadius={"none"}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        pos: "absolute",
                        bottom: 0,
                        // right: 3,
                      }}
                    />
                    </div>
                    <div className="tutorsec">
                      <Heading
                        fontSize={"18px"}
                        fontWeight={500}
                        fontFamily={"body"}
                        mt={"20px"}
                        ml={"10px"}
                        align={"left"}
                      >
                        {el?.name}
                        <Text
                          fontWeight={400}
                          fontSize={"16px"}
                          color={"gray.700"}
                          mt={"8px"}
                        >
                          {el?.title}
                        </Text>
                        
                      </Heading>
                     
                     
                      <div className="timee">
                      <Text className="">Time: {el?.time}</Text>
                      </div>

                      <div className="date">
                      <Text className="">Date: {el?.date}</Text>
                      </div>

                      <div className="tutorsecond">
                      <Text className="">Location: {el?.address}</Text>
                      </div>

                      <div className="icon">
                        {/* <AiFillHome className="iconn"> </AiFillHome> */}
                        <Text
                          className="price"
                          fontWeight={400}
                          color={"black.600"}
                          fontSize={"16px"}
                          mt={"5px"}
                          h={"30px"}
                        >
                          PRICE:₹ {el?.price}
                        </Text>
                      </div>
                      
                      
                       
                  
                      
                  <Stack direction={"row"} spacing={4} h={"55px"} mt={"5px"}  mr={"10px"} ml={"10px"}>
                  <Link to={`/kolkatadetail/${el}`} state={{ data: el }}>
                    <Button 
                      flex={1}
                      fontSize={"sm"}
                    //   rounded={"full"}
                       bg={"black"}
                       color={"white"}
                      outline={"none"}
                      border={"none"}
                      _hover={{
                        bg: "pink.500",
                      }}
                      _focus={{
                        bg: "pink.500",
                      }}
                    >
                      BOOK NOW
                    </Button>
                    </Link>

                  </Stack>

                      </div>
                </Box>
                
              );
             })
          : ""} 
      </Grid>
     
    </div>
    </div>
  );
}