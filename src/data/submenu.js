export const submenu =[
    {title: 'Home', link: '/' },
    {title: 'About', link: '/about',
        submenu: [
            {
                title: "Company",
                path: '/about/company',
                cName: 'dropdown-link'
            },
            {
                title: "Career",
                path: '/career/career',
                cName: 'dropdown-link'
            },
        ]
    },
    {title: 'Products', link: '/products', submenu: [
        {
            title: "SynergyLabs Products"
        },
        {
            title: "SynATCC",
            path: '/products/SynATCC',
            cName: 'dropdown-link'
        },
        {
            title: "SynANPR",
            path: '/products/SynANPR',
            cName: 'dropdown-link'
        },
        {
            title: "SynVIDS",
            path: '/products/SynVIDS',
            cName: 'dropdown-link'
        },
        {
            title: "SynVASD",
            path: '/products/SynVASD',
            cName: 'dropdown-link'
        },

        {
            title: "SynFRS",
            path: '/SynFRS',
            cName: 'dropdown-link'
        },
        {
            title: "SynRLVD",
            path: '/products/SynRLVD',
            cName: 'dropdown-link'
        },
    ]},
    {title: 'Services', link: '/services', submenu: [
        {
            title: "Ready Made PODS",
            path: '/services/Ready Made PODS',
            cName: 'dropdown-link'
        },
        {
            title: "Custom Software Development Service",
            path: '/services/Custom Software Development Service',
            cName: 'dropdown-link'
        },
    ]},
    {title: 'Resources', link: '/resources'},
    {title: 'Contact Us', link: '/contact us'},
];