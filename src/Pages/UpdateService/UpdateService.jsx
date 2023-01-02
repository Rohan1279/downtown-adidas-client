import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateService = () => {
  const storedService = useLoaderData();
  const [service, setService] = useState(storedService);
  //   console.log(service);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;
    const newService = { title, price, description, photoUrl };
    console.log(newService);

    fetch(`http://localhost:5000/services/${storedService._id}`, {
      method: "PUT", //update
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Product updated");
        }
        console.log(data);
      });
  };
  return (
    <div className="">
      <div className="w-full">
        <div className="card w-[450px] shadow-nm mx-auto my-10 ">
          <figure className="">
            <img className="w-full" src={storedService.photoUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <form onSubmit={handleUpdateProduct} action="">
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Photo</h1>
                <input
                  defaultValue={storedService.photoUrl}
                  name="photoUrl"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="photo url"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Title</h1>
                <input
                  defaultValue={storedService.title}
                  name="title"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product title"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Price</h1>
                <input
                  defaultValue={storedService.price}
                  name="price"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product price"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Description</h1>
                <input
                  defaultValue={storedService.description}
                  name="description"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product description"
                />
              </div>
              <input
                type="submit"
                value="Update!"
                className="p-4 text-2xl mt-3 w-full bg-secondary-color border border-zinc-300 rounded-md  transition-all hover:shadow-nm hover:bg"
              />
            </form>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
