import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";

import { createPortal } from "react-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSetIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ children, isOpen, onSetIsOpen }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => onSetIsOpen(false));

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 1,
    },
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-[1000] transition overflow-hidden flex items-center justify-center">
          <motion.div
            key="create post"
            ref={ref}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white max-w-2xl w-full max-h-[90vh] rounded-md px-10 py-8 flex flex-col gap-4"
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Header({ children }: { children: ReactNode }) {
  return <h2 className="font-semibold text-3xl mb-4">{children}</h2>;
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 flex-grow overflow-visible">
      {children}
    </div>
  );
}
function Footer({ children }: { children: ReactNode }) {
  return <footer className="mt-auto justify-end gap-2 flex">{children}</footer>;
}

Modal.Window = Window;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
