import React from "react";
import ImgHeading from "../components/Partials/ImgHeading";
import Logo from "../assets/logo.png";

const PrivacyPolicyPage = () => {
  return (
    <section
      id="privacyPolicy"
      className="flex h-full w-full flex-col items-center justify-center bg-[#FBFBFB]  "
    >
      <ImgHeading text="Privacy" blueText="Policy" />

      <div className="my-14 flex w-full flex-col px-10 md:px-9 lg:max-w-[80rem]">
        <div className="flex h-full w-full flex-col items-center lg:flex-row">
          <div className="w-full lg:w-[60%]">
            <p className="flex flex-col gap-8 text-base font-medium leading-[1.8rem]">
              Welcome to QuickFinz! <br />
              QuickFinz Marketing and Consulting Private Limited operate the
              online platform www.quickfinz.com and mobile application
              (collectively referred to as the "Website") and recognize the
              importance of safeguarding the privacy of its users. The company
              is committed to maintaining the confidentiality, integrity, and
              security of all user information. This Privacy Policy outlines how
              QuickFinz collects, stores, handles, and transfers certain
              information received from users on an as-needed basis. The policy
              applies to all visitors to the Website, as well as current and
              future customers.
            </p>
          </div>

          <div className="ml-0 mt-8 hidden w-full lg:mt-0 lg:block lg:w-[40%] xl:ml-16">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <p className="mt-8 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
          By using or continuing to use the Website, you agree to the practices
          described in this Privacy Policy, including the use of your
          information (including sensitive personal information as defined under
          the Information Technology Act 2000, applicable rules, notification,
          etc.) in accordance with this policy, which may be amended by
          QuickFinz at its sole discretion from time to time.
        </p>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Personal Information We Collect
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            Your Personal data/information will be collected and stored at
            servers located in India by QuickFinz Marketing and Consulting
            Private Limited along with its parent company (including its,
            representatives, affiliates, and its business partners).
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Use of Your Information
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            When you use QuickFinz’s products or services, register for an
            account, or visit its website pages, your information is collected
            by the company. During registration, you will be asked to provide
            personal details such as your first and last name, email address,
            date of birth, state and city of residence, and gender. Once you
            sign in, you are no longer anonymous to QuickFinz. In addition, you
            will be prompted to provide a contact number during registration,
            and may receive SMS or notifications about the company's services on
            your wireless device. By registering, you authorize QuickFinz, its
            business partners, and affiliates to send texts, email alerts, and
            promotional messages to you, including login details and service
            requirements, even if you have registered under DND, DNC, or NCPR
            services. This authorization will remain valid until your account is
            deactivated or you withdraw your consent. QuickFinz may also access
            your mobile device's camera with your consent to facilitate its
            services and improve website access, in compliance with applicable
            laws.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Purpose for collecting information:
          </h3>

          <ul className="my-4 ml-7 flex list-image-[url('/src/assets/hand.svg')] flex-col gap-4 text-[15px] font-medium leading-[1.8rem]">
            <li>
              Assist us or our business partners in facilitating and delivering
              services to you, process payments and your applications,
              communicate with you about products, services and promotional
              offers.
            </li>
            <li>
              Send you information about special promotions or offers. We might
              also tell you about new features or products/services. These might
              be our own offers or products/services, or third-party offers or
              products/services with whom QuickFinz has a tie-up.
            </li>
            <li>
              Administer or otherwise carry out our obligations in relation to
              any agreement with our business partners. Respond to queries, or
              requests submitted by you, and resolve your
              grievances/issues/problems with any services supplied to you.
            </li>
            <li>
              Use your information for internal analysis and to provide you with
              location-based services, such as advertising, search results, and
              other personalized content.
            </li>
            <li>
              Send you notices, communications, and recommend services that
              might be of interest to you update our records and generally
              maintain your accounts with us, display content and customer
              reviews.
            </li>
            <li>
              When you provide your contact details, we will use it to send you
              general notices or important news about your account, request your
              feedback or opinions and provide updates on special deals and
              offers that might interest you.
            </li>
            <li>
              Use this information to improve our platform, prevent or detect
              fraud or abuses of our website and enable third parties to carry
              out technical, logistical or other functions on our behalf. We may
              combine information we get from you with information about you we
              get from third parties.
            </li>
            <li>
              As otherwise provided in this Privacy Policy and in compliance
              with the applicable laws.
            </li>
            <li>
              File storage permissions on android/iOS and Website for uploading
              customer documents are obtained for the purpose of processing
              customer applications by our Partners.
            </li>
            <li>
              QuickFinz Website may base on your consent also access your mobile
              device including camera for the purpose of service facilitation,
              ease of access and logging in to our website for the various
              services opted by you.
            </li>
          </ul>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            Some features of this Website or our Services will require you to
            furnish your personally identifiable information as provided by you
            under your account section on our Website.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">Collection of Cookies</h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            Whenever you interact with us, certain types of information are
            received and stored. For instance, we use "cookies" and obtain
            particular information when your web browser accesses the Website,
            as well as other content and advertisements served by or on behalf
            of the Website on different websites. A cookie is a piece of data
            that is stored on the user's computer and associated with
            information about the user. We may use both session ID cookies and
            persistent cookies. Session ID cookies are terminated and erased
            once you close your browser or log out, while persistent cookies are
            small text files stored on your computer's hard drive for an
            extended period. QuickFinz may use session ID cookies to track user
            preferences while visiting the website and to minimize load times
            and save on server processing. Most browsers provide information on
            how to prevent new cookies from being accepted, how to receive
            notifications when you receive a new cookie, and how to disable
            cookies entirely. Additionally, you can disable or delete similar
            data used by browser add-ons, such as Flash cookies, by adjusting
            the add-on's settings or visiting the manufacturer's website.
            However, since cookies enable you to take advantage of essential
            features on the Website, we recommend leaving them turned on.
            Blocking or rejecting our cookies could prevent you from using any
            Website products and services that require you to sign in.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Discloser to Third Parties
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            <span>
              QuickFinz is committed to protecting your information and will not
              sell, rent or disclose it for commercial purposes to anyone in a
              manner that contradicts the commitments made in this Privacy
              Policy, unless otherwise specified herein. However, we may share
              your information with third parties such as our group company,
              employees, agents, business partners (Banks/NBFCs), CICs, Payment
              Aggregator and Service Providers with whom we have a partnership,
              and any of our affiliates, for the purposes outlined in this
              Privacy Policy. These third parties are required to maintain the
              same level of confidentiality and care with respect to your
              information as QuickFinz and are bound by contractual terms,
              applicable laws, and our instructions, subject to your consent.
            </span>
            <span>
              For the purposes of this paragraph, "Affiliate" refers to any
              other person that directly or indirectly controls or is controlled
              by, or is under common control with, such person. The term
              "control" includes the power to direct or cause the direction of
              management or policies of a person, whether through the ownership
              of securities, partnership or other ownership interests, by
              contract or otherwise. The term "Person" encompasses any natural
              person, corporation, partnership, limited liability company,
              trust, unincorporated association, or any other entity.
            </span>
            <span>
              In addition, QuickFinz may share or transfer your personally
              identifiable information to any successor-in-interest as a result
              of a sale of any part of the business or in connection with the
              merger, reorganization, or consolidation of QuickFinz with another
              entity, provided that it is not the surviving entity.
            </span>
            <span>
              We limit the collection and use of your personal information. We
              may make anonymous or aggregate personal information and disclose
              such data only in a non-personally identifiable manner. Such
              information does not identify you individually. Access to your
              Account information and any other personal identifiably
              information is strictly restricted and used only in accordance
              with specific internal procedures, and for the purposes set out in
              this Privacy Policy, in order to operate, develop or improve our
              services. We may use third party service providers to enable you
              to provide with our services and we require such third parties to
              maintain the confidentiality of the information we provide to
              them, under our contracts with them.
            </span>
            <span>
              We may also share your information, without obtaining your prior
              written consent, with government agencies mandated under the law
              to obtain information for the purpose of verification of identity,
              or for prevention, detection, investigation including cyber
              incidents, prosecution, and punishment of offences, or where
              disclosure is necessary for compliance of a legal obligation. You
              agree and consent for the Website to disclose your information, if
              so required, under applicable law.
            </span>
            <span>
              There are number of products/services such as loans, credit cards,
              mutual funds, offered by third Parties on the Website, such as
              lenders, banks, credit card issuers. If you choose to apply for
              these separate products or services, disclose information to these
              providers, then their use of your information is governed by their
              privacy policies in addition to the Privacy Policy of the Website.
              Quick Finz.com is not responsible for their privacy policies. We
              encourage you to visit and read about the privacy notices and
              procedures adopted by these third parties/providers, when you
              apply for their products or services. QuickFinz holds no
              responsibility for the content of the privacy policies or terms of
              use etc. of these third-party websites
            </span>

            <span>
              If you are investing in our mutual fund product through our Mobile
              App, then you agree to the following disclosure: “QuickFinz's use
              and transfer to any other app of information received from Google
              APIs will adhere to Google API Services User Data Policy,
              including the Limited Use requirements. Quick Finz app helps in
              tracking the performance of mutual fund investments that may have
              been done via multiple channels/platforms over time, which can be
              otherwise cumbersome for consumers. Here, the basic consumer need
              is to be able to see and monitor all mutual fund investments
              together at one place.
            </span>
            <span>
              To be able to provide this, post customer consent, the QuickFinz
              Website reads only the Mutual Fund CAS email statement (that
              includes details of all MF investments) received by the
              investor/customer every month and provides customers with a
              complete and comprehensive mutual fund dashboard on a single
              screen. This not only offers an enhanced consumer experience but
              helps them check, track and compare all active mutual fund
              investments together at one place, enabling informed financial
              decisions.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">Data Storage</h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            <span>
              QuickFinz stores your personal information only at servers located
              in India. QuickFinz may retain your information including personal
              information as the same may be required to provide you the
              services for the product that you have inquired or opted and for
              as long as it is required for the above purpose or mandated in our
              arrangements with our business partners. Retention of information
              is done as per this policy subject to compliance with applicable
              law/regulatory requirements in India.
            </span>
            <span>
              In following situation, QuickFinz may retain your information for
              an extended period (i) in case of requirement of any
              investigations under law or as part of any requirements before
              courts/tribunals/forums/commissions etc; (ii) to enhance/improve
              our products/services and (iii) as required under contractual
              arrangements with business partners.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">Log Files</h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            Like most standard websites, we use log files. This information may
            include internet protocol (IP) addresses, browser type, internet
            service provider (ISP), referring/exit pages, platform type,
            date/time stamp, and number of clicks to analyze trends, administer
            the site, track user's movement in the aggregate, and gather broad
            demographic information for aggregate use. We may combine this
            automatically collected log information with other information we
            collect about you. We do this to improve the services we offer to
            you, to improve marketing, analytics or site functionality.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Your Control Over Your Personal Information That’s Collected and
            Used Online
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            <span>
              It's important to note that the information we use about you helps
              us provide you with products, services and experiences that
              benefit you. You have the ability to control how your non-personal
              information is collected and used online.
            </span>

            <span>
              You also have the ability to choose what personal information,
              including what sensitive personal information (i.e. your financial
              information) you provide to us, restrict disclosure of your
              information to third parties, however, please note that this may
              affect your seamless access to such product/ service as opted by
              you. However, if you choose not to provide all of the mandatory
              information and data that is requested of you, we may not be able
              to provide you with the Services that you have subscribed to.
            </span>

            <span>
              We believe you should be able to choose what kinds of information
              you receive via email/SMS. If you do not want to receive marketing
              materials by email/SMS, just indicate your preference on the
              contact information for your account or the 'opt-out' or
              unsubscribe link provided in our marketing emails and you can also
              write to us. Please note that it may take some days to process
              your request. Please keep in mind that we will continue to notify
              you by email /SMS/via phone calls regarding your services with us,
              even after you have opted out.
            </span>

            <span>
              You can review the information that you have provided to us by
              logging into your account at the Website and correct or amend any
              personal information or sensitive personal data or information to
              ensure that the information or data you provided us is accurate
              and/or not deficient. QuickFinz is not responsible for the
              authenticity of any personal information or sensitive personal
              data or information supplied to it by you or any third party.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">Revocation of Consent</h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            <span>
              If you feel that we do not require the retention of your personal
              information or if you ask us to delete or remove your personal
              data where you think we do not have the right to process it we
              shall destroy or delete such Customer information. You may, at any
              time while availing of our Services or otherwise, withdraw the
              consent given earlier to us to collect and use your sensitive
              personal data or information by writing to us. However, in the
              case of you withdrawing such consent, QuickFinz shall have the
              option to stop providing you the Services for which the
              information was sought. You will not be eligible for a refund of
              any fees paid for any service in such event and you agree that the
              Website shall not be liable to you for the same in any manner
              whatsoever.
            </span>
            <span>
              The data may be required to be retained for the purpose of Product
              servicing, repayment etc. by us and/or our Partners and also as
              required under any applicable laws. We assure that such retained
              information shall be protected following all cyber security norms.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Third Party Advertising
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            <span>
              We may use third-party advertising companies and/or ad agencies to
              serve ads when you visit our website. These companies may use
              information (excluding your name, address, email address, or
              telephone number) about your visits to this Website in order to
              provide advertisements on this Website and other third-party
              websites about goods and services that may be of interest to you.
            </span>
            <span>
              We use third-party service providers to serve ads on our behalf
              across the internet and sometimes on this Website. They may
              collect anonymous information about your visits to Website, and
              your interaction with our products and services. They may also use
              information about your visits to this and other Websites for
              targeted advertisements for goods and services. This anonymous
              information is collected through the use of a pixel tag, which is
              industry standard technology used by most major Websites. No
              personally identifiable information is collected or used in this
              process.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Links to Other Websites:
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            There might be other sites relating to our Banking and Non-Banking
            partners linked to QuickFinz and other affiliates. Personal
            information that you provide to those sites is not our property or
            responsibility. These affiliated sites may have different privacy
            practices and we encourage you to read their privacy policies of
            these websites when you visit them. QuickFinz holds no
            responsibility for the content of the privacy policies or terms of
            use etc. of these third-party websites.
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <h3 className="text-lg font-bold text-blue">
            Changes in this Privacy Policy
          </h3>

          <p className="my-2 flex flex-col gap-8 text-[15px] font-medium leading-[1.8rem]">
            At its sole discretion, QuickFinz reserves the right to modify this
            policy periodically. We may revise this privacy policy to
            incorporate changes in our information practices, and we recommend
            that you review it regularly.
            <span>
              For any types of disputes, please mail to Grievances Addressee
              Officer:
            </span>
            <span>
              M Jasmin,
              <span className="text-blue"> wecare@quickfinz.com</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
