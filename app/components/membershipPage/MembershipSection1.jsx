import React from "react";

const MembershipSection1 = () => {
  return (
    <div className="w-full lg:h-screen h-[150vh] bg-yellow flex lg:flex-row flex-col ">
      <div className="lg:w-1/2 w-full lg:h-full h-[35%] flex justify-center items-center">
        <div className="lg:w-[29rem] w-[18rem] lg:h-[27rem] h-[18rem] bg-black rounded-xl">
          <div className="w-full h-full bg-pink- rotate-[-20deg] rounded-xl border-white border-4 bg-[url('/images/event4.jpg')] bg-cover"></div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex justify-center items-center">
        <div className="w-full lg:h-[80%] h-full ">
          <div className="w-full lg:h-[20%] h-[30%] flex lg:justify-start  justify-center items-center ">
            <p className="text-5xl font-semibold text-center">Membership</p>
          </div>
          <div className="flex w-full  h-[80%]">
            <div className="w-[0.8%] h-full bg-gray-400 rounded-xl lg:block hidden"></div>
            <div className="lg:w-[95%] w-full h-full  flex flex-col lg:justify-start lg:items-start justify-center items-center gap-y-5 rounded-xl lg:px-10 px-4">
              <p className="lg:text-lg text-lg lg:text-left text-center ">
                Unlock a world of opportunities by becoming a valued member of
                our Federal Civil Service Club! Whether you&apos;re a seasoned
                professional or just starting your career in the civil service
                sector, our membership offers a wealth of benefits tailored to
                meet your needs. <br /> <br /> From exclusive access to networking events and
                professional development workshops to discounts on facilities,
                bar features, and car park access, joining our club opens the
                door to a supportive community dedicated to your success.
                Explore our membership options below and take the first step
                toward enhancing your career and connecting with fellow civil
                service professionals.
              </p>
              {/* <p className="text-lg">Learn More</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection1;
