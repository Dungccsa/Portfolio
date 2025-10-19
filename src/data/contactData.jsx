const contactData = {
    title: "Contact Me",
    subtitle: "Reach out via form, social media, or support platforms.",

    tabs: [
        {
            label: "Form",
            value: "form",
            icon: "bx bx-envelope",
        },
        {
            label: "Social",
            value: "social",
            icon: "bx bx-link",
        },
        {
            label: "Support Me",
            value: "support",
            icon: "bx bx-heart",
        },
    ],

    socials: [
        {
            label: "GitHub",
            href: "https://github.com/hizkia178",
            icon: "bx bxl-github",
            description: "Explore my code & projects",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/hizkia-siahaan-59b003280/",
            icon: "bx bxl-linkedin-square",
            description: "Let’s connect professionally",
        },
        {
            label: "Instagram",
            href: "#",
            icon: "bx bxl-instagram",
            description: "My visual journal & life updates",
        },
        {
            label: "Twitter",
            href: "#",
            icon: "bx bxl-twitter",
            description: "Random thoughts & dev tweets",
        },
    ],

    supportPlatforms: [
        {
            label: "QRIS",
            type: "image",
            imageSrc: "/assets/qris.jpg",
            alt: "Scan to support via QRIS",
        }
    ],

};

export default contactData;
