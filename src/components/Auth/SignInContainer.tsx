import Carousel from "components/common/Carousel";


export function SignInContainer({ setAuth, setIsOpenAuthModal }: any) {
    const handleClick = () => {
        setAuth(false);
        setIsOpenAuthModal(false);

    }
    return (
        <div className="flex w-full h-[300px] ">
            <div className="w-[40%] h-full border-2">
                <Carousel>
                </Carousel>
            </div>
            <div className="w-[60%] items-center justify-content ">
                <div className="m-2">
                    <div className="font-poppinsBold text-lg" onClick={handleClick}>LOGIN</div>
                    <div className="mb-1 relative">

                    </div>
                </div>
            </div>
        </div>
    )

}