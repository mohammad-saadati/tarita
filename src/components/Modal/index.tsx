import Image from "next/image";
import React, { FC } from "react";
import closeIcom from "@/assets/images/close.svg";

interface ModalProps {
  children: React.ReactElement;
  close?: () => void;
  title?: string;
  showClose?: boolean;
}
const Modal: FC<ModalProps> = ({ children, close, title, showClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black opacity-100 w-screen h-screen z-10"
      style={{ background: "rgba(0, 0, 0, 0.40)", backdropFilter: "blur(5px)" }}
    >
      <div
        onClick={close}
        className="fixed bg-white opacity-50 w-screen h-screen"
      ></div>
      <div className="bg-white p-5 rounded-[10px] w-11/12 lg:w-auto h-fit z-20">
        {showClose ? (
          <div className="mb-6">
            <Image
              onClick={() => close?.()}
              className="inline cursor-pointer"
              src={closeIcom}
              alt="close-modal"
            />
          </div>
        ) : null}
        <div className="">{title}</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
