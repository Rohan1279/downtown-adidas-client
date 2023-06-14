import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../componets/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  const [displayServices, setDisplayServices] = useState(services);

  console.log(services);
  const handleDeleteProduct = (service) => {
    console.log(service);
    const agree = window.confirm(
      `Are you sure you want to delete ${service.title}?`
    );
    if (agree) {
      fetch(`http://localhost:5000/services/${service._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product deleted successfully");
            const remainingServices = displayServices.filter(
              (displayService) => displayService._id !== service._id
            );
            setDisplayServices(remainingServices);
          }
        });
    }
  };
  return (
    <div className="px-10 py-5">
      <h1 className="text-center text-4xl font-extrabold">All products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 my-10">
        {displayServices?.map((service) => (
          <ServiceCard
            handleDeleteProduct={handleDeleteProduct}
            service={service} />
          // <div key={service._id} className="card w-80 mx-auto bg-base-100 shadow-xl">
          //   <figure>
          //     <img src={service.photoUrl} alt="Shoes" />
          //   </figure>
          //   <div className="card-body">
          //     <h2 className="card-title">
          //       {service.title}
          //       <div className="badge badge-secondary">NEW</div>
          //     </h2>
          //     <p>{service.description}</p>
          //     <h3><span className="font-bold">Price:</span> ${service.price}</h3>
          //     <div className="card-actions justify-end">
          //       <div className="badge badge-outline">Fashion</div>
          //       <div className="badge badge-outline">Products</div>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
