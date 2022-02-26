import { Button, Center } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import SideHeader from "../Components/Layout/SideHeader";

function Home() {
  return (
    <>
    <Center>
      <h1>
        Landing Page yet to be designed. You can jump to the following pages.
      </h1> 
      </Center>

      <Center style={{ fontSize:"30px" }}>
        <ul>
          <li>
            <Link to="/signin">Sign In Page</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/JNF">JNF</Link>
          </li>
        </ul>
      </Center>
    </>
  );
}

export default Home;
