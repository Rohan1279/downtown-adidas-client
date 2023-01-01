import React from "react";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="px-10 ">
      <h1 className="text-center text-4xl font-extrabold">All products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2">
        {services.map((service) => (
          <div key={service._id} className="card w-80 mx-auto bg-base-100 shadow-xl">
            <figure>
              <img src={service.photoUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {service.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{service.description}</p>
              <h3><span className="font-bold">Price:</span> ${service.price}</h3>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
