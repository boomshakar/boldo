export type Inverted = {
  inverted: boolean;
};

export type ButtonType = {
  type: 'primary' | 'pry_green' | 'pry_white' | 'secondary' | 'sec_white' | 'transparent';
  label: string;
  hmtype?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
};

export type ServiceCardDetails = {
  img: string;
  title: string;
  description: string;
  link: string;
};

type PartnerProfile = {
  img: string;
  position?: string;
  company?: string;
  name: string;
};

export type TestmonialInfo = {
  content: string;
  profile: PartnerProfile;
};

export type BlogArticle = {
  category: string;
  content: string;
  date: string;
  thumbnail: string;
  user: PartnerProfile;
};

type FooterLink = {
  label: string;
  linkTo: string;
  tag?: string;
};
export type CompanySublink = {
  title: string;
  subLink: FooterLink[];
};
