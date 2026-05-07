// src/lib/types.ts

export interface NavChild {
  label: string;
  href: string;
  accent?: boolean;
  indent?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  badge?: string;
  children?: NavChild[];
}

export interface SimpleLink {
  id?: string;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  [section: string]: SimpleLink[];
}

export interface FooterLinks {
  proyecto:  SimpleLink[];
  mundiales: SimpleLink[];
  comunidad: SimpleLink[];
  legal:     SimpleLink[];
}

export interface SocialLink {
  id:        string;
  label:     string;
  href:      string;
  ariaLabel: string;
}

export interface TopbarAccent {
  label: string;
  href:  string;
}

export interface Topbar {
  label:  string;
  social: SocialLink[];
  accent: TopbarAccent;
}

export interface Brand {
  name:       string;
  shortName:  string;
  tagline:    string;
  href:       string;
  ariaLabel:  string;
}

export interface Cta {
  label:   string;
  href:    string;
  variant: string;
}

export interface A11y {
  searchLabel:      string;
  openMenuLabel:    string;
  closeMenuLabel:   string;
  navLabel:         string;
  mobileNavLabel:   string;
  drawerDialogLabel:string;
}

export interface NavData {
  brand:       Brand;
  topbar:      Topbar;
  mainNav:     NavItem[];
  cta:         Cta;
  mobileExtra: SimpleLink[];
  footerLinks: FooterLinks;
  a11y:        A11y;
}