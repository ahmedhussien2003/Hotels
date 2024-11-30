import Tour from "../model/tourModel.js"

export const create=async (req,res)=>{
  try{
    const tourData=new Tour(req.body);
    const {name}=tourData;

    const tourExist=await Tour.findOne({name})
    if(tourExist){
      res.status(400).json({ message: "tour existed" });
    }

    const savedTour=await tourData.save();
    res.status(200).json(savedTour);
  }
  catch{
    res.status(500).json({ error: "server error" });
  }
}


export const fetch = async (req, res) => {
  try {
    const tours=await Tour.find();
    if(tours.length===0)
    {
      res.status(404).json({ message: "no tours" });
    }
    res.status(200).json(tours);
  } catch {
    res.status(500).json({ error: "server error" });
  }
};
