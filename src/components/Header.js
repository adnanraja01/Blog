import React from "react";

import img from "../assets/imgs/img1.jpg";

const Header = () => {
  return (
    <div className=" mt-[3rem]">
      <h2 className="text-[2.8rem] mb-[1rem] font-medium">Overview</h2>
      <div className="flex gap-[4rem] justify-center">
        <div>
          <p className="text-[1.6rem]">
            The fact that our designer goods do not represent wealth for
            positive utility is having more negative damage to society than we
            can fathom. This article is going to help detail why, and detail our
            solution in progress. <br />
            As individuals, once we cover our basic needs, status becomes an
            intrinsic motivator in the rest of our actions. Status comes in many
            forms. The healthiest / most enlightened cultures put the highest
            status in rewarding positive sum behavior. In global culture, luxury
            goods like a Gucci bag/belt have become widespread as top status
            symbols, reflecting vapid use of money as the highest form of
            status. It has become such common Christmas list item for broke
            young teenagers that the richest man on the planet at the time of
            this writing got his riches from selling these overpriced goods
            representing nothing more than the ability to waste money.
            Collectively this misrepresentation of true status (service to
            others) is attributing more damage to building a healthy positive
            culture than we can imagine.
          </p>
          <p className="text-[1.6rem] mt-[3rem]">
            Social media, our emergent global cultural production system, could
            be used collectively to unify humanity around bettering ourselves
            and others. Instead it is used to further extract youth through a
            false form of status as a service. Imagine a world where this
            wasteful spending was considered cancelable. One where we
            collectively take accountability for the capability to money to the
            positive growth of us as a species. Imagine a world where the
            designer things we wore showed off spending a lot of money to make a
            lot of positive impact. If the world you imagined only went as far
            as to redistribute the wealth of designer wear, try imagining the
            deeper cultural effects this new alignment would have.{" "}
          </p>
        </div>
        <img className="w-auto h-[40rem] rounded-lg" src={img} alt="redefine" />
      </div>
    </div>
  );
};

export default Header;
