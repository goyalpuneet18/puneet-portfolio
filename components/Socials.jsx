import Link from "next/link";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const socials = [
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/"
    },
    {
        icon: <FaTwitter />,
        path: "https://www.twitter.com/"
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/"
    }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
};

export default Socials;