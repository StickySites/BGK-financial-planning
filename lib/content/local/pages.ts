import type { PageContent } from "@/lib/content/types";
import { localMedia } from "@/lib/content/local/media";

export const localPages: Record<string, PageContent> = {
  home: {
    _id: "page-home",
    title: "Home",
    slug: "home",
    seo: {
      title: "BGK Financial Planning",
      description:
        "Regulated financial planning across investments, retirement, protection, and mortgage referrals."
    },
    sections: [
      {
        _key: "home-hero",
        key: "hero",
        badge: "Regulated Financial Planning",
        heading: "Plan your finances with confidence.",
        intro:
          "At BGK Financial Planning, we help individuals and families make informed financial decisions with practical, long-term advice across investments, retirement, and protection.",
        imageUrl: localMedia.ladyPlanning,
        imageAlt: "Woman reviewing financial plans",
        ctaLabel: "Explore Services",
        ctaHref: "/services"
      },
      {
        _key: "home-services",
        key: "services",
        heading: "Our Services",
        intro: "Explore our core advisory services designed to support the next stage of your financial journey."
      },
      {
        _key: "home-trust",
        key: "trust",
        heading: "Why clients choose BGK",
        intro: "Our approach combines professional expertise with clear communication and dependable long-term support.",
        body: [
          "- Advice tailored to your personal goals, priorities, and timeline.",
          "- Clear recommendations explained in plain English.",
          "- Ongoing reviews to keep your financial plan aligned as life changes."
        ].join("\n")
      },
      {
        _key: "home-faq",
        key: "faq",
        heading: "Frequently asked questions",
        intro:
          "Straightforward answers to common questions before you book an initial conversation with Bruce.",
        faqItems: [
          {
            question: "What happens in a first conversation?",
            answer:
              "The first meeting is a chance to talk through your goals, current position, and any questions you have. There is no obligation to proceed. Bruce explains how he works, what advice might look like for your situation, and the likely next steps if you choose to move forward."
          },
          {
            question: "What areas of financial planning do you cover?",
            answer:
              "BGK provides regulated advice on investments, retirement planning, and protection. Mortgage needs are referred to a specialist partner where appropriate. Many clients need support across more than one area — recommendations are considered as part of a wider plan rather than in isolation."
          },
          {
            question: "Is BGK regulated?",
            answer:
              "Yes. BGK Financial Planning is the trading style of Bruce Kennedy, an Appointed Representative of 2plan wealth management Ltd, which is authorised and regulated by the Financial Conduct Authority. You can verify our status on the FCA register."
          },
          {
            question: "How are your fees structured?",
            answer:
              "Fees depend on the complexity of your circumstances and the work involved. Bruce explains the charging structure clearly before you commit, including whether advice is provided on a fixed-fee or ongoing basis. Full details are set out in our Terms of Business."
          },
          {
            question: "Who do you typically work with?",
            answer:
              "Bruce works with individuals and families at different stages of life — from those building wealth and planning for retirement to clients reviewing pensions, investments, or protection arrangements. If you are unsure whether advice is right for you, an initial conversation is the best way to find out."
          },
          {
            question: "Do you offer one-off advice or ongoing support?",
            answer:
              "Both are available. Some clients need focused guidance on a specific decision; others benefit from a longer-term relationship with regular reviews. The right level of support is agreed with you at the outset and kept under review as your needs change."
          }
        ]
      }
    ]
  },
  about: {
    _id: "page-about",
    title: "About",
    slug: "about",
    seo: {
      title: "About | BGK Financial Planning",
      description: "Learn about BGK Financial Planning and our client-first approach to financial advice."
    },
    sections: [
      {
        _key: "about-hero",
        key: "hero",
        badge: "About us",
        heading: "About BGK Financial Planning",
        intro:
          "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice.",
        imageUrl: localMedia.about.hero,
        imageAlt: "Handshake representing trusted financial advice"
      },
      {
        _key: "about-story",
        key: "story",
        heading: "Our story",
        intro:
          "BGK Financial Planning was established by Bruce Kennedy with a clear purpose: to give individuals and families access to honest, professional financial advice without the complexity or jargon that often surrounds it. Bruce works directly with every client. There are no handoffs to junior advisers, so the relationship you build is with the person managing your financial plan."
      },
      {
        _key: "about-pillars",
        key: "pillars",
        heading: "The pillars of BGK",
        intro: "Values that shape the way we advise and support our clients.",
        body: [
          "- Trust: We focus on transparent advice and long-term relationships.",
          "- Clarity: We explain options in plain language so decisions feel manageable.",
          "- Expertise: Recommendations are grounded in professional standards and practical context."
        ].join("\n")
      },
      {
        _key: "about-team",
        key: "team",
        heading: "Leadership team",
        intro: "Experienced professionals focused on delivering clear outcomes for clients.",
        body: [
          "- Senior Advisory Partner: Leads strategic planning and long-term client relationships.",
          "- Investment Specialist: Oversees portfolio strategy and risk-aligned recommendations.",
          "- Retirement Specialist: Supports clients in turning long-term plans into practical actions."
        ].join("\n")
      },
      {
        _key: "about-cta",
        key: "cta",
        heading: "Plan your future with precision",
        intro: "If you want a clear roadmap and practical next steps, we are here to help.",
        ctaLabel: "Book a consultation",
        ctaHref: "/contact"
      }
    ]
  },
  services: {
    _id: "page-services",
    title: "Services",
    slug: "services",
    seo: {
      title: "Services | BGK Financial Planning",
      description: "Explore investment, retirement, protection, and mortgage referral services from BGK."
    },
    sections: [
      {
        _key: "services-hero",
        key: "hero",
        badge: "Advice areas",
        heading: "Services",
        intro: "Explore our core planning services. Each area is tailored to your circumstances and long-term goals.",
        imageUrl: localMedia.services.indexHero,
        imageAlt: "Financial planning consultation"
      },
      {
        _key: "services-faq",
        key: "faq",
        heading: "Frequently asked questions",
        intro:
          "Practical answers to questions clients often ask before choosing a service or booking an initial conversation.",
        faqItems: [
          {
            question: "How do I know which service is right for me?",
            answer:
              "Many clients need support across more than one area. We start with a discovery conversation to understand your goals, priorities, and current position, then recommend the most relevant service — or a sensible sequence if several areas need attention."
          },
          {
            question: "What happens in the first conversation?",
            answer:
              "The first meeting is an opportunity to talk through what you want to achieve, ask questions, and understand how we work. There is no obligation to proceed. We explain the scope of advice, likely next steps, and how we would support you if you choose to move forward."
          },
          {
            question: "How are your fees structured?",
            answer:
              "Fees depend on the complexity of your circumstances and the work involved. We explain our charging structure clearly before you commit, including whether advice is provided on a fixed-fee or ongoing basis. Full details are set out in our Terms of Business."
          },
          {
            question: "Do you offer one-off advice or ongoing support?",
            answer:
              "Both are available. Some clients need focused guidance on a specific decision; others benefit from a longer-term relationship with regular reviews. We agree the right level of support with you at the outset and keep it under review as your needs change."
          },
          {
            question: "Are you independent and regulated?",
            answer:
              "BGK Financial Planning is authorised and regulated by the Financial Conduct Authority. We provide advice in your interests, explain any limitations clearly, and disclose how we are remunerated. Mortgage referrals are introduced to a specialist partner where appropriate."
          },
          {
            question: "Can you help with more than one area at once?",
            answer:
              "Yes. Investment, retirement, and protection decisions often overlap. We take a joined-up view of your finances so recommendations in one area support your wider plan rather than being considered in isolation."
          }
        ]
      }
    ]
  },
  resources: {
    _id: "page-resources",
    title: "Resources",
    slug: "resources",
    seo: {
      title: "Resources | BGK Financial Planning",
      description: "Articles and guidance notes on financial planning topics."
    },
    sections: [
      {
        _key: "resources-hero",
        key: "hero",
        badge: "Insights",
        heading: "Resources",
        intro:
          "Helpful articles and guidance notes to support informed decisions around planning, investments, and protection.",
        imageUrl: localMedia.resources.hero,
        imageAlt: "Signing financial planning documents"
      },
      {
        _key: "resources-why",
        key: "why",
        heading: "Why these resources matter",
        intro:
          "We publish concise, practical content to help you navigate common financial planning decisions with greater confidence."
      }
    ]
  },
  contact: {
    _id: "page-contact",
    title: "Contact",
    slug: "contact",
    seo: {
      title: "Contact | BGK Financial Planning",
      description: "Get in touch with BGK Financial Planning for enquiries and consultations."
    },
    sections: [
      {
        _key: "contact-hero",
        key: "hero",
        badge: "Get in touch",
        heading: "Contact",
        intro: "For general enquiries, please use the details below. We aim to respond as soon as possible.",
        imageUrl: localMedia.contact.hero,
        imageAlt: "Professional financial advice meeting"
      },
      {
        _key: "contact-work",
        key: "work",
        heading: "Working with BGK",
        intro:
          "BGK Financial Planning focuses on clear, long-term support to help clients make informed decisions across key financial areas."
      }
    ]
  }
};
