// import React, { useState} from "react";
// import { QRCode } from "react-qrcode-logo";
// import { db, auth } from "../firebaseConfig";

// const QRcode = () => {
//   const [formInputValue, setFormInputVal] = useState("");
//   const [qrInput, setQrIndput] = useState("");
  

//   const submitQrCode = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setQrIndput(formInputValue);

//     setFormInputVal("");
//   };

//   const downloadQRCode = () => {

//     // const canvas = qrRef.current.querySelector('canvas');
//     // const pngUrl = canvas
//     //   .toDataURL('image/png')
//     //   .replace('image/png', 'image/octet-stream');
//     // let downloadLink = document.createElement('a');
//     // downloadLink.href = pngUrl;
//     // downloadLink.download = 'qrcode.png';
//     // document.body.appendChild(downloadLink);
//     // downloadLink.click();
//     // document.body.removeChild(downloadLink);

//     // console.log("object")
//   };

//   return (
//     <div>
//       <form onSubmit={submitQrCode}>
//         <div className="md:flex items-center justify-center block">
//           <input
//             type="url"
//             required
//             className="text-black outline-none border rounded-sm md:rounded-l-sm p-4 md:my-10 lg:w-[40%] md:h-[50px] md:w-[50%] w-[70%] h-[50px]"
//             onChange={(e) => setFormInputVal(e.target.value)}
//             value={formInputValue}
//             placeholder="Enter URL to shorten"
//           />
//           <br className="md:hidden" />
//           <button
//             className="md:w-[20%] lg:w-[15%] md:h-[50px] md:mt-0 mt-[20px] md:rounded-r-sm rounded-sm w-[70%] h-[40px] font-bold bg-blue-500"
//             type="submit"
//           >
//             Generate QR Code
//           </button>
//         </div>
//       </form>

//       {qrInput && <div className="m-auto mb-20 w-full flex justify-center">
//         <div className="m-auto">
//           <QRCode size={300} value={qrInput}/>

//           {qrInput}

//           {/* <p className="cursor-pointer" onClick={downloadQRCode}>Download Qr code</p> */}
//         </div>
//       </div>}
//     </div>
//   );
// };

// export default QRcode;
