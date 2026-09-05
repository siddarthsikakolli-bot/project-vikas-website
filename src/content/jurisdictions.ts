/* ============================================================
   Project Vikas — jurisdiction layer
   ------------------------------------------------------------
   The core design system is jurisdiction-neutral: a docket, case
   captions, cited figures, the courtroom-materials palette. None
   of it assumes a particular legal system.

   Anything that IS specific to one country lives here — the
   vocabulary its courts use, the credentials its NGOs hold, the
   motifs its legal culture supplies. Programme areas render from
   this array, so adding a second one is a content change rather
   than a redesign.
   ============================================================ */

export interface Jurisdiction {
  id: string;
  /** Display name of the programme area. */
  label: string;
  /** False = scaffolded but not yet public. */
  active: boolean;
  /** What that system calls its register of matters to be heard. */
  registerTerm: string;
  /** Regulatory credential partner organisations hold there. */
  credential?: {
    abbr: string;
    full: string;
    note: string;
  };
  /** Design notes. Reference material for motifs and imagery —
   *  never printed on the page verbatim. */
  motifs: string[];
}

export const jurisdictions: Jurisdiction[] = [
  {
    id: 'in',
    label: 'India',
    active: true,
    registerTerm: 'cause list',
    credential: {
      abbr: 'FCRA',
      full: 'Foreign Contribution (Regulation) Act',
      note: 'Indian registration permitting an organisation to receive foreign funding. Required for any NGO receiving money raised abroad.',
    },
    motifs: [
      'Court files bound with red cloth tape — the literal origin of the phrase "red tape". The binding is what keeps a file closed; access is what opens it.',
      'Indigo: the dye at the centre of the 1917 Champaran campaign, the first mass legal-rights action for rural Indian farmers.',
      'विकास — vikas, meaning progress or development.',
      'Indian courts do not use gavels. Never depict one.',
    ],
  },

  /* ----------------------------------------------------------
     United States — scaffolded, not yet public.
     Populate and set active: true when the programme is real.
     Nothing in the core system needs to change.

     {
       id: 'us',
       label: 'United States',
       active: false,
       registerTerm: 'docket',
       motifs: [
         'Legal-aid deserts: counties with no legal aid provider.',
         'Pro se representation — appearing without counsel.',
         'The clerk of court\'s received stamp.',
       ],
     },
     ---------------------------------------------------------- */
];

export const activeJurisdictions = jurisdictions.filter((j) => j.active);
