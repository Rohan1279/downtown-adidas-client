import React, { useState } from "react";

const AddService = () => {
  const [service, setService] = useState({});
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;
    const newService = { title, price, description, photoUrl };
    console.log(newService);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service added succesfully");
          e.target.reset();
        }
        console.log(data);
      });
  };
  return (
    <div className="">
      <div className="w-full">
        <div className="card w-[450px] shadow-nm mx-auto my-10 ">
          <figure className="">
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <form onSubmit={handleAddProduct} action="">
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Photo</h1>
                <input
                  name="photoUrl"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="photo url"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Title</h1>
                <input
                  name="title"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product title"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Price</h1>
                <input
                  name="price"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product price"
                />
              </div>
              <div className="flex my-3 space-x-2 justify-start">
                <h1 className="card-title">Description</h1>
                <input
                  name="description"
                  type="text"
                  className="shadow-nm-inset p-2 px-3 rounded-full bg-secondary-color w-full"
                  placeholder="product description"
                />
              </div>
              <input type="submit" value="Submit" className="p-4 text-2xl mt-3 w-full bg-secondary-color border border-zinc-300 rounded-md  transition-all hover:shadow-nm hover:bg" />
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

export default AddService;
