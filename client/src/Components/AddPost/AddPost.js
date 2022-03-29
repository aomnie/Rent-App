import { Button } from "react-bootstrap";
import "./AddPost.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/action/postAction";
import { useHistory } from "react-router-dom";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

function AddPost() {
  const [newPost, setNewPost] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const Regions = [
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

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(createPost({ newPost }));
    history.push("/Announces");
  };

  const handleimage = (e) => {
    const x = [...e.target.files].map((file) => file.name);
    setNewPost({ ...newPost, image: x });
  };

  return (
    <div>
      <div className="all">
        <div className="container">
          <div className="form">
            <label>Adresse :</label>

            <input type="text" name="adresse" onChange={handleChange} />
            <label>Price :</label>

            <input type="text" name="price" onChange={handleChange} />
            <label>Rooms :</label>

            <input type="text" name="rooms" onChange={handleChange} />
            <form action="/uploads" encType="multipart/form-data" method="POST">
              <label>Image :</label>
              <input
                type="file"
                name="image"
                required
                multiple
                onChange={handleimage}
              />
            </form>
            <label>Region :</label>

            <select
              className="selectmenue"
              name="region"
              onChange={handleChange}
            >
              {Regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <div className="radioo">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Wifi :
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="wifi"
                >
                  <FormControlLabel
                    size="small"
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    size="small"
                    value="false"
                    control={<Radio />}
                    label="No"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="radioo">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  State :
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="state"
                >
                  <FormControlLabel
                    size="small"
                    value="true"
                    control={<Radio />}
                    label="Available"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    size="small"
                    value="false"
                    control={<Radio />}
                    label="Not available"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="radioo">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Heater :
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="heater"
                >
                  <FormControlLabel
                    size="small"
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    size="small"
                    value="false"
                    control={<Radio />}
                    label="No"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="radioo">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Conditioner :
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="Conditioner"
                >
                  <FormControlLabel
                    size="small"
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    size="small"
                    value="false"
                    control={<Radio />}
                    label="No"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              ADD POST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
