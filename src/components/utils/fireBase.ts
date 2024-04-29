import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, Auth } from "firebase/auth";


export const FirebaseSendOTP = async (auth: Auth, phoneNumber: string, recaptchaContainer: HTMLElement )=> {
    if (recaptchaContainer) {
        recaptchaContainer.innerHTML = '';
        try {
            const appVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {
                size: "invisible",
                callback: (response: any) => {
                    console.log("Recaptcha Response", response);
                },
            });
            try{
                const confirmation=await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
                return confirmation;
            }catch(error:any){
                console.log("Unable to Send OTP",error.code);
                return false;
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            return false;
        }
    } else {
        console.log("no captcha")
        // throw new Error("Recaptcha container not found.");
    }
};

export const verifyOTP = async (confirmationResult: ConfirmationResult, otp: string) => {
    try {
        return new Promise(async (resolve, reject) => {
            try {
                const credential = await confirmationResult.confirm(otp);
                resolve({ success: true, data: credential, error: null });
            } catch (error:any) {
                const errorCode = error.code;
                let errorMessage;
                switch (errorCode) {
                    case "auth/invalid-verification-code":
                        errorMessage = "Invalid OTP. Please enter a valid code.";
                        break;
                    case "auth/code-expired":
                        errorMessage = "OTP has expired. Please request a new code.";
                        break;
                    default:
                        errorMessage = "Error verifying OTP. Please try again.";
                        break;
                }
                reject({ success: false, data: null, error: errorMessage });
            }
        });
    } catch (error) {
        console.error("Error in verifyOTP:", error);
        return { success: false, data: null, error: "Error in verifyOTP." };
    }
};
