export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Fahim Shahreer',
    subtitle: 'Full Stack Engineer',
    description: 'Personal',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'About Me',
        //     href: '/about'
        // },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    socialLinks: [
        {
            text: 'Resume',
            href: 'https://drive.google.com/file/d/1gxcJAzPrD4m2z5Oi8SP0ZBxd2I0l_VpF/view?usp=drive_link'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/fahim-shahreer/'
        },
        {
            text: 'Github',
            href: 'https://github.com/summerlimes'
        }
    ],
    hero: {
        title: 'Hi there. I am Fahim. Welcome to my corner of the web!',
        text: "My coding journey began back in 2015, tinkering with jQuery and WordPress to build websites for local businesses as a side gig. Since then, I've immersed myself in the exciting realms of web development, full-stack engineering, computational biology, and machine learning. From building comprehensive digital solutions for small businesses to orchestrating data intensive pipelines, my journey has been a thrilling blend of innovation and problem-solving. These days, my focus is on learning more about large-scale systems and playing with LLMs on my local machine to build workflows and LLM-enabled applications.<br><br>When I'm not coding, you'll find me bouldering, playing chess, or practicing Brazilian jiu-jitsu.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
