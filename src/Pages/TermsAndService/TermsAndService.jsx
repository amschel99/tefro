import React from "react";
import "./TermsAndService.scss";

function TermsAndService(props) {
  return (
    <>
      <div className="tos">
        <div className="tos__header padding" id="particles">
          <h1 className="tos__header__heading">Terms of Service</h1>
        </div>
        <div className="tos__body padding">
          <p className="document">
            Welcome to Tefro's Terms of Service. Please read these terms carefully before using our services.
            <br /> <br />
            <span className="bold-head">1. ACCEPTANCE OF TERMS</span><br /> <br />
            1.1 By accessing or using Tefro's website, products, or services, you agree to comply with and be bound by these Terms of Service.
            <br /> <br />
            <span className="bold-head">2. SERVICES DESCRIPTION</span><br /> <br />
            2.1 Tefro provides software and design services, including web development, UI/UX design, blockchain development, AI/ML solutions, Discord bot creation, and custom software development.
            <br /> <br />
            <span className="bold-head">3. USER CONDUCT</span><br /> <br />
            3.1 Users are responsible for their use of Tefro's services. Unlawful or prohibited activities, including but not limited to hacking, data breaches, or unauthorized access, are strictly forbidden.
            <br /> <br />
            <span className="bold-head">4. INTELLECTUAL PROPERTY</span><br /> <br />
            4.1 All intellectual property rights related to Tefro's services, including but not limited to software, designs, and content, are owned by Tefro. Users may not reproduce, distribute, or create derivative works without explicit permission.
            <br /> <br />
            <span className="bold-head">5. CONFIDENTIALITY</span><br /> <br />
            5.1 Tefro acknowledges the confidential nature of certain information provided by users. Tefro agrees not to disclose or use such information for any purpose other than the provision of services.
            <br /> <br />
            <span className="bold-head">6. PAYMENTS AND FEES</span><br /> <br />
            6.1 Payment terms for Tefro services are outlined in individual agreements. Users are responsible for all fees associated with the services.
            <br /> <br />
            <span className="bold-head">7. DISCLAIMER OF WARRANTIES</span><br /> <br />
            7.1 Tefro services are provided "as is," without warranties of any kind, expressed or implied. Tefro disclaims all warranties, including but not limited to merchantability and fitness for a particular purpose.
            <br /> <br />
            <span className="bold-head">8. LIMITATION OF LIABILITY</span><br /> <br />
            8.1 Tefro shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use Tefro services.
            <br /> <br />
            <span className="bold-head">9. TERMINATION</span><br /> <br />
            9.1 Tefro reserves the right to terminate services for any user violating these terms. Users may terminate their account at any time.
            <br /> <br />
            <span className="bold-head">10. GOVERNING LAW</span><br /> <br />
            10.1 These Terms of Service are governed by and construed in accordance with the laws of United States Of America and the state of Delaware.
            <br /> <br />
            <span className="bold-head">11. CHANGES TO TERMS</span><br /> <br />
            11.1 Tefro reserves the right to modify these Terms of Service at any time. Users are responsible for regularly reviewing the terms.
            <br /> <br />
            <span className="bold-head">12. CONTACT INFORMATION</span><br /> <br />
            12.1 For questions or concerns regarding these Terms of Service, please contact <a style={{color:"#00f2b6"}} href="mailto:info@tefro.tech">info@tefro.tech</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndService;
