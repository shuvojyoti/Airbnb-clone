import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_header">
        <h1>Live anywhere</h1>
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Homes"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Cabins and Cottages"
        />{" "}
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
          title="Unique stays"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
          title="Pets welcome"
        />
      </div>
      <div className="home_header">
        <h1>Join millions of hosts on Airbnb</h1>
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg"
          title="Host your home"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg"
          title="Host an online experience"
        />{" "}
        <Card
          src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg"
          title="Host an experience"
        />
      </div>
    </div>
  );
}

export default Home;
