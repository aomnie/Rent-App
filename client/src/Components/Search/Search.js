import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";
import { filterPosts } from "../../redux/action/postAction";

function Search() {
  // eslint-disable-next-line
  const cities = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    " Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ];
  const dispatch = useDispatch();
  const [region, setRegion] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setRegion(value);
    // eslint-disable-next-line

    dispatch(filterPosts(value));
  };

  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <div>
      <div
        id="selectR"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1 style={{ paddingRight: "400px", color: "royalblue" }}>
          Select a Region :
        </h1>

        <FormControl sx={{ m: 3, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={region}
            onChange={handleChange}
            autoWidth
            label="Region"
          >
            {cities.map((city, index) => (
              <MenuItem value={city} key={index}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <div className="cards">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
