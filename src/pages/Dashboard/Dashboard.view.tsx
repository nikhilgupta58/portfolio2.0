import { Flex } from "@chakra-ui/react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Home } from "../../components/Home";
import { NavigationBar } from "../../components/NavigationBar";
import { Portfolio } from "../../components/Portfolio";

export default function DashboardView() {
    return (
        <Flex
            fontFamily={'Raleway'}
            direction='column'
        >
            <NavigationBar />
            <Home />
            <About />
            <Portfolio/>
            <Blog/>
            <Contact/>
            <Footer/>
        </Flex>
    );
}    
