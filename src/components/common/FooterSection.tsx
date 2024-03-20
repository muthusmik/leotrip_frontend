import React, { ReactNode } from 'react';

interface FooterSectionProps {
    title: string;
    children: ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
    return (
        <div className="mb-4 w-[100%] ">
            <div className="underline decoration-solid decoration-int-yellow px-1 font-poppinsBold h-auto w-[60%] md:w-[70%] sm:w-[70%] text-sm mdlg:text-xl  mb-2 sm:mb-4">{title}</div>
            <div className="ml-4 font-poppinsRegular text-sm leading-5">
                {children}
            </div>
        </div>
    );
}
