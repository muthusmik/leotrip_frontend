import React, { ReactNode } from 'react';

interface FooterSectionProps {
    title: string;
    children: ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
    return (
        <div className="mb-4 sm:mb-0 lgxl:px-9 2xl:px-20">
            <div className="border-b-2 px-1 font-poppinsBold text-lg border-int-yellow mb-2 sm:mb-4">{title}</div>
            <div className="ml-4 font-poppinsRegular text-sm leading-5">
                {children}
            </div>
        </div>
    );
}
