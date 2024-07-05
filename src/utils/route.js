import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../Components/Body";
import Description from "../Components/Description";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Body /> 
      },
      {
        path:"/Description",
        element:<Description/>
      }
    ]
  }
]);
