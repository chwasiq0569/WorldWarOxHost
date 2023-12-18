import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import "./terms.css"

const Terms = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    React.useEffect(() => {
        scrollToTop()
    }, [])

    return (<>
        <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} />

        <div class="mainContent">
            <div class="Privacy_contentContainer mainHEAD">
                <h1 class="pageHead mainHead">WORLD WAR 0X TERMS OF USE
                </h1>

            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">GENERAL
                </h1>
                <p class="details">How to opt in/opt out:
                    If you wish to remove all personal data World War 0x accesses through your World War 0x account according to your prior consent, send a request to hi@WorldWar0x.com.</p>
                <p class="details">
                    World War 0x (“we”, “our” or “us”) operates the World War 0x website (the “Site”), provides various apps, games and social networks (the “Apps”), and offers certain other features, content, or contests from time to time (collectively, “Additional Features”) (the Site, Apps, and Additional Features shall hereinafter sometimes be collectively referred to as the “Services”).</p>
                <p class="details">
                    These Terms of Use (“Agreement”) include our policy for acceptable use of the Services and govern your rights, obligations and restrictions regarding your use of the Services. You are only authorized to use the Services if you agree to abide by all applicable laws and this Agreement. By using the Services, you agree to be bound by this Agreement.
                    Because your privacy is important to us, this Agreement also incorporates, by this reference, our Privacy Policy (http://www.World War 0x.com/privacy-notice), which explains how we collect and use your content and information. Please read the Privacy Policy.
                    Your access and use of the Services constitutes your representation and warranty that you are of legal age to form a binding contract, and if not of legal age, that you access and use the Services with the permission of a parent or legal guardian, and that you are not a person barred from using or receiving the Services by any local, state, federal or international law.
                    In order to participate in certain Services, you may be notified that you are required to agree to additional terms and conditions, and such additional terms are hereby incorporated into this Agreement by this reference, but such additional terms and conditions shall control solely for the applicable Service.
                    We may modify this Agreement from time to time and such modifications shall be effective upon posting on the Services. You will be deemed to have agreed to any such modifications by your further use of the Services after any such modification is posted. It is therefore important that you review this Agreement regularly to ensure you are updated as to any changes. If you do not agree with the modifications, please discontinue use of the Services immediately.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">I. YOUR ACCOUNT / PASSWORD SECURITY / SUSPENSION, TERMINATION</h1>
                <p class="details">When you access the Apps for the first time, you may be asked to indicate your age. Please consider we need it to tailor your experience in-game. We may therefore apply some age restrictions to our Apps and you agree and acknowledge that some of our Apps require you to be thirteen (13) years of age and above.
                    In order to benefit from some features of the Services, you may be required to register an account (an "Account").  When creating or updating an Account, you are required to provide us with certain personal information, which may include your name, date of birth, email address, and, in some cases, payment information. This information will be held and used in accordance with our Privacy Policy at https://www.WorldWar0x.com/privacy.
                    You may never use another's Account without permission. You may not create more than one Account. You are prohibited from registering a new Account if you have previously had an Account terminated.
                    You are responsible for (i) keeping confidential any password that you created to use any aspect of the Services requiring registration, and (ii) restricting access to your computer, console, or mobile device. You agree to accept full responsibility for all activities that occur within your Account. You must notify us immediately of any breach of security or unauthorized use of your Account.
                    Although we will not be liable for your losses caused by any unauthorized use of your Account, whether with or without your knowledge, you may be liable for our losses or the losses of our third-party licensors, content providers, merchants, advertisers, sponsors, and service providers (collectively, “World War 0x Providers") due to such unauthorized use.
                    Without limiting anything in this Agreement, we reserve the right, in our sole discretion, to restrict, suspend, or terminate your Account and/or your access to any or all parts of the Services at any time, for any or no reason, with or without prior notice, and without liability, including in the event we stop offering any aspect of the Services. We expressly reserve the right to restrict, suspend and/or terminate your access to any part of the Services if we determine, in our sole discretion, that you have violated any of the terms of this Agreement.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">II. PURCHASES / PAYMENTS / REFUNDS

                </h1>
                <p class="details">We may charge fees associated with certain Services, including, without limitation, for subscriptions, the download of Apps, and the purchase of Virtual Items (as defined below).  Such products or services will be made available for purchase on specified pages of the Site, within the Apps, on World War 0x Providers’ websites or platforms (including third-party marketplaces), or otherwise as indicated through the Services. In the event of any fee changes by World War 0x, World War 0x will provide you with commercially reasonable notice of such charge.
                    The price of any product or service purchased through the Services will be the price specified at the time of your purchase. Prices for all products and services exclude all applicable taxes and telecommunication charges, unless otherwise indicated. To the extent permissible by law, you agree to be responsible for any such applicable taxes and telecommunication charges.
                    Your purchase of any App, Virtual Item or other content through the Services constitutes your representation and warranty that you are of legal age to form a binding contract, and if not of legal age, that you have placed such order with the permission of a parent or legal guardian, and that you are not a person barred from using or receiving the Services by any local, state, federal or international law.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">IV. ONLINE CONDUCT

                </h1>
                <p class="details">You, as a user, agree to use the Services only for lawful purposes. Specific prohibited activities include, but are not limited to:
                    criminal or tortious activity, including child pornography, fraud, trafficking in obscene material, drug dealing, gambling, harassment, stalking, spamming, spimming, sending of viruses or other harmful files, copyright infringement, patent infringement, or theft of trade secrets;
                    promoting illegal or tortious activities or conduct that is abusive, threatening, obscene, defamatory or libelous;
                    using photos and/or pictures that are sexually explicit or pornographic, exposing the female breast or full exposure of either male or female buttocks, or any or all portions of the human genitalia; exposing anyone or anything involved in explicit sexual acts and/or lewd and lascivious behavior, including masturbation, copulation, pedophilia, intimacy involving nude or partially nude people in heterosexual, bisexual, lesbian, or homosexual encounters; depicting anyone or anything that is crudely vulgar or grossly deficient in civility or behavior or that shows scatological impropriety and any other content contravening good moral standards;
                    attempting to circumvent, disable or otherwise interfere with security-related features of the Services or features that prevent or restrict use or copying of any content or enforce limitations on use of the Services or the content therein;
                    using cheats, exploits, automation software, bots, hacks, mods or any other unauthorized software designed to modify or interfere with the Services, and taking advantage of cheats or exploits;
                    using any software that intercepts, mines, or otherwise collects information about other users or copies and stores any Proprietary Materials (as defined below);
                    interfering with, disrupting, or creating an undue burden on the Services or the networks or services connected to the Services;
                    attempting to impersonate another user or person;
                    soliciting personal information from anyone under 18;
                    collecting, harvesting, soliciting or posting passwords or personally identifiable information from other users;
                    using the account, username, or password of another account holder at any time or disclosing your password to any third party or permitting any third party to access your Account;
                    using any information obtained from the Services in order to harass, abuse, or harm another person;
                    using any unfair, misleading or deceptive content intended to draw traffic to one’s profile;
                    using the Services in a manner inconsistent with any and all applicable laws and regulations, including U.S. export and re-export control laws and regulations;
                    sublicense, rent, lease, sell, trade, gift, bequeath or other transfer of your account or any Virtual Items associated with your account to anyone;
                    access or use of a third-party account or any Virtual Items that have been sublicensed, rented, leased, sold, traded, gifted, bequeathed, or otherwise transferred from the holder or the original account creator;
                    using multiple accounts, manual procedures, bots, scripts or other processes in order to accumulate or “farm” Virtual Items;
                    using the Services in a commercial manner, including the transferring of Virtual Items in exchange for “real-world” money.
                    making any automated use of the Services (playing more than 24 hours in a row is considered as automated use) or taking any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our infrastructure.
                    You will immediately be banned from the Services if you are found to be participating in any one of these activities. Any conduct by you in violation of the foregoing prohibitions may result in the suspension or termination of your Account and your access to the Services.

                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">V. CONTENT
                </h1>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">A. Proprietary Rights</h1></h1>
                <p class="details">
                    With the exception of content posted by users of the Services (“User Content”), all materials contained on the Services, including all content, the Virtual Items and the software, graphics, text and look and feel of the sites, and all trademarks (including World War 0x® and the titles of all of our Apps), copyrights, patents and other intellectual property rights related thereto (“Proprietary Materials”), are owned or controlled by World War 0x, our subsidiaries or affiliated companies, our third-party licensors, and/or our advertising partners.  You may not modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any Proprietary Materials, or any other protectable aspects of the Services, in whole or in part.  Subject to your compliance with this Agreement and any other relevant policies related to the Services, we grant you a non-exclusive, non-transferable, revocable limited license subject to the limitations herein to access and use the Services and Proprietary Materials for your own non-commercial entertainment purposes consistent with the intended purpose of the Services. You agree not to use the Service for any other purpose.
                    As referenced above, even though you may buy Virtual Items with “real-world” money, you do not, in fact, “own” such items.  By making such a purchase, you are merely being granted a license to use such Virtual Items in the applicable Apps or other Services for which such Virtual Items can be used.  The Virtual Items have no real-world value and are not in any way a credit or balance of real currency or its equivalent.  In no event can any Virtual Items be redeemed for actual “real-world” currency. We have the sole and absolute right to manage, regulate, control, modify and/or eliminate such Virtual Items as we see fit in our sole discretion, and shall have no liability to you or anyone for the exercise of such rights.
                </p>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">B. Distribution/Uploading of Content
                    </h1></h1>
                <p class="details">
                    You are prohibited from posting on or transmitting through the Services (e.g., through uploaded content, a chat or user forum, online review or comment posted through the Services) any content that infringes upon a third party’s intellectual property rights or is defamatory, damaging, illegal, or offensive.
                    Without limiting the foregoing, you may not post, modify, distribute, or reproduce in any way on the Services any copyrighted material, trademarks, or other proprietary information belonging to others unless you have first obtained the prior written consent of the owner of such proprietary rights. It is our policy to terminate the account of anyone who repeatedly infringes the copyright rights of others upon our receipt of proper notification from the copyright owner or the copyright owner’s legal agent.
                    By submitting content or materials (“Your Content”) to us through the Services, including, without limitation, uploading any materials, choosing a username, or participation in any chats or forums, you automatically grant us, or warrant that the owner of such content has expressly granted us, the royalty-free, irrevocable, sublicensable and transferable, non-exclusive right and license to use, reproduce, publish, translate, prepare derivative works of, copy, perform and distribute Your Content, including all patent, trademark, trade secret, copyright or other proprietary rights in and to such content, and your username, actual name, and likeness (if submitted), in whole or in part worldwide, including in connection with announcing you as the winner of a sweepstakes/contest or including you in leaderboards. You also hereby grant each user of the Services a non-exclusive license to access Your Content through the Services, and to use, reproduce, distribute, display and perform Your Content as permitted through the functionality of the Services and under this Agreement.  The above licenses granted by you in Your Content are perpetual and will only terminate if you’ve requested the removal or deletion of Your Content from the Services (such license will terminate within a commercially reasonable time after your request to remove or delete Your Content).  You understand and agree, however, that we may retain, but not display, distribute, or perform, server copies of Your Content that have been removed or deleted.  The foregoing is subject to the provision regarding Unsolicited Submissions below.
                    Subject to these grants, you retain any and all rights which may exist in Your Content.
                    We may disclose any of Your Content or electronic communication of any kind (i) to satisfy any law, regulation, or government request; (ii) if such disclosure is necessary or appropriate to operate our Services; (iii) to protect the rights or property of World War 0x and our officers, directors, employees and agents; or (iv) to protect the World War 0x Providers and any other user.

                </p>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">C. Advertising
                    </h1></h1>
                <p class='details'>
                    By using our Site/Apps, you may be offered advertising content. As such, you warrant that you agree with our Privacy Policy in relation to advertising. For more information, please refer to https://www.World War 0x.com/privacy.
                    World War 0x is not responsible for the third-party products or services displayed therein.
                </p>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">D. Representations and Warranties
                    </h1></h1>
                <p class='details'>
                    You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use all patent, trademark, trade secret, copyright or other proprietary rights in and to any and all of Your Content and to enable inclusion and use of Your Content in the manner contemplated by the Services and this Agreement.  You further represent and warrant Your Content will not defame any third party and that the use of Your Content on the Services will not violate or infringe upon the intellectual property rights, or the rights of privacy or publicity, of any third party.

                </p>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">E. Third-Party Content & User Content
                    </h1></h1>
                <p class='details'>
                    You acknowledge that World War 0x. is an online service provider that may post content supplied by third parties and users. We have no more editorial control over the content posted by such third parties (including User Content) than does a public library or newsstand. Any opinions, advice, statements, judgments, services, offers, or other information that constitutes part of the content expressed or made available by third parties, including User Content, are those of the respective authors or distributors and not of World War 0x or its affiliates or any of their officers, directors, employees, or agents. While we retain the right to filter or reject User Content and other content posted by third parties, we review User Content and other third-party content in a limited gate-keeper fashion and have no obligation to investigate whether User Content and other third-party content violate any term of this Agreement and will not do so in most cases. We neither endorse nor are responsible for the User Content or any other content posted to the Services by anyone other than World War 0x.
                    Just as you retain complete ownership of Your Content (subject to the license to us granted above), all other users of the Services retain ownership of their User Content. You may not modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any User Content in whole or in part.
                    Notwithstanding the foregoing, for all World War 0x S.E. games under Disney license (e.g.: Disney Dreamlight Valley), to the extent that World War 0x S.E. authorizes you to create, use, post, upload, distribute, publicly display or publicly perform User Content that requires the use of World War 0x S.E. or Disney copyrighted works, World War 0x S.E. and Disney grant you a non-exclusive license to create a derivative work using the specifically referenced copyrighted works as required for the sole purpose of creating such a work, provided that such license shall be conditioned upon your assignment to Disney of all rights worldwide of the work you create for the duration of copyright of the User Content, in all formats and media known or unknown to date. If such rights are not assigned to Disney, your license to create derivative works using World War 0x S.E. and Disney copyrighted works shall be null and void.
                </p>
                <h1 class="Privacy_Secondary_contentContainer">
                    <h1 class="head">G. Non-fungible Tokens
                    </h1></h1>
                <p class="details">
                    Only limited personal, non-commercial use of, and resale rights of Non-fungible Tokens (NFTs) are granted and you have no right to license, commercially exploit, reproduce, distribute, prepare derivative works, publicly perform, or publicly display an NFT, or the music or the artwork therein. You have no right to modify and/or use the art to market or sell any products. All copyrights and other rights are reserved and not granted.
                    World War 0x is not responsible for the blockchain network and/or any other third-party service that you might access or use for the purpose of using, owning, or transferring the Non-fungible Tokens, and you warrant that you will hold World War 0x harmless from any and all claims of any nature that in any way arise from your use of any third-party service and/or platform.
                    In the case of resale of the NFT according to the conditions authorized above, no transfer of rights whatsoever will be granted, and the new owner will be subject to the same limitations.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="pageHead alignLeft">VI. NOTICE OF INFRINGEMENT
                </h1>
                <p class="details">Without limiting the foregoing, if you believe that any content, including User Content, or other materials, posted on the Services constitutes an infringement of your copyrights or trademarks, we will respond promptly to any properly submitted notice containing the information detailed below. Please send all notices to the following email address: hi@WorldWar0x.com.
                    To be effective, the notification must be a written communication that includes the following: 1. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; 2. Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site; 3. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material; 4. Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and if available, an electronic mail address at which the complaining party may be contacted; 5. A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and 6. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">VII. NON-COMMERCIAL USE
                </h1>
                <p class="details">The Services are for your personal use only and may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Any use of the Services in violation of this provision, including communicating any advertisement or solicitation, or collecting usernames and/or email addresses of account holders by electronic or other means for the purpose of sending unsolicited email or unauthorized framing of or linking to the Services, is prohibited.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">VIII. ELECTRONIC COMMUNICATIONS
                </h1>
                <p class="details">When you use the Services or send emails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on this site. You agree that all agreements, notices, disclosures and other communications that we provide you electronically satisfy any legal requirement that such communications be in writing.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XII. LEGALITY </h1>
                <p class="details">You are subject to all laws of the state(s) and countries in which you reside and from which you access the Services and are solely responsible for obeying those laws. You agree we cannot be held liable if laws applicable to you restrict or prohibit your participation. We make no representations or warranties, implicit or explicit, as to your legal right to participate in any Apps, contests, sweepstakes or tournaments offered through the Services nor shall any person affiliated, or claiming affiliation with the Services have authority to make any such representations or warranties.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XV. INDEMNITY</h1>
                <p class="details">You agree to indemnify and hold World War 0x, the World War 0x Providers, our subsidiaries and affiliates, and our respective officers, agents, partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Services in violation of this Agreement and/or arising from a breach of this Agreement and/or any breach of your representations and warranties set forth above and/or if Your Content causes us to be liable to another.</p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XVI. SEVERABILITY</h1>
                <p class="details">The provisions of this Agreement are intended to be severable. If for any reason any provision of this Agreement shall be held invalid or unenforceable in whole or in part in any jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such invalidity or unenforceability without in any manner affecting the validity or enforceability thereof in any other jurisdiction or the remaining provisions hereof in any jurisdiction.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XVII. OTHER</h1>
                <p class="details">This Agreement is deemed accepted upon any use of any of the Services. This Agreement constitutes the entire agreement between you and us regarding the use of the Services. Our failure to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision. The section titles in this Agreement are for convenience only and have no legal or contractual effect.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XVIII. SUPPORT</h1>
                <p class="details">Subject to the other provisions of this Agreement, World War 0x will attempt to help you with any queries or problems that you may have with the Services or any of your purchases through the Services. To reach our customer support team, please email us at hi@WorldWar0x.com. It will expedite your request for assistance by providing our representatives with all the information they need to solve your problem as quickly as possible.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XIX. THIRD-PARTY MARKETPLACES</h1>
                <p class="details">These Terms of Use are between you and World War 0x only, not with Apple, Facebook or any other third party through which you may have purchased any of the Apps (“Marketplaces”). The Marketplaces are not responsible for the App you purchased or our Services. The Marketplaces have no obligation whatsoever to furnish any maintenance and support services with respect to the Apps. To the maximum extent permitted by applicable law, the Marketplaces have no other warranty obligation whatsoever with respect to the Apps. The Marketplaces are not responsible for addressing any claims by you or any third party relating to the Apps or your possession and/or use of the Apps, including, but not limited to: (i) product liability claims; (ii) any claim that the Apps fail to conform to any applicable legal or regulatory requirement; (iii) claims arising under consumer protection or similar legislation or (iv) claims that the Apps infringe upon a third party’s intellectual property rights.
                </p>
            </div>
            <div class="Privacy_contentContainer">
                <h1 class="head alignLeft">XX. MODIFICATION </h1>
                <p class="details">We reserve the right to make changes to the Services, posted policies and these Terms of Use at any time without notice.
                    Please contact us at hi@WorldWar0x.com for any questions regarding customer relations and any issues arising from your in-game activity.

                </p>
            </div>
        </div>
        <Footer />
    </>);
}

export default Terms;