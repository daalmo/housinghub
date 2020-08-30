import React from "react";
import { Form, Image } from 'react-bootstrap'
import {
  HouseImage,
  AddressImage,
  DollarsignImage,
  BedImage,
  BathImage,
  SchoolImage,
  TicketImage,
  PersonImage,
  PhoneImage
} from "../images"


const PropertyForm = ({ formValues, setFormValues }) => {

  const handleChange = e => {
    let localFormValues = formValues
    localFormValues[e.target.id] = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormValues(localFormValues)
    console.log(formValues)
  }

  return (
    <>
      <Form>
        <Form.Group controlId="propertyName" >
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Property Name</Form.Label>
          <Form.Control type="text" placeholder="Property Name" />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>
            <Image src={AddressImage} className="mr-2" />Address</Form.Label>
          <Form.Control type="text" placeholder="Address" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="housingType">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Housing Type</Form.Label>
          <Form.Control as="select" onChange={handleChange}>
            <option>Apartment</option>
            <option>Shared House</option>
            <option>Basement Apartment</option>
            <option>Full House</option>
            <option>Duplex</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="rent">
          <Form.Label>
            <Image src={DollarsignImage} className="mr-2" />Rent</Form.Label>
          <Form.Control type="text" placeholder="placeholder" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="bedrooms">
          <Form.Label>
            <Image src={BedImage} className="mr-2" />Bedrooms</Form.Label>
          <Form.Control type="number" placeholder="1" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="bathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="1" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="sharedBathrooms">
          <Form.Label>
            <Image src={BathImage} className="mr-2" />Shared Bathrooms</Form.Label>
          <Form.Control type="number" placeholder="0" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>
            <Image src={SchoolImage} className="mr-2" />Location</Form.Label>
          <Form.Control type="text" placeholder="Charlottesville" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="vouchers">
          <Form.Label>
            <Image src={TicketImage} className="mr-2" />Vouchers Accepted</Form.Label>
          <Form.Control as="select" onChange={handleChange}>
            <option>None</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>All</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="propertyContact">
          <Form.Label>
            <Image src={PersonImage} className="mr-2" />Property Contact</Form.Label>
          <Form.Control type="text" placeholder="Example Property Contact" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="contactPhoneNumber">
          <Form.Label>
            <Image src={PhoneImage} className="mr-2" />Contact Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Example Phone Number" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="landlord">
          <Form.Label>
            <Image src={HouseImage} className="mr-2" />Landlord</Form.Label>
          <Form.Control type="text" placeholder="Example Landlord" onChange={handleChange} />
        </Form.Group>
        <Form.Label>Test Label</Form.Label>
        <Form.Switch
          className="mt-2 mb-2"
          id="bus-switch"
          label="Bus Nearby"
          onChange={handleChange}
        />
        <Form.Switch
          className="mt-2 mb-2"
          id="basement-switch"
          label="Basement"
          onChange={handleChange}
        />
        <Form.Switch
          className="mt-2 mb-2"
          id="wheelchair-switch"
          label="Wheelchair Accessible"
          onChange={handleChange}

        />
        <Form.Switch
          className="mt-2 mb-2"
          id="background-check-switch"
          label="No Background Check"
          onChange={handleChange}
        />
        <Form.Switch
          className="mt-2 mb-2"
          id="pets-switch"
          label="Pets Allowed"
          onChange={handleChange}
        />
        <Form.Switch
          className="mt-2 mb-2"
          id="elevator-switch"
          label="Elevator"
          onChange={handleChange}
        />
        <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mb-2">
            <Image src={AddressImage} className="mr-2" />Additional Notes</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={handleChange} />
        </Form.Group>
      </Form>
    </>
  );
};

export default PropertyForm
