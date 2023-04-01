import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo";

const App = () => {
  return (
    <Layout>
      <Navbar isBordered variant='static'>
        <Navbar.Brand>
          {/* <AcmeLogo />
          <Text b color='inherit' hideIn='xs'>
            ACME
          </Text> */}
        </Navbar.Brand>
        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='#'>
            EN
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              ES
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default App;
