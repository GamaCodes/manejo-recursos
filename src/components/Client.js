import React from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Client() {
  return (
    <Box bg={"#76323f"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      ></Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"white"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"white"}
              >
                Clientes
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Nuestros Clientes
              </Heading>
              <Text fontSize={"xl"} color={"black.400"}>
                A lo largo de nuestra historia, hemos colaborado con muchos
                clientes. Estos son algunos de ellos.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title: "Bacardi",
  },
  {
    title: "Cemex",
  },
  {
    title: "CFE",
  },
  {
    title: "Comex",
  },
  {
    title: "Estafeta",
  },
  {
    title: "Herdez",
  },
  {
    title: "LG",
  },
  {
    title: "Metlife",
  },
  {
    title: "Nextel",
  },
  {
    title: "Pepsi",
  },
  {
    title: "Sky",
  },
  {
    title: "Sony",
  },
  {
    title: "Toshiba",
  },
  {
    title: "UAM",
  },
  {
    title: "Visa",
  },
  {
    title: "Walmart",
  },
];
