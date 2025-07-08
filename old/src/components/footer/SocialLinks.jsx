import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const linkStyles =
  "flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red hover:text-white transition-all duration-300";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dishant-patel/", // Replace with your actual Facebook page URL
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/dspatel204", // Replace with your actual Twitter profile URL
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rambo_family_gym_/", // Replace with your actual Pinterest profile URL
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rembo_family_gym_", // Replace with your actual YouTube channel URL
    icon: <FaFacebookF />,
  },
];

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {socialMediaLinks.map(({ name, url, icon }) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
            aria-label={name}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
