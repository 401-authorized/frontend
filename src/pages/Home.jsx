import { Button } from "@mantine/core";
import React from "react";
import SideHeader from "../Components/Layout/SideHeader";

function Home() {
  return (
    <SideHeader>
      <div className=" tw-text-center">Home</div>
      <Button>Not Hi</Button>
    </SideHeader>
  );
}

export default Home;
