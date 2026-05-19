import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700 text-neutral-400 flex flex-col items-center justify-center gap-4 py-6 px-6 relative z-50">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="flex gap-2 text-sm">
        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
      </div>


    <div className="flex items-center gap-3">
  {mySocials?.map((social, index) => (
    <a
      href={social.href}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition"
    >
      <img
        src={social.icon}
        alt={social.name}
        className="w-5 h-5 object-contain"
      />
    </a>
  ))}

  {/* LinkedIn ID */}
</div>


      <p className="text-xs sm:text-sm text-neutral-500">
        © 2025 Ali. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
