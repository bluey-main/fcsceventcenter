import React from "react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const MembershipSection2 = () => {
  return (
    <div className="w-full lg:min-h-[95vh] h-[130vh] bg-orange mb-40  pb-24">
      <div className="w-full lg:h-[20%] h-[10%] bg-red flex flex-col justify-center items-center gap-y-3 px-6 ">
        <p
          className={`lg:text-5xl text-4xl text-center font-bold ${playFair.className}`}
        >
          Rules and Regulation
        </p>
        <p className={`text-lg font-bold ${playFair.className} text-center`}>
          Where Excellence and Elegance Unite to Elevate Your Event
        </p>
      </div>
      <div className="w-full h-[80%] bg-green text-lg flex flex-col gap-y-10 lg:px-48 px-8 lg:text-left text-center pt-10">
        <li>
          Membership of the club shall be opened to all federal civil, public
          servants, paramilitary and the armed forces.
        </li>
        <li>
          All candidates for membership must be introduced by two active and
          financially capable members who has personally known the candidate for
          at least two years.
        </li>
        <li>
          No application for membership shall be denied on the grounds of
          culture, religion, class, sex or state of origin.
        </li>
        <li>
          Membership of the club shall be opened to all federal civil, public
          servants, paramilitary and the armed forces.
        </li>
        <p className="text-3xl font-bold">Admission Fees</p>

        <li>
          The admission fee for all categories of membership shall be a thousand
          naira (#1000) only. It shall be legitimate for the club to demand
          donation and levies in order to raise funds to support the club.
        </li>

        <li>
          Every member shall pay the annual subscription on or before 31st march
          of each financial year.
        </li>
        {/* <li>
          <b>Promoting Professional Development:</b> Providing opportunities for
          members to enhance their skills, knowledge, and competencies through
          workshops, training sessions, and educational resources.
        </li>

        <li>
          <b>Facilitating Networking and Collaboration:</b> Creating a platform
          for civil service employees to connect, share experiences, and
          collaborate on projects and initiatives across different departments
          and agencies.
        </li>

        <li>
          <b>Advocating for Members:</b> Advocating for the interests, rights,
          and well-being of civil service professionals, including issues
          related to working conditions, benefits, and career advancement.
        </li>

        <li>
          <b>Fostering Camaraderie and Community:</b> Cultivating a sense of
          belonging, camaraderie, and support among members through social
          activities, events, and recreational opportunities.
        </li>

        <li>
          <b>Supporting Career Growth and Advancement:</b> Providing resources,
          mentorship, and guidance to help members advance their careers and
          achieve their professional goals within the federal government.
        </li>

        <li>
          <b>Promoting Excellence and Innovation:</b> Encouraging excellence,
          innovation, and continuous improvement within the federal civil
          service sector through recognition programs, best practice sharing,
          and collaborative initiatives.
        </li>

        <li>
         <b>Enhancing Organizational Effectiveness:</b> Supporting the overall
          effectiveness and success of the federal government by promoting a
          skilled, motivated, and engaged workforce and fostering a culture of
          excellence and accountability.
        </li> */}

        {/* <p>
        The Federal Public Service Commission was consequently established
        on the 1st of April, 1954 through a Provision under section 174 of
        Nigerian Order-in-Council (Constitution) of 1954. The order provided
        that the Governor-General might (either generally or specially and
        in whatever manner he thought fit) refer to the Commission,
      </p>

      <p>
        the appointment of any person to an Office in the Public Service of
        the Federation, or dismissal or disciplinary control of Officers in
        the Public Service of Federation, or any other matter which in his
        opinion, affected the Public Service of the Federation.{" "}
      </p>

      <p>
        This in essence gave the Commission the authority to cover all posts
        (established or unestablished) for which funds were provided in the
        Federal Annual Estimates. The Commission at this stage was only an
        advisory body whose key mandate was advising the Governor-General.{" "}
      </p>

      <p>
        The position changed in 1956 when an amendment to the enabling
        legislation gave the Commission the power to appoint, promote,
        transfer, second, dismiss or otherwise discipline Officers belonging
        to certain grades. The name was later changed from Federal Public
        Service Commission to Federal ssion.
      </p> */}
      </div>
    </div>
  );
};

export default MembershipSection2;
