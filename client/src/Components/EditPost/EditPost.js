import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/action/postAction";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

function EditPost({ post }) {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedPost, setUpdatedPost] = useState({});

  const handleChange = (e) => {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("this is the id from handlesubmit", post._id);
    dispatch(editPost({ updatedPost, id: post._id }));
    handleClose();
  };
  return (
    <>
      <Button
        variant="info"
        onClick={handleShow}
        style={{ marginRight: "20px" }}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Adresse:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The New Adresse"
                name="adresse"
                onChange={handleChange}
                defaultValue={post.adresse}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The New Price"
                name="price"
                onChange={handleChange}
                defaultValue={post.price}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rooms:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The New Rooms Number"
                name="rooms"
                onChange={handleChange}
                defaultValue={post.rooms}
              />
            </Form.Group>

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
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ color: "black" }}
                >
                  Wifi :
                </FormLabel>
                <RadioGroup
                  defaultValue={post.wifi}
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
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ color: "black" }}
                >
                  State :
                </FormLabel>
                <RadioGroup
                  defaultValue={post.state}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="state"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Available"
                    onChange={handleChange}
                  />
                  <FormControlLabel
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
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ color: "black" }}
                >
                  Heater :
                </FormLabel>
                <RadioGroup
                  defaultValue={post.heater}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="heater"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    onChange={handleChange}
                  />
                  <FormControlLabel
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
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ color: "black" }}
                >
                  Conditioner :
                </FormLabel>
                <RadioGroup
                  defaultValue={post.conditioner}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="Conditioner"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Update Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost;
