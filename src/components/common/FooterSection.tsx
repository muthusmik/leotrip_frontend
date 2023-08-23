
import React, { ReactNode } from 'react';   
interface FooterSectionProps {
    title: string;
    children: ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
    return (
        <div>
            <div className="border-b-2 px-1">{title}</div>
            <div className="ml-4 text-xl py-2">
                {children}
            </div>
        </div>
    );
}