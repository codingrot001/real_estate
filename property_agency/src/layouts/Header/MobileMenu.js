import React from "react";
import CloseToggle from "./CloseToggle";
import Logo from "./Logo";
import MobileLink from "./MobileLink";
import MobileLogin from "./MobileLogin";

function MobileMenu({ onClick }) {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <CloseToggle onClick={onClick} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <MobileLink pageName="Home" link="/" />
              <MobileLink pageName="Properties" link="/properties" />
              <MobileLink pageName="About us" link="/about" />
              <MobileLink pageName="Resources" link="/resources" />
              <MobileLink pageName="Contact Us" link="/contact" />
              <MobileLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
