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
        <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="text-2xl ">Form submitted Successfully</h2>
            <h4>Thank you for your submission. We will get back to you soon</h4>
            <Button content="Continue" onClick={onClose}/>
        </div>
      </Modal>
    </>
  );
};
