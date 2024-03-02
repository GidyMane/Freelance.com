"use client"
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./make.css"
import messageHandler from '@/app/messageHandler';
import axios from "axios"
// import { toast } from 'sonner';
import toast from 'react-hot-toast';
import { ToastAction } from '@/shad/ui/toast';
import { sendMail } from './mail';
// import FileUpload from './FileUploader';
import { SingleImageDropzone } from '@/lib/components/single-image-dropzone';
import { FileState, MultiFileDropzone } from '@/lib/components/multi-file-dropzone';
import { useEdgeStore } from '@/lib/edgeStore';
const langs = [

    "UK English 🇬🇧",
    "US English 🇺🇸",
    "Canadian English 🇨🇦",
    "Australian English 🇦🇺"
]

const education_level = [
    "High School",
    "College",
    "University",
    "Master's",
    "Doctorate"
]
const spacings = [
    "Double",
    "Single"
]










const MakeOrder = ({ services }: { services: any }) => {




    const [file, setFile] = useState<any>()
    const [progress, setProgress] = useState(20)
    const [urls, setUrls] = useState<string[]>([]);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        const fileList: FileList = e.target.files;
        // Convert FileList to an array
        const filesArray: File[] = Array.from(fileList);
        setFile(filesArray);
    };


    // services options
    const serviceOptions = services.map((service: any, index: number) => (
        <option key={index} value={service}>{service}</option>
    ))
    const spacingOptions = spacings.map((spacing: any, index: number) => (
        <option key={index} value={spacing}>{spacing}</option>
    ))


    const educationOptions = education_level.map((education: any, index: number) => (
        <option key={index} value={education}>{education}</option>
    ))






    const optionsArray = Array.from({ length: 100 }, (_, index) => index + 1);

    // Create a map using the generated array
    const optionsMap = optionsArray.map((option, index) => (
        <option key={index} value={option}>{option}</option>
    ));
    const languages = langs.map((lang, index) => (
        <option key={index} value={lang}>{lang}</option>
    ));

    let today = new Date()

    function separateDateTime(dateTimeString: string) {
        // Parse the input datetime string
        const dateTime = new Date(dateTimeString);

        // Extract date components
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(dateTime.getDate()).padStart(2, '0');

        // Extract time components
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');

        // Create separate date and time strings
        const dateResult = `${year}-${month}-${day}`;
        const timeResult = `${hours}-${minutes}-${seconds}`;

        return `date- ${dateResult}  time ${timeResult} }`;
    }


    const fileInputRef = useRef<HTMLInputElement>(null);


    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const { edgestore } = useEdgeStore();
    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
            const newFileStates = structuredClone(fileStates);
            const fileState = newFileStates.find(
                (fileState) => fileState.key === key,
            );
            if (fileState) {
                fileState.progress = progress;
            }
            return newFileStates;
        });
    }


    


    const formik = useFormik({
        initialValues: {
            service: '',
            topic: '',
            page: '',
            assignmentsLanguage: '',
            education: '',
            instructions: '',
            email: '',
            countryCode: '',
            phoneNumber: '',
            deadline: '',
            words: '',
            // spacing: ''
        },
        validationSchema: Yup.object({
            service: Yup.string()
                .required('Required'),
            education: Yup.string()
                .required('Required'),
            // spacing: Yup.string()
            //     .required('Required'),
            topic: Yup.string()
                .required('Required'),
            page: Yup.number()
                .required('Required').positive(),
            words: Yup.number()
                .required('Required').positive(),
            instructions: Yup.string()
                .required('Required'),
            email: Yup.string()
                .required('Required').email(),
            // countryCode: Yup.string()
            //     .required('Required'),
            // phoneNumber: Yup.string()
            //     .required('Required'),
            assignmentsLanguage: Yup.string().required("Required"),
            deadline: Yup.date().required("deadline required").min(today)


        }),
        onSubmit: async (values: {
            topic: string;
            email: string;
            page: string;
            assignmentsLanguage: string;
            education: string;
            instructions: string;
            countryCode: string;
            phoneNumber: string;
            deadline: string;
            words: string;
            service: string;
        }) => {
            



            for (const url of urls) {
                await edgestore.publicFiles.confirmUpload({
                    url,
                });
            }





            const formData = new FormData();
            fileStates.forEach((fileState, index) => {
                formData.append(`files[${index}]`, fileState.file); // Assuming fileState has a 'file' property containing the actual file
              });

            values.deadline = separateDateTime(values.deadline);








            // Append JSON data


            const res = await sendMail(values, urls, formData)


            // const res = await axios.post(
            //     "https://gidymane.pythonanywhere.com/api/emails/sendmail/",
            //     formData
            // )
            // 


            if (res === 200) {


                formik.setSubmitting(false);
                formik.resetForm();
                setFileStates([]);

               
                return toast.success("sent successfuly")

            } else {


                return toast.error("failed to send message , try again later")


            }




        },
    });
    return (
        <>
            <form method='post' onSubmit={formik.handleSubmit} id='makeorder' className='flex flex-col' encType='multipart/form-data'>
                <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Your email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='john@doe.com'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='text-sm text-red-500'>{formik.errors.email}</div>
                ) : null}
                <div className="mt-2 md:grid md:grid-cols-2 gap-1">
                    <div className='col-span-1'>
                        <label htmlFor="countryCode" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Country Code</label>
                        <select
                            id="countryCode"
                            name="countryCode"
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.countryCode}
                            className='bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                            <option value="">Select Country Code</option>
                            <option value="UK">UK</option>
                            <option value="US">US</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            {/* Add more country options if needed */}
                        </select>
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className='text-sm text-red-500'>{formik.errors.phoneNumber}</div>
                        ) : null}
                    </div>

                    <div className='col-span-1'>
                        <label htmlFor="whatsappNumber" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">*WhatsApp Number</label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            placeholder='Enter your WhatsApp number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />

                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className='text-sm text-red-500'>{formik.errors.phoneNumber}</div>
                        ) : null}

                    </div>

                </div>








                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="service">*select service</label>
                <select
                    id="service"
                    name="service"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.service}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {serviceOptions}

                </select>
                {formik.touched.service && formik.errors.service ? (
                    <div className='text-sm text-red-500'>{formik.errors.service}</div>
                ) : null}

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="topic">*your topic</label>
                <input
                    id="topic"
                    name="topic"
                    type="text"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.topic}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.topic && formik.errors.topic ? (
                    <div className='text-sm text-red-500'>{formik.errors.topic}</div>
                ) : null}

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="education">*select Education level</label>

                {formik.touched.education && formik.errors.education ? (
                    <div className='text-sm text-red-500'>{formik.errors.education}</div>
                ) : null}
                <select
                    id="education"
                    name="education"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.education}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value="">select education level</option>
                    {educationOptions}

                </select>



                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="page">*Select page/size</label>
                <select
                    id="page"
                    name="page"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.page}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {optionsMap}
                </select>

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="words">*words</label>
                <input
                    id="words"
                    name="words"
                    type="number"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.words}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />

                {/*                 <div className="col-span-1 mt-2">
                    <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="spacing">*line spacing</label>
                <select
                    id="spacing"
                    name="spacing"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spacing}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value="">select line spacing</option>
                    {spacingOptions}
                </select>

                </div>
                    */}


                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="page">*Assignment Language</label>
                <select
                    id="page"
                    name="assignmentsLanguage"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.assignmentsLanguage}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {languages}
                </select>
                {formik.touched.assignmentsLanguage && formik.errors.assignmentsLanguage ? (
                    <div className='text-sm text-red-500'>{formik.errors.assignmentsLanguage}</div>
                ) : null}
                {formik.values.page && (
                    <div className='mt-2 text-white text-sm mb-2'> will cost you : ${parseInt(formik.values.page) * 10}</div>

                )}
                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="instructions">*Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.instructions}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.instructions && formik.errors.instructions ? (
                    <div className='text-sm text-red-500'>{formik.errors.instructions}</div>
                ) : null}

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2" htmlFor="topic">*Deadline</label>

                <div className="relative w-full my-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input type="datetime-local" name='deadline' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.deadline} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>

                {formik.touched.deadline && formik.errors.deadline ? (
                    <div className='text-sm text-red-500'>{formik.errors.deadline}</div>
                ) : null}



                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                {/* <input type="file" ref={fileInputRef} className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' name="file" id="" multiple required onChange={handleFileChange} /> */}
                <div className='bg-white'>
                    <MultiFileDropzone
                        className='w-full'
                        value={fileStates}
                        onChange={(files) => {
                            setFileStates(files);
                        }}
                        onFilesAdded={async (addedFiles) => {
                            setFileStates([...fileStates, ...addedFiles]);
                            await Promise.all(
                                addedFiles.map(async (addedFileState) => {
                                    try {
                                        const res = await edgestore.publicFiles.upload({
                                            file: addedFileState.file,
                                            options: {
                                                temporary: true
                                            },
                                            onProgressChange: async (progress) => {
                                                updateFileProgress(addedFileState.key, progress);
                                                if (progress === 100) {
                                                    // wait 1 second to set it to complete
                                                    // so that the user can see the progress bar at 100%
                                                    await new Promise((resolve) => setTimeout(resolve, 1000));
                                                    updateFileProgress(addedFileState.key, 'COMPLETE');
                                                }
                                            },

                                        });
                                        setUrls([...urls, res.url]);

                                        
                                    } catch (err) {
                                        updateFileProgress(addedFileState.key, 'ERROR');
                                    }
                                }),
                            );
                        }}
                    />

                </div>


                <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className=" mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    {formik.isSubmitting ? "sending....." : "make an order"}

                </button>




            </form >



        </>
    );
};


export default MakeOrder;
