import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../componets/Banner";
import ServiceCard from "../../componets/ServiceCard";

const Home = () => {
  const services = useLoaderData();

  const [displayServices, setDisplayServices] = useState(services);
  console.log(services);
  const [upcimgProducts, setUpcimgProducts] = useState([]);
  useEffect(() => {
    fetch("https://downtown-adidas-server-rohan1279.vercel.app/upcoming")
      .then((res) => res.json())
      .then((data) => setUpcimgProducts(data));
  }, []);

  const handleDeleteProduct = (service) => {
    console.log(service);
    const agree = window.confirm(
      `Are you sure you want to delete ${service.title}?`
    );
    if (agree) {
      fetch(
        `https://downtown-adidas-server.vercel.app/services/${service._id}`,
        {
          method: "DELETE",
        }
      )
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
  const handleUpdateProduct = (service) => {
    console.log(service);
  };
  return (
    <div className="px-14 py-5">
      <Banner />
      <h1 className="text-center text-4xl font-extrabold my-5">All products</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
        {displayServices?.map((service) => (
          <ServiceCard
            handleDeleteProduct={handleDeleteProduct}
            handleUpdateProduct={handleUpdateProduct}
            service={service}
            key={service._id}
          />
        ))}
      </div>
      <h1 className="text-center text-4xl font-extrabold my-5">
        Upcoming products
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2">
        {upcimgProducts?.map((service) => (
          <ServiceCard
            handleDeleteProduct={handleDeleteProduct}
            handleUpdateProduct={handleUpdateProduct}
            service={service}
            key={service._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
