import {
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
        <div>
          <FooterTitle title="About Us" className="text-white text-lg font-semibold" />
          <FooterDivider className="my-4 border-gray-600" />
          <FooterLinkGroup col className="space-y-2">
            <FooterLink href="#" className="hover:text-gray-400">Our Story</FooterLink>
            <FooterLink href="#" className="hover:text-gray-400">Products</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="Follow Us" className="text-white text-lg font-semibold" />
          <FooterDivider className="my-4 border-gray-600" />
          <FooterLinkGroup col className="space-y-2">
            <FooterLink href="#" className="hover:text-gray-400">Facebook</FooterLink>
            <FooterLink href="#" className="hover:text-gray-400">Instagram</FooterLink>
            <FooterLink href="#" className="hover:text-gray-400">WhatsApp</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterTitle title="Legal" className="text-white text-lg font-semibold" />
          <FooterDivider className="my-4 border-gray-600" />
          <FooterLinkGroup col className="space-y-2">
            <FooterLink href="#" className="hover:text-gray-400">Privacy Policy</FooterLink>
            <FooterLink href="#" className="hover:text-gray-400">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 FrozenFruito. All rights reserved.</p>
          <p className="mt-2">Developed by LegionCode IT Solutions (Pvt) Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
