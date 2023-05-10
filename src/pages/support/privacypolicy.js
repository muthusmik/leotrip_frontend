import React from "react";
import './support.scss'
import Footer from "./footer";
import Header from './header';

const PrivacyPolicy = () => {

    /*  # scroll Top of Page */

   React.useEffect(()=>{
    window.scrollTo(0,0);
  }, []);


    return (
        <div className="privacy">
           <Header />
            <div className="page-header flex-middle">
                <div className="container">
                    <div className="inner ">
                        <h1 className="page-title">Privacy Policy</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container">
                    <h4 className="fs-3 mt-4">Privacy Statement</h4>
                    <div className="container">
                        <h6 className=" text-muted">INFORMATION YOU PROVIDE TO US</h6>
                        <p>First things first – your privacy is important to us. That might be the kind of thing all these notices say, but we mean it. You place your trust in us by using hojoy.in services, and we value that trust. That means we’re committed to protecting and safeguarding your personal data. We act in our customers’ best interests and are transparent about the processing of your personal data.</p>
                        <p>This document (“this Privacy Statement” or “our Privacy Statement”) describes how we use and process your personal data, provided in a readable and transparent manner. It also tells you what rights you can exercise in relation to your personal data and how you can contact us. </p>
                        <p>If you’ve used us before, you know that hojoy.in offers online travel-related services & hotel booking options through our own websites and mobile apps, as well as other online platforms such as partners’ websites and social media. We’d like to point out that all the info you’re about to read generally applies to not one, not two, but all of these platforms.</p>
                        <p>In fact, this single privacy statement applies to any kind of customer information we collect through all of the above platforms or by any other means connected to these platforms (such as when you contact our customer service team by email).</p>
                        <p>We might amend this Privacy Statement from time to time, so we recommend visiting this page occasionally to make sure you know where you stand. If we make any updates to the Privacy Statement that will impact you significantly, we’ll notify you about the changes before any new activities begin.</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Terms we use in this Privacy Statement</h4>
                    <div className="container">
                        <p>“Trip” refers to the various different travel products and services that can be ordered, acquired, purchased, bought, paid, rented, provided, reserved, combined, or consummated by you from the Trip Provider.</p>
                        <p>“Trip Provide” refers to the provider of accommodation (e.g. hotel, motel, apartment, bed & breakfast, landlord), attractions (e.g. (theme) parks, museums, sightseeing tours), transportation provider (e.g. car rentals, cruises, trains, flights, bus tours, transfers), tour operators, travel insurances, and any other travel or related product or service as from time to time available for Trip Reservation on the platform.</p>
                        <p>“Trip Service” refers to the online purchase, order, (facilitated) payment, or reservation service as offered or enabled by Hojoy.in in regards to various products and services as from time to time made available by Trip Providers on the platform.</p>
                        <p>“Trip Reservation” refers to the order, purchase, payment, booking, or reservation of a Trip.</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">What kind of personal data does hojoy.in collect?</h4>
                    <p>
                        We can’t help you book the perfect Trip without information, so when you use our services there are certain things we ask for. This is typically routine info – your name, preferred contact details, the names of the people traveling with you, and your payment info. You might also decide to submit additional info related to your upcoming Trip (e.g. your anticipated arrival time).
                    </p>
                    <p>In addition to this, we also collect info from the computer, phone, tablet, or other device you use to access our services. This includes the IP address, the browser used, and your language settings. There are also situations when we receive info about you from others or automatically collect other info.</p>
                    <p>This is the general overview but if you’d like to know more about the information we collect, we go into more detail below.</p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Why does hojoy.in collect and use your personal data?</h4>
                    <p>The main reason we ask for personal details is to help you organize your online Trip Reservations and ensure you get the best possible service.</p>
                    <p>We also use your personal data to contact you about the latest deals, special offers, and other products or services we think you might be interested in. There are other uses, too. If you’d like to find out what they are, read on for a more detailed explanation.</p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">How does hojoy.in share your data with third parties?</h4>
                    <p>There are different parties integrated into hojoy.in services, in various ways and for various reasons. The primary reason we share your data is to provide the Trip Provider with the relevant info to complete your Trip Reservation.</p>
                    <p>We also involve other parties to provide you with the hojoy.in services. This includes, for example, financial institutions, advertisers, subsidiaries of the hojoy.in corporate group, and the other companies that form the Ho Joy Comforts group. Or, in some cases, if we’re required to by law, we might share your data with governmental or other authorities</p>
                    <p>Below, we go into more detail about how the information you share with us is used and exchanged with these parties.
                        <ul>
                            <li>
                                <h5 className="text-muted mt-4">How is your personal data shared and further processed for ground transport services?</h5>
                                <p>Hojoy.in — part of the Ho Joy Comforts—jointly use your data to offer you ground transport services via the hojoy.in websites and apps . Read more to understand the scope and limited nature of our joint responsibility.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How is your personal data shared and further processed for insurance services?</h5>
                                <p>We work with different parties when offering insurance services. Follow the link below to understand how your data is used and shared for insurance purposes and learn about the responsibilities of the parties involved.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How does hojoy.in process communications that you and your Trip Provider may send via hojoy.in?</h5>
                                <p>Hojoy.in can help you and Trip Providers exchange info or requests about services and existing Trip Reservations through the Hojoy.in platform. If you want to find out more about how Hojoy.in receives and handles these communications, read on here.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How does Hojoy.in make use of mobile devices?</h5>
                                <p>We offer free apps that we also collect and process personal data through. This works in much the same way as our website, but they also allow you to benefit from the location services available on your mobile device(s).</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How does Hojoy.in make use of social media?</h5>
                                <p>The use of social media may be integrated into Hojoy.in services in various ways. These will involve us collecting some of your personal data, or the social media provider receiving some of your info. </p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">What security and retention procedures does Hojoy.in put in place to safeguard your personal data?</h5>
                                <p>We’ve implemented a range of procedures to prevent unauthorized access to and the misuse of personal data that we process.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How does Hojoy.in treat personal data belonging to children?</h5>
                                <p>Unless indicated otherwise, Hojoy.in is a service you’re only allowed to use if over you’re older than 16. We only process information about children with the consent of their parents or legal guardians, or when the information is shared with us by the parents or legal guardians themselves.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How can you control the personal data you’ve given to Hojoy.in?</h5>
                                <p>Among others, you have the right to review the personal data we keep about anytime and request access to or deletion of your personal data by submitting a Form. </p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">Who is responsible for the processing of personal data on the Hojoy.in website and apps?</h5>
                                <p>Hojoy.in located in India, controls the processing of personal data for the provision of its services. That includes its websites and mobile apps, except for some exceptions that are clarified in this privacy statement.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">What kind of personal data does Hojoy.in collect?</h5>
                                <p>Okay, so you’re looking for some more in-depth info. Here’s a closer look at what we collect.</p>
                            </li>
                            <li>
                                <h5 className="text-muted mt-4">How can you control the personal data you’ve given to Hojoy.in?</h5>
                                <p>Among others, you have the right to review the personal data we keep about anytime and request access to or deletion of your personal data by submitting a Form.Personal data you give to us. </p>
                                <p>Hojoy.in collects and uses the info you provide us. When you make a Trip Reservation, you are (at a minimum) asked for your name and email address.</p>
                                <p>Depending on the Trip Reservation, we may also ask for your home address, telephone number, payment information, date of birth, current location (in the case of on-demand services), the names of the people traveling with you, and any preferences you might have for your Trip (such as dietary or accessibility requirements). In some cases, you may also be able to check-in online with the Trip Provider, for which we will ask you to share passport information or a driver’s license and signatures.</p>
                                <p>If you need to get in touch with our customer service team, contact your Trip Provider through us, or reach out to us in a different way (such as social media); we’ll collect information from you there, too. This applies whether you are contacting us with feedback or asking for help using our services.</p>
                                <p>You might also be invited to write reviews to help inform others about the experiences you had on your Trip. When you write a review on the Hojoy.in platform, we’ll collect any info you’ve included, along with your display name and avatar (if you choose one).</p>
                                <p>There are other instances where you’ll provide us with information as well. For example, if you’re browsing with your mobile device, you can decide to allow Hojoy.in to see your current location or grant us access to some contact details. This helps us to give you the best possible service and experience by, for example, showing you our city guides, suggesting the nearest restaurants or attractions to your location, or making other recommendations.</p>
                                <p>If you create a user account, we’ll also store your personal settings, uploaded photos, and reviews of previous bookings there. This saved data can be used to help you plan and manage future Trip Reservations or benefit from other features only available to account holders, such as incentives or other benefits.</p>
                                <p>You can also choose to add details from your identification documents to your user accounts, so you don’t have to submit this info for each individual Trip Reservation.</p>
                                <p>We may offer you referral programs or sweepstakes, and participating in these will mean providing us with relevant personal data.</p>
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Personal data you give us about others</h4>
                    <p>In some cases, you might use Hojoy.in to share information with others. This can take the form of sharing a wish list, taking part in a travel community or participating in a referral program, as described when you use the relevant feature.</p>
                    <p>At this point, we have to make it clear that it’s your responsibility to ensure that the person or people you have provided personal data about are aware that you’ve done so, and that they have understood and accepted how Hojoy.in uses their information (as described in this Privacy Statement).</p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Personal data we collect automatically.</h4>
                    <p>Whether or not you end up making a Trip Reservation, when you visit our websites or apps, we automatically collect certain info. This includes your IP address, the date and time you accessed our services, the hardware, software, or internet browser you used, and info about your computer’s operating system like application versions and your language settings. We also collect information about clicks and which pages were shown to you.</p>
                    <p>If you’re using a mobile device, we collect data that identifies the device, as well as data about your device-specific settings and characteristics, app crashes, and other system activity. When you make a Trip Reservation using this kind of device, our system registers how you made your reservation (on which website), and/or which site you came from when you entered the Hojoy.in website or app.</p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Personal data we receive from other sources.</h4>
                    <p>It’s not just the things you tell us, though—we may also receive information about you from other sources. These include business partners, such as affiliate partners, subsidiaries of the Hojoy.in group, other companies in the Ho Joy Comforts group, and other independent third parties.</p>
                    <p>Anything we receive from these partners may be combined with information provided by you. For example, Hojoy.in Trip Reservation services aren’t only made available via Hojoy.in and the Hojoy.in apps, but are also integrated into services of affiliate partners you can find online. When you use any of these services, you provide the reservation details to our business partners who then forward your details to us.</p>
                    <p>We also integrate with third party service providers to facilitate payments between you and Trip Providers. These service providers share payment information, so we can administer and handle your Trip Reservation, making sure everything goes as smoothly as possible for you.</p>
                    <p>We also collect info when we receive a complaint about you from a Trip Provider (e.g. in the case of misconduct).</p>
                    <p>Another way we might receive data about you is through the communication services integrated into our platforms. These communication services offer you a way to contact the Trip Provider you’ve booked with to discuss your stay. In some cases, we receive metadata about these communication activities (such as who you are, where you called from, and the date and length of the call).</p>
                    <p>We may also receive information about you in order to show you more relevant ads, such as the additional cookie data Hojoy.in social media partners make available to us. </p>
                    <p>When you link your Hojoy.in user account to your social media account, you might trigger exchanges of data between Hojoy.in and that social media provider. You can always choose not to share that data.</p>
                    <p>Trip Providers may share info about you with Hojoy.in, too. This could happen if you have support questions about a pending Trip Reservation, or if disputes or other issues arise about a Trip Reservation.</p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">Why does Hojoy.in collect and use your personal data?</h4>
                    <p>We use the info collected about you for various purposes. Your personal data may be used in the following ways:</p>
                    <ol type="A">
                        <li>Trip Reservations: First and foremost, we use your personal data to complete and administer your online Trip Reservation – which is essential for us to provide this service for you. This includes sending you communications that relate to your Trip Reservation, such as confirmations (including, where applicable, providing you with a proof of purchase and/or payment), modifications, and reminders. In some cases, this may also include processing your personal data to enable online check-in with the Trip Provider or processing personal data in relation to possible damage deposits.</li>
                        <li>Account facilities: Hojoy.in users can create an account on our website or apps. We use the info you give us to administer this account, enabling you to do a number of useful things. You can manage your Trip Reservations, take advantage of special offers, make future Trip Reservations easily, and manage your personal settings.<br /><br />If you want, you can share certain info as part of your user account by creating a public profile under your own first name or a screen name you choose.</li>
                        <li>Marketing activities: We use your information for marketing activities. These activities include:
                            <ol>
                                <li>Using your contact information to send you regular news about travel-related products and services. You can unsubscribe from email marketing communications quickly, easily, and anytime. All you need to do is click the "Unsubscribe" link included in each newsletter or other communication, or manage your preferences via your account settings.</li>
                                <li>Based on your info, individualized offers might be shown to you on the Hojoy.in website, on mobile apps, or on third-party websites/apps (including social media sites), and the content of the site displayed to you might be personalized. These could be offers that you can book directly on the Hojoy.in website, on co-branded sites, or other third-party offers or products we think you might find interesting.</li>
                                <li>When you participate in other promotional activities (such as sweepstakes, referral programs, or competitions), only relevant information will be used to administer these promotions.</li>
                            </ol>
                        </li>
                        <li>Communicating with you: There might be other times when we get in touch, including by email, by chatbot, by mail, by phone, or by text. Which method we choose depends on the contact information you’ve previously shared.<br /><br />We process the communications you send to us. There could be a number of reasons for this, including:
                            <ol>
                                <li>Responding to and handling any requests you or your booked Trip Provider have made. Hojoy.in also offers customers and Trip Providers various ways to exchange information, requests, and comments about Trip Providers and existing Trip Reservations via Hojoy.in. </li>
                                <li>If you have started but not finished a Trip Reservation online, we might contact you to invite you to continue with your reservation. We believe this additional service benefits you because it allows you to carry on with a Trip Reservation without having to search for Trip Providers or enter your reservation details again.</li>
                                <li>When you use our services, we might send you a questionnaire or invite you to provide a review about your experience with Hojoy.in or the Trip Provider.</li>
                                <li>We also send you other material related to your Trip Reservations, such as how to contact Hojoy.in if you need assistance while you’re away, and information that we feel might be useful to you in planning or making the most of your Trip. We might also send you material related to upcoming Trip Reservations or a summary of previous Trip Reservations you made through Hojoy.in.</li>
                                <li>Even if you don’t have an upcoming Trip Reservation, we may still need to send you other administrative messages, which could include security alerts.</li>
                                <li>In the case of misconduct, we may send you a notice and/or warning.</li>
                            </ol>
                        </li>
                        <li>Market research: We sometimes invite our customers to take part in market research. Review the info that accompanies this kind of invitation to understand what personal data will be collected and how it’s used.</li>
                        <li>Improving our services: We also use personal data for analytical purposes and product improvement. This is part of our commitment to improving our services and enhancing the user experience. <br /><br />In this case, we use data for testing and troubleshooting purposes, as well as generating statistics about our business. The main goal here is to get insights into how our services perform, how they are used, and ultimately to optimize and customize our website and apps, making them easier and more meaningful to use. As much as possible, we strive to use anonymized and de-identified personal data for this analytical work.</li>
                        <li>Providing the best price applicable to you, depending on where you are based: When you search our apps or website (e.g. to find an accommodation, rental car, bus or flight), we process your IP address </li>
                        <li>Customer reviews and other destination-related info: During and after your Trip, we might invite you to submit a review. We can also make it possible for the people you’re traveling with or whom you booked a reservation for to do this instead. This invite asks for information about the Trip Provider or the destination.
                            By completing a review, you’re agreeing that it can be displayed on, for example, the relevant Trip Provider information page on our websites, on our mobile apps, on our social media accounts and social media apps, or on the online platform of the relevant Trip Provider or business partner’s website. This is to inform other travelers about the quality of the Trip Service you used, the destination you have chosen or any other experiences you choose to share.
                        </li>
                        <li>Promotion of a safe and trustworthy service: To create a trustworthy environment for you, the people you bring with you on your Trip, Hojoy.in’s business partners and our Trip Providers, we continuously analyze and use certain personal data to detect and prevent fraud and other illegal or unwanted activities.<br /><br />
                            Similarly, we use personal data for risk assessment and security purposes, including when you report a safety concern, or for the authentication of users and reservations. When we do this, we may have to stop or put certain Trip Reservations on hold until we’ve finished our assessment.
                        </li>
                        <li>
                            Legal purposes: Finally, in certain cases, we may need to use your information to handle and resolve legal claims and disputes, for regulatory investigations and compliance, to enforce the Hojoy.in online reservation service terms of use or to comply with lawful requests from law enforcement.<br /><br />
                            Providing your personal data to Hojoy.in is voluntary. However, we may only be able to provide you with certain services if we can only collect some personal data. For instance, we can’t process your Trip Reservation if we don’t collect your name and contact details.<br /><br />
                            If we use automation to process personal data that produces legal effects or similarly, significantly affects you, we’ll always implement the necessary measures to safeguard your rights and freedoms. This includes the right to obtain human intervention.
                        </li>
                    </ol>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">How does Hojoy.in share your data with third parties?</h4>
                    <p>In certain circumstances, we’ll share your personal data with third parties. These third parties include:</p>
                    <ol>
                        <li>
                            The Trip Provider You Booked: In order to complete your Trip Reservation, we transfer relevant reservation details to the Trip Provider you've booked. This is one of the most essential things we do for you.<br /><br />
                            Depending on the Trip Reservation and Trip Provider, the details we share can include your name, contact and payment details, the names of the people accompanying you, and any other info or preferences you specified when you made your Trip Reservation.<br /><br />
                            In certain cases, we also provide some additional historical info about you to the Trip Provider. This includes whether you’ve already booked with them in the past, the number of completed bookings you’ve made with Hojoy.in, a confirmation that no misconduct has been reported about you, the percentage of bookings you’ve canceled in the past, or whether you’ve given reviews about past bookings.<br /><br />
                            If you have a question about your Trip, we may contact the Trip Provider to handle your request. Unless payment is made during the booking process, via the Hojoy.in website, we will forward your credit card details to the booked Trip Provider for further handling (assuming you’ve provided us with those details).<br /><br />
                            In cases of Trip Reservation-related claims or disputes, we may provide the Trip Provider with your contact details and other information about the booking process, as needed to resolve the situation. This can include, but might not be limited to, your email address and a copy of your reservation confirmation as proof that a Trip Reservation was made or to confirm reasons for cancellation.<br /><br />
                            For completeness, Trip Providers will further process your personal data outside of the control of Hojoy.in. Trip Providers may also ask for additional personal data, for instance to provide additional services, or to comply with local restrictions. If available, please read the Privacy Statement of the Trip Provider to understand how they process your personal data.
                        </li>
                        <li>For completeness, Trip Providers will further process your personal data outside of the control of Hojoy.in. Trip Providers may also ask for additional personal data, for instance to provide additional services, or to comply with local restrictions. If available, please read the Privacy Statement of the Trip Provider to understand how they process your personal data.</li>
                        <li>Your local Hojoy.in office: To support the use of Hojoy.in services, your details may be shared with subsidiaries of the Hojoy.in corporate group, including for customer service. </li>
                        <li>Third-party service providers: We use service providers outside of the Hojoy.in corporate group to support us in providing our services. These include:
                            <ul>
                                <li>Customer support</li>
                                <li>Market research</li>
                                <li>Fraud detection and prevention (including anti-fraud screening)</li>
                                <li>Insurance claims</li>
                                <li>Payment<br /><br />
                                    We use third parties to process payments, handle chargebacks, or provide billing collection services. When a chargeback is requested for your Trip Reservation, either by you or by the holder of the credit card used to make your reservation, we need to share certain reservation details with the payment service provider and the relevant financial institution so they can handle the chargeback. This may also include a copy of your reservation confirmation or the IP address used to make your reservation. We may share information with relevant financial institutions, if we consider it strictly necessary for fraud detection and prevention purposes.
                                    <br /><br />When a chargeback is requested for your Trip Reservation, either by you or by the holder of the credit card used to make your reservation, we need to share certain reservation details with the payment service provider and the relevant financial institution so they can handle the chargeback. This may also include a copy of your reservation confirmation or the IP address used to make your reservation.
                                    <br /><br />We may also share information with relevant financial institutions, if we consider it strictly necessary for fraud detection and prevention purposes.
                                </li>
                                <li>
                                    Marketing services<br /><br />
                                    We share personal data with advertising partners, including your email address, IP address, and telephone number, as part of marketing Hojoy.in services via third parties (to ensure that relevant advertisements are shown to the right audience). We use techniques such as hashing to enable the matching of your email address, IP address, and/or telephone number with an existing customer database, to prevent this data from being used for other purposes.
                                </li>
                                <li>
                                    Advertising partners<br /><br />
                                    We use advertising partners, such as metasearch providers, to allow you to compare our offers with offers from other Online Travel Agencies (OTAs). When you make a reservation on Hojoy.in after using an advertising partner, we will send the details of the reservation that you made on Hojoy.in to that partner.
                                </li>
                            </ul>
                        </li>
                        <li>Other professional third parties: In certain cases (such as disputes or legal claims or as part of auditing activities), we may need to share your personal data with professional advisors. These advisors include parties such as law firms or auditors. We only share your personal data to the extent that is necessary and such third parties process this data in line with their own professional obligations.</li>
                        <li>Competent authorities: We disclose personal data to law enforcement to the extent that it is required by law or is strictly necessary for the prevention, detection, or prosecution of criminal acts and fraud, or if we are otherwise legally obligated to do so. We may need to further disclose personal data to competent authorities to comply with a legal obligation (e.g. under short-term rental laws), to protect and defend our rights or properties, or the rights and properties of our business partners.</li>
                        <li>Business partners: We work with many business partners around the world. These business partners distribute and advertise Hojoy.in services, including the services and products of our Trip Providers.<br /><br />
                            When you make a reservation on one of our business partners’ websites or apps, certain personal data that you give them, such as your name and email address, your address, payment details, and other relevant information, will be forwarded to us to finalize and manage your Trip Reservation.<br /><br />
                            If customer service is provided by the business partner, Hojoy.in will share relevant reservation details with them (as and when needed) in order to provide you with appropriate and efficient support.<br /><br />
                            When you make a reservation through one of our business partners’ websites, the business partners can receive certain parts of your personal data related to the specific reservation and your interactions on these partner websites. This is for their commercial purposes.<br /><br />
                            When you make a reservation on a business partners’ website, take the time to read their privacy notice as well if you’d like to understand how they process your personal data.<br /><br />
                            For fraud detection and prevention purposes, we may also exchange information about our users with business partners – but only when strictly necessary.<br /><br />
                            If an insurance claim is made concerning you and a Trip Provider, we may provide the necessary data (including personal data) to the insurance company for further processing.
                        </li>
                    </ol>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">How does Hojoy.in make use of mobile devices?</h4>
                    <p>We offer free apps for a range of different mobile devices, as well as versions of our regular website that are optimized for browsing on a phone and tablet.</p>
                    <p>These apps and mobile websites process the personal details you give us in a similar way that our website does. They also allow you to use location services to find Trip Services nearby, if you want.</p>
                    <p>With your consent, we may send you push notifications with information about your Trip Reservation. You can also grant us access to your location data or contact details in order to provide services you request. If you upload pictures to our platform, these pictures may include location information (known as metadata) as well. Please read your mobile device’s instructions to understand how to change your settings and control the sharing of this category of data.</p>
                    <p>In order to optimize our services and marketing activities, and to make sure we give you a consistent user experience, we use something known as “cross-device tracking.” This can be done with or without the use of cookies. </p>
                    <p>With cross-device tracking, Hojoy.in is able to track user activity across multiple devices. As part of cross-device tracking, we may combine data collected from a particular browser or mobile device with data from another computer or device used by the same customer.</p>
                    <p>In order to optimize the content of the Hojoy.in newsletter, we combine searches and reservations made from different computers and devices. You can unsubscribe from the Hojoy.in newsletter at any time. </p>
                </div>
                <div className="container">
                    <h4 className="fs-3 mt-4">What security and retention procedures does Hojoy.in put in place to safeguard your personal data?</h4>
                    <p>We observe reasonable procedures to prevent unauthorized access to and the misuse of personal data.</p>
                    <p>We use appropriate business systems and procedures to protect and safeguard your personal data. We also use security procedures and technical and physical restrictions for accessing and using the personal data on our servers. Only authorized personnel are permitted to access personal data in the course of their work.</p>
                    <p>We’ll keep your personal data for as long as is necessary to enable you to use our services or to provide our services to you (including maintaining any Hojoy.in user accounts you may have), to comply with applicable laws, resolve any disputes and otherwise to allow us to conduct our business, including to detect and prevent fraud and/or other illegal activities. All personal data we keep about you as a Hojoy.in customer is covered by this Privacy Statement.</p>
                </div>
            </div>
            <h6 className="text-center text-success">If you have any questions about this Privacy Statement, or about our processing of your personal data, please contact our Data Protection Officer and we’ll get back to you as soon as possible.</h6>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;