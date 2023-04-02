import React from "react";
import { Image, Navbar, Button, Link, Text, Card, Radio, Avatar } from "@nextui-org/react";
import { Layout } from "./Layout";

const App = () => {
  return (
    <Layout>
      <Navbar isBordered variant='static'>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              EN
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              ES
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link
            color='inherit'
            href='https://www.linkedin.com/in/oscar-ariel-saucedo/'
            target='_blank'
          >
            <Image src='/img/icons/linkedin_icon.svg' width={32} height={32} />
          </Navbar.Link>
          <Navbar.Link color='inherit' href='https://github.com/arielsaucedo' target='_blank'>
            <Image src='/img/icons/github_icon.svg' width={32} height={32} alt='Github logo' />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default App;
