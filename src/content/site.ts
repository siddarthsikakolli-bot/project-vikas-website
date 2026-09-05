/* ============================================================
   Project Vikas — site content
   ------------------------------------------------------------
   Every string on the site lives here. Components read from this
   file and contain no prose, so mission language can be rewritten
   without touching layout.

   The organisation is currently revisiting its long-term framing.
   Nothing below asserts a mission statement, tagline, or framework
   that has not been confirmed — the `mission` block holds factual
   description only and is marked as the slot to replace.
   ============================================================ */

export interface Figure {
  /** What is displayed, already formatted. */
  display: string;
  /** Numeric value, for the count-up animation. Null = not countable. */
  value: number | null;
  /** Superscript unit. Every figure names what it counts. */
  unit: string;
  /** Plain-language expansion, used for screen readers and captions. */
  label: string;
  /** When this figure was last confirmed. Stale figures should be visible as stale. */
  asOf: string;
  /** Where it came from. */
  source: string;
}

export const org = {
  name: 'Project Vikas',
  /** Split for the wordmark, which sets the second word in the accent. */
  nameParts: ['Project', 'Vikas'] as const,
  founded: '12 February 2025',
  foundedISO: '2025-02-12',
  email: 'thevikasproject@gmail.com',
  donateUrl: 'https://www.paypal.com/ncp/payment/4ANDNFNGHRGH8',
  fiscalSponsor: {
    name: 'Indian Friends of Atlanta',
    url: 'https://ifaworld.org',
    status: '501(c)(3)',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/projectvikas/',
    instagram: 'https://www.instagram.com/thevikasproject/',
  },
} as const;

/* ------------------------------------------------------------
   CONTENT SLOT — mission
   Factual description only. No tagline is asserted. Replace the
   wording here once the new framing is settled; nothing in the
   layout depends on its length or phrasing.
   ------------------------------------------------------------ */
export const mission = {
  /** Hero. Two sentences, plus the disclaimer that matters most to donors. */
  lede: 'A student-led nonprofit expanding access to legal representation. We raise funds in the United States and direct them to registered legal aid organisations in India',
  ledeQualifier: 'we do not provide representation ourselves.',

  /** Footer and meta description. One sentence. */
  short:
    'A student-led nonprofit expanding access to legal representation. We raise funds in the United States and direct them to registered legal aid organisations in India.',

  /** <title> and Open Graph. */
  metaTitle: 'Project Vikas — expanding access to legal representation',
  metaDescription:
    'Project Vikas is a student-led nonprofit that raises funds in the United States and directs them to registered legal aid organisations in India. Fiscally sponsored by Indian Friends of Atlanta, a 501(c)(3).',
} as const;

/* ------------------------------------------------------------
   Confirmed figures.
   Confirmed directly by Project Vikas on 5 September 2026. These
   supersede every figure in the organisation's older documents.

   The intern figure is deliberately not a precise count: the
   Slack-based volunteer programme cannot be counted exactly, and
   "more than 100" is what can actually be defended.
   ------------------------------------------------------------ */
export const figures: Figure[] = [
  {
    display: '$18,000',
    value: 18000,
    unit: 'USD',
    label: 'raised since founding',
    asOf: 'September 2026',
    source: 'Project Vikas',
  },
  {
    display: '4',
    value: 4,
    unit: 'NGO',
    label: 'partner legal aid organisations in India',
    asOf: 'September 2026',
    source: 'Project Vikas',
  },
  {
    display: '100+',
    value: null,
    unit: 'people',
    label: 'interns and volunteers across the US and internationally',
    asOf: 'September 2026',
    source: 'Project Vikas',
  },
  {
    display: '4',
    value: 4,
    unit: 'press',
    label: 'articles in the press',
    asOf: 'September 2026',
    source: 'Project Vikas',
  },
];

export const nav = [
  { label: 'Our work', href: '#work' },
  { label: 'Partners', href: '#partners' },
  { label: 'Get involved', href: '#involved' },
  { label: 'Contact', href: '#contact' },
] as const;

export const footerNav = [
  { label: 'Our work', href: '#work' },
  { label: 'Partners', href: '#partners' },
  { label: 'Get involved', href: '#involved' },
  { label: 'Donate', href: org.donateUrl },
] as const;

export const footerConnect = [
  { label: 'Email', href: `mailto:${org.email}` },
  { label: 'LinkedIn', href: org.social.linkedin },
  { label: 'Instagram', href: org.social.instagram },
] as const;

/* ------------------------------------------------------------
   Section 01 — the cover sheet
   ------------------------------------------------------------ */
export const cover = {
  courtLine: 'In the matter of access to legal representation',
  /** The unrepresented party. Stays blank, always. */
  vacancyNote: 'appearing without counsel',
  particulars: [
    { label: 'Filed', value: '12 February 2025' },
    { label: 'Fiscal sponsor', value: 'Indian Friends of Atlanta' },
    { label: 'Status', value: '501(c)(3)' },
  ],
} as const;

/* ------------------------------------------------------------
   Section 02 — the cause list
   Copy drawn from the HULR pitch deck and the launch video
   script, tightened. No mission statement is asserted: the
   closing line states what the organisation does, not what it
   believes.
   ------------------------------------------------------------ */
export const causeList = {
  heading: 'The cause list',
  paras: [
    {
      n: '¶ 1',
      text: 'In much of rural India, law firms and legal clinics are few and far between. Representation is priced beyond reach, and the firms that would work for less often cannot afford to keep their doors open.',
      note: { label: 'Note', text: 'Project Vikas funds the organisations that provide representation. It does not provide representation itself.' },
    },
    {
      n: '¶ 2',
      text: 'So when a dispute becomes a crisis, people go to court without counsel — without the means to argue their case, or to defend rights they already hold.',
      note: null,
    },
    {
      n: '¶ 3',
      text: 'That gap is what our funding is directed at.',
      note: { label: 'As confirmed', text: 'Raised since 12 February 2025: $18,000. Partner organisations: 4.' },
    },
  ],

  /* Illustrative rows. No party names, no docket numbers, nothing
     that could be read as a real matter — see causelist.css. The
     heard row differs only by the rule under its blank being
     drawn, which repeats the cover-sheet mechanic. */
  rows: [
    { n: '1.', status: 'Adjourned — no appearance', heard: false },
    { n: '2.', status: 'Awaiting counsel', heard: false },
    { n: '3.', status: 'Adjourned — no appearance', heard: false },
    { n: '4.', status: 'Awaiting counsel', heard: false },
    { n: '5.', status: 'Counsel appeared', heard: true },
    { n: '6.', status: 'Awaiting counsel', heard: false },
  ],

  note: 'Illustrative. No real matter, party, or docket number is depicted.',
} as const;
