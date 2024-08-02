import React from "react";
import ReactDom from "react-dom";

const GenerateModal = (props) => {
  const Overlay = () => {
    return (
      <div className=" w-full h-[100vh] top-0 left-0 fixed flex items-center justify-center m-auto overflow-hidden z-[10] bg-black opacity-40"></div>
    );
  };
  const Backdrop = (props) => {
    return (
      <div className=" md:w-[50%] w-full break-words md:left-[25%] m-auto md:max-w-[150%] top-[150px] fixed rounded-[14px] bg-white pt-[-50px] ease-in-out z-[210]">
        <div>{props.children}</div>
      </div>
    );
  };

  const getdocumentId = document.getElementById("Overlay&Backdrop");
  return (
    <div>
      {ReactDom.createPortal(<Overlay />, getdocumentId)}
      {ReactDom.createPortal(
        <Backdrop>{props.children}</Backdrop>,
        getdocumentId
      )}
    </div>
  );
};
export default GenerateModal;
