const GuestReview = () => {
    const reviews = [
        {
            id: 1,
            image: "HA",
            name: "HariHaran",
            stayDate: "March 10, 2022",
            reviewStars: 5,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 2,
            image: "SA",
            name: "SadhaSivam",
            stayDate: "April 5, 2022",
            reviewStars: 4,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 3,
            image: "JJ",
            name: "Jeeva",
            stayDate: "May 20, 2022",
            reviewStars: 3,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 3,
            image: "JJ",
            name: "Jeeva",
            stayDate: "May 20, 2022",
            reviewStars: 3,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 3,
            image: "JJ",
            name: "Jeeva",
            stayDate: "May 20, 2022",
            reviewStars: 3,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 3,
            image: "JJ",
            name: "Jeeva",
            stayDate: "May 20, 2022",
            reviewStars: 3,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        },
        {
            id: 3,
            image: "JJ",
            name: "Jeeva",
            stayDate: "May 20, 2022",
            reviewStars: 3,
            content: "I had an extremely pleasant stay at the Grand Elegant with my wife. The room was very clean and spacious and had all the necessary amenities. Moreover, its prime location close to the Chennai Central Railway Station was an added advantage for us. The staffs were also very courteous and helpful. I would highly recommend Grand Elegant to all."
        }
    ];
    return (
        <>
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-3 mx-5">
                <h1 className="text-white pl-5 font-bold">Guest Reviews</h1>
            </div>
            <div className="border border-2 bg-white mx-5">
                <div className="w-full  h-[500px] overflow-y-auto">
                    {reviews.slice(0, 5).map(review => (
                        <div key={review.id} className="flex bg-white border border-2 rounded-lg overflow-hidden shadow-lg mx-10 my-4">
                            <div className="mx-5 my-5 rounded-full bg-gray-400 h-16 w-16 flex items-center justify-center">
                                <h1 className="p-10">{review.image}</h1>
                            </div>
                            <div className="">
                                <div className="flex pt-5">
                                    <div className="">
                                        <h2 className="text-xl font-bold mb-2">{review.name}</h2>
                                        <p className="text-gray-600 text-sm mb-2">({review.stayDate})</p>
                                    </div>
                                    <div className="">
                                        <div className="flex mb-2 pl-2">
                                            {/* Render star icons based on reviewStars */}
                                            {Array.from({ length: review.reviewStars }, (_, index) => (
                                                <svg
                                                    key={index}
                                                    className="w-5 h-5 text-yellow-500 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l2.535 7.776H21l-6.568 4.776L17.189 22 12 17.823 6.811 22l1.756-5.448L3 9.776h5.465z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-800 py-10">{review.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default GuestReview;