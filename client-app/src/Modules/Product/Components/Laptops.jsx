import React from 'react'
import L1 from "../../../Assets/Images/L1.jpg";
import L2 from "../../../Assets/Images/L2.jpg";
import L3 from "../../../Assets/Images/L3.jpg";
import L4 from "../../../Assets/Images/L4.jpg";
import L5 from "../../../Assets/Images/L5.jpg";
import L6 from "../../../Assets/Images/L6.jpg";
import L7 from "../../../Assets/Images/L7.jpg";


 const Laptops = () => {
    return (
        <>
         <div className="container m-4">
           <div className="row">
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L1} alt="L1" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Acer Laptop 15.6 inch</li>
                     <li className="list-group-item"><i class="fa fa-rupee-sign"></i>29000</li>
                     <li className="list-group-item">Black</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Ad                                                       d To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L6} alt="L6" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Hp Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>48000</li>
                     <li className="list-group-item">Black</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L2} alt="L2" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">HP Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>59000</li>
                     <li className="list-group-item">Mat-Black</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L7} alt="L7" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Dell Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>65000</li>
                     <li className="list-group-item">dark-Green</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L4} alt="L4" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Asus Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>35000</li>
                     <li className="list-group-item">Black</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L5} alt="L5" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Hp Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>44000</li>
                     <li className="list-group-item">White</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
             <div className="col-3">
               <div className="card">
                 <div className="card-header">
                   <img src={L3} alt="L3" height="100%" width="80%" />
                 </div>
                 <div className="card-body">
                   <ul className="list-group">
                     <li className="list-group-item">Hp Laptop 15.6 inch</li>
                     <li className="list-group-item"><i className="fa fa-inr" aria-hidden="true"></i>67000</li>
                     <li className="list-group-item">Black</li>

                   </ul>
                   <button  className="form-control btn btn-warning mt-1">Add To Cart</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
        </>
    )
}
export default Laptops;