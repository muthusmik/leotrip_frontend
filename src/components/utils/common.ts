export function isEmail(input:string):boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
}

export function isMobile(input: string): boolean {
    // Remove all non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, "");

    // Check if the cleaned input has at least 10 digits
    if (cleanedInput.length >= 9 && cleanedInput.length <=15) {
      return true;
    }
    return false;
  }





