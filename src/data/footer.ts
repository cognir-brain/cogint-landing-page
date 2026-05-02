import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "COGINT combines adaptive AI with autonomous response to detect and respond to threats in real time. It continuously learns to deliver proactive, up-to-date protection.",
    quickLinks: [
        {
            text: "Platform",
            url: "#features"
        },
        {
            text: "Threats",
            url: "#pricing"
        },
        {
            text: "Benefits",
            url: "#testimonials"
        },
        {
            text: "Demo",
            url: "#"
        }
    ],
    email: 'admin@cognir.ai',
    telephone: '+62 852-9960-2653',
    socials: {
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}