import React from "react";

import { Box, chakra, Image } from "@chakra-ui/react";

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
        Servicios
      </chakra.h1>
      <Image alt="service" src="./service.jpg" mb="20px" />
      <chakra.p w="80%" textAlign={"center"} m={"auto"}>
        <ul>
          <li>Desarrollo y asesoría en logística</li>
          <li>
            Elaboración de proyectos para distribución en Productos Específicos
          </li>
          <li>Distribución de Productos Fabricante/Cliente</li>
          <li>Asesoría en Manejo y Devolución</li>
          <li>Revisión y Mercadotécnica</li>
        </ul>
      </chakra.p>
    </Box>
  );
}
