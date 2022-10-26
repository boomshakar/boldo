export type Inverted = {
  inverted: boolean;
};

export type ButtonType = {
  type: 'primary' | 'pry_green' | 'pry_white' | 'secondary' | 'sec_white';
  label: string;
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
  position: string;
  company: string;
  name: string;
};
export type TestmonialInfo = {
  content: string;
  profile: PartnerProfile;
};
