/* ============================================================
   Project Vikas — jurisdiction layer
   ------------------------------------------------------------
   The core design system is jurisdiction-neutral: a docket, case
   captions, cited figures, the courtroom-materials palette. None
   of it assumes a particular legal system.

   Anything specific to one country lives here — the vocabulary
   its courts use, the credentials its NGOs hold, and the notices
   people are handed there. Programme areas render from this
   array, so adding a second one is a content change rather than
   a redesign.

   LANGUAGE IS PART OF THE JURISDICTION, NOT PART OF THE DESIGN.
   The notice field renders whatever specimens the active
   jurisdictions supply, in whatever scripts they are written in.
   Adding Spanish eviction notices, Mandarin immigration notices,
   Haitian Creole or Vietnamese ones is a matter of adding
   specimens to a jurisdiction — no component or stylesheet
   changes, and no rebuild.

   NOTHING RENDERS UNLESS IT IS CLEARED. A specimen with
   `cleared: false` is invisible to the site. That is deliberate:
   an uncleared specimen is one we cannot yet stand behind, and
   the field must never imply a programme, a language community,
   or a document we have not actually verified.
   ============================================================ */

/** Writing system. Drives the scramble alphabet and the font stack. */
export type Script = 'latin' | 'devanagari' | 'han' | 'arabic' | 'cyrillic';

/**
 * Glyph pools used to render a notice unreadable.
 *
 * The scramble must stay inside the specimen's own script — Latin
 * letters standing in for Devanagari would read as a foreign
 * alphabet rather than as an unreadable document, which is a
 * different and much worse idea.
 */
export const scrambleAlphabets: Record<Script, string> = {
  latin: 'aemnorsuvwxzciltfhkbdgpqy',
  devanagari: 'कखगघचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
  han: '案件通知法院被告原告出庭答辯期限裁定送達',
  arabic: 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي',
  cyrillic: 'абвгдежзийклмнопрстуфхцчшщыэюя',
};

/**
 * Font stack per script. Latin is covered by the site's own faces;
 * anything else needs a webfont added to the layout before its
 * specimens will render correctly. Recorded here so the gap is
 * visible in code rather than discovered on the page.
 */
export const scriptFonts: Record<Script, string | null> = {
  latin: 'var(--f-rec)',
  devanagari: null, // needs e.g. Noto Sans Devanagari
  han: null,        // needs e.g. Noto Sans SC / TC
  arabic: null,     // needs e.g. Noto Naskh Arabic
  cyrillic: 'var(--f-rec)',
};

export interface NoticeSpecimen {
  /** BCP-47 tag. Set on the element so assistive tech and hyphenation behave. */
  lang: string;
  script: Script;
  /** What the document is called where it is issued. */
  kind: string;
  /** The procedural text, as a person actually receives it. */
  text: string;
  /** The same notice as counsel would explain it. */
  plain: string;
  /** The clauses that determine the outcome — surfaced last. */
  operative: string[];
  /** Where this text came from. Required. */
  provenance: string;
  /**
   * Cleared for public display. Uncleared specimens are filtered
   * out before render and cannot reach the page.
   */
  cleared: boolean;
}

export interface Jurisdiction {
  id: string;
  label: string;
  /** False = scaffolded but not public. */
  active: boolean;
  /** What that system calls its register of matters to be heard. */
  registerTerm: string;
  credential?: {
    abbr: string;
    full: string;
    note: string;
  };
  /** Documents people are handed in this jurisdiction. */
  notices: NoticeSpecimen[];
  /** Design reference only. Never printed verbatim. */
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

    notices: [
      {
        lang: 'en-IN',
        script: 'latin',
        kind: 'Notice of hearing',
        text: 'Take notice that the above matter stands listed for hearing before this court. Should the respondent fail to enter an appearance, or to file a written statement within the period prescribed, the matter may proceed ex parte and such order may be passed as the court thinks fit.',
        plain: 'You have a court date. If you do not go, or do not reply in writing before the deadline, the court can decide the case without you — and it can decide against you.',
        operative: ['ex', 'parte', 'appearance', 'prescribed', 'statement'],
        provenance:
          'Generic procedural English, composed to be structurally faithful to the form of a hearing notice. NOT a reproduction of any real notice, and not drawn from any real matter.',
        cleared: true,
      },

      /* ------------------------------------------------------
         Hindi and other Indian-language specimens belong here.
         Deliberately absent rather than invented: we hold no
         verified Devanagari notice language, and composing legal
         Hindi we cannot check would be the same failure as
         fabricating a record — just harder for us to notice.

         To add one: supply the text and its plain-language
         rendering from a partner NGO, add the Devanagari webfont
         to Base.astro, set scriptFonts.devanagari, and set
         cleared: true. Nothing else changes.
         ------------------------------------------------------ */
    ],

    motifs: [
      'Court files bound with red cloth tape — the literal origin of the phrase "red tape". The binding is what keeps a file closed; access is what opens it.',
      'Indigo: the dye at the centre of the 1917 Champaran campaign, the first mass legal-rights action for rural Indian farmers.',
      'विकास — vikas, meaning progress or development.',
      'Indian courts do not use gavels. Never depict one.',
    ],
  },

  /* ----------------------------------------------------------
     United States — scaffolded, NOT public.
     `active: false` keeps it out of every render, and its notices
     are uncleared besides. Populate and flip both only when the
     programme is real; publishing Spanish, Mandarin, Haitian
     Creole or Vietnamese notices before then would imply a US
     programme that has not been decided.

     The shape it would take:

     {
       id: 'us',
       label: 'United States',
       active: false,
       registerTerm: 'docket',
       notices: [
         { lang: 'es-US', script: 'latin', kind: 'Aviso de desalojo', … cleared: false },
         { lang: 'zh-Hans', script: 'han',   kind: '出庭通知',        … cleared: false },
         { lang: 'ht',      script: 'latin', kind: 'Avi pou parèt',   … cleared: false },
         { lang: 'vi',      script: 'latin', kind: 'Thông báo hầu tòa', … cleared: false },
       ],
       motifs: [
         'Legal-aid deserts: counties with no legal aid provider.',
         'Pro se representation — appearing without counsel.',
         'The clerk of court\'s received stamp.',
       ],
     },
     ---------------------------------------------------------- */
];

export const activeJurisdictions = jurisdictions.filter((j) => j.active);

/**
 * Every notice the site is currently allowed to show.
 * Active jurisdictions only, cleared specimens only.
 */
export const clearedNotices: NoticeSpecimen[] = activeJurisdictions
  .flatMap((j) => j.notices)
  .filter((n) => n.cleared);

/** Scripts actually in use, so the layout can load only the fonts it needs. */
export const scriptsInUse: Script[] = [...new Set(clearedNotices.map((n) => n.script))];
