const TripDetails = () => {
    return (
        <>
            <div className="w-[70%] mx-5 font-poppinsRegular bg-white border-4 hover:border-blue-100 p-4">
                <h1 className="font-bold text-lg">Trip details</h1>
                <div className='ms-4 border-b-2'>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-700">Pick-up Address</label>
                            <input type="text" id="pickupAddress" name="pickupAddress" className="mt-1 p-2 border rounded-md w-full" placeholder="Enter pick-up address" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropoffAddress" className="block text-sm font-medium text-gray-700">Drop-off Address (Optional)</label>
                            <input type="text" id="dropoffAddress" name="dropoffAddress" className="mt-1 p-2 border rounded-md w-full" placeholder="Enter drop-off address" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default TripDetails;