import React from 'react'
import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const MembershipSection2 = () => {
  return (
    <div className="w-full lg:h-[90vh] h-[130vh] bg-orange">
    <div className="w-full lg:h-[20%] h-[10%] bg-red flex flex-col justify-center items-center gap-y-3 px-6 ">
      <p className={`lg:text-5xl text-4xl font-bold ${playFair.className}`}>Rules and Regulation</p>
      <p className={`text-lg font-bold ${playFair.className} text-center`}>Where Excellence and Elegance Unite to Elevate Your Event</p>

    </div>
    <div className="w-full h-[80%] bg-green text-lg flex flex-col gap-y-10 lg:px-48 px-8 lg:text-left text-center pt-10">
      <li>
        The Central Public Service Board was created sequel to the
        acceptance of the Nigerianisation Commission Report of 1st January,
        1949. The main function of this board was to interview and recommend
        to the Governor-General, candidates from within and outside the
        service for appointment or promotion.
      </li>

      <li>
        The Board was made up of a Civil Service Commissioner, the Director
        of Education or his representative and one official representative
        of each of the Regional Boards. It was however, empowered to co-opt
        two additional members, if need be.{" "}
      </li>

      <li>
        A caretaker Central Public Service Commission was constituted on 3rd
        May, 1952 under the provision of section 169 of the Nigerian
        Order-in-Council (Constitution) of 1951. This was a transitory body
        to advice the Governor-General on issues affecting the Public
        Service at his request.{" "}
      </li>

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
  )
}

export default MembershipSection2