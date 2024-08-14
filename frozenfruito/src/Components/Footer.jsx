import {
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

export default function Footer() {
  return (
    <div className="w-full bg-green-600 ">
      {/* <div className="grid w-full justify-between sm:flex sm:justify-center md:flex md:grid-cols-1">
        <div className="grid grid-cols-2 gap-10 sm:mt-4 sm:grid-cols-3 sm:gap-20 text-white">
          <div className=" gap-10">
            <FooterTitle title="about" />
            <FooterDivider />
            <FooterLinkGroup col>
              <FooterLink href="#">story</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup col>
              <FooterLink href="#">Product</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Follow us" />
            <FooterDivider />
            <FooterLinkGroup col>
              <FooterLink href="#">Facebook</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup col>
              <FooterLink href="#">Instagram</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup col>
              <FooterLink href="#">whatsapp</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup col>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div> */}

      <footer className="bg-green-700 text-white text-center py-8">
        <p>
          &copy; Copyright FrozenFruito 2024 . All rights reserved. Develop by
          LegionCode IT Solutions (pvt) Ltd.
        </p>
      </footer>
    </div>
  );
}
