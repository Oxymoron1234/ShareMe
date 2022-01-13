import React from 'react';
//import Loader from 'react-loader-spinner';
import Loader from '../assets/Loader.gif';
function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      /> */}
      <img className="my-3 m-3 rounded-full" src={Loader} alt="Loding" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
