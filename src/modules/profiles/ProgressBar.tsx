import ProgressBar from "@ramonak/react-progress-bar";

const Example =() => {

    return <ProgressBar completed={60} bgColor="#485BFF" />;
};

export default function ProgresBar() {
    return (
        <>
            <p className="ml-10 mb-3 font-poppinsRegular">Complete your Profile</p>
            <div className="w-[600px] mb-2 ml-10"><Example /></div>
            <p className="font-poppinsRegular ml-10">Get the best out of MakeMyTrip by adding the remaining details!</p>
        </>
    );
}