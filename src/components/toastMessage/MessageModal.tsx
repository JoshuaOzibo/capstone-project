import ReactDom from "react-dom";
import { motion } from "framer-motion";

const GenerateModal = (props: any) => {
  const Backdrop = (props: any) => {
    return (
      <motion.div
        initial={{ y: -90 }}
        whileInView={{ y: 0 }}
        className=" md:w-[50%] w-full break-words md:left-[25%] m-auto md:max-w-[150%] top-[150px] fixed rounded-[14px] bg-white pt-[-50px] ease-in-out z-[210]"
      >
        <div>{props.children}</div>
      </motion.div>
    );
  };

  const getdocumentId = document.getElementById(
    "Overlay&Backdrop"
  ) as HTMLDivElement;
  return (
    <div>
      {ReactDom.createPortal(
        <Backdrop>{props.children}</Backdrop>,
        getdocumentId
      )}
    </div>
  );
};
export default GenerateModal;
