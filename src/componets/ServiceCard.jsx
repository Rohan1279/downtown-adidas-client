import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ServiceCard = ({ service, handleDeleteProduct, handleUpdateProduct }) => {
  return (
    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={service.photoUrl} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{service.title}</h2>
        <p>{service.description}</p>
        <h3>
          <span className="font-bold">Price:</span> ${service.price}
        </h3>
        <div className="card-actions justify-end">
          <Link to={`/update/${service._id}`}>
            <Button
              data={service}
              handler={handleUpdateProduct}
              classes={"rounded-md w-20"}
            >
              Edit
            </Button>
          </Link>
          <Button
            data={service}
            handler={handleDeleteProduct}
            classes={"rounded-md w-20"}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
