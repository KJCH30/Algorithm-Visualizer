import React, { useState } from "react";
import "./Home.css";
import Workspace from "../Workspace/Workspace";
// import Panel from '../Panel/Panel'
import DropDownArray from "../../Array/DropDownArray";

function Home(props) {
  const [state, setState] = useState({
    DropDownArray: false,
    typeOfArray: null,
  });
  // state = {

  // }

  const handleDropDownArray = () => {
    console.log(state.DropDownArray);
    console.log(state.typeOfArray);
    setState({
      DropDownArray: !state.DropDownArray,
      typeOfArray: state.typeOfArray,
    });
  };
  return (
    <div className="Home">
      <div className="Home-main-activity">
          <div className="Panel">
            {/* {console.log(state.typeOfArray)} */}
            <div className="Panel-Section-1">
              <div className="Panel-Array">
                <button
                  id="Array-option-button"
                  onClick={() => handleDropDownArray()}
                >
                  Array
                </button>
                {/* {console.log(state.DropDownArray)} */}
                {state.DropDownArray && <DropDownArray setState={setState} />}
              </div>
            </div>
            {/* <DropDownArray/> */}
        </div>
        <div className="Home-workspace">
          {/* {console.log(state.typeOfArray)} */}
          <Workspace typeOfArray={state.typeOfArray} setState={setState}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
