
import '../../index.css';

export default function Hotelticket() {

    const Details = [
        {
            title: 'Booking Id :',
            value: 'BOOK00001861',
        },
        {
            title: 'First Name :',
            value: 'Mr. Jyoti',
        },
        {
            title: 'Last Name :',
            value: 'Ranjan',
        },
        {
            title: 'City :',
            value: 'Chennai',
        },
        {
            title: 'Arrival :',
            value: '27/8/2023',
        },
        {
            title: 'Departure :',
            value: '29/8/2023',
        },
        {
            title: 'Hotel :',
            value: 'SRM Hotel',
        },
        {
            title: 'No Room :',
            value: '1',
        },
        {
            title: 'Phone :',
            value: '778899665588',
        },
    ];

    const Bill = [
        {
            title: '2 Night(s)',
            value: '11,020',
        },
        {
            title: 'Total Tax',
            value: '3000',
        },
        {
            title: 'Discount',
            value: '300',
        },
        {
            title: 'Grand Total',
            value: '14020',
        },
    ];
    const lastItem = Bill[Bill.length - 1];

    return (
        <>
            <div className="w-[900px] h-[500px] flex hotelticket">
                <div className='bg-white/90 w-[700px] rounded-tr-full rounded-br-full'>
                    <div className='text-center text-3xl mt-3 font-poppinsRegular'>Ticket Details</div>
                    <div className='flex'>
                        <div className='mt-5'>
                            {Details.map((item: any) => {
                                return (
                                    <>
                                        <div className='flex w-80 border-r-2 border-black ml-5'>
                                            <p className='w-28 my-[10px]'>{item.title}</p>
                                            <b className='my-[10px]'>{item.value}</b>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='mt-28'>
                            {Bill.map((item: any) => {
                                return (
                                    <>
                                        <div className='flex w-80 ml-5 '>
                                            <p className={`w-32 my-[10px] ${item.title === lastItem.title ? "text-int-sandal text-2xl font-bold w-40":""}`}>{item.title}</p>
                                            <b className={`my-[10px] ${item.title === lastItem.title ? 'text-red-500 text-2xl':''}`}><span className='mx-2' >₹</span>{item.value}</b>
                                        </div>
                                        
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}