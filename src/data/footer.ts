import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "COGINT combines adaptive cognitive AI with autonomous analysis to detect and neutralize manipulative narratives in real-time. It continuously learns context to deliver proactive protection against cognitive warfare.",
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