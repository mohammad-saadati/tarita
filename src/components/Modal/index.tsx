import React, { FC } from "react";

interface ModalProps {
  children: React.ReactElement;
}
const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black opacity-100 w-screen h-screen"
      style={{ background: "rgba(0, 0, 0, 0.40)", backdropFilter: "blur(5px)" }}
    >
      <div className="fixed bg-white opacity-50 w-screen h-screen z-50"></div>
      <div className="bg-white p-5 rounded-[10px]">
        <div className="z-50">title</div>
        <div className="z-50">dddddddddddddd</div>
        <div className="z-50">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
