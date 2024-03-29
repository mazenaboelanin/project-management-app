import { useRef } from 'react';
import Input from '../../ui/Input/Input';
import Modal from '../../ui/Modal/Modal';

export default function NewProject({onAddProject, onCancel}){

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave(){
    const enteretTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteretTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === '' ){
        // show error
        modal.current.open();
        return;
      }

    onAddProject({
      title: enteretTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }


  return (
    <>
    <Modal ref={modal} buttonText="Close">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-">Please make sure to provide a valid value for every input field</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button
            className='text-stone-800 hover:text-stone-950'
            onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button 
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            onClick={handleSave}>Save</button>
        </li>
      </menu>

      <div>
        <Input type="text" ref={title} label="Title" />
        <Input type="text" ref={description} label="Description" textArea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
}