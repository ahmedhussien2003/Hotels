import photo from "../images/slider-1-1.jpg";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "../rtk/slices/tours-slice";
import { useEffect } from "react";
import CardTour from "./CardTour";

function Tours() {
  const tours=useSelector((state)=>state.tours)
  console.log(tours)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchTours());
  },[])

  return (
    <div className="tours">
      <div className="tour-grid mb-5 col-12">
        <img src={photo} alt="slider" className="img-fluid" />
        <h2>DESTINATION</h2>
        <div className="tours bg-success text-white p-2 rounded-2 px-3">
          Home // Destination
        </div>
      </div>
        <div className="container">
          <div className="row">
            {tours.map((tour)=>(
                                        <div className="col-lg-4 col-md-6 col-sm-12" key={tour.name}>
                                        <CardTour tour={tour}/>
                                        </div>
            )

            )}

            
          </div>
        </div>
    </div>
  );
}
export default Tours;
