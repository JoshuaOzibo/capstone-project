import React from "react";
import GenerateModal from "../resuableModal";
import QRcode from "./QRcode";

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
      <div className="modal-container">
        <p className="flex justify-end pr-5 py-2 text-2xl font-medium">
          <span
            onClick={() => setShowResultModal(false)}
            className="cursor-pointer"
          >
            X
          </span>
        </p>
        <p className="bg-white text-center md:text-xl text-lg font-bold m-auto w-full">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>

        <QRcode shortUrl={shortUrl} />
      </div>
    </GenerateModal>
  );
};

export default DisplayShortUrlResult;
