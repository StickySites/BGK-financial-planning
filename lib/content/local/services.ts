import type { FaqItem, ServiceItem } from "@/lib/content/types";
import { localMedia } from "@/lib/content/local/media";

function serviceBody(...paragraphs: string[]) {
  return paragraphs.map((text, index) => ({
    _key: `service-details-${index}`,
    children: [{ text }]
  }));
}

export const localServices: ServiceItem[] = [
  {
    _id: "service-investment",
    title: "Investment Guidance",
    slug: "investment-guidance",
    summary:
      "Build a disciplined, long-term investment strategy aligned to your goals, time horizon, and attitude to risk, with clear recommendations and regular reviews.",
    heroImageUrl: localMedia.services.investmentGuidance,
    overviewImageUrl: localMedia.services.investmentGuidanceOverview,
    overviewImageAlt: "Money tree representing long-term investment growth",
    secondaryImageUrl: localMedia.stackingCoins,
    secondaryImageAlt: "Stacks of coins representing disciplined saving and investment growth",
    highlights: [
      "Goal-led asset allocation",
      "Tax-aware wrapper planning",
      "Ongoing portfolio reviews"
    ],
    overviewHeading: "How we help with investments",
    benefitsHeading: "Key benefits",
    benefitsItems: [
      "Clarity on strategy: Understand how your money is invested and why each decision supports your plan.",
      "Risk matched to you: Portfolios are structured around your capacity for loss and long-term objectives.",
      "Tax-efficient structure: We consider ISAs, pensions, and general investment accounts together.",
      "Joined-up planning: Investment advice stays aligned with retirement, protection, and mortgage decisions."
    ],
    includedHeading: "What this typically includes",
    includedItems: [
      "Review of existing holdings, platforms, and wrappers",
      "Asset allocation and diversification guidance",
      "Fund and investment selection support",
      "Implementation planning and provider coordination",
      "Scheduled reviews as markets and your life change"
    ],
    audienceHeading: "Who this is for",
    audienceItems: [
      "Individuals building wealth for the medium to long term who want a structured plan rather than ad-hoc decisions.",
      "Investors with ISAs, general investment accounts, or pension investments who need clarity on allocation and risk.",
      "Business owners or professionals with surplus cash seeking tax-aware, goal-led guidance.",
      "Anyone consolidating multiple accounts or inheriting investments who wants a coherent strategy."
    ],
    approachHeading: "Our approach",
    approachItems: [
      "Goals first: We start with what you are investing for, when you need the money, and how much volatility you can accept.",
      "Evidence-led allocation: Recommendations are grounded in diversification, cost awareness, and your stated risk profile.",
      "Practical implementation: Options are explained plainly, with support through setup, transfers, and ongoing adjustments.",
      "Review rhythm: Your plan is revisited on an agreed schedule and when life events or market shifts warrant a fresh look."
    ],
    timelineHeading: "Your investment journey",
    timelineItems: [
      "Discovery call: We discuss your goals, existing holdings, income needs, and attitude to risk.",
      "Analysis: We review current investments, wrappers, charges, and how they fit your wider financial picture.",
      "Recommendation: You receive clear options with rationale, pros and cons, and suggested next steps.",
      "Implementation: We support execution, including platform selection, transfers, and documentation.",
      "Ongoing review: Regular check-ins keep allocation, risk, and tax position aligned with your plan."
    ],
    faqHeading: "Investment guidance: common questions",
    faqItems: [
      {
        question: "Do you manage my investments directly?",
        answer:
          "We provide regulated financial advice and recommendations. Execution may be through platforms or providers you hold with; we guide selection, structure, and ongoing strategy rather than taking custody of your assets."
      },
      {
        question: "How much do I need to invest before seeking advice?",
        answer:
          "There is no fixed minimum. We focus on whether structured guidance will meaningfully improve your outcomes, whether you are starting with regular contributions or consolidating existing pots."
      },
      {
        question: "Should I use an ISA, pension, or general investment account?",
        answer:
          "The right wrapper depends on your goals, access needs, tax position, and retirement plans. We model options so you understand allowances, flexibility, and long-term tax impact before deciding."
      },
      {
        question: "How often will my portfolio be reviewed?",
        answer:
          "Review frequency is agreed with you, typically at least annually, with additional reviews after major life events, large contributions, or significant market moves affecting your risk level."
      },
      {
        question: "Can you advise on existing holdings I already own?",
        answer:
          "Yes. We review what you hold today, assess fit against your goals and risk profile, and recommend whether to retain, adjust, or redeploy, always with clear explanation of the rationale."
      },
      {
        question: "How does investment advice link with retirement planning?",
        answer:
          "Investments and pensions are part of the same long-term picture. We align wrapper choice, drawdown strategy, and growth assets so your investment plan supports retirement income targets."
      }
    ] satisfies FaqItem[],
    relatedHeading: "Explore related advice",
    ctaHeading: "Discuss your investment plan",
    ctaBody:
      "Book a no-obligation conversation. We will review your goals, current holdings, and whether structured investment guidance is the right next step.",
    body: serviceBody(
      "Investing without a clear framework often leads to inconsistent decisions and unnecessary risk. We help you define a long-term strategy, choose appropriate wrappers, and maintain a portfolio you understand and can stick with.",
      "Recommendations are practical and transparent: you will know what we suggest, why it fits your plan, and how to implement it. As your circumstances evolve, we revisit allocation, risk, and tax position so your investments stay aligned with what matters to you."
    ),
    seo: {
      title: "Investment Guidance | BGK Financial Planning",
      description:
        "Long-term investment planning tailored to your goals, risk profile, and tax position, with clear advice and ongoing reviews."
    }
  },
  {
    _id: "service-retirement",
    title: "Retirement Planning",
    slug: "retirement-planning",
    summary:
      "Turn retirement from a vague target into a clear roadmap, with realistic income modelling, pension consolidation guidance, and milestone reviews as you approach and enter retirement.",
    heroImageUrl: localMedia.services.retirementPlanning,
    overviewImageUrl: localMedia.services.retirementPlanningOverview,
    overviewImageAlt: "Retired couple enjoying time together on holiday",
    secondaryImageUrl: localMedia.oldMenChess,
    secondaryImageAlt: "Older men playing chess, enjoying leisure in retirement",
    highlights: [
      "Retirement income modelling",
      "Pension pot consolidation",
      "Drawdown and annuity guidance"
    ],
    overviewHeading: "Planning the retirement you want",
    benefitsHeading: "Key benefits",
    benefitsItems: [
      "Clear income targets: Understand how much you need and when, with assumptions tested over time.",
      "Pension clarity: See how workplace, personal, and legacy pensions work together toward your goal.",
      "Tax-aware withdrawals: Plan how and when to take income to make efficient use of allowances.",
      "Confidence at each stage: Know what to do five years out, at retirement, and in the years that follow."
    ],
    includedHeading: "What this typically includes",
    includedItems: [
      "Retirement income needs analysis and cashflow modelling",
      "Review of pension arrangements, state pension, and other income sources",
      "Consolidation and transfer considerations where appropriate",
      "Drawdown, annuity, and phased retirement option comparisons",
      "Milestone reviews as you approach and move through retirement"
    ],
    audienceHeading: "Who this is for",
    audienceItems: [
      "Professionals within ten to fifteen years of retirement who want a realistic picture of future income.",
      "Those already retired who need help structuring withdrawals, tax, and remaining pension assets.",
      "Individuals with multiple pension pots seeking clarity on consolidation and decumulation options.",
      "Couples planning retirement together who want aligned income targets and contingency planning."
    ],
    approachHeading: "Our approach",
    approachItems: [
      "Lifestyle-led targets: We define the retirement you want first, then work back to the income and capital required.",
      "Robust modelling: Projections use sensible assumptions; we stress-test scenarios so you understand range of outcomes.",
      "Tax and wrapper awareness: Recommendations consider how pensions, ISAs, and other assets combine for income.",
      "Milestone planning: Clear actions for pre-retirement, transition, and post-retirement phases keep the plan current."
    ],
    timelineHeading: "Your retirement planning journey",
    timelineItems: [
      "Initial conversation: We explore your target retirement age, desired lifestyle, and existing pension provision.",
      "Data gathering: We collate pension statements, state pension forecasts, savings, and other income sources.",
      "Modelling and options: You receive income projections, gap analysis, and choices for closing any shortfall.",
      "Action plan: We agree priorities: contributions, consolidation, investment strategy, or phased retirement steps.",
      "Ongoing reviews: Plans are updated for legislation changes, market performance, and life events such as redundancy or inheritance."
    ],
    faqHeading: "Retirement planning: common questions",
    faqItems: [
      {
        question: "When should I start retirement planning?",
        answer:
          "The earlier you model your target income, the more options you retain. Many clients begin in their forties or fifties; others seek advice closer to retirement or after they have already stopped work."
      },
      {
        question: "Can you help if I have several old pension pots?",
        answer:
          "Yes. We review each arrangement, compare charges and features, and advise whether consolidation makes sense, always weighing guarantees, protected benefits, and transfer suitability."
      },
      {
        question: "Do you recommend drawdown, annuities, or a mix?",
        answer:
          "It depends on your income needs, attitude to risk, health, and desire for guaranteed income. We explain trade-offs clearly so you can choose an approach aligned to your priorities."
      },
      {
        question: "How do you account for the State Pension?",
        answer:
          "We use your forecast entitlement within the overall income plan, with clarity on qualifying years and how State Pension timing interacts with private pension withdrawals."
      },
      {
        question: "What if my retirement date or plans change?",
        answer:
          "Plans are living documents. We revisit assumptions when you change working patterns, receive an inheritance, downsize property, or adjust spending goals."
      },
      {
        question: "Is retirement planning only about pensions?",
        answer:
          "Pensions are central, but we also consider ISAs, investments, property, and other assets so your full balance sheet supports sustainable retirement income."
      }
    ] satisfies FaqItem[],
    relatedHeading: "Explore related advice",
    ctaHeading: "Start your retirement conversation",
    ctaBody:
      "Whether you are years from retirement or already drawing income, book a consultation to clarify your targets and next steps.",
    body: serviceBody(
      "Retirement should feel achievable, not uncertain. We help you quantify the income you need, understand what your current provision can deliver, and build a roadmap with realistic milestones.",
      "From pension consolidation to drawdown strategy, advice is explained in plain language with no unnecessary jargon. Your plan evolves as legislation, markets, and your life change, so you always know where you stand."
    ),
    seo: {
      title: "Retirement Planning | BGK Financial Planning",
      description:
        "Practical retirement planning with income modelling, pension reviews, and ongoing support through pre-retirement and drawdown."
    }
  },
  {
    _id: "service-protection",
    title: "Protection",
    slug: "protection",
    summary:
      "Safeguard your family and financial plan with needs-led protection advice, reviewing existing cover, identifying gaps, and recommending practical insurance options explained clearly.",
    heroImageUrl: localMedia.services.protection,
    overviewImageUrl: localMedia.services.protectionOverview,
    overviewImageAlt: "Family spending time together outdoors",
    secondaryImageUrl: localMedia.mumWithKids,
    secondaryImageAlt: "Mother with her children, representing family protection",
    highlights: [
      "Needs-led cover review",
      "Family and income protection",
      "Integration with wider plans"
    ],
    overviewHeading: "Protecting what matters most",
    benefitsHeading: "Key benefits",
    benefitsItems: [
      "Gap identification: See where existing policies fall short of your real needs if circumstances change.",
      "Appropriate cover levels: Recommendations balance protection with affordability and policy flexibility.",
      "Plain-language explanations: Understand what is covered, exclusions, and how claims would work.",
      "Plan integration: Protection is reviewed alongside income, debts, and long-term financial goals."
    ],
    includedHeading: "What this typically includes",
    includedItems: [
      "Review of existing life, critical illness, and income protection policies",
      "Needs analysis based on income, dependants, mortgage, and liabilities",
      "Recommendations on cover types, levels, and policy terms",
      "Support with applications and insurer underwriting where required",
      "Periodic reviews when income, family, or debt structures change"
    ],
    audienceHeading: "Who this is for",
    audienceItems: [
      "Families and homeowners who want confidence that income and debts are covered if health or life circumstances change.",
      "Self-employed professionals without employer sick pay or death-in-service benefits.",
      "Parents and couples with dependants who need clarity on appropriate life and critical illness cover.",
      "Anyone who has not reviewed protection for several years and is unsure whether existing policies still fit."
    ],
    approachHeading: "Our approach",
    approachItems: [
      "Needs before products: We quantify the financial impact of illness, death, or disability before recommending cover.",
      "Right cover, right structure: Policies are matched to your employment status, budget, and existing arrangements.",
      "Transparent comparisons: You see why one option is recommended over alternatives, including key exclusions.",
      "Holistic review: Protection sits alongside mortgage, investments, and retirement planning, not in isolation."
    ],
    timelineHeading: "Your protection review journey",
    timelineItems: [
      "Fact find: We discuss dependants, income, debts, existing policies, and what you want to protect.",
      "Gap analysis: We compare current cover against needs and highlight shortfalls or overlaps.",
      "Recommendation: You receive clear advice on types, sums assured, terms, and indicative costs.",
      "Application support: We help with applications, medical underwriting, and policy setup where needed.",
      "Periodic review: Cover is revisited after major life events, marriage, children, new mortgage, or job changes."
    ],
    faqHeading: "Protection: common questions",
    faqItems: [
      {
        question: "What types of protection do you advise on?",
        answer:
          "We advise on life insurance, critical illness cover, income protection, and related policies suited to personal and family needs. Recommendations depend on your circumstances and budget."
      },
      {
        question: "I have cover through work: do I still need personal policies?",
        answer:
          "Employer benefits are a useful starting point but may be limited, taxable, or end when you leave. We assess whether personal cover is needed to fill gaps."
      },
      {
        question: "How much life cover do I need?",
        answer:
          "There is no single formula. We look at outstanding debts, income replacement needs, dependants, and existing assets to recommend a level that meaningfully protects your plan."
      },
      {
        question: "What is the difference between critical illness and income protection?",
        answer:
          "Critical illness pays a lump sum on diagnosis of specified serious conditions. Income protection replaces a portion of earnings if you cannot work for health reasons. Many clients benefit from both, depending on priorities."
      },
      {
        question: "Can you review policies I bought years ago?",
        answer:
          "Yes. We assess whether terms, sums assured, and premiums still reflect your situation. Sometimes retaining cover is right; sometimes restructuring or additional cover is appropriate."
      },
      {
        question: "Will protection advice consider my mortgage and investments?",
        answer:
          "Absolutely. Protection planning works best when aligned with your mortgage commitments, emergency funds, and longer-term goals so cover levels stay coherent across your plan."
      }
    ] satisfies FaqItem[],
    relatedHeading: "Explore related advice",
    ctaHeading: "Review your protection needs",
    ctaBody:
      "Book a conversation to assess whether your current cover still protects your family and financial plan, or where gaps may exist.",
    body: serviceBody(
      "Protection is about keeping your wider financial plan on track when life does not go to plan. We review what you have today, identify gaps, and recommend cover that is proportionate, understandable, and affordable.",
      "You will know what each policy does, what it costs, and how it fits alongside your mortgage, savings, and long-term goals. As your family and income change, we help keep protection aligned so you are not underinsured, or paying for cover you no longer need."
    ),
    seo: {
      title: "Protection | BGK Financial Planning",
      description:
        "Needs-led protection and insurance advice to safeguard your family, income, and wider financial plan."
    }
  },
  {
    _id: "service-mortgage",
    title: "Mortgage Referrals",
    slug: "mortgage-advice",
    summary:
      "BGK does not provide mortgage advice directly. We refer clients to our trusted partner Hansard Owens for specialist mortgage and protection planning, while keeping property decisions aligned with your wider financial plan.",
    heroImageUrl: localMedia.services.mortgageAdvice,
    overviewImageUrl: localMedia.services.mortgageAdviceOverview,
    overviewImageAlt: "Couple packing boxes while preparing to move home",
    highlights: [
      "Trusted partner referral",
      "Specialist mortgage advice",
      "Aligned with your wider plan"
    ],
    overviewHeading: "Mortgage advice through a trusted partner",
    benefitsHeading: "Key benefits",
    benefitsItems: [
      "Right specialist: Regulated mortgage advice from Hansard Owens, covering residential purchases, remortgages, buy-to-let, and protection planning.",
      "Whole-plan context: BGK helps ensure property and borrowing decisions fit your investments, protection, and retirement goals before referral.",
      "Clear handover: We explain how the partnership works and what to expect when you speak with Hansard Owens.",
      "Ongoing coordination: Your wider financial plan continues with BGK alongside specialist mortgage support from our partner."
    ],
    includedHeading: "How the referral works",
    includedItems: [
      "Discussion of your property plans within your wider financial picture with BGK",
      "Referral and introduction to Hansard Owens for regulated mortgage advice",
      "Coordination so mortgage decisions align with protection, investments, and retirement planning",
      "Specialist support from Hansard Owens on affordability, product research, applications, and completion"
    ],
    audienceHeading: "Who this is for",
    audienceItems: [
      "First-time buyers referred to Hansard Owens for specialist guidance on affordability, deposits, and product choice.",
      "Home movers and upsizers who want mortgage advice coordinated with their wider financial commitments.",
      "Existing homeowners approaching the end of a fixed rate who need remortgage or product transfer advice.",
      "Buy-to-let investors seeking structured lending advice aligned to their wider property and tax position."
    ],
    approachHeading: "Our approach",
    approachItems: [
      "Financial context first: BGK reviews how a mortgage fits your income, outgoings, and longer-term goals before referral.",
      "Trusted introduction: We refer you to Hansard Owens, who provide regulated mortgage and protection advice in London.",
      "Transparent roles: You will know what BGK advises on, what Hansard Owens advises on, and how the two work together.",
      "Joined-up planning: Property decisions are considered alongside protection, investments, and retirement timelines."
    ],
    timelineHeading: "Your mortgage referral journey",
    timelineItems: [
      "Initial discussion: BGK explores your property plans, budget, and how borrowing fits your wider financial picture.",
      "Referral decision: We confirm whether specialist mortgage advice is needed and introduce you to Hansard Owens.",
      "Specialist advice: Hansard Owens assess affordability, research suitable products, and explain your options clearly.",
      "Application and completion: Hansard Owens support you through application, underwriting, and completion.",
      "Ongoing planning: BGK continues to review your wider plan as circumstances and mortgage terms change."
    ],
    faqHeading: "Mortgage referrals: common questions",
    faqItems: [
      {
        question: "Does BGK provide mortgage advice?",
        answer:
          "No. BGK Financial Planning does not provide regulated mortgage advice or arrange mortgages. We refer clients who need mortgage advice to our trusted partner, Hansard Owens, who are specialist mortgage and protection advisers."
      },
      {
        question: "Who is Hansard Owens?",
        answer:
          "Hansard Owens is our mortgage and protection planning partner based in London. They advise on first-time buyer mortgages, home moves, remortgages, buy-to-let, high net worth lending, equity release, and personal protection planning. Visit hansardowens.co.uk to learn more."
      },
      {
        question: "Can Hansard Owens help with buy-to-let mortgages?",
        answer:
          "Yes. Hansard Owens can advise on buy-to-let lending, portfolio reviews, and related protection needs, subject to your circumstances and their regulatory permissions."
      },
      {
        question: "Will BGK still help with my overall financial plan?",
        answer:
          "Yes. BGK continues to advise on investments, retirement, and protection. We coordinate so your mortgage decisions support your wider goals, even though the regulated mortgage advice itself is provided by Hansard Owens."
      },
      {
        question: "How are mortgage advice fees handled?",
        answer:
          "Any fees or remuneration for mortgage advice are agreed directly with Hansard Owens before you proceed. BGK does not receive mortgage procuration fees or arrange mortgages on your behalf."
      },
      {
        question: "How do I get started?",
        answer:
          "Contact BGK if you would like to discuss how a mortgage fits your wider plan and receive an introduction to Hansard Owens. You can also contact Hansard Owens directly via their website if you only need specialist mortgage advice."
      }
    ] satisfies FaqItem[],
    relatedHeading: "Explore related advice",
    ctaHeading: "Need mortgage advice?",
    ctaBody:
      "Speak with BGK to see how a mortgage fits your wider plan and receive an introduction to Hansard Owens, or contact our partner directly for specialist mortgage advice.",
    partner: {
      name: "Hansard Owens",
      url: "https://www.hansardowens.co.uk/",
      tagline: "Mortgage Advice & Protection Planning",
      description:
        "Hansard Owens provides specialist mortgage and protection advice in London, including first-time buyers, home moves, remortgages, buy-to-let, high net worth lending, equity release, and personal protection planning."
    },
    ctaExternalHref: "https://www.hansardowens.co.uk/",
    ctaExternalLabel: "Visit Hansard Owens",
    body: serviceBody(
      "A mortgage is often your largest financial commitment. BGK does not provide regulated mortgage advice, but we help clients understand how property and borrowing decisions fit their wider financial plan before referring them to our trusted partner, Hansard Owens.",
      "Hansard Owens provide specialist mortgage and protection advice for purchases, remortgages, buy-to-let, and related protection needs. BGK remains involved in your wider planning so investments, retirement, and protection stay aligned as your property position evolves."
    ),
    seo: {
      title: "Mortgage Advice Referral | BGK Financial Planning",
      description:
        "BGK refers clients to trusted partner Hansard Owens for specialist mortgage and protection advice, coordinated with your wider financial plan."
    }
  }
];

export const localServicesBySlug = Object.fromEntries(
  localServices.map((service) => [service.slug, service])
) as Record<string, ServiceItem>;
