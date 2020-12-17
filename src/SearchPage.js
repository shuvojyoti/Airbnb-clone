import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 august to 3rd september - 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/44a12861-2aed-494a-bf50-b965557c9efb.jpg?im_w=720"
        location="LofStudio Paris"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.74}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/e6a39359-04bf-4510-a237-f8a941b5524f.jpg?im_w=960"
        location=" Parisien Homme Dortoir"
        title="Shared room in apartment hosted by Dale"
        description="1 guest · 1 bedroom · 8 beds · 1.5 shared baths"
        star={4.5}
        price="$10 / night"
        total="$70 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ab32587c-9a44-4e75-a829-8b97b7edd768.jpg?im_w=960"
        location="Appartement New-Yorkais"
        title="Entire apartment hosted by Adrián"
        description="3 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.8}
        price="$39 / night"
        total="$127 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ffebb597-2eb6-4329-b31a-e1a464d2a225.jpg?im_w=960"
        location="Private room in apartment"
        title="Beautiful Room next to paseo de gracia"
        description="2 guests · 1 bedroom · 1 bed · 2 shared baths "
        star={4.45}
        price="$59 / night"
        total="$147 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/af33c79d-be61-4316-a57b-08c322936031.jpg?im_w=960"
        location="Private room in apartment"
        title="Bright and Spacious ROOM for 3- 5min Pl. Cataluña!!"
        description="3 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.6}
        price="$43 / night"
        total="$119 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/78817503-cdba-4818-ae27-ae2c1ba43ec5.jpg?im_w=960"
        location="Lovely apartment near the center"
        title="Entire apartment hosted by Pilar"
        description="3 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.8}
        price="$45 / night"
        total="$147 total"
      />
    </div>
  );
}

export default SearchPage;
