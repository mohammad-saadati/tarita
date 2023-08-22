import React, { FC } from "react";

interface ModalProps {
  children: React.ReactElement;
  close: () => void;
  title?: string;
}
const Modal: FC<ModalProps> = ({ children, close, title }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black opacity-100 w-screen h-screen z-10"
      style={{ background: "rgba(0, 0, 0, 0.40)", backdropFilter: "blur(5px)" }}
    >
      <div
        onClick={close}
        className="fixed bg-white opacity-50 w-screen h-screen"
      ></div>
      <div className="bg-white p-5 rounded-[10px] w-11/12 h-fit z-20">
        <div className="">{title}</div>
        <div className="flex flex-wrap">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
