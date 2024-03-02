"use server"
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
import path from "path";
import * as multer from 'multer';
import * as fs from "fs"
import App from "next/app";

AWS.config.update({
    region: 'eu-north-1',
    accessKeyId: "AKIAZI2LCV3FHUMXJMKS",

    secretAccessKey: "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",
});

const ses = new AWS.SES({ apiVersion: 'latest' });

const transporter = nodemailer.createTransport({
    SES: ses
});


export async function sendMail(values: {
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
}, urls: string[], formData: any) {
    let res;
    let filelist: { filename: string; path: string; contentType: string }[] = [];

    const files: string[] = formData.getAll("files")

    

    try {
        // Use for...of loop instead of map, and await for each file processing


        for (const [key, value] of formData.entries()) {
            

            // Extracting the index from the key using a regular expression
            const indexMatch = key.match(/\[([0-9]+)\]/);
            const index = indexMatch ? parseInt(indexMatch[1], 10) : undefined;

            if (index !== undefined) {
                let file = value;

                filelist.push({
                    filename: file.name,
                    path: urls[index],
                    contentType: file.type,
                });
            }



        }





        
        // const dataUrl = localStorage.getItem("file");


        const mailoptions = {
            from: {
                name: 'web address',
                address: 'essayprofservices@gmail.com',
            },
            to: 'essayprofservices@gmail.com',
            subject: 'Order Placed',
            text: `Topic: ${values.topic}\nPage: ${values.page}\nAssignments Language: ${values.assignmentsLanguage}\nEducation: ${values.education}\nInstructions: ${values.instructions}\nEmail: ${values.email}\nCountry Code: ${values.countryCode}\nPhone Number: ${values.phoneNumber}\nDeadline: ${values.deadline}\nWords: ${values.words}`,
            html: `<b>Topic:</b> ${values.topic}<br><b>Page:</b> ${values.page}<br><b>Assignments Language:</b> ${values.assignmentsLanguage}<br><b>Education:</b> ${values.education}<br><b>Instructions:</b> ${values.instructions}<br><b>Email:</b> ${values.email}<br><b>Country Code:</b> ${values.countryCode}<br><b>Phone Number:</b> ${values.phoneNumber}<br><b>Deadline:</b> ${values.deadline}<br><b>Words:</b> ${values.words}`,
            attachments: [...filelist],
        };

        const info = await transporter.sendMail(mailoptions);
        
        res = 200;
    } catch (error) {
        
        res = 400;
    }

    return res;
}



