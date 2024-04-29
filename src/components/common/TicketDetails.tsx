import jsPDF from 'jspdf';
import room from '../../../assets/images/room3.jpg';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

const bookingData = {
    bookingId: 'BOOK00001861',
    firstName: 'Mr. Jyoti',
    lastName: 'Ranjan',
    city: 'Chennai',
    arrival: '27/8/2023',
    departure: '29/8/2023',
    hotel: 'SRM Hotel',
    noRoom: '1',
    phone: '778899665588'
};
const billingData = {
    days: '2',
    nights: '11,020',
    totalTax: '3,000',
    discount: '300',
    grandTotal: '14,020'
};
const TicketDetails = () => {

    const contentRef = useRef(null);

    const downloadPDF = () => {
        const input = contentRef.current;
        console.log("input",input);
        if (!input) {
            console.error("The reference to the content element is not valid.");
            return;
          }
        html2canvas(input)
            .then((canvas) => {
                console.log("(canvas",canvas);
                const imgData = canvas.toDataURL(`(${room})`);
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const pageHeight = 295;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('ticket_details.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };

    const handleCancel = () => {
        // Logic for canceling the ticket
        // For example, you can display a confirmation modal and upon confirmation, execute the cancellation logic
        const isCancelled = window.confirm('Are you sure you want to cancel the ticket?');
        if (isCancelled) {
          // Perform cancellation logic here
          alert('Ticket cancelled successfully!');
        }
      };
    return (
        <>
            <div ref={contentRef} className="w-full bg-cover " style={{ backgroundImage: `url(${room})` }}>
                <div className='border border-black bg-white opacity-70 text-opacity-100  w-full md:w-[80%]  md:rounded-r-full'>
                    <div>
                        <h1 className='font-bold text-center text-xl py-5'>Ticket Details</h1>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full md:w-[45%] mb-5 border-black border-r-0 md:border-r-2'>
                            <div className="booking-details">
                                {Object.entries(bookingData).map(([label, value]) => (
                                    <div key={label} className="booking-row flex my-5 pl-5">
                                        <div className="label" style={{ width: '150px' }}>{label}:</div>
                                        <div className="font-bold">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full md:w-[35%]'>
                            <div className="billing-details my-5 md:my-28 mx-5 md:mx-10">
                                <div className="billing-row flex my-5">
                                    <div className="label" style={{ width: '150px' }}><h1>{billingData.days}Night(s):</h1></div>
                                    <div className="font-bold"><h1>&#x20B9;{billingData.nights}</h1></div>
                                </div>
                                <div className="billing-row flex my-5">
                                    <div className="label" style={{ width: '150px' }}><h1>Total Tax:</h1></div>
                                    <div className="font-bold"><h1>&#x20B9;{billingData.totalTax}</h1></div>
                                </div>
                                <div className="billing-row flex my-5">
                                    <div className="label" style={{ width: '150px' }}><h1>Grand Total:</h1></div>
                                    <div className="font-bold"><h1>&#x20B9;{billingData.discount}</h1></div>
                                </div>
                                <div className="billing-row flex my-5">
                                    <div className="label text-lg text-[#efa332] font-bold" style={{ width: '150px' }}><h1>Grand Total:</h1></div>
                                    <div className="font-bold text-[#c71e1e] text-lg"><h1>&#x20B9;{billingData.grandTotal}</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-5'>
                <button className='text-white bg-[#ec8e03] rounded-md p-2' onClick={downloadPDF}>DOWNLOAD PDF</button>
                <button className='text-white bg-[#ec8e03] rounded-md p-2 ms-5' onClick={handleCancel}>Cancel Ticket</button>
            </div>
        </>
    );
}

export default TicketDetails;