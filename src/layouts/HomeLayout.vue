<template>
  <div class="layer">
    <div v-if="IsSize_Date()" class='bgblur'></div>
    <div :style="bgColor()" class="home-layout">
      <header class="header">
        <img alt="logo" class="logo" src="@/assets/logo.jpg" />
        <a class="phone-link" href="tell:8778041606">
          <img alt="" class="phone-icon" src="@/assets/call.svg" />
          (877) 804 1606&nbsp;
        </a>
      </header>
      <main :style="IsSize_Date() && 'z-index:4;'" class="main">
        <slot></slot>
      </main>
      <div  :style="truckBgImage()" :class="showTruck ? 'truck' : 'quata'">
        <div v-if="showTruck" :class="onFirstPage() ? 'blurFpage' : 'blurRestPages' " class="bg_img_blur"></div>
      </div>
      <footer class="footer thin-font">
        <a @click="showJoinOurTeam" :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Join Our Network</a>
        <a @click="showPrivacyPolicy" :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Privacy Policy</a>
        <a @click="showTermOfUse" :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Terms of Use</a>
        <a  @click="showDontSellMyInfo" :style="IsSize_Date() && 'color:rgb(81,81,81);'" class="link" href="#">Don't Sell my Information</a>
      </footer>
      
      <div class="footer_options-container thin-font">
        <div class="privacy_policiy-container">
            <div @click="removePrivacyPolicy" class="exit_footer_option-wrapper">
              <img src="@/assets/exit-footer-option.svg" class="exit-footer-option-icon" alt="" >
            </div>
            <div class="scroll-container">
              <h1 class="main-text">Privacy Policy</h1>
            <div class="privacy_policy outer">
                
                <p>Protecting your private information is our priority. This Statement of Privacy applies to www.redvanlines.com and RedVanLines Network and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to RedVanLines Network include www.redvanlines.com. The RedVanLines Network website is a Moving Company Network site. By using the RedVanLines Network website, you consent to the data practices described in this statement. </p>

                <h1 class="">Collection of your Personal Information </h1>

                <p>RedVanLines Network may collect personally identifiable information, such as your:</p>

                <p>
				�— Name<br> 
				�— E-mail Address<br> 
				�— Phone Number
				</p>
				
				<p>RedVanLines Network encourages you to review the privacy statements of websites you choose to link to from RedVanLines Network so that you can understand how those websites collect, use and share your information. RedVanLines Network is not responsible for the privacy statements or other content on websites outside of the RedVanLines Network website. </p>

                <h1 class="">Use of your Personal Information</h1>

                <p>RedVanLines Network collects and uses your personal information to operate its website(s) and deliver the services you have requested. </p>

                <p>RedVanLines Network may also use your personally identifiable information to inform you of other products or services available from RedVanLines Network and its affiliates. RedVanLines Network may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered. </p>
                
                <p>RedVanLines Network may sell, rent, or lease customer information to third parties for the following reasons: </p>
                
                

                <h1 class="">Provide Related Home Services Quotes </h1>
                <p>RedVanLines Network may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is transferred to the third party. RedVanLines Network may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to RedVanLines Network, and they are required to maintain the confidentiality of your information. </p>

				<p>RedVanLines Network may keep track of the websites and pages our users visit within RedVanLines Network, in order to determine what RedVanLines Network services are the most popular. This data is used to deliver customized content and advertising within RedVanLines Network to customers whose behavior indicates that they are interested in a particular subject area.</p>
                
                <p>RedVanLines Network will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on RedVanLines Network or the site; (b) protect and defend the rights or property of RedVanLines Network; and, (c) act under exigent circumstances to protect the personal safety of users of RedVanLines Network, or the public.</p>
                
                <h1 class="">Automatically Collected Information</h1>
                <p>Information about your computer hardware and software may be automatically collected by RedVanLines Network. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the RedVanLines Network website. </p>
                
                <h1 class="">Use of Cookies </h1>
                <p>The RedVanLines Network website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. </p>
                
                <p>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize RedVanLines Network pages, or register with RedVanLines Network site or services, a cookie helps RedVanLines Network to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same RedVanLines Network website, the information you previously provided can be retrieved, so you can easily use the RedVanLines Network features that you customized. 
                </p>
                
                <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the RedVanLines Network services or websites you visit. </p>
                
                <h1 class="">Security of your Personal Information</h1>
                <p>RedVanLines Network secures your personal information from unauthorized access, use, or disclosure. RedVanLines Network uses the following methods for this purpose: </p>
                <p>
                �— Verisign<br>
                �— SSL Protocol 
                </p>
                <p>Verisign is an independent, third-party company engaged in the development of digital trust. Verisign provides authentication of Internet services, digital identity, and intellectual property. By clicking on the Verisign logo, the Verisign website will serve up a web page that confirms that RedVanLines Network is "Verisign Authenticated." 
                </p>
                <p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol. </p>
                
                <h1 class="">Children Under Thirteen</h1>
                <p>RedVanLines Network does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website. </p>
                
                
                <h1 class="">Opt-Out &amp; Unsubscribe</h1>
                <p>We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from RedVanLines Network by contacting us here: 
                <br>
                — Web page: _________________<br> 
				— Email: info@redvanlines.com <br>
				— Phone: _________________ 
                </p>
                
                <h1 class="">Changes to this Statement </h1>
                <p>RedVanLines Network will occasionally update this Statement of Privacy to reflect company and customer feedback. RedVanLines Network encourages you to periodically review this Statement to be informed of how RedVanLines Network is protecting your information. </p>
                
                <h1 class="">Contact Information </h1>
                <p>RedVanLines Network welcomes your questions or comments regarding this Statement of Privacy. If you believe that RedVanLines Network has not adhered to this Statement, please contact RedVanLines Network at: 
                </p>
                  <p>RedVanLines Network welcomes your questions or comments regarding the Terms:</p>
                 
                <address class="address">RedVanLines Network<br>
                    412 N. Main St Ste 100 <br>
                    Buffalo, Wyoming 82834
                </address>

                <address class="address">Email Address: <br>
                    info@redvanlines.com <br>
                    Telephone number: <br>
                    877-884-4738  <br>
                    Effective as of July 01, 2017 
                </address>
                
                <h1 class="">For California Consumers The Following Applies</h1>

				<h1 class="">Your Rights and Choices</h1>
				<p>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</p>

				<h3 style="font-size:12px;padding-top:10px !important;">Access to Specific Information and Data Portability Rights</h3>
				
				<p>You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
                
                <ul style="padding: 20px;list-style:circle;font-family: 'Open Sans', sans-serif;font-weight: 300;font-style: italic;font-size: 14px;color: #9B9B9B;line-height: 22px;">
                	<li>The categories of personal information we collected about you.</li>
                	<li>The categories of sources for the personal information we collected about you.</li>
                	<li>Our business or commercial purpose for collecting or selling that personal information.</li>
                	<li>The categories of third parties with whom we share that personal information.</li>
                	<li>The specific pieces of personal information we collected about you (also called a data portability request)</li>
                	<li>
                		If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
                		<ul style="list-style: circle;padding-left: 30px;">
                		<li>sales, identifying the personal information categories that each category of recipient purchased; and</li>
                		<li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.</li>
                		</ul>
                	</li>
                		
                </ul>
                
                <h3 style="font-size:12px;padding-top:10px !important;">Deletion Request Rights</h3>
                <p>You have the right to request that we delete any of your personal information that we collect from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</p>
                <p>We may deny your deletion request if retaining the information is necessary for us or our service providers to:</p>
                
                <ol style="padding: 20px;list-style:decimal;font-family: 'Open Sans', sans-serif;font-weight: 300;font-style: italic;font-size: 14px;color: #9B9B9B;line-height: 22px;">
                	<li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
                	<li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
                	<li>Debug products to identify and repair errors that impair existing intended   functionality.</li>
                	<li>Comply with a legal obligation.</li>
                </ol>
                
                
                <h3 style="font-size:12px;padding-top:10px !important;">Exercising Access, Data Portability, and Deletion Rights</h3>
                <p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by email:</p>
                <ul style="padding: 20px;list-style:circle;font-family: 'Open Sans', sans-serif;font-weight: 300;font-style: italic;font-size: 14px;color: #9B9B9B;line-height: 22px;">
                	<li>Request Information Do Not Be Sold Go To <a class="ca_popups" data-id="do_not_sell_ca">www.redvanlines.com/Do-not-sell-ca</a></li>
                	<li>Request Right To Know Information Go To <a class="ca_popups" data-id="right_to_know_ca">www.redvanlines.com/right-to-know-ca</a></li>
                	<li>Request To Delete Your Information Go To <a class="ca_popups" data-id="delete_my_info_ca">www.redvanlines.com/delete-my-info-ca</a></li>
                	<li>Emailing us at <a href="mailto:CCPA@redvanlines.com">CCPA@redvanlines.com</a></li>
                	<li>Toll Free CCPA Hotline - <a href="tel:18554791998">855-479-1998</a></li>
                		
                </ul>
                <p>Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.</p>
                <p>You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
                <ul style="padding: 20px;list-style:circle;font-family: 'Open Sans', sans-serif;font-weight: 300;font-style: italic;font-size: 14px;color: #9B9B9B;line-height: 22px;">
                	<li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative. (At times we may require you to confirm a link sent to your phone via SMS or email)</li>
                	<li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
                </ul>
                
                <p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.  Making a verifiable consumer request does not require you to create an account with us.  We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.</p>
                
                <h3 style="font-size:12px;padding-top:10px !important;">Response Timing and Format</h3>
                <p>We endeavor to respond to a verifiable consumer request within 45 days of its receipt.  If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.  We will deliver our written response by email to the email that was verified.  Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt.  The response we provide will also explain the reasons we cannot comply with a request, if applicable.  We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.  If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
                
                
                <h1 class="">Non-Discrimination</h1>
                <p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:</p>
                <ul style="padding: 20px;list-style:circle;font-family: 'Open Sans', sans-serif;font-weight: 300;font-style: italic;font-size: 14px;color: #9B9B9B;line-height: 22px;">
                	<li>Deny you goods or services.</li>
                	<li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
                	<li>Provide you a different level or quality of goods or services.</li>
                	<li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
                </ul>
            </div>
            </div>
        </div>
      </div>
      <div class="footer_options-container thin-font">
        <div class="join_our_network-container">
          <div class="exit_footer_option-wrapper">
              <img @click="removeJoinOurTeam" src="@/assets/exit-footer-option.svg" class="exit-footer-option-icon" alt="" >
            </div>
            <div class="join_us_form-container">
              <h1>
                Join Our Network
              </h1>
              <h3 class="thin-font minor_text_join_us">Call us at (877) 325-1093 to start receiving leads today, or fill out the form below.</h3>
              <form action="">
                <div class="join_us_form-wrapper">
                <input
                  v-model="join_us_FullName"
                  autocomplete="on"
                  class="input_join_us"
                  placeholder="Full Name"
                  type="text"
                  @input.prevent=""
                />
                <input
                  v-model="join_us_Business_Name"
                  autocomplete="on"
                  class="input_join_us"
                  placeholder="Business Name"
                  type="text"
                  @input.prevent=""
                />
                <input
                  v-model="join_us_Phone"
                  v-mask="['(###) ###-####']"
                  class="input_join_us"
                  maxlength="17"
                  placeholder="Phone Number"
                  type="tel"
                  @keydown.enter=""
                  @input.prevent=""
                />
                <input
                  v-model="join_us_Email"
                  autocomplete="on"
                  class="input_join_us"
                  placeholder="Email(optional)"
                  type="email"
                  @input.prevent=""
                />
                <button class="btn_join_us" type="submit" @click.prevent="onSubmitJoinUs">
                  Submit
                </button>
                <div v-if="join_us_hasError" class="join_us_error">
                  Please Enter Valid Data 
                </div>
              </div>

              </form>
              
            </div>
        </div>
      </div>
      <div class="footer_options-container thin-font">
        <div class="terms-container">
          <div class="exit_footer_option-wrapper">
              <img @click="removeTermOfUse" src="@/assets/exit-footer-option.svg" class="exit-footer-option-icon" alt="" >
            </div>
            <div class="scroll-container">
            <h1 class="main-title">Terms of Use</h1>
            <div class="privacy_policy outer">
                <h1 class="title">Agreement between User and www.redvanlines.com</h1>

                <p>Welcome to www.redvanlines.com. The www.redvanlines.com website (the "Site") is comprised of various web pages operated by RedVanLines Network. www.redvanlines.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of www.redvanlines.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference. </p>
                <p>www.redvanlines.com is an E-Commerce Site.</p>
                <p>Connect Shippers With Moving Companies</p>

				<h1 class="title">Privacy</h1>
				<p>Your use of www.redvanlines.com is subject to RedVanLines Network's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices. </p>
				
				<h1 class="title">Electronic Communications</h1>
				<p>Visiting www.redvanlines.com or sending emails to RedVanLines Network constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing. </p>

                <h1 class="title">Children Under Thirteen</h1>
                <p>RedVanLines Network does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use www.redvanlines.com only with permission of a parent or guardian. </p>
                
                <h1 class="title">Links to Third Party Sites/Third Party Services</h1>
                <p>www.redvanlines.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of RedVanLines Network and RedVanLines Network is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. RedVanLines Network is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by RedVanLines Network of the site or any association with its operators. </p>
                <p>Certain services made available via www.redvanlines.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the www.redvanlines.com domain, you hereby acknowledge and consent that RedVanLines Network may share such information and data with any third party with whom RedVanLines Network has a contractual relationship to provide the requested product, service or functionality on behalf of www.redvanlines.com users and customers. </p>
                
                <h1 class="title">No Unlawful or Prohibited Use/Intellectual Property</h1>
                <p>You are granted a non-exclusive, non-transferable, revocable license to access and use www.redvanlines.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to RedVanLines Network that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. </p>
                <p>All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of RedVanLines Network or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto. </p>
                <p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. RedVanLines Network content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of RedVanLines Network and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of RedVanLines Network or our licensors except as expressly authorized by these Terms. </p>
                
                <h1 class="title">International Users </h1>
                <p>The Service is controlled, operated and administered by RedVanLines Network from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the RedVanLines Network Content accessed through www.redvanlines.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations. </p>
                
                <h1 class="title">Indemnification</h1>
                <p>You agree to indemnify, defend and hold harmless RedVanLines Network, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. RedVanLines Network reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with RedVanLines Network in asserting any available defenses. </p>
                
                <h1 class="title">Class Action Waiver </h1>
                <p>Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and RedVanLines Network agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding. </p>
                
                <h1 class="title">Liability Disclaimer</h1>
                <p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. REDVANLINES NETWORK AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. </p>
                <p>REDVANLINES NETWORK AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. REDVANLINES NETWORK AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. </p>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL REDVANLINES NETWORK AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF REDVANLINES NETWORK OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE. </p>
                
                
                <h1 class="title">Termination/Access Restriction</h1>
                <p>RedVanLines Network reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Wyoming and you hereby consent to the exclusive jurisdiction and venue of courts in Wyoming in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section. </p>
                <p>You agree that no joint venture, partnership, employment, or agency relationship exists between you and RedVanLines Network as a result of this agreement or use of the Site. RedVanLines Network's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of RedVanLines Network's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by RedVanLines Network with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. </p>
                <p>Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and RedVanLines Network with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and RedVanLines Network with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English. </p>
                
                <h1 class="title">Changes to Terms</h1>
                <p>RedVanLines Network reserves the right, in its sole discretion, to change the Terms under which www.redvanlines.com is offered. The most current version of the Terms will supersede all previous versions. RedVanLines Network encourages you to periodically review the Terms to stay informed of our updates. </p>
                
                <h1 class="title">Contact Us</h1>
                <p>RedVanLines Network welcomes your questions or comments regarding the Terms:</p>
                <address class="address">RedVanLines Network<br>
                    412 N. Main St Ste 100 <br>
                    Buffalo, Wyoming 82834
                </address>

                <address class="address">Email Address: <br>
                    info@redvanlines.com <br>
                    Telephone number: <br>
                    877-884-4738  <br>
                    Effective as of July 01, 2017 
                </address>
            </div>
            </div>
        </div>

      </div>
      <div class="footer_options-container thin-font">
        <div class="dont_sell_info-container">
          <div class="exit_footer_option-wrapper">
              <img @click="removeDontSellMyInfo" src="@/assets/exit-footer-option.svg" class="exit-footer-option-icon" alt="" >
            </div>
            <div class="dont_sell_info_content-container">
              <h1>Do Not Sell</h1>
              <p>RedVanLines connects you with movers in our network that can service your move. RedVanLines receives compensation from the movers for this service. By law this is considered “selling of information”. The essence of our service is to connect you with 3rd party service providers, if you do not wish to continue please click “EXIT SITE”. If you would like to receive multiple quotes click “I understand please continue”. For more information, please see our<label  class="inner_text_policy" @click="showPrivacyPolicy"> Privacy Policy.</label> Privacy Policy.</p>
              <button @click="removeDontSellMyInfo" class="dont_sell_continue">I UNDERSTAND ,PLEASE CONTINUE</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import truck from "@/assets/truck-no-blur.svg";
import quata from "@/assets/quata.png";
import router from "@/router";
import { ref } from "vue";
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";
export default {
  name: "HomeLayout",
  data() {
    const showTruck = ref(false);
    return {
      join_us_FullName:"",
      join_us_Business_Name:"",
      join_us_Email:"",
      join_us_Phone:"",
      join_us_hasError:false,
      showTruck,
      quata,
      truck,
      maxHeight: `${window.innerHeight}px`,
      maxWidth: `${window.innerWidth}px`,
    };
  },
  computed: {
    ...mapState(useStepperStore, ["showTruck"]),
  },
  methods: {
    bgColor() {
      if (router.currentRoute.value.fullPath === "/" || router.currentRoute.value.fullPath=="/size-selector" || router.currentRoute.value.fullPath=="/date-selector") {
        return `background-color: rgb(234,228,228)`;
      }
      if(router.currentRoute.value.fullPath =="/request-submitted"){
        return 'background-color: rgb(244,244,244)'
      }
      return `background-color: white`;
    },
    truckBgImage() {
      if (
        router.currentRoute.value.fullPath === "/size-selector" ||
        router.currentRoute.value.fullPath === "/date-selector" ||
        router.currentRoute.value.fullPath === "/phone-number-edit-validate" ||
        router.currentRoute.value.fullPath === "/enter-two-digit-number" ||
        router.currentRoute.value.fullPath =="/request-submitted"
      ) {
        return "display:none";
      }
      if (
        router.currentRoute.value.fullPath === "/email-form" ||
        router.currentRoute.value.fullPath === "/name-form" ||
        router.currentRoute.value.fullPath === "/phone-number-form" ||
        router.currentRoute.value.fullPath === "/movers-offline-warning" ||
        router.currentRoute.value.fullPath === "/calculating-progress-bar"
       ) {
        this.showTruck = false;
        return `background-image: url(${quata})`;
      }

      this.showTruck = true;
      if(router.currentRoute.value.fullPath==="/zip-to")
        return `background-image: url(${truck});height:calc(100vh - 443px);`;
      if(router.currentRoute.value.fullPath==="/") return `background-image: url(${truck})`
    },
    IsSize_Date(){
      return router.currentRoute.value.fullPath=="/size-selector" || router.currentRoute.value.fullPath=="/date-selector"
    },
    onFirstPage(){
      return router.currentRoute.value.fullPath=="/";
    },
    onZipto(){
      router.currentRoute.value.fullPath=="/zip-to" && 'height:calc(100vh - 443)'
    },
    showPrivacyPolicy(){
      document.getElementsByClassName("privacy_policiy-container")[0].parentElement.style.cssText="opacity:1;z-index:9999;";
      document.getElementsByClassName("privacy_policiy-container")[0].style.cssText="opacity:1;";
    },
    removePrivacyPolicy(){
      document.getElementsByClassName("privacy_policiy-container")[0].parentElement.removeAttribute("style");
      document.getElementsByClassName("privacy_policiy-container")[0].removeAttribute("style");
    },
    showTermOfUse(){
      document.getElementsByClassName("terms-container")[0].parentElement.style.cssText="opacity:1;z-index:9999;";
      document.getElementsByClassName("terms-container")[0].style.cssText="opacity:1;";
    },
    removeTermOfUse(){
      document.getElementsByClassName("terms-container")[0].parentElement.removeAttribute("style");
      document.getElementsByClassName("terms-container")[0].removeAttribute("style");
    },
    showJoinOurTeam(){
      document.getElementsByClassName("join_our_network-container")[0].parentElement.style.cssText="opacity:1;z-index:9999;";
      document.getElementsByClassName("join_our_network-container")[0].style.cssText="opacity:1;";
    },
    removeJoinOurTeam(){
      document.getElementsByClassName("join_our_network-container")[0].parentElement.removeAttribute("style");
      document.getElementsByClassName("join_our_network-container")[0].removeAttribute("style");
      // this.join_us_hasError=false;
    },
    showDontSellMyInfo(){
      document.getElementsByClassName("dont_sell_info-container")[0].parentElement.style.cssText="opacity:1;z-index:9999;";
      document.getElementsByClassName("dont_sell_info-container")[0].style.cssText="opacity:1;";
    }
    , removeDontSellMyInfo(){
      document.getElementsByClassName("dont_sell_info-container")[0].parentElement.removeAttribute("style");
      document.getElementsByClassName("dont_sell_info-container")[0].removeAttribute("style");
    },
    onSubmitJoinUs() {
      if (this.join_us_FullName.length==0 || this.join_us_Business_Name.length==0  || this.join_us_Email.length==0 ) {
        this.join_us_hasError = true;
        return;
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.join_us_Email)) {
        this.join_us_hasError=true;
        return;
      }
      else{
        this.removeJoinOurTeam();
      }
    }
  },
};
</script>

<style scoped>
.footer-grid {
  display: grid;
}
.join_us_error{
  color:red;
}
.not-footer {
  min-height: calc(100% - 280px);
  background: #fcc;
}
.join_our_network-container{
  position: relative;
  top:70px;
  border-radius: 5px;
  width: 80%;
  min-width: 350px;
  margin: 0px auto;
  padding: 10px 3px 20px;
  background-color: white;
}
.join_us_form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  color:black;
  padding-top: 10px;
}
.join_us_form-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
}
.dont_sell_continue{
  background-color: #ff9e01;
  color: white;
  border:none;
  padding:20px 0px 20px;
  margin: 30px 10px 0px;
  border-radius: 5px;
}

.input_join_us{
  border:none;
  border-bottom: 1px solid rgb(170,170,170);
  height: 50px;
  font-size: 18px;

}
.input_join_us:focus{
  border:none;
}
.inner_text_policy{
  cursor: pointer;
}
.minor_text_join_us{
  font-size: 14px;
}
.btn_join_us{
  background-color: #ff9e01;
  color:white;
  border:none;
  cursor: pointer;
  width: 160px;
  height: 65px;
  border-radius:3px;
  margin-top: 20px;
}

.exit-footer-option-icon{
  width: 20px;
  margin-right: 10px;
}
.footer_options-container{
  position: absolute;
  z-index: -1;
  opacity: 0;
  background-color: rgb(23,38,62,0.9);
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  transition: all 0.5s;

}
.privacy_policiy-container,.terms-container,.dont_sell_info-container{
  position: relative;
  top:70px;
  opacity: 0;
  width: 80vw;
  height: 70vh;
  background-color:white;
  /* transition: all 0.5s; */
  margin: 0% auto;
  color: #000;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap:10px;
  padding: 10px 5px 10px;
  z-index: -1;
  border-radius: 10px;
}
.dont_sell_info_content-container{
  color:black;
  display: flex;
  flex-direction: column;
  gap:20px;
}
.dont_sell_info_content-container h1{
  margin:auto;
  font-size: 18px;
}
.privacy_policiy-container>* ,.outer>*,.terms-container>*,.dont_sell_info-container>*,.scroll-container>*{
  font-size: 12px;
}

.main-text{
  margin-bottom: 10px;
}
.scroll-container{
  height: calc(100% - 40px);
  overflow: scroll;
}
.exit_footer_option-wrapper{
  width: 100%;
  height:30px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  background-color: white;
}
.outer{
  display: flex;
  flex-direction: column;
  gap:10px;
}
.outer ::-webkit-scrollbar-thumb{
  border-radius: 5px;
}
.outer ::-webkit-scrollbar{
  width: 5px;
}

.bgblur{
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0,0,0,0.88);
  z-index: 2;
}

.quata {
  width: 100vw;
  max-width: 500px;
  height: 175px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  margin: 0px auto 50px;
}
.moversNumbers{
  position: absolute;
  max-width: 500px;
  width:100vw;
  margin: 0px auto;
  z-index: 2;
  background-color:white;
  top:552px;
  height: 175px;
}
.truck {
  position: absolute;
  height: calc(100vh - 467px);
  width: 100vw;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.bg_img_blur{
  width: 100%;
  height: 100%;
}
.blurFpage{
  background-color:rgb(234,228,228,0.8);
}
.blurRestPages{
  background-color: rgb(255,255,255,0.8);
}
.home-layout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: calc(100vw);
  min-height: calc(100vh - 1px);
  margin: 0 auto;
}

.bgColor {
  background-color: #f8efef;
}

.layer {
  display: grid;
  position: relative;
}

.main {
  z-index: 2;
  padding: 0;
}

.home-layout.size-selector .footer,
.home-layout.size-selector .header,
.home-layout.date-selector .footer,
.home-layout.date-selector .header {
  display: none;
}

a {
  text-decoration: none;
  color: #000;
}

.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
  box-shadow: 0 1px 5px rgba(57, 63, 72, 0.3);
}

.footer {
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 5px;
  right: 5px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 6px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
}
.footer > *{
  width: 100%;
}

.logo {
  width: 120px;
  height: 50px;
}

.phone-icon {
  width: 25px;
  height: 25px;
  background-color: rgb(10, 91, 167);
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
}

.phone-link {
  color: rgb(10, 91, 167);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: underline;
  display: flex;
  align-items: center;
}

.border {
  border-right: 1px solid #000;
}



.link {
 
}
</style>
