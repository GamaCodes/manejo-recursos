import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"#fff"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color={"black"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/"}>
                  Inicio
                </NavLink>
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/nosotros"}>
                  Nosotros
                </NavLink>
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/servicios"}>
                  Servicios
                </NavLink>
              </Link>
            </HStack>
          </HStack>
          <Box alignItems={"center"}>
            <Image
              src="/conse_logotipo.png"
              alt="logo"
              boxSize={["10vw", "5vw", "5vw", "3vw"]}
            />
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/"}>
                  Inicio
                </NavLink>
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/nosotros"}>
                  Nosotros
                </NavLink>
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NavLink strict exact to={"/servicios"}>
                  Servicios
                </NavLink>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
