import React from 'react';
import { FooterSection } from './FooterSection';

export function HomeFooter() {
    return (
        <div className="border-2 h-[10%] bg-primary py-7 flex w-full">
            <div className="flex gap-28 px-[7%] border-r-2 w-fit text-2xl">
                <FooterSection title="About Leo Trip">
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>Sitemap</div>
                    <div>Offers</div>
                    <div>Leo Trip on Mobile</div>
                </FooterSection>
                <FooterSection title="Info">
                    <div>T & C</div>
                    <div>Privacy Policy</div>
                    <div>FAQ</div>
                    <div>Insurance Partner</div>
                    <div>User Agreement</div>
                </FooterSection>
                <FooterSection title="Global Sites">
                    <div>India</div>
                    <div>Singapore</div>
                    <div>Malaysia</div>
                    <div>Indonesia</div>
                    <div>Colombia</div>
                </FooterSection>
            </div>
            <div className="px-[5%]">
                <div>fghj</div>
            </div>
        </div>
    );
}


