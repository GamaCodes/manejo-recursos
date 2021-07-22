import React from "react";

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        color={"#117aad"}
      >
        Infraestructura
      </chakra.h1>
      <chakra.p w="80%" textAlign={"center"} mx={"auto"} mb="20px">
        Contamos con instalaciones, maquinaria y equipo de transporte para la
        distribución de nuestros productos. Nuestras instalaciones cuentan con
        las siguientes áreas:
      </chakra.p>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Stat
          px={{ base: 4, md: 8 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          rounded={"lg"}
        >
          <StatLabel fontWeight={"medium"} isTruncated>
            Administración
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Administración y Finanzas
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Dirección General
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Desarrollo y Logística
          </StatNumber>
        </Stat>
        <Stat
          px={{ base: 4, md: 8 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          rounded={"lg"}
        >
          <StatLabel fontWeight={"medium"} isTruncated>
            Logistica Especializada
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Mercadotecnia
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Distribución
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Ventas
          </StatNumber>
        </Stat>
        <Stat
          px={{ base: 4, md: 8 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor={useColorModeValue("gray.800", "gray.500")}
          rounded={"lg"}
        >
          <StatLabel fontWeight={"medium"} isTruncated>
            Y más...
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Control de Calidad
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Sistemas
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Atención al cliente
          </StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}
