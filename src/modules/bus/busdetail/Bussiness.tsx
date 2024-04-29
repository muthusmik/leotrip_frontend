import CustomInput from "../CustomInput";
const Bussiness = () => {
  return (
    <>
      <div className="my-4 font-poppinsRegular text-light-black">
        <div className="bg-white border rounded-lg shadow-2xl p-7">
          <p className="text-lg ms-20 mb-5">GST Details</p>
          <div className="flex flex-row justify-around">
            <div>
              <CustomInput
                label="Custom Input"
                value={""}
                setValue={() => {}}
                placeholder="Company Name"
              />
            </div>
            <div>
              <CustomInput
                label="Custom Input"
                value={""}
                setValue={() => {}}
                placeholder="Registration No"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bussiness;
