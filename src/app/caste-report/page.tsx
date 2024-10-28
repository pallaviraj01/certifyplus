'use client';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

// Define the structure of the casteData
interface CasteData {
    applicantName: string;
    fatherName: string;
    motherName: string;
    gender: string;
    mobileNumber: string;
    email: string;
    state: string;
    district: string;
    subDivision: string;
    block: string;
    wardNo: string;
    villageTown: string;
    postOffice: string;
    policeStation: string;
    pinCode: string;
    aadhaarNumber: string;
    residenceType: string;
    purpose: string;
    selfDeclaration: string;
    expiryDate: string;
}

const Report = () => {
    const [casteData, setCasteData] = useState<CasteData | null>(null);

    useEffect(() => {
        const fetchCasteData = async () => {
            try {
                const response = await fetch('/api/caste?certificateNumber=BK-77606366-2024'); // Fixed URL
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log("Fetched Caste Data:", data); // Log the response

                // Extract the certificate data
                if (data && data.certificate) {
                    setCasteData(data.certificate);
                } else {
                    console.error("Unexpected data format:", data);
                }
            } catch (error) {
                console.error("Error fetching caste data:", error);
            }
        };

        fetchCasteData();
    }, []);

    const generatePDF = () => {
        if (!casteData) {
            console.error('Caste data is not available for PDF generation.');
            return;
        }

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Caste Certificate", 20, 20);
        
        doc.setFontSize(12);
        const details = [
            `Applicant Name: ${casteData.applicantName || "N/A"}`,
            `Father's Name: ${casteData.fatherName || "N/A"}`,
            `Mother's Name: ${casteData.motherName || "N/A"}`,
            `Gender: ${casteData.gender || "N/A"}`,
            `Mobile Number: ${casteData.mobileNumber || "N/A"}`,
            `Email: ${casteData.email || "N/A"}`,
            `State: ${casteData.state || "N/A"}`,
            `District: ${casteData.district || "N/A"}`,
            `Sub Division: ${casteData.subDivision || "N/A"}`,
            `Block: ${casteData.block || "N/A"}`,
            `Ward No: ${casteData.wardNo || "N/A"}`,
            `Village/Town: ${casteData.villageTown || "N/A"}`,
            `Post Office: ${casteData.postOffice || "N/A"}`,
            `Police Station: ${casteData.policeStation || "N/A"}`,
            `Pin Code: ${casteData.pinCode || "N/A"}`,
            `Aadhaar Number: ${casteData.aadhaarNumber || "N/A"}`,
            `Residence Type: ${casteData.residenceType || "N/A"}`,
            `Purpose: ${casteData.purpose || "N/A"}`,
            `Self Declaration: ${casteData.selfDeclaration || "N/A"}`,
            `Expiry Date: ${new Date(casteData.expiryDate).toLocaleDateString() || "N/A"}`
        ];

        details.forEach((line, index) => {
            doc.text(line, 20, 30 + (index * 10)); // Adjust position for each line
        });

        // Save the PDF
        doc.save('caste_certificate.pdf');
    };

    return (
        <div>
            <h1>Caste Certificate Report</h1>
            {casteData ? (
                <div>
                    <button onClick={generatePDF}>Download Certificate</button>
                    <pre>{JSON.stringify(casteData, null, 2)}</pre> {/* Displaying the fetched data */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Report;
