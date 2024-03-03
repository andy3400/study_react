import { useRef } from 'react';

import Adding from "./adding";
import Modal from "./modal";

export default function AddList( {onAdd, onCancel} ){
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate  = useRef();

    function handleSave() {
        const enterTitle =  title.current.value;
        const enterDescription =  description.current.value;
        const enterDueDate = dueDate.current.value;
        
        if (
            enterTitle.trim() === '' ||
            enterDescription.trim() === '' ||
            enterDueDate.trim() === ''
          ) {
            modal.current.open();
            return;
          }
        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate
        });
    }

    return(
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className = "text-xl font-bold text-stone-700 my-4">
                    Invalid input
                </h2>
                <p className = "text-stone-600 mb-4">
                    Oops... looks like you forgot to enter a vlaue.
                </p>
                <p className = "text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className= "text-stone-800 hover:text-stone-950"
                        onClick= {onCancel}
                        >cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-100 hover:bg-stone-950"
                        onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Adding typ="text" ref = {title} label = "Title"/>
                    <Adding ref={description} label = "Description" textarea/>
                    <Adding type="date" ref = {dueDate}label = "Due Date"/>
                </div>
            </div>
        </>
    );
}