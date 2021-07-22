import React from "react";

import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function LargeWithLogoLeft() {
  return (
    <Box bg="#565656">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <svg
                width="100"
                viewBox="0 0 340 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.068 180.976L30.0827 187.032C27.8574 184.252 24.5654 182.513 21.564 182.513C16.192 182.513 12.1254 186.883 12.1254 192.592C12.1254 198.399 16.192 202.817 21.564 202.817C24.42 202.817 27.7107 201.228 30.0827 198.747L35.116 204.208C31.4854 208.031 26.1134 210.561 21.128 210.561C10.916 210.561 3.31738 202.868 3.31738 192.691C3.31738 182.664 11.1094 175.117 21.42 175.117C26.4534 175.117 31.68 177.4 35.068 180.976Z"
                  fill="white"
                />
                <path
                  d="M46.6395 192.79C46.6395 198.649 51.0449 203.165 56.2222 203.165C61.4502 203.165 65.6115 198.649 65.6115 192.79C65.6115 186.931 61.4502 182.514 56.2222 182.514C50.9955 182.514 46.6395 186.931 46.6395 192.79ZM74.4702 192.741C74.4702 202.869 66.6289 210.562 56.1249 210.562C45.6715 210.562 37.8315 202.918 37.8315 192.741C37.8315 182.614 45.6715 175.118 56.1249 175.118C66.6289 175.118 74.4702 182.663 74.4702 192.741"
                  fill="white"
                />
                <path
                  d="M104.289 210.165L88.7053 188.769V210.165H80.6213V175.415H88.22L103.855 196.861V175.415H111.888V210.165H104.289Z"
                  fill="white"
                />
                <path
                  d="M146.646 178.89L143.402 185.792C139.821 183.656 135.319 182.166 132.562 182.166C130.335 182.166 128.834 183.012 128.834 184.698C128.834 190.705 146.742 187.28 146.742 199.84C146.742 206.789 140.741 210.464 133.19 210.464C127.527 210.464 121.719 208.278 117.702 204.904L121.042 198.102C124.526 201.229 129.754 203.314 133.286 203.314C135.998 203.314 137.691 202.272 137.691 200.286C137.691 194.132 119.783 197.805 119.783 185.493C119.783 179.089 125.155 175.018 133.286 175.018C138.175 175.018 143.161 176.557 146.646 178.89Z"
                  fill="white"
                />
                <path
                  d="M161.654 182.365V189.265H177.819V196.216H161.654V203.216H180.094V210.165H153.038V175.416H179.562V182.365H161.654Z"
                  fill="white"
                />
                <path
                  d="M207.009 198.897C207.009 206.293 202.508 210.562 195.297 210.562C190.505 210.562 186.633 208.527 183.632 205.002L187.6 199.094C190.021 201.677 192.731 202.967 194.716 202.967C196.991 202.967 198.345 201.527 198.345 198.698V182.514H186.729V175.366H207.009V198.897Z"
                  fill="white"
                />
                <path
                  d="M223.421 182.365V189.265H239.586V196.216H223.421V203.216H241.861V210.165H214.805V175.416H241.329V182.365H223.421Z"
                  fill="white"
                />
                <path
                  d="M264.179 193.436C267.905 193.436 270.084 191.5 270.084 187.826C270.084 184.202 267.905 182.365 264.179 182.365H257.645V193.436H264.179ZM264.421 200.385H264.179H257.645V210.165H249.029V175.416H264.179C273.133 175.416 278.263 179.784 278.263 187.528C278.263 192.84 276.085 196.662 272.116 198.697L279.231 210.165H269.455L264.421 200.385Z"
                  fill="white"
                />
                <path
                  d="M292.158 172.387H285.768L290.9 164.047L298.45 166.778L292.158 172.387ZM285.672 175.415H294.288V210.165H285.672V175.415Z"
                  fill="white"
                />
                <path
                  d="M317.813 184.203L312.875 197.06H322.653L317.813 184.203ZM310.358 203.761L307.891 210.165H299.033L313.65 175.416H322.507L336.785 210.165H327.59L325.17 203.761H310.358Z"
                  fill="white"
                />
                <path
                  d="M4.23467 231.087H7.25467C9.84667 231.087 11.7027 229.04 11.7027 226.041C11.7027 223.019 9.752 220.948 7.064 220.948H4.23467V231.087ZM7.15867 217.487C12.3907 217.487 16.0067 220.948 16.0067 226.016C16.0067 231.061 12.344 234.548 6.992 234.548H0V217.487H7.15867Z"
                  fill="white"
                />
                <path
                  d="M23.2568 220.898V224.286H31.2008V227.699H23.2568V231.135H32.3181V234.547H19.0234V217.486H32.0568V220.898H23.2568Z"
                  fill="white"
                />
                <path
                  d="M56.6916 234.548L56.6676 223.458L52.6716 232.842H49.9143L45.9183 223.458V234.548H42.1356V217.462H46.7743L51.293 227.626L55.813 217.462H60.4263V234.548H56.6916Z"
                  fill="white"
                />
                <path
                  d="M72.0041 221.8L69.5788 228.112H74.3815L72.0041 221.8ZM68.3415 231.403L67.1281 234.548H62.7761L69.9588 217.487H74.3095L81.3268 234.548H76.8081L75.6188 231.403H68.3415Z"
                  fill="white"
                />
                <path
                  d="M95.2828 234.548L87.6254 224.042V234.548H83.6534V217.486H87.3868L95.0694 228.016V217.486H99.0174V234.548H95.2828Z"
                  fill="white"
                />
                <path
                  d="M107.362 220.898V224.286H115.306V227.699H107.362V231.135H116.424V234.547H103.129V217.486H116.162V220.898H107.362Z"
                  fill="white"
                />
                <path
                  d="M129.643 229.015C129.643 232.647 127.431 234.743 123.889 234.743C121.533 234.743 119.63 233.743 118.157 232.012L120.106 229.112C121.295 230.379 122.627 231.014 123.602 231.014C124.721 231.014 125.386 230.307 125.386 228.918V220.972H119.678V217.462H129.643V229.015Z"
                  fill="white"
                />
                <path
                  d="M136.705 226.016C136.705 228.892 138.869 231.111 141.413 231.111C143.982 231.111 146.027 228.892 146.027 226.016C146.027 223.142 143.982 220.972 141.413 220.972C138.845 220.972 136.705 223.142 136.705 226.016ZM150.379 225.992C150.379 230.964 146.526 234.743 141.366 234.743C136.229 234.743 132.375 230.988 132.375 225.992C132.375 221.02 136.229 217.34 141.366 217.34C146.526 217.34 150.379 221.044 150.379 225.992"
                  fill="white"
                />
                <path
                  d="M163.931 231.087H166.953C169.545 231.087 171.399 229.04 171.399 226.041C171.399 223.019 169.449 220.948 166.761 220.948H163.931V231.087ZM166.857 217.487C172.089 217.487 175.703 220.948 175.703 226.016C175.703 231.061 172.041 234.548 166.69 234.548H159.698V217.487H166.857Z"
                  fill="white"
                />
                <path
                  d="M182.955 220.898V224.286H190.899V227.699H182.955V231.135H192.016V234.547H178.721V217.486H191.755V220.898H182.955Z"
                  fill="white"
                />
                <path
                  d="M209.277 226.334C211.108 226.334 212.179 225.384 212.179 223.581C212.179 221.801 211.108 220.898 209.277 220.898H206.067V226.334H209.277ZM209.396 229.746H209.277H206.067V234.548H201.833V217.486H209.277C213.677 217.486 216.197 219.632 216.197 223.433C216.197 226.041 215.128 227.918 213.177 228.917L216.673 234.548H211.869L209.396 229.746Z"
                  fill="white"
                />
                <path
                  d="M224.068 220.898V224.286H232.012V227.699H224.068V231.135H233.129V234.547H219.835V217.486H232.868V220.898H224.068Z"
                  fill="white"
                />
                <path
                  d="M251.154 220.216L248.703 223.189C247.61 221.825 245.993 220.972 244.518 220.972C241.878 220.972 239.881 223.117 239.881 225.92C239.881 228.772 241.878 230.941 244.518 230.941C245.921 230.941 247.538 230.161 248.703 228.942L251.178 231.624C249.394 233.5 246.753 234.744 244.303 234.744C239.286 234.744 235.551 230.965 235.551 225.968C235.551 221.045 239.381 217.341 244.447 217.341C246.919 217.341 249.489 218.462 251.154 220.216Z"
                  fill="white"
                />
                <path
                  d="M268.869 227.382C268.869 231.892 265.943 234.744 261.282 234.744C256.597 234.744 253.599 231.892 253.599 227.382V217.486H257.834V227.382C257.834 229.697 259.285 231.112 261.305 231.112C263.303 231.112 264.659 229.697 264.659 227.382V217.486H268.869V227.382Z"
                  fill="white"
                />
                <path
                  d="M280.138 226.334C281.969 226.334 283.04 225.384 283.04 223.581C283.04 221.801 281.969 220.898 280.138 220.898H276.928V226.334H280.138ZM280.257 229.746H280.138H276.928V234.548H272.694V217.486H280.138C284.538 217.486 287.058 219.632 287.058 223.433C287.058 226.041 285.989 227.918 284.038 228.917L287.534 234.548H282.73L280.257 229.746Z"
                  fill="white"
                />
                <path
                  d="M303.657 219.192L302.065 222.58C300.303 221.532 298.091 220.802 296.737 220.802C295.642 220.802 294.906 221.216 294.906 222.044C294.906 224.994 303.705 223.312 303.705 229.479C303.705 232.89 300.755 234.694 297.046 234.694C294.262 234.694 291.409 233.622 289.435 231.964L291.075 228.624C292.789 230.162 295.357 231.184 297.093 231.184C298.425 231.184 299.257 230.672 299.257 229.698C299.257 226.675 290.458 228.479 290.458 222.435C290.458 219.29 293.097 217.291 297.093 217.291C299.495 217.291 301.945 218.047 303.657 219.192Z"
                  fill="white"
                />
                <path
                  d="M310.028 226.016C310.028 228.892 312.192 231.111 314.736 231.111C317.305 231.111 319.35 228.892 319.35 226.016C319.35 223.142 317.305 220.972 314.736 220.972C312.168 220.972 310.028 223.142 310.028 226.016ZM323.702 225.992C323.702 230.964 319.849 234.743 314.689 234.743C309.552 234.743 305.698 230.988 305.698 225.992C305.698 221.02 309.552 217.34 314.689 217.34C319.849 217.34 323.702 221.044 323.702 225.992"
                  fill="white"
                />
                <path
                  d="M339.681 219.192L338.089 222.58C336.328 221.532 334.116 220.802 332.761 220.802C331.667 220.802 330.931 221.216 330.931 222.044C330.931 224.994 339.729 223.312 339.729 229.479C339.729 232.89 336.78 234.694 333.071 234.694C330.287 234.694 327.433 233.622 325.46 231.964L327.1 228.624C328.813 230.162 331.381 231.184 333.117 231.184C334.449 231.184 335.281 230.672 335.281 229.698C335.281 226.675 326.483 228.479 326.483 222.435C326.483 219.29 329.121 217.291 333.117 217.291C335.52 217.291 337.969 218.047 339.681 219.192Z"
                  fill="white"
                />
                <path
                  d="M216.814 35.1595H213.462V47.4702H216.814C216.814 47.4702 220.797 48.1942 221.159 54.7115V116.63C221.159 116.63 222.245 123.146 215.005 122.785L215.194 123.026C212.586 123.742 210.659 126.105 210.659 128.94V135.097L202.331 125.862C202.331 125.862 201.243 122.785 196.537 122.785H150.551C150.429 122.754 150.326 122.714 150.209 122.681H134.859C140.495 135.374 150.551 135.096 150.551 135.096H194.727L211.851 157.194V157.177C212.971 158.709 214.77 159.718 216.814 159.718C220.214 159.718 222.969 156.962 222.969 153.562V132.922C222.969 132.922 232.021 128.216 233.109 119.889V53.9875C233.109 53.9875 233.833 35.1595 216.814 35.1595Z"
                  fill="white"
                />
                <path
                  d="M111.432 0.261255C105.774 0.261255 100.604 0.19726 95.4405 0.34526C94.8085 0.362593 93.6951 1.50659 93.6791 2.15192C93.5311 7.31725 93.5965 12.4879 93.5965 18.0279C99.6445 12.0039 105.314 6.35725 111.432 0.261255ZM207.672 96.4199C201.538 102.559 195.806 108.297 189.792 114.319C195.262 114.319 200.455 114.38 205.642 114.243C206.331 114.225 207.567 113.219 207.583 112.64C207.735 107.361 207.672 102.077 207.672 96.4199ZM120.56 114.297C125.81 114.297 130.968 114.339 136.124 114.249C136.804 114.239 137.61 113.711 138.128 113.192C144.675 106.665 151.212 100.127 157.63 93.4746C158.152 92.9333 158.227 91.1826 157.758 90.5946C155.707 88.0213 153.38 85.6693 151.339 83.4399C140.807 93.9973 130.826 104.007 120.56 114.297V114.297ZM149.77 30.6106C160.168 20.2773 170.179 10.3279 180.298 0.271926C175.372 0.271926 170.3 0.203931 165.235 0.337264C164.372 0.359931 163.379 1.08926 162.708 1.75726C156.331 8.11859 150.062 14.5893 143.627 20.8933C142.303 22.1906 142.356 22.9386 143.534 24.1213C145.8 26.3973 147.99 28.7506 149.77 30.6106V30.6106ZM168.078 48.1466C168.538 47.7719 168.906 47.5186 169.218 47.2093C181.61 34.8626 194.15 22.6559 206.208 9.98926C207.871 8.24126 207.168 4.21859 207.478 1.23726C207.503 0.979925 206.956 0.55326 206.591 0.38126C204.426 -0.63474 198.723 0.510591 196.959 2.27592C188.444 10.7906 179.92 19.2999 171.419 27.8266C167.472 31.7866 163.564 35.7839 159.634 39.7693C162.594 42.7039 165.248 45.3386 168.078 48.1466V48.1466ZM142.771 74.1759C139.872 71.7599 137.367 69.9066 135.158 67.7533C133.615 66.2493 132.619 66.5946 131.314 67.9039C119.219 80.0359 107.091 92.1346 94.9925 104.261C93.7031 105.555 92.8898 111.953 93.7698 113.459C93.9685 113.799 94.4165 114.239 94.7351 114.227C98.1338 114.091 101.711 115.421 104.571 111.96C107.22 108.753 110.464 106.043 113.443 103.105C122.847 93.8333 132.247 84.5559 142.771 74.1759V74.1759ZM93.5738 52.0293C110.896 34.7693 128.214 17.5106 145.54 0.239923C140.886 0.239923 135.996 0.143931 131.119 0.318598C130.062 0.357264 128.839 1.1706 128.032 1.96926C117.066 12.8453 106.143 23.7666 95.2698 34.7346C94.4725 35.5373 93.6871 36.7733 93.6485 37.8346C93.4791 42.7133 93.5738 47.6026 93.5738 52.0293V52.0293ZM154.608 114.319C159.838 114.319 164.056 114.537 168.234 114.221C170.136 114.076 172.428 113.359 173.74 112.077C184.483 101.603 195.04 90.9359 205.635 80.3106C206.331 79.6146 207.396 78.7893 207.419 77.9999C207.578 72.6533 207.503 67.2986 207.503 62.3959C190.124 79.4533 172.744 96.5133 154.608 114.319V114.319ZM133.207 30.9879C121.94 42.3519 111.454 53.4959 100.306 63.9333C94.9725 68.9293 92.4325 74.1653 93.5098 81.3186C93.8018 83.2626 93.5538 85.2893 93.5538 88.1733C95.0485 86.7533 95.6951 86.1666 96.3125 85.5493C107.787 74.0839 119.315 62.6746 130.672 51.0973C132.771 48.9586 133.975 49.0159 135.914 51.1226C139.348 54.8493 143.058 58.3213 146.612 61.9386C153.639 69.0879 160.639 76.2666 167.747 83.5319C178.048 73.2133 187.852 63.3586 197.698 53.5466C202.296 48.9613 202.332 48.9986 207.414 52.8519V35.3613H189.692C191.22 37.1079 192.423 38.4813 193.87 40.1346C185.555 48.4373 177.412 56.6159 169.144 64.6679C168.724 65.0786 166.891 64.7199 166.263 64.1319C162.243 60.3613 158.351 56.4546 154.468 52.5399C147.499 45.5133 140.564 38.4506 133.207 30.9879"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M133.207 30.9878C140.565 38.4505 147.499 45.5145 154.469 52.5398C158.351 56.4545 162.243 60.3612 166.263 64.1318C166.891 64.7198 168.725 65.0785 169.145 64.6678C177.413 56.6158 185.555 48.4372 193.87 40.1345C192.423 38.4812 191.221 37.1078 189.693 35.3612H207.414V52.8518C202.333 48.9985 202.297 48.9612 197.698 53.5465C187.853 63.3585 178.049 73.2132 167.747 83.5318C160.639 76.2665 153.639 69.0878 146.613 61.9385C143.058 58.3212 139.347 54.8492 135.914 51.1238C133.975 49.0158 132.771 48.9598 130.673 51.0972C119.315 62.6745 107.787 74.0838 96.3127 85.5492C95.6954 86.1665 95.0487 86.7532 93.554 88.1732C93.554 85.2892 93.802 83.2625 93.51 81.3185C92.4327 74.1652 94.9727 68.9292 100.306 63.9332C111.454 53.4958 121.941 42.3518 133.207 30.9878Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M154.608 114.319C172.746 96.5133 190.124 79.4533 207.503 62.3959C207.503 67.2986 207.579 72.6533 207.419 77.9999C207.396 78.7906 206.331 79.6146 205.636 80.3106C195.04 90.9359 184.483 101.603 173.742 112.077C172.428 113.359 170.136 114.076 168.234 114.221C164.056 114.537 159.838 114.319 154.608 114.319Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M93.5745 52.0295C93.5745 47.6028 93.4798 42.7135 93.6491 37.8348C93.6878 36.7735 94.4731 35.5375 95.2691 34.7348C106.161 23.7482 117.084 12.8282 128.033 1.96949C128.838 1.16949 130.061 0.357485 131.118 0.318818C135.996 0.144151 140.885 0.240154 145.541 0.240154C128.213 17.5095 110.896 34.7695 93.5745 52.0295Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M142.806 74.1752C132.282 84.5552 122.884 93.8326 113.48 103.105C110.501 106.042 107.256 108.754 104.608 111.961C101.746 115.422 98.1689 114.091 94.7703 114.226C94.4529 114.239 94.0036 113.799 93.8063 113.459C92.9249 111.953 93.7383 105.554 95.0289 104.261C107.126 92.1352 119.256 80.0366 131.349 67.9046C132.656 66.5939 133.652 66.2499 135.193 67.7539C137.404 69.9072 139.908 71.7592 142.806 74.1752Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M168.113 48.1467C165.284 45.3387 162.629 42.704 159.669 39.7693C163.6 35.784 167.508 31.7853 171.455 27.8267C179.957 19.3 188.48 10.7907 196.993 2.27601C198.759 0.510674 204.461 -0.634661 206.627 0.381339C206.991 0.553339 207.539 0.980008 207.513 1.23734C207.203 4.21867 207.908 8.24134 206.244 9.98934C194.187 22.656 181.645 34.8627 169.253 47.2093C168.943 47.5187 168.573 47.772 168.113 48.1467Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M149.805 30.6102C148.026 28.7502 145.837 26.3968 143.569 24.1208C142.393 22.9382 142.34 22.1915 143.665 20.8928C150.098 14.5888 156.368 8.11818 162.746 1.75685C163.416 1.08885 164.41 0.360845 165.272 0.336845C170.337 0.203511 175.409 0.271512 180.334 0.271512C170.216 10.3275 160.204 20.2768 149.805 30.6102Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M120.595 114.298C130.861 104.006 140.845 93.9964 151.374 83.4391C153.415 85.6684 155.743 88.0218 157.793 90.5951C158.262 91.1831 158.19 92.9338 157.666 93.4751C151.247 100.127 144.711 106.664 138.165 113.192C137.645 113.711 136.841 114.239 136.159 114.25C131.005 114.338 125.846 114.298 120.595 114.298Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M207.672 96.42C207.672 102.077 207.735 107.361 207.584 112.64C207.567 113.219 206.331 114.225 205.643 114.243C200.455 114.38 195.261 114.319 189.792 114.319C195.807 108.297 201.537 102.559 207.672 96.42Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M111.433 0.261235C105.314 6.35724 99.6445 12.0039 93.5965 18.0279C93.5965 12.4879 93.5312 7.3159 93.6792 2.1519C93.6952 1.50657 94.8085 0.362568 95.4405 0.345235C100.605 0.197235 105.774 0.261235 111.433 0.261235Z"
                  fill="white"
                />
              </svg>
            </Box>
            <Text fontSize={"sm"} color="white">
              © 2020 Consejeria. Derechos Reservados
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="white">
              <NavLink strict exact to={"/"}>
                Inicio
              </NavLink>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="white">
              <NavLink strict exact to={"/nosotros"}>
                Nosotros
              </NavLink>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2} color="white">
              <NavLink strict exact to={"/servicios"}>
                Servicios
              </NavLink>
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
