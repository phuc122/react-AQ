import React, { useState, useEffect} from 'react';
import { Table, Image, Modal, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { db } from "../../../fibase";
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from "firebase/firestore";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

function Categories(props) {
        const categoriesCollectionRef = collection(db, "Categories");
        const [categories,setCategories] = useState([]);
         const [showModal,setShowModal] = useState(false);
         const [update,setUpdate] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
              const querySnapshot = await getDocs(categoriesCollectionRef);
              const categoriesData = [];
              querySnapshot.forEach((doc) => {
                categoriesData.push({ id: doc.id, ...doc.data() });
              });
              setCategories(categoriesData);
            };
            fetchData();
          }, [update]);

    const handleClose = () => setShowModal(false); 
    const handleOpen = () => setShowModal(true);  

    const HandaladdCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nameCategory = formData.get('nameCategory');
        const iconCategory = formData.get('iconCategory');
    await addDoc(categoriesCollectionRef, {
        nameCategory,
        iconCategory,
    });
     setUpdate(!update);
     handleClose();
    }
    const deleteCategory = async (id) => {
       try {
        const categoryDocRef = doc(db, "Categories",id);
        await deleteDoc(categoryDocRef);
        setUpdate(!update);
       } catch (error) {
        
       }
        
    }
    return (
        <>
        
       <Button onClick={handleOpen}>Add Category</Button>
        <div className="table-responsive mt-2">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name Category</th>
                    <th>Icon Category</th>
                    <th>Action</th>                 
                </tr>
            </thead>
            <tbody>
                {categories.map((element,index) => (
                    <tr>
                    <td>{index + 1 }</td>
                    <td>{element.nameCategory}</td>
                    <td><i className={element.iconCategory} ></i></td>
                    <td><button><FontAwesomeIcon icon={faEdit} /></button> 
                    <button onClick={() => deleteCategory(element.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
                ))}              
            </tbody>
        </Table>
    </div>
       <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                ADD Category
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Form onSubmit={HandaladdCategory}> 
    <Form.Group>    
        <Form.Label>
            Name Category
        </Form.Label>
        <Form.Control type='text'name='nameCategory' placeholder='Enter Name Category ' />
    </Form.Group>
    <Form.Group>
        <Form.Label>
            Icon Category
        </Form.Label>
        <Form.Control type='text'name='iconCategory' placeholder='Enter  Icon Category ' />
    </Form.Group>
    <Button type="submit" variant='success' className='mt-2'>Add Category</Button>
</Form>
        </Modal.Body>
       </Modal>
              </>
    );
}

export default Categories;