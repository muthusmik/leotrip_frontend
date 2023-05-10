import React from "react";
import { useHistory } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import logo from "../../asset/images/logo.png"
import Footer from "./footer";
import Header from './header'

const TermsAndCondition = () => {

    /*  # scroll Top of Page */

   React.useEffect(()=>{
    window.scrollTo(0,0);
  }, []);

    const history = useHistory();

    return (
        <div className="terms">
            <Header />
            <div className="page-header flex-middle">
                <div className="container">
                    <div className="inner ">
                        <h1 className="page-title">Terms and Conditions</h1>
                    </div>
                </div>
            </div>
            <div className="container term p-5">
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">I. About these terms</h3>
                    <ol>
                        <li>
                            When you complete your Booking, you accept these Terms and any other ones that you’re provided with during the booking process.
                        </li>
                        <li>
                            If anything in these Terms is (or becomes) invalid or unenforceable:
                            <ul type="disc">
                                <li>it will still be enforced to the fullest extent permitted by law</li>
                                <li>you will still be bound by everything else in the Terms.</li>
                            </ul>
                        </li>
                        <li>
                            These Terms are laid out like this:
                            <ul type="disc">
                                <li>Section A: General terms for all types of Travel Experiences.</li>
                                <li>Sections B to F: Specific terms for just one type of Travel Experience:
                                    <ul type="circle">
                                        <li>Section B: Accommodations</li>
                                        <li>Section C: Attractions</li>
                                        <li>Section D: Car rentals</li>
                                        <li>Section E: Flights</li>
                                        <li>Section F: Bus transportation</li>
                                    </ul>
                                </li>
                                <li>If there’s any discrepancy between general and specific terms, the specific terms will apply.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">About Hojoy.in</h3>
                    <ol>
                        <li>When you book an accommodation, flight, or attraction, Hojoy.in provides and is responsible for the Platform, but not the Travel Experience itself </li>
                        <li>. When you book a rental car or private or public transportation, Hojoy.in Transport Limited provides and is responsible for the Platform, but not the Travel Experience itself.</li>
                        <li>We work with companies that provide local support services (e.g. Customer Support or account management). They don’t:
                            <ul type="disc">
                                <li>control or manage our Platform</li>
                                <li>have their own Platform</li>
                                <li>have any legal or contractual relationship with you</li>
                                <li>provide Travel Experiences</li>
                                <li>represent us, enter into contracts, or accept legal documents in our name</li>
                                <li>operate as our “process or service agents.”</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Our Platform</h3>
                    <ol>
                        <li>We take reasonable care in providing our Platform, but we can’t guarantee that everything on it is accurate (we get information from the Service Providers). To the extent permitted by law, we can’t be held responsible for any errors, any interruptions, or any missing bits of information, though we will do everything we can to correct/fix them as soon as we can.</li>
                        <li>Our Platform is not a recommendation or endorsement of any Service Provider or its products, services, facilities, vehicles, etc.</li>
                        <li>We’re not a party to the terms between you and the Service Provider. The Service Provider is solely responsible for the Travel Experience.</li>
                        <li>To make a Booking, you may need to create an Account. Make sure all your info (including payment and contact details) is correct and up to date, or you might not be able to access your Travel Experience(s). You’re responsible for anything that happens with your Account, so don’t let anyone else use it and keep your username and password secret</li>
                        <li>We’ll show you the offers that are available to you, in (what we think is) the right language for you. You can change to another language whenever you like.</li>
                        <li>Unless otherwise indicated, you need to be at least 16 to use the Platform.</li>
                    </ol>
                </div>

                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Our values</h3>
                    <ol>
                        <li>You will</li>
                        <ul type="disc">
                            <li>abide by Our values. </li>
                            <li>comply with all applicable laws</li>
                            <li>cooperate with any anti-fraud/anti-money laundering checks we need to carry out</li>
                            <li>not use the Platform to cause a nuisance or make fake Bookings</li>
                            <li>use the Travel Experience and/or Platform for their intended purpose</li>
                            <li>not cause any nuisance or damage, and not behave inappropriately to the Service Provider’s personnel (or anyone else, for that matter).</li>
                        </ul>
                    </ol>

                </div>

                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Prices</h3>
                    <ol>
                        <li>When you make a Booking, you agree to pay the cost of the Travel Experience, including any taxes and charges that may apply.</li>
                        <li>Some of the prices you see may have been rounded to the nearest whole number. The price you pay will be based on the original, “non-rounded” price (although the actual difference will be tiny anyway).</li>
                        <li>Obvious errors and misprints are not binding. For example, if you book a premium car or a night in a luxury suite that was mistakenly offered for ₹100, we may simply cancel that Booking and refund anything you’ve paid.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Payment</h3>
                    <ol>
                        <li>For some products/services, the Service Provider will require an Upfront Payment and/or a payment taken during your Travel Experience.
                            <ol type="disc">
                                <li><b>If we organize your payment,</b> we (or in some cases our affiliate in the country your payment originates from) will be responsible for managing your payment and ensuring the completion of your transaction with our Service Provider. In this case, your payment constitutes final settlement of the “due and payable” price.</li>
                                <li><b>If the Service Provider charges you,</b> this will usually be in person at the start of your Travel Experience, but it could also be (for example) that your credit card is charged when you book, or that you pay when you check out of your Accommodation. This depends on the Upfront Payment policy of the Service Provider as communicated to you in the booking process.</li>
                            </ol>
                        </li>
                        <li>If the Service Provider requires an Upfront Payment, it may be taken or pre-authorized when you make your Booking, and it may be non-refundable. Before you book, check the Service Provider’s Upfront Payments policy (available during the booking process), which we don’t influence and aren’t responsible for.</li>
                        <li>If you know of or suspect any fraud or unauthorized use of your Payment Method, contact your payment provider, who may cover any resulting charges, possibly for a fee.</li>
                        <li>We’ll store your Payment Method details for future transactions after collecting your consent.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Policies</h3>
                    <ol>
                        <li>When you make a Booking, you accept the applicable policies as displayed in the booking process. You'll find each Service Provider's cancellation policy and any other policies (e.g. age requirements, security/damage deposits, additional supplements for group Bookings, extra beds, breakfast, pets, cards accepted, etc.) on our Platform, on the Service Provider information pages, during the booking process, in the fine print, and/or in the confirmation email or ticket (if applicable).</li>
                        <li>If you cancel a Booking or don’t show up, any cancellation/no-show fee or refund will depend on the Service Provider’s cancellation/no-show policy.</li>
                        <li>Some Bookings can’t be canceled for free, while others can only be canceled for free before a deadline.</li>
                        <li>If you book a Travel Experience by paying in advance (including all price components and/or a damage deposit if applicable), the Service Provider may cancel the Booking without notice if they can't collect the balance on the date specified. If they do, any non-refundable payment you’ve made will only be refunded at their discretion. It's your responsibility to make sure the payment goes through on time, that your bank, debit card, or credit card details are correct, and that there's enough money available in your account.</li>
                        <li>If you think you won’t arrive on time, contact your Service Provider and tell them when they can expect you so they don't cancel your Booking. If you’re late, we are not liable for the consequences (e.g. the cancellation of your Booking or any fees the Service Provider may charge).</li>
                        <li>As the person making the Booking, you are responsible for the actions and behavior (in relation to the Travel Experience) of everyone in the group. You’re also responsible for obtaining their permission before providing us with their personal data.</li>
                    </ol>

                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Privacy and cookies</h3>
                    <p>If you book an accommodation, flight, or attraction, read our Privacy policy for more info on privacy, and how we might contact you and process personal data</p>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Accessibility requests</h3>
                    <ol>
                        <li>If you have any accessibility requests:</li>
                        <ul type="disc">
                            <li>about our Platform and/or services, contact our Customer Service team</li>
                            <li>about your Travel Experience (wheelchair access, walk-in baths, etc.), contact your Service Provider or the airport, train station, etc.</li>
                        </ul>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Insurance</h3>
                    <ol>
                        <li>If you bought insurance through our Platform, refer to the policy document(s) for the terms and for further info. These Terms do not apply to insurance.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Intellectual property rights</h3>
                    <ol>
                        <li>Unless otherwise stated, all rights in our Platform (technology, content, trademarks, look and feel, etc.) are owned by Hojoy.in (or its licensors), and by using our Platform, you agree to do so for its intended purpose only and to respect the conditions </li>
                        <li>You’re not allowed to monitor, copy, scrape/crawl, download, reproduce, or otherwise use anything on our Platform for any commercial purpose without written permission of Hojoy.in or its licensors.</li>
                        <li>We keep a close eye on every visit to our Platform, and we’ll block anyone (and any automated system) we suspect of:
                            <ul type="disc">
                                <li>conducting an unreasonable amount of searches</li>
                                <li>using any device or software to gather prices or other information</li>
                                <li>doing anything that places undue stress on our Platform.</li>
                            </ul>
                        </li>
                        <li>We keep a close eye on every visit to our Platform, and we’ll block anyone (and any automated system) we suspect of:
                            <ul type="disc">
                                <li>it’s truthful (e.g. you haven’t altered the picture or uploaded one of a different property)</li>
                                <li>it doesn’t contain any viruses</li>
                                <li>you’re allowed to share it with us.</li>
                                <li>we’re allowed to use it on our platform and in relation to further commercial purposes (including in a promotional context), everywhere, forever. (If you let us know we can no longer use it, we’ll consider any such reasonable request)</li>
                                <li>it doesn’t infringe the privacy rights of other people</li>
                                <li>you accept full responsibility for any legal claims against Hojoy.in related to it.</li>
                            </ul>
                        </li>
                        <li>Just to be clear, we’re not responsible or liable for any picture uploaded to our Platform, and we’re allowed to remove any picture at our discretion (e.g. if a picture does not meet the above criteria).</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Intellectual property rights</h3>
                    <ol>
                        <li>Unless otherwise stated, all rights in our Platform (technology, content, trademarks, look and feel, etc.) are owned by Hojoy.in (or its licensors), and by using our Platform, you agree to do so for its intended purpose only and to respect the conditions </li>
                        <li>You’re not allowed to monitor, copy, scrape/crawl, download, reproduce, or otherwise use anything on our Platform for any commercial purpose without written permission of Hojoy.in or its licensors.</li>
                        <li>We keep a close eye on every visit to our Platform, and we’ll block anyone (and any automated system) we suspect of:
                            <ul type="disc">
                                <li>conducting an unreasonable amount of searches</li>
                                <li>using any device or software to gather prices or other information</li>
                                <li>doing anything that places undue stress on our Platform.</li>
                            </ul>
                        </li>
                        <li>We keep a close eye on every visit to our Platform, and we’ll block anyone (and any automated system) we suspect of:
                            <ul type="disc">
                                <li>it’s truthful (e.g. you haven’t altered the picture or uploaded one of a different property)</li>
                                <li>it doesn’t contain any viruses</li>
                                <li>you’re allowed to share it with us.</li>
                                <li>we’re allowed to use it on our platform and in relation to further commercial purposes (including in a promotional context), everywhere, forever. (If you let us know we can no longer use it, we’ll consider any such reasonable request)</li>
                                <li>it doesn’t infringe the privacy rights of other people</li>
                                <li>you accept full responsibility for any legal claims against Hojoy.in related to it.</li>
                            </ul>
                        </li>
                        <li>Just to be clear, we’re not responsible or liable for any picture uploaded to our Platform, and we’re allowed to remove any picture at our discretion (e.g. if a picture does not meet the above criteria).</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">What if something goes wrong?</h3>
                    <ol>
                        <li>If you have a question or complaint, contact our Customer Service team. You can do so by accessing your Booking through our app or through our Help Center (where you’ll also find some useful FAQs). You can help us help you as quickly as possible by providing:
                            <ul type="disc">
                                <li>your Booking confirmation number, your contact details, your PIN (if you have one), and the email address you used when booking</li>
                                <li>a summary of the issue, including how you’d like us to help you</li>
                                <li>any supporting documents (e.g. bank statement, pictures, receipts, etc.)</li>
                            </ul>
                        </li>
                        <li>All questions and complaints are recorded, and the most urgent ones are treated as highest priority.</li>
                        <li>We try to resolve disputes internally, and aren’t obliged to submit to any alternative dispute resolution procedures handled by independent providers.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Communication with the Service Provider</h3>
                    <ol>
                        <li>We may help you communicate with your Service Provider, but we can’t guarantee that they’ll read anything from you or that they’ll do what you ask. In itself, the fact that you contact them or that they contact you doesn’t mean you have any grounds for legal action.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Measures against unacceptable behavior</h3>
                    <ol>
                        <li>We have the right to stop you from making any Bookings, to cancel any Bookings you’ve made, and/or to stop you from using our Platform, our Customer Service, and/or your Account. Of course, we’ll only do this if in our opinion there’s a good reason to, such as:
                            <ul type="disc">
                                <li>fraud or abuse</li>
                                <li>non-compliance with Our values or with applicable laws or regulations</li>
                                <li>inappropriate or unlawful behavior (e.g. violence, threats, invasion of privacy) in relation to us, any of the companies we work with – or anyone else, for that matter.</li>
                            </ul>
                        </li>
                        <li>If we cancel a Booking as a result, you won’t be entitled to a refund. We may tell you why we canceled your Booking, unless telling you would (a) contravene applicable laws and/or (b) prevent or obstruct the detection or prevention of fraud or other illegal activities. If you believe we incorrectly canceled your Booking, contact our Customer Service team.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">What if something goes wrong?</h3>
                    <ol>
                        <li>To the extent permitted by mandatory consumer law, we’ll only be liable for costs you incur as a direct result of a failure on our behalf. This means, to the extent permitted by law, we won’t be liable for any:
                            <ul type="disc">
                                <li>indirect loss or indirect damage</li>
                                <li>inaccurate information about a Service Provider</li>
                                <li>product, service, or action of a Service Provider or other business partner</li>
                                <li>mistake in an email address, phone number, or credit card number (unless it’s our fault)</li>
                                <li>force majeure or event beyond our control.</li>
                            </ul>
                        </li>
                        <li>To the extent permitted by mandatory consumer law, we’ll only be liable for costs you incur as a direct result of a failure on our behalf. This means, to the extent permitted by law, we won’t be liable for any:
                            <ul type="disc">
                                <li>we won’t be liable for any costs you incur as a result, and</li>
                                <li>you won’t be entitled to any refund.</li>
                            </ul>
                        </li>
                        <ul type="disc">
                            <li>indirect loss or indirect damage</li>
                            <li>inaccurate information about a Service Provider</li>
                            <li>product, service, or action of a Service Provider or other business partner</li>
                            <li>mistake in an email address, phone number, or credit card number (unless it’s our fault)</li>
                            <li>force majeure or event beyond our control.</li>
                        </ul>

                        <li>To the extent permitted by law, the most that we or any Service Provider will be liable for (whether for one or a series of connected events) is the cost of your Booking, as set out in your confirmation email.</li>
                        <li>Nothing in these terms will limit our (or the Service Provider’s) liability in respect of our (or their) own (i) negligence that leads to death or personal injury or (ii) fraud or fraudulent misrepresentation.</li>
                        <li>We don’t make any promises about Service Providers’ products and services apart from what we expressly state in these Terms. Making the right choice(s) is entirely your responsibility.</li>
                        <li>Just to be clear, nothing in these Terms will entitle any third party other than the Service Provider to anything.</li>
                        <li>You may be protected by mandatory consumer protection laws and regulations, which guarantee you rights that no company’s terms can overrule. In that case, our liability is determined not just by these Terms, but also by any applicable consumer protection laws and regulations.</li>
                    </ol>
                </div>
                <div className="container">
                    <h3 className="elementor-heading-title elementor-size-default">Applicable law and forum</h3>
                    <ol>
                        <li>To the extent permitted by mandatory local (consumer) law, these Terms and our services will be governed by Indian law.</li>
                        <li>. To the extent permitted by mandatory local (consumer) law, any dispute will exclusively be submitted to the competent courts in India.</li>
                    </ol>
                    <p>We'll update these terms of service on a regular basis (once or twice per year).</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default TermsAndCondition