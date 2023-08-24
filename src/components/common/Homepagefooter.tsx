import React from 'react';
import { FooterSection } from './FooterSection';
import logo from '../../assets/icons/LeoLogo.svg';
import Map from '../../assets/icons/map.svg';
import Telephone from '../../assets/icons/telephone.svg';
import { FOOTER_SECTION, ORGANIZATION_ADDRESS, ORGANIZATION_PHONENUMBER } from 'components/utils/constants/stringconstants/common';

export function HomeFooter() {
    return (
        <>
            <div className="bg-[#DBF1FF] py-7 flex flex-col sm:flex-row">
                <div className="flex gap-4 sm:gap-28 px-4 sm:px-10 py-5 border-int-yellow md:border-r-2">
                    {FOOTER_SECTION.map((section, index) => (
                        <FooterSection key={index} title={section.title}>
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className='hover:border-int-yellow hover:border-b-2 py-1 '>{item}</div>
                            ))}
                        </FooterSection>
                    ))}
                </div>
                <div className="px-4 sm:px-10 mt-4 sm:mt-0">
                    <img src={logo} alt="Leo Logo" />
                    <div className='my-3 flex items-center'>
                        <img src={Map} alt="Map" className="w-5 h-5 mr-2" />
                        <div>
                            {ORGANIZATION_ADDRESS}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={Telephone} alt="Telephone" className="w-5 h-5 mr-2" />
                        <div>
                            {ORGANIZATION_PHONENUMBER}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary h-10 w-full text-center py-2 text-white'>
                Ⓒ 2023 Leo Trip (POP) Pvt Ltd. All rights reserved.
            </div>
        </>
    );
}
