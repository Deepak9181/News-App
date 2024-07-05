import { useDispatch } from "react-redux";
import { addmore, clearData } from "../utils/Slice";
import { Link } from "react-router-dom";

const Card =({Data})=>{
    const{title,description,urlToImage}=Data;
    // console.log(Data);

    const dispatch = useDispatch();
    const handleclick = (news) =>{
      dispatch(clearData());
      dispatch(addmore(news));
    }


    return (
        <div className="card-container m-3 p-4 w-[280px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={urlToImage} alt="News" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base mb-4">{description}</p>
           <Link to='/Description'>
              <button
              type="button" onClick={()=>handleclick(Data)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full transition duration-300"
              >
              Read More
            </button>
           </Link> 
          </div>
        </div>
      );
    };
export default Card;