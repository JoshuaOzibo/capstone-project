import React from 'react'
import ReactDom from 'react-dom';


const GenerateModal = (props) => {


    const Overlay = () =>{
        return <div onClick={() => props.setShowResultModal(false)} className=' w-full h-[100vh] top-0 left-0 fixed overflow-hidden z-[10] bg-black opacity-40'></div>
    }
    const Backdrop = (props) =>{
        return <div className=' w-[50%] max-w-[150%] left-[25%] top-[200px] fixed rounded-[14px] bg-white pt-[-50px] ease-in-out z-[210]'>
            <div>{props.children}</div>
        </div>
    }

    const getdocumentId = document.getElementById('Overlay&Backdrop');
  return (
    <div>
        {ReactDom.createPortal(<Overlay />, getdocumentId)}
        {ReactDom.createPortal(<Backdrop>{props.children}</Backdrop>, getdocumentId)}
    </div>
  )
}
export default GenerateModal;