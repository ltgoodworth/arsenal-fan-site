import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
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
                        <Link to={"/playerpage"}>Player Stats</Link>
                        <Link to={"/matchespage"}>Matches</Link>                    
                </Text>
                <HStack spacing={2} alignItems={"center"}>
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