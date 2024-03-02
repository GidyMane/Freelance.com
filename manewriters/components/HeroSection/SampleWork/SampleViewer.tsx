
'use client';

import { categoryContext } from '@/context/CategoryContext';
import { Button, Modal } from 'flowbite-react';
import { useContext } from 'react';
import DocViewer, { DocViewerRenderers, PDFRenderer, PNGRenderer } from "react-doc-viewer";
// import { GoogleDocsViewer } from "react-google-docs-viewer"

const SampleViewer = (title:string) => {

    const { openModal, setOpenModal } = useContext(categoryContext)

    const docs = [
        { uri: "https://drive.google.com/file/d/1gwJudUUutBwK9JRXy4VUjT13jGBzf7tg/view?usp=sharing"},
         // Local File
    ];
    return (
        <>
            <button onClick={() => setOpenModal(true)} className='px-4 inline-flex gap-2 items-center justify-center py-2 bg-blue-800 cursor-pointer hover:scale-105 text-white text-md shadow-md rounded-md capitalize'>view sample
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
            </button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className='sm:w-full'>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 h-full">
                        {/* <GoogleDocsViewer
                            width="600px"
                            height="780px"
                            fileUrl="https://github.com/mozilla/pdf.js/raw/master/examples/helloworld/helloworld.pdf"
                        /> */}

                        <DocViewer documents={docs} pluginRenderers={[PDFRenderer, PNGRenderer]} />

                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default SampleViewer;
