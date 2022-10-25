export type Inverted = {
  inverted: boolean;
}

export type ButtonType = {
  type: 'primary' | 'pry_green' | 'pry_white' | 'secondary' | 'sec_white';
  label: string;
  onClick?: ()=>void
}