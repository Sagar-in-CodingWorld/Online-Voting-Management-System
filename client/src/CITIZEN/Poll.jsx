import React, { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import '../CITIZENCSS/Poll.css';
import '../CITIZENCSS/Poll1.css';
import TopmenuC from "./TopmenuC";
import { Footer3 } from "../component/Footer3";
import { getCandidate } from "../service/api";
// import AlertDialog from "./AlertDialogBox";
// import AlertDialogBox from "./AlertDialogBox";

// import AlertDialogBox from "./AlertDialogBox";


const Poll = () => {
    const data = [
        {
            sl: 1,
            party: 'BJP',
            cName: 'Parag Chattopadhyay',
            partyIndex: '/img/bjp.jpg'
        },
        {
            sl: 2,
            party: 'COMMON',
            cName: 'Papiya Mandal',
            partyIndex: '/img/lamp.jpg'
        },
        {
            sl: 3,
            party: 'AAM',
            cName: 'Suparna Saha',
            partyIndex: '/img/cpi.jpg'
        },
        {
            sl: 4,
            party: 'UNKNOWN',
            cName: 'Sagar Nunia',
            partyIndex: '/img/jp.jpg'
        },
        {
            sl: 5,
            party: 'CONGRESS',
            cName: 'Ashraf Ali',
            partyIndex: '/img/congress.jpg'
        },
    ]
    // const item = data;
    // Data fetching of candidates
    const [candidate, setCandidate] = useState([])
    useEffect(() => {
        getAllCandidates();
    });
    const getAllCandidates = async () => {
        let response = await getCandidate();
        setCandidate(response.data)

        // console.log(candidate)
    }
    // console.log(candidate)

    // function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    // return (
    // <>
    return (
        <div className="poll">
            <div>
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >

                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Confirm Vote
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                This is an irreversible action<br />
                                Are you sure? You can't undo this action afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <button className="btn btn-primary" onClick={onClose} ml={3}>
                                    Yes, Confirm
                                </button>
                                <button className="btn btn-danger" ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </div>

            <div className="container-fluid bg-primary ">
                <div className="row">
                    <div className="col-12 p-0">
                        <TopmenuC />
                        {/* <hr/> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 mt-5 header-text bg-secondar text-center">
                        <p className="poll-para"><h5>Choose any Candidate from below list by tapping their corresponding party index.</h5></p>
                        <hr></hr>
                    </div>
                </div>
                <div className="row mt-3 px-10"  >
                    {
                        // item.map((elem) => {
                        // const { sl, party, cName, partyIndex } = elem;
                        candidate.map((cand, key) => {
                            return (
                                <div className="col-12 long-card d-flex align-items-center justify-content-around">
                                    <div className="serials">
                                        <label>{key += 1}</label>
                                        {/* <input type="text" value='1.'/> */}
                                    </div>
                                    <div>
                                        <label className='c-sit'><h5>{cand.partyName}</h5></label>
                                        {/* <input type="text" value='MP' /> */}
                                    </div>
                                    <div>
                                        <label className='c-name'><h4>{cand.cdname}</h4></label>
                                        {/* <input type="text" value='Soma Haldar' /> */}
                                    </div>
                                    <div>
                                        <button onClick={onOpen}>
                                            <img src={`http://localhost:8000/uploads/${cand.partyIndex}`} alt="party-logo"  width="50px" height='50px' />
                                        </button>
                                    </div>

                                </div>
                            )
                        })

                    }
                </div>
            </div>


            {/* FOOTER IS HERE */}
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-12 p-0">
                        <Footer3 />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Poll;