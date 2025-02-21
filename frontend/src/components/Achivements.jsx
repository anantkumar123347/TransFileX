import React from 'react';
import Reusuable from './Reusuable';
import './Achivements.css';

function Achivements() {
  return (
    <div className="achivements-container">
      <div className="upper">
        <Reusuable
          head="All platforms are welcome!"
          text={
            "Our File converter works \non all computers - no matter if \nyou use Mac, Windows, or Linux.\n  "
          }
          icon="FaThumbsUp"
        />
        <Reusuable
          head="Quick and easy conversion"
          text={
            "With just a simple drag-and-drop, you can \nconvert PDF to Word or word to PDF within \nseconds. There’s no file size limit nor even the \nneed to register to use our service."
          }
          icon="FaLightbulb"
        />
        <Reusuable
          head="We keep your files safe!"
          text={
            "We care about privacy. All files will be \ndeleted from our servers forever after one hour. To know more about how much we care, read our privacy policy.\n  "
          }
          icon="FaAward"
        />
      </div>
      <div className="lower">
        <Reusuable
          head={"Magic conversion in the cloud"}
          text={"It is seriously ridiculously easy \nwith our tool to convert files online. \nTry it and you will love it."}
          icon={"FaMagic"}
        />
        <Reusuable
          head={"Magic upload in the cloud"}
          text={"We have many servers in the cloud \nwhich do nothing else than converting \nPDF to Word files. So, lean back and\n let them do the work."}
          icon={"FaCloudUploadAlt"}
        />
        <Reusuable
          head={"PDF to Word in the best quality"}
          text={"File conversion is hard. To bring you \nthe very best quality to \nconvert your files."}
          icon={"FaLock"}
        />
      </div>
    </div>
  );
}

export default Achivements;
