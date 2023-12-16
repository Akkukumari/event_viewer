import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Grid,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
// import { getProducts } from "./Kolkata";
import Kolkata from "./Kolkata";
import axios from "axios";

export default function KolkataDetail() {
  const location = useLocation();
//   const { data } = location.state;
//   console.log(data);
  const [event, setEvent] = useState([]);
  
  const getProducts = async (paramsObj) => {
    const res = await axios.get("http://localhost:3001/event", paramsObj);
    return res.data;
  };
  useEffect(() => {
    getProducts().then((res) => {
      setEvent([...res]);
    });
  }, []);

  return (
    <>
    <div className="prodetial">
    <Container maxW={"8xl"} >
      <div className="upper-part" >
        MODESENS / DESIGNERS / WOMEN / CLOTHING / DRESSES / MINI DRESSES
      </div>
      <SimpleGrid  backgroundColor={"black"}
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <div className="productImages">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiphqiZiLp2RW_E3Qg9eee6dgLZGoKcH5RA&usqp=CAU"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "200px", lg: "550px" }}
            />
            <div className="smallImg">
              <img width={"200%"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiphqiZiLp2RW_E3Qg9eee6dgLZGoKcH5RA&usqp=CAU"} alt="img" />
              {/* {data?.imgArray?.map((el) => (
                <img src={el} alt="mapImg" />
              ))} */}
            </div>
          </div>

        </Flex>

        <Stack spacing={{ base: 6, md: 10 }} backgroundColor={"white"} width={"80%"}>
          <Box as={"header"}>
            <Heading
              m={"20px"} align={"left"} 
              fontWeight={500}
              fontSize={{ base: "1xl", sm: "3xl", lg: "4xl" }}
            >
            Akanksha{/* {data.designer} */}
            </Heading>
            
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={400}  m={"10px"} align={"left"} 
              fontSize={"2xl"}
            >
            ( Poet)
            </Text>

            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"1xl"} m={"10px"}
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima delectus porro expedita! Ipsa perferendis porro pariatur nostrum quisquam optio sequi fugiat quia dicta quaerat vitae repudiandae eligendi, provident deserunt!
            </Text>

          </Box>

          <Stack 
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.600", "yellow.500")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                About Event
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Time</ListItem>
                  <ListItem>Date</ListItem> 
                  <ListItem>Location</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>4pm</ListItem>
                  <ListItem>15-12-23</ListItem>
                  <ListItem>Kolkata</ListItem>
                </List>
              </SimpleGrid>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.600", "yellow.500")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
               Location
  
         
              </Text>

              <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={500} 
              fontSize={"1xl"}
            >
           Kolkata
            </Text>

            </Box>

          </Stack>
          {/* <Link to="/order" state={{ data }}> */}
            <Button
              rounded={"none"}
              w={"40%"}
            //   mt={5}
             m={"auto"}
              size={"lg"}
             
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              outline={"none"}
              border={"none"}
              _hover={{
                bg: "pink.500",
              }}
              _focus={{
                bg: "pink.500",
              }}
            >
              Book Now
            </Button>
          {/* </Link> */}

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            {/* <MdLocalShipping /> */}
            <Text fontSize={"20px"} fontWeight={"600"}> You are welcome!!</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
     
     
    
         <Grid w={"100%"} templateColumns={"repeat(2,1fr)"} gap={"20px"} m={"auto"} >
        {
           event?.map((el) => {
           <Kolkata key={el.id} {...el} el={el} />
            })
          } 
           </Grid>
      
    
    </Container>
    </div>
    </>
  );
}
