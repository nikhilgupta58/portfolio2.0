import { Flex } from "@chakra-ui/react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Home } from "../../components/Home";
import { NavigationBar } from "../../components/NavigationBar";
import { Portfolio } from "../../components/Portfolio";

export default function DashboardView() {
    return (
        <Flex
            fontFamily={'Raleway'}
            direction='column'
            overflowX={'hidden'}
        >
            <NavigationBar />
            <Home />
            <About />
            <Portfolio/>
            <Blog/>
        </Flex>
    );
}    
