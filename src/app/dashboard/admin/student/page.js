"use client";
/****
 * 
 * These page is for student curd for now we only take student email
 */

// https://www.npmjs.com/package/react-modal  for modal

import Modal from 'react-modal';
import { useState } from 'react';
import { HiPlus, HiX } from 'react-icons/hi';
const AdminStudentPage = () => {


    return (<>

        <AdminStudentComponent />
    </>)
}

const AdminStudentComponent = () => {


    return (<>

        <AdminStudentComponentUI />
    </>)
}

const AdminStudentComponentUI = () => {


    return (<>

        <div>

            <div>
                <h3> Students : </h3>
            </div>
            <div>

                {/* creating new student  */}

                <AddingNewStudentComponent />

            </div>

            <div>
                {/* displaying students */}
                <DisplayAllStudentComponent />
            </div>
            <div>

                {/* pagination */}
            </div>
        </div>


    </>)
}

const DisplayAllStudentComponent = () => {

    return (<>


    </>)
};

const AddingNewStudentComponent = () => {


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (<>

        <AddingNewStudentComponentUi openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>)
}

const AddingNewStudentComponentUi = ({ openModal, modalIsOpen, closeModal }) => {

    return (<>

        <button
            onClick={openModal}
            className="bg-white  text-black font-bold py-2 px-4 rounded inline-flex items-center"
        >
            <HiPlus className="w-6 h-6 mr-2" />
        </button>

        <Modal
            isOpen={modalIsOpen}

            onRequestClose={closeModal}
            style={{
                overlay: {
                    // backgroundColor: 'papayawhip'
                },
                content: {
                    // color: 'lightsteelblue'
                }
            }}
            contentLabel="add student modal Modal"
        >

            <button onClick={closeModal}>close</button>

            <form>
                <input type='email' />
                    <button type='button' onClick={( ) => {closeModal()}}> Add</button>
            </form>
        </Modal>
    </>)
}
export default AdminStudentPage;