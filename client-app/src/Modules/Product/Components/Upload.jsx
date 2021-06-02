
import React, { useState } from "react";

const Upload = () => {
  const [product, setProduct] = useState({
    p_Name: "",
    price: "",
    qty: "",
    image: "",
    avail: "",
    desc: "",
    usage: "",
  });
  let inputHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  let imageHandler=(e)=>{
    let imageFile=e.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener("load",()=>{
      if(reader.result){
        setProduct({
          ...product,
          image:reader.result,
        })
      }
    })
    
  }
  let submitHandler=(e)=>{
    e.preventDefault();
    console.log(product);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <div className="card">
              <div className="card-header display-6">
                <h2>Uplaod New Product</h2>
                <pre>{JSON.stringify(product)}</pre>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Product Name"
                      onChange={inputHandler}
                      name="p_Name"
                    />
                    <input
                      type="number"
                      className="form-control mt-2"
                      placeholder="Price"
                      onChange={inputHandler}
                      name="price"
                    />
                    <input
                      type="number"
                      className="form-control mt-2"
                      placeholder="Quantity"
                      onChange={inputHandler}
                      name="qty"
                    />
                    <input
                      type="file"
                      className="form-control mt-2"
                      placeholder="Uplaod Images"
                      onChange={imageHandler}
                      name="image"
                    />
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Availiablity"
                      onChange={inputHandler}
                      name="avail"
                    />
                    <textarea
                      type="text"
                      className="form-control mt-2"
                      placeholder="Description"
                      onChange={inputHandler}
                      name="desc"
                    />
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Uasge"
                      onChange={inputHandler}
                      name="usage"
                    />
                  </div>
                  <input
                    type="submit"
                    className=" form-control btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Upload;
