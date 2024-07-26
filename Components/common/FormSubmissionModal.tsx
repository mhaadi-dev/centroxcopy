import { Props } from "next/script";
import Modal from "./Modal";
import { Button } from "../Button.js/button";

interface PropsI{
    onClose : ()=>void
}
export const FormSubmissionModal = ({onClose}:PropsI) => {
  return (
    <>
      <Modal onClick={onClose}>
        <div className="flex flex-col gap-4 justify-center items-center py-6     "
        style={{
          
        }}
        >
            <h2 className="text-2xl  text-white font-bold">We have received your message!    </h2>
            <h4 className="text-white font-semibold w-1/2 mx-auto text-center">Thank you for your message. We will get back to you as soon as possible. </h4>
            
            <Button content="Continue" onClick={onClose} className="mt-4"/>
        </div>
      </Modal>
    </>
  );
};
