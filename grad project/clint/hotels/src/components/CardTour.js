function CardTour(props) {
  const {tour}=props;
  return (
    <div class="card m-5" style={{border:"none",width:"100%"}}>
      <img src={tour.img} class="card-img-top rounded" alt="..." style={{height:"250px"}}/>
      <div class="card-body">
        <h3>{tour.name}</h3>
        <p class="card-text text-success">
          Adventure
        </p>
      </div>
    </div>
  );
}

export default CardTour;
