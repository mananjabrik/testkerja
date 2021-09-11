import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}
export default MyApp;
