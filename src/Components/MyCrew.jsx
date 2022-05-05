import React from "react";

import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../redux/modules/main";

const MyCrewList = (props) => {

  const dispatch = useDispatch();
  const list = useSelector((state) => state.main.list);
  console.log(list);
  const myList = list.myMeeting
 
  React.useEffect(()=> {
    dispatch(mainActions.loadCrewDB());
  }, []);

  return (
    <React.Fragment>
      {/* {myList.map((p, idx) => 
      
        console.log(p);
        if(myList.length !== undefined) {
            return <Cards key={p._id} {...p} />
        } 
        return null;
      )
    } */}
    </React.Fragment>
  );
};

export default MyCrewList;