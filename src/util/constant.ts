import { BlogArticle, CompanySublink, ServiceCardDetails, TestmonialInfo } from '../models/propTypes';

export const serviceCardArr: ServiceCardDetails[] = [
  {
    img: '/assets/images/service_card1.svg',
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    link: '/',
  },
  {
    img: '/assets/images/service_card2.svg',
    title: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    link: '/',
  },
  {
    img: '/assets/images/service_card3.svg',
    title: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    link: '/',
  },
];

export const connCustomer1Items1 = [
  {
    desc: 'We connect our customers with the best.',
  },
  {
    desc: 'Advisor success customer launch party.',
  },
  {
    desc: 'Business-to-consumer long tail.',
  },
];
export const connCustomer1Items2 = [
  {
    img: '/assets/icons/feather.svg',
    desc: 'We connect our customers with the best.',
    active: true,
  },
  {
    img: '/assets/icons/eye.svg',
    desc: 'Advisor success customer launch party.',
  },
  {
    img: '/assets/icons/sun.svg',
    desc: 'Business-to-consumer long tail.',
  },
];

export const testimonialItems: TestmonialInfo[] = [
  {
    content: 'Buyer buzz partner network disruptive non-disclosure agreement business',
    profile: {
      img: '/assets/images/partner1.png',
      position: 'Manager',
      company: 'Howarts',
      name: 'Albus Dumbledore',
    },
  },
  {
    content: 'Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.',
    profile: {
      img: '/assets/images/partner2.png',
      position: 'Manager',
      company: 'Slytherin',
      name: 'Severus Snape',
    },
  },
  {
    content: 'Release facebook responsive web design business model canvas seed money monetization.',
    profile: {
      img: '/assets/images/partner3.png',
      position: 'Team Leader',
      company: 'Gryffindor',
      name: 'Harry Potter',
    },
  },
];
export const blogPeakArticles: BlogArticle[] = [
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Pitch termsheet backing validation focus release.',
    thumbnail: '/assets/images/blog_article1.png',
    user: {
      img: '/assets/images/blog_user1.png',
      name: 'Chandler Bing',
    },
  },
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    thumbnail: '/assets/images/blog_article2.png',
    user: {
      img: '/assets/images/blog_user2.png',
      name: 'Rachel Green',
    },
  },
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    thumbnail: '/assets/images/blog_article3.png',
    user: {
      img: '/assets/images/blog_user3.png',
      name: 'Monica Geller',
    },
  },
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    thumbnail: '/assets/images/customer_conn1_1.png',
    user: {
      img: '/assets/images/blog_user1.png',
      name: 'Chandler Bing',
    },
  },
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    thumbnail: '/assets/images/blog_article5.png',
    user: {
      img: '/assets/images/blog_user2.png',
      name: 'Rachel Green',
    },
  },
  {
    category: 'Category',
    date: 'November 22, 2021',
    content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    thumbnail: '/assets/images/blog_article6.png',
    user: {
      img: '/assets/images/blog_user3.png',
      name: 'Monica Geller',
    },
  },
];
export const getCompanyValues = [
  {
    thumbnail: '/assets/images/blog_article3.png',
    label: 'We are commited',
    content:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
  },
  {
    thumbnail: '/assets/images/blog_article3.png',
    label: 'We are responsible',
    content:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
  },
  {
    thumbnail: '/assets/images/blog_article6.png',
    label: 'We aim for progress',
    content:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.',
  },
];
export const getCompanySubLinks: CompanySublink[] = [
  {
    title: 'Landings',
    subLink: [
      {
        label: 'Home',
        linkTo: '/',
      },
      {
        label: 'Products',
        linkTo: '/',
      },
      {
        label: 'Services',
        linkTo: '/',
      },
    ],
  },
  {
    title: 'Company',
    subLink: [
      {
        label: 'Home',
        linkTo: '/',
      },
      {
        label: 'Careers',
        linkTo: '/',
        tag: 'Hiring!',
      },
      {
        label: 'Services',
        linkTo: '/',
      },
    ],
  },
  {
    title: 'Resources',
    subLink: [
      {
        label: 'Blog',
        linkTo: '/',
      },
      {
        label: 'Products',
        linkTo: '/',
      },
      {
        label: 'Services',
        linkTo: '/',
      },
    ],
  },
];
export const getTeamMembers = [
  {
    name: 'Michael Scott',
    position: 'General Manager',
    display: '/assets/images/team_member_1.png',
  },
  {
    name: 'Dwight Schrute',
    position: 'General Manager',
    display: '/assets/images/team_member_2.png',
  },
  {
    name: 'Pam Beetsley',
    position: 'General Manager',
    display: '/assets/images/team_member_3.png',
  },
];
export const getTeamMembers2 = [
  {
    name: 'Michael Scott',
    position: 'General Manager',
    display: '/assets/images/team_member_1.png',
  },
  {
    name: 'Michael Scott',
    position: 'General Manager',
    display: '/assets/images/team_member_1.png',
  },
  {
    name: 'Michael Scott',
    position: 'General Manager',
    display: '/assets/images/team_member_1.png',
  },
];
export const getTeamMembers3 = [
  {
    name: 'Dwight Schrute',
    position: 'General Manager',
    display: '/assets/images/team_member_2.png',
  },
  {
    name: 'Pam Beetsley',
    position: 'General Manager',
    display: '/assets/images/team_member_3.png',
  },
  {
    name: 'Pam Beetsley',
    position: 'General Manager',
    display: '/assets/images/team_member_3.png',
  },
  {
    name: 'Pam Beetsley',
    position: 'General Manager',
    display: '/assets/images/team_member_3.png',
  },
];
export const getOurBlogContrast = [
  {
    label: 'We are',
    context: 'commited.',
    content:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ',
  },
  {
    label: 'We are',
    context: 'responsible.',
    content:
      'Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. ',
  },
  {
    label: 'We aim for',
    context: 'progress.',
    content:
      'Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. ',
  },
];
