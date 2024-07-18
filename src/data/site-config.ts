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
        {
            text: 'About Me',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
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
        actions: [
            {
                text: 'More about me',
                href: '/about'
            },
            {
                text: 'Resume',
                href: 'https://drive.google.com/file/d/1gxcJAzPrD4m2z5Oi8SP0ZBxd2I0l_VpF/view?usp=drive_link'
            },
            {
                text: 'Github',
                href: 'https://github.com/summerlimes'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
