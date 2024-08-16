import React from "react";
import GenerateModal from "../resuableModal";
import QRcodeComponent from "./QRcode";
import { CiLink } from "react-icons/ci";

interface DisplayShortUrlResultProps {
  shortUrl: string;
  setShowResultModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const DisplayShortUrlResult = ({
  setShowResultModal,
  shortUrl,
}: DisplayShortUrlResultProps) => {
  return (
    <GenerateModal>
      <div className="modal-container ">
        <p className="flex justify-end pr-5 py-2 text-2xl font-medium">
          <span
            onClick={() => setShowResultModal(false)}
            className="border gradient_background text-white px-4 py-1 rounded-md cursor-pointer"
          >
            X
          </span>
        </p>
        <span className=" flex justify-center  cards_colors_H text-center md:text-xl text-lg font-bold m-auto w-full">
          <span>
            <CiLink color="blue" size={30} />
          </span>
          <span>
            <a
              className="text-sm md:text-md"
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
          </span>
        </span>

        <QRcodeComponent shortUrl={shortUrl} />
      </div>
    </GenerateModal>
  );
};

export default DisplayShortUrlResult;
