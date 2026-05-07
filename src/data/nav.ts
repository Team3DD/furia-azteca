// src/data/nav.ts
// Fuente de verdad única — sin imports externos de tipos ni de JSON.

export interface NavChild {
  label:   string;
  href:    string;
  accent?: boolean;
  indent?: boolean;
}

export interface NavItem {
  id:        string;
  label:     string;
  href?:     string;
  badge?:    string;
  children?: NavChild[];
}

export interface SimpleLink {
  id?:   string;
  label: string;
  href:  string;
}

export interface FooterLinks {
  proyecto:  SimpleLink[];
  mundiales: SimpleLink[];
  comunidad: SimpleLink[];
  legal:     SimpleLink[];
}

export interface Cta {
  label:   string;
  href:    string;
  variant: string;
}

export interface A11y {
  searchLabel:       string;
  openMenuLabel:     string;
  closeMenuLabel:    string;
  navLabel:          string;
  mobileNavLabel:    string;
  drawerDialogLabel: string;
}

export interface Brand {
  name:      string;
  shortName: string;
  tagline:   string;
  href:      string;
  ariaLabel: string;
}

export interface SocialLink {
  id:        string;
  label:     string;
  href:      string;
  ariaLabel: string;
}

export interface Topbar {
  label:  string;
  social: SocialLink[];
  accent: { label: string; href: string };
}

// ─────────────────────────────────────────────
// DATOS
// ─────────────────────────────────────────────

export const brand: Brand = {
  name:      'Furia Azteca',
  shortName: 'FA',
  tagline:   'Selección Mexicana de Aficionados',
  href:      '/',
  ariaLabel: 'Furia Azteca — Inicio',
};

export const topbar: Topbar = {
  label: 'Selección Mexicana de Aficionados',
  social: [
    { id: 'instagram', label: 'IG', href: 'https://instagram.com/furiaazteca', ariaLabel: 'Instagram' },
    { id: 'facebook',  label: 'FB', href: 'https://facebook.com/furiaazteca',  ariaLabel: 'Facebook'  },
    { id: 'twitter',   label: 'X',  href: 'https://twitter.com/furiaazteca',   ariaLabel: 'Twitter / X' },
  ],
  accent: { label: 'Tienda →', href: '/tienda' },
};

export const mainNav: NavItem[] = [
  { id: 'nosotros', label: 'Nosotros', href: '/nosotros' },
  { id: 'historia', label: 'Historia', href: '/historia' },
  {
    id: 'mundiales', label: 'Mundiales', href: '/mundiales',
    children: [
      { label: 'Rusia 2018',        href: '/mundiales/rusia-2018' },
      { label: 'Qatar 2022',        href: '/mundiales/qatar-2022' },
      { label: 'Mundial 2026',      href: '/mundiales/2026' },
      { label: '— México',          href: '/mundiales/2026/mexico',         indent: true },
      { label: '— Estados Unidos',  href: '/mundiales/2026/estados-unidos', indent: true },
      { label: '— Canadá',          href: '/mundiales/2026/canada',         indent: true },
    ],
  },
  { id: 'torneos',  label: 'Torneos',  href: '/torneos' },
  { id: 'sedes',    label: 'Sedes',    href: '/sedes'   },
  {
    id: 'tienda', label: 'Tienda', badge: 'Nuevo',
    children: [
      { label: 'Playera 2025', href: '/tienda/playera-2025', accent: true },
      { label: 'Jerseys',      href: '/tienda/jerseys'      },
      { label: 'Accesorios',   href: '/tienda/accesorios'   },
      { label: 'Colecciones',  href: '/tienda/colecciones'  },
    ],
  },
  { id: 'galeria',  label: 'Galería',  href: '/galeria'  },
  { id: 'noticias', label: 'Noticias', href: '/noticias' },
];

export const cta: Cta = {
  label:   'Únete',
  href:    '/unete',
  variant: 'gold',
};

export const mobileExtra: SimpleLink[] = [
  { id: 'faq',      label: 'FAQ',      href: '/faq'      },
  { id: 'contacto', label: 'Contacto', href: '/contacto' },
];

export const footerLinks: FooterLinks = {
  proyecto: [
    { label: 'Nosotros', href: '/nosotros'       },
    { label: 'Historia', href: '/historia'        },
    { label: 'Equipo',   href: '/nosotros#equipo' },
  ],
  mundiales: [
    { label: 'Rusia 2018', href: '/mundiales/rusia-2018' },
    { label: 'Qatar 2022', href: '/mundiales/qatar-2022' },
    { label: '2026',       href: '/mundiales/2026'       },
  ],
  comunidad: [
    { label: 'Únete',    href: '/unete'    },
    { label: 'Sedes',    href: '/sedes'    },
    { label: 'FAQ',      href: '/faq'      },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { label: 'Privacidad', href: '/legal/privacidad' },
    { label: 'Términos',   href: '/legal/terminos'   },
    { label: 'Cookies',    href: '/legal/cookies'    },
  ],
};

export const a11y: A11y = {
  searchLabel:       'Buscar',
  openMenuLabel:     'Abrir menú',
  closeMenuLabel:    'Cerrar menú',
  navLabel:          'Navegación principal',
  mobileNavLabel:    'Menú móvil',
  drawerDialogLabel: 'Menú de navegación',
};