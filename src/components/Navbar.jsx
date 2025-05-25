import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router"
import { useColorMode } from "./ui/color-mode"
import { LuSun } from "react-icons/lu"
import { IoMoon } from "react-icons/io5"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container maxW={"100vw"} px={4} bg={"#EF0107"}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={{
                    base:"column",
                    sm:"row"
                }}
            >
                <Text
                    fontSize={"1.3rem"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    color={"#FFFFFF"}
                >
                    <Link to={"/"}>Arsenal Fan Site</Link>
                </Text>
                <Text
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    textAlign={"center"}
                    color={"#FFFFFF"}
                >                   
                        <Link to={"/newspage"}>News</Link>                
                </Text>
                <Text
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    textAlign={"center"}
                    color={"#FFFFFF"}
                >                   
                        <Link to={"/playerpage"}>Player Stats</Link>               
                </Text>
                <Text
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    textAlign={"center"}
                    color={"#FFFFFF"}
                >                   
                        <Link to={"/matchespage"}>Matches</Link>                  
                </Text>     
                <Text
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    textAlign={"center"}
                    color={"#FFFFFF"}
                >                   
                        <Link to={"/tablespage"}>Tables</Link>                  
                </Text>             
                <HStack spacing={2} alignItems={"center"}>
                    <Flex
                        fontSize={"0.9rem"}
                        fontWeight={"500"}
                        textAlign={"center"}
                        color={"#FFFFFF"}
                        height={"70px"}
                    >                   
                        <Image src="https://www.arsenal.com/sites/default/files/styles/feed_crest_thumbnail/public/logos/arsenal-1.png?auto=webp&itok=7a6a0zug" />                 
                        <Flex
                            flexDirection={"column"}
                            textAlign={"center"}
                            justifyContent={"center"}
                        >
                            <p>05/29</p>
                            <p>Vs.</p>
                            <p>15:00</p>                                                        
                        </Flex>
                        <Image src="https://www.arsenal.com/sites/default/files/styles/feed_crest_thumbnail/public/logos/arsenal-1.png?auto=webp&itok=7a6a0zug" />                 
                        
                    </Flex>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> :
                        <LuSun />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar