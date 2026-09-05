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
  /* The caption reads as one legal sentence, and the SUBJECT carries
     the largest type — not the organisation's name. A first-time
     visitor should learn what this is about before they learn who
     we are. */
  matterLine: 'In the matter of',
  subject: 'Access to legal representation',
  /** The unrepresented party. Stays blank, always. */
  vacancyNote: 'appearing without counsel',
  counselNote: 'entering an appearance',
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

/* ------------------------------------------------------------
   Section 03 — what we actually do
   Facts only: how money moves, and the limits of the role.
   Paragraph numbering continues from section 02 — the homepage
   reads as one document, not a stack of independent blocks.
   ------------------------------------------------------------ */
export const whatWeDo = {
  heading: 'What we actually do',
  paras: [
    {
      n: '¶ 4',
      text: 'Project Vikas raises funds in the United States — through individual donations, corporate sponsorship, and community events — and directs them to registered legal aid organisations in India.',
      note: { label: 'Fiscal sponsor', text: 'Indian Friends of Atlanta, a registered 501(c)(3). Project Vikas operates under its sponsorship.' },
    },
    {
      n: '¶ 5',
      text: 'We do not provide legal representation ourselves, and we do not operate courts or clinics. Our partner organisations do that work. Our role is to fund it, and to state plainly what was raised and where it went.',
      note: null,
    },
  ],

  steps: [
    {
      n: '1.',
      title: 'Raise',
      where: 'United States',
      detail: 'Individual donations, corporate sponsorship, and community events.',
    },
    {
      n: '2.',
      title: 'Direct',
      where: 'India',
      detail: 'Funds are granted to registered legal aid organisations. Four partner organisations at present.',
    },
    {
      n: '3.',
      title: 'Account',
      where: 'Public record',
      detail: 'What has been raised, and the organisations it supports, are stated on this site with the date each figure was last confirmed.',
    },
  ],

  /* ASSET SLOT — one small supporting photograph.
     Real documentary photography only, never generated, and never
     at hero or full-section scale. Set `src` to a file in
     /public/media/ and it renders; leave it null and the section
     closes up with no gap. */
  photo: {
    src: '/media/event-launch.jpg' as string | null,
    alt: 'Attendees seated in the venue at the Project Vikas grand launch event, Alpharetta, Georgia',
    caption: 'Grand launch event, Celebrations Banquet, Alpharetta, Georgia. 60+ attendees.',
    date: '19 July 2025',
    credit: 'Sri Photos',
  },
} as const;

/* ------------------------------------------------------------
   The opening — the notice field
   ------------------------------------------------------------
   The notices themselves come from the jurisdiction layer, not
   from here: language and script travel with the jurisdiction
   that issues the document. See jurisdictions.ts.

   The count is deliberately BLANK. No figure ships without a
   source, and one set at this scale without a citation is the
   overclaim this site exists to avoid. On a page about blanks in
   the record, a visible blank reads as an open entry rather than
   an omission. Set `count` and `countSource` and the blank rule
   is replaced automatically.
   ------------------------------------------------------------ */
export const field = {
  /** null until a citable figure exists. */
  count: null as string | null,
  countSource: null as string | null,
  countAsOf: null as string | null,

  eyebrow: 'In the matter of access to legal representation',
  /** The subject phrase completes with the active jurisdictions. */
  countSubject: 'matters pending before',
  pending: 'Figure pending citation.',

  /** How many readable-scale notices to place in the near field. */
  nearCount: 20,
  /** How many are drawn as pixels behind them. */
  farCount: 340,
} as const;

/* ------------------------------------------------------------
   The second screen — the statement
   Wording is the organisation's own, from the launch address:
   "In India, millions face court without legal support."
   Compressed, not embellished. Nothing new is asserted.
   ------------------------------------------------------------ */
export const statement = {
  lead: 'Millions face court',
  emphasis: 'without a lawyer.',
  attribution: 'Project Vikas launch address, July 2025',
} as const;

/* ------------------------------------------------------------
   Section 04 — the figures
   ------------------------------------------------------------
   A schedule, not a row of animated counters. Each figure is
   stated with the date it was last confirmed; anything not
   confirmed is left blank rather than estimated.

   The numbers themselves live in `figures` above, so this block
   holds only the framing around them.
   ------------------------------------------------------------ */
export const figuresSection = {
  heading: 'The figures',
  paras: [
    {
      n: '¶ 6',
      text: 'Every figure below is stated with the date it was last confirmed. Where something has not been confirmed, it is left blank rather than estimated — the count of pending matters at the head of this page is blank for that reason.',
      note: { label: 'Last confirmed', text: 'September 2026. Figures supersede any earlier published totals.' },
    },
  ],
  tableCaption: 'Schedule of figures',
  cols: { n: 'No.', item: 'Item', asOf: 'As at', figure: 'Figure' },
  note: 'Where a figure is a floor rather than an exact count, it is written as such. The volunteer programme runs on Slack and cannot be counted precisely, so it is stated as more than one hundred rather than given a false precision.',
} as const;
