import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import "./privacy.css"
import Header from '../../components/Header/Header';

const Privacy = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    React.useEffect(() => {
        scrollToTop()
    }, [])
    return (<>
        {/* <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} /> */}
        <Header />

        <div class="mainContent">
            <div class="Privacy_contentContainer mainHEAD">
                <h1 class="pageHead mainHead">WORLD WAR 0X PRIVACY POLICY
                </h1>
                <p class="details">Your privacy is important to us, and we take our responsibility of caring for it seriously. We respect your privacy rights and are committed to protecting the personal information that is collected about you. This Privacy Policy describes what information World War 0x collects and how we use, disclose, transfer, and store it. If you do not want World War 0x to collect, store, use or share your information in the ways described in this Privacy Policy, you may not be able to play our games or use our services.
                    World War 0x, including its subsidiary companies (“World War 0x”), collects, stores, and uses your information as a data controller in connection with, and in order to provide and develop, World War 0x’s games, mobile applications, services and websites (together referred to as the “Services”) in accordance with this privacy policy (“Privacy Policy”).
                    All of our Services, whether used on mobile devices, PCs or other platforms, are governed by this Privacy Policy.
                    By using the Services, you hereby consent to this Privacy Policy.
                    This Privacy Policy is effective as of December 16, 2023.
                    If you have any questions, comments or concerns regarding our Privacy Policy and/or practices, please see the “How to contact us” section below.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">1 – How we collect your information
                </h1>
                <p class="details">World War 0x collects some information from you when you: (a) create an account; (b) get a subscription to play our games; (c) play our games or use game-related services; (d) make a purchase within our Services; (e) create user-generated content; (f) watch advertisements within our Services; (g) sign up for a newsletter; (h) contact World War 0x customer service and take part in technical-support sessions; (i) enter a contest, event or sweepstakes, or participate in a challenge held by World War 0x; (j) chat with other users of the Services; (k) signal interest in participating in a playtest; (l) share or contribute to our social media channels and other community websites, including forums; or (m) apply for a job.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">2 – Information we collect

                </h1>
                <p class="details">World War 0x collects only adequate and relevant information limited to the purposes defined hereunder.
                    <br />
                    a – Information you provide us
                    <ul>
                        <li>Contact information (such as your name and email address)</li>
                        <li>Your age</li>
                        <li>Your gender</li>
                        <li>Your birthdate
                        </li>
                        <li>Your username and password</li>
                        <li>Profile information (such as a profile picture)</li>
                        <li>Information that you provide when seeking help from our customer service (such as chat logs, contact details such as your phone number and email address if necessary to resolve your request, and customer support tickets)
                        </li>
                        <li>
                            Other information you provide us (such as information used to identify a lost account)
                        </li>
                    </ul>

                </p>
                <p class="details">
                    <br />
                    b – Information we automatically collect directly from you when you use our Services
                    <ul>
                        <li>Information about your game progress and activity</li>
                        <li>Information about your interactions with other players</li>
                        <li>IP address and device identifiers (such as your device ID, advertising ID, MAC address, IMEI)</li>
                        <li>Information about your device (such as device name and operating system, browser information, including browser type and the language you prefer)</li>
                        <li>Information we collect using cookies and similar technologies (Note: You can refer to our Cookies Policy to learn more about opting out of such technologies)</li>
                        <li>General geolocation information</li>
                        <li>Precise geolocation information (GPS), if you configure your device location settings</li>
                        <li>World War 0x player ID</li>
                    </ul>
                </p>
                <p class="details">
                    <br />
                    c – Information we obtain from our partners (advertisers, others publishers, distributors, billing partners, ad network providers)
                    <ul>
                        <li>Information that we receive if you decide to connect to a third-party social network (such as Facebook or Game Center)</li>
                        <li>Information from billing and distribution partners (if you subscribe to certain games or make in-game purchases)</li>
                        <li>Information for advertising and analytics purposes, so we can provide you with better Services</li>
                        <li>Information (such as IPs, Device IDs) we may receive from other partners, which we use to place / send you advertising</li>
                    </ul>
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">3 – How we use your information

                </h1>
                <p class="details"><ul>
                    <li>We have a legal obligation to collect and process personal information from you</li>
                    <li>We have your consent to do so</li>
                    <li>We need the personal information to fulfill a contract with you and provide you with the Services, such as customer support services, bug and service-error detection, and fraud prevention</li>
                    <li>The processing is in our legitimate interests (when we serve and measure the effectiveness of advertising or marketing campaigns, analyze your gaming activities, protect and improve our products and services) and not overridden by your rights, or when we have a legal obligation to collect personal information from you</li>
                </ul>
                </p>
                <p class="details">
                    We primarily use the information to provide you with a better gaming experience, but we also use your information, both individually and combined, as follows:
                    To operate our business and to enhance your gaming experience, including to:
                    <ul>
                        <li>Provide you with the Services that are suitable for your age and compliant with the applicable laws of your country of residence</li>
                        <li>Provide gaming experiences that you may like and functionalities you have subscribed to</li>
                        <li>Track your use of the Services to help us learn more about your gaming activities and understand your preferences and tendencies, so that we can personalize your experience, provide you with in-game offers and notifications that are tailored to you, and otherwise enhance your gaming experience</li>
                        <li>Facilitate sharing on social networks</li>
                        <li>Register your participation in a contest and contact you in the event of a prize</li>
                        <li>Organize and ensure the proper management of events (e.g. registering your participation in an event, granting access to an event, prize delivery)</li>
                        <li>Offer you the opportunity to take part in playtesting (game tests)</li>
                        <li>Protect against cheating, crime or fraud, or for other security reasons</li>
                        <li>Identify and fix bugs and service errors</li>
                        <li>Use it for administration, analytics, research, and optimization</li>
                        <li>Compile statistics</li>
                        <li>Comply with all regulatory and legal requirements, and answer any requests from Data Protection Authorities or any law enforcement agency</li>
                        <li>Respect security requirements (e.g. performing audits)</li>
                    </ul>
                </p>
                <p className='details'>
                    To provide you with support, communicate with you and respond to any requests or questions you have submitted through our customer support.
                    To personalize our communication with you, including to:
                    <ul>
                        <li>Handle your subscription to, and opting-out of, our newsletters</li>
                        <li>Contact you to promote our Services and contests we may offer</li>
                        <li>Send you, with your prior consent, promotions or marketing materials (we will provide you with the opportunity to opt out of receiving such materials in the future)</li>
                        <li>Offer in-game surveys</li>
                        <li>Provide you with advertising that better suits your interests and profile and is age-/gender-appropriate and targeted to your general location</li>
                        <li>Serve and measure the effectiveness of advertising</li>
                        <li>Collect any personal information you may disclose through messages you choose to send to another user or defined group of users through our message, chat, post or other in-game functions, as well as to collect necessary personal information belonging to the user(s) you are contacting, in order to facilitate communication (Note: We will never collect any information sent outside of the functionality of our Services, including through emails or text messages)</li>
                        <li>Personalize your content and offers</li>
                        <li>Send you push notifications (should you choose to allow that function)—only for users 13 years of age or older in the United States</li>
                    </ul>

                    For some of the purposes described above, World War 0x may use and perform analytics. Analytics information supports business analysis and operations, allows product development, improves products and Services, personalizes content, provides advertising, and makes recommendations.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">4 – How we retain your information

                </h1>
                <p class="details">World War 0x retains, uses and stores your information as long as you are playing our games or using our Services, and also for the period necessary to fulfill all the purposes described in this Privacy Policy, in compliance with the applicable laws of your country of residence. We want to inform you that a longer retention period could be required to resolve disputes, or answer regulatory or police requests. In such cases, the collected information will be used and stored until the request is closed.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">5 – How we share your information
                </h1>
                <p class="details">With World War 0x entities
                    In order to operate the Services, your personal information may be transferred to other World War 0x studios or entities, subsidiaries, processors or third parties located worldwide as described below (please refer to "International operations and transfers of your information").
                    With third parties
                    We use third-party services that have limited access to your information for specific purposes, such as administration, analytics, optimization, advertising, prize delivery, marketing assistance, customer service, and data analysis. They assist us with our operations.
                    Such third parties are authorized to use your information for these purposes only.
                    If you decide, while using our Services, to use social sharing features such as “Share” or “Like” on Facebook or other third-party social network sites, this may allow the sharing and collection of personal and non-personal information both to and from such third-party social networks.
                    You should visit the policies of such third parties for more information about their information collection practices.
                    With authorities
                    We reserve the right to report to law enforcement agency activities that we, in good faith, believe to be illegal. We will investigate or take action to counter illegal activity, suspected abuse or unauthorized use of the Services, or to protect the property or safety of others. We may also disclose your information if required by any law or court order worldwide, if the information relates to actual or threatened harmful conduct.
                    In that case, we will consider applicable local laws, the nature of the order, as well as the legitimacy and proportionality of your information.
                    In case of sale of our company
                    In connection with any sale of our company or any line of business (including the assets relating thereto), customer information generally is one of the transferred business assets. In the event of any such sale or disposition of any or all of our business, your information may be transferred to the acquirer.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">7 – Security and confidentiality of your personal information

                </h1>
                <p class="details">We have implemented security measures to safeguard and help prevent unauthorized access, maintain data security, and correctly use the personal information collected through the Services.
                    We take, and force applicable third parties to take, reasonable precautions to protect your personal information against loss, misuse, unauthorized disclosure, alteration, and destruction. However, please remember that no transmission of data over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your information, we cannot guarantee the security of your information and do not assume any responsibility for the unauthorized use of, or access to, your information that is under our control.
                    If you believe your personal information is being improperly used by us or any third party, please immediately notify us via email at hi@WorldWar0x.com.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">8 – Your rights

                </h1>
                <p class="details">We ask that you keep the information that you provide to us updated.
                    You represent and warrant that all information you provide us is true and correct, and relates to you and not to any other person.
                    You can exercise your rights at any time and ask World War 0x for access to, or rectification or erasure of, your information.
                    Please note that other third parties (our data partners) may be controllers of your information.
                    If you have previously consented to any direct marketing communication from us or subscribed to our newsletters, you can unsubscribe by clicking on a link available in each communication and newsletter we send you.
                    If you want to decline to allow cookies or other tracking technologies, please read our Cookies Policy on our websites.
                    Please note that game functionality, Services and features can be affected by your actions. Some of your information and its processing is mandatory for World War 0x to provide the Services.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">9 – Third-party services

                </h1>
                <p class="details">The Services may link to external sites that are beyond our control. This Privacy Policy only covers the way we treat personal information and non-personal information we collect on the Services. By accessing any external sites, you agree to the privacy policies of those sites. Please understand that external sites may have different policies with respect to the collection, use and disclosure of your personal information. We have no control over, and are not responsible for, the privacy practices of such third parties.
                    Therefore, you are encouraged to review the privacy policies of all third party services. Without limiting anything in the following section, we are not liable in any way for the actions, inactions or policies of any external services.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">10 – Changes to our Privacy Policy

                </h1>
                <p class="details">We reserve the right to change this Privacy Policy at any time. In the event that we make material changes to this Privacy Policy, they will be re-posted in the "Privacy" section of our websites and apps with the date the modifications were made indicated at the top of the page. Therefore, please review this Privacy Policy from time to time so that you are aware when any changes are made to it. Your continued use of the Services after such change(s) constitutes your acceptance of any such change(s), and if you do not accept any changes, you may choose not to use the Services or opt out by sending us appropriate notice. If you would like further information about any recent changes made, please send your request to hi@WorldWar0x.com and include “Information about Changes” in the subject line.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">11 – Legal disclaimer

                </h1>
                <p class="details">Our Services operate AS IS, and we do not represent or warrant that our Services will be available at all times, or that your use of the Services will be uninterrupted or error-free. We are not responsible for your ability to access the Services or matters beyond our control. This Privacy Policy is governed by the laws of your country of residence. Any dispute arising from the use of the Services shall be submitted to the competent courts of your country of residence.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">12 – How to contact us

                </h1>
                <p class="details">If you have any questions, comments or concerns regarding our Privacy Policy and/or practices, please contact us: hi@worldwar0x.com
                    <ul>
                        <li>1. by sending an email to hi@WorldWar0x.com
                        </li>
                    </ul>
                </p>
            </div>

        </div>
        <Footer />
    </>);
}

export default Privacy;