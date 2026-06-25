import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Healthcare Brand Insights | S.D Consultancy',
};

const articleContent: Record<string, {
  category: string;
  color: string;
  title: string;
  date: string;
  readTime: string;
  intro: string;
  sections: Array<{ heading: string; content: string }>;
}> = {
  'clinical-excellence-brand-strategy': {
    category: 'Healthcare Branding',
    color: '#2E75B6',
    title: 'Why Clinical Excellence Alone Is No Longer Enough: The Case for Healthcare Brand Strategy',
    date: 'June 15, 2025',
    readTime: '8 min read',
    intro: "In an era where patients have unprecedented access to information and options, clinical quality is the baseline — not the differentiator. The hospital that consistently delivers exceptional outcomes is meeting expectations, not exceeding them. Brand strategy is how leading healthcare organizations move from being 'good' to being 'the choice.'",
    sections: [
      {
        heading: 'The Commoditization of Clinical Excellence',
        content: "Twenty years ago, a hospital with NABH accreditation and internationally trained surgeons had a genuine competitive advantage. Today, quality certifications are table stakes, and patients can access that information on your competitor's website before they ever engage with yours. The differentiation that once came from clinical capability now needs to come from brand — from the emotional, relational, and experiential dimensions of your healthcare organization.",
      },
      {
        heading: 'What Brand Strategy Actually Means in Healthcare',
        content: "Healthcare brand strategy is not about logos, taglines, or advertising campaigns — though those are outputs. It is about defining precisely what your organization stands for in the minds of patients, physicians, payers, and partners. It is about creating a coherent narrative that connects your clinical capabilities to the deeper human needs your patients bring to you. It is about making a promise — and delivering on it consistently across every touchpoint.",
      },
      {
        heading: 'The Evidence for Brand Investment',
        content: "The data is unambiguous: healthcare organizations with strong brands command premium pricing, attract better talent, build deeper physician referral relationships, and achieve higher patient lifetime value. A 2024 study of Indian hospital networks found that brands in the top quartile of patient perception scores achieved 28% higher revenue per patient and 35% lower patient acquisition costs than bottom-quartile peers. Brand is not a soft investment — it is a business multiplier.",
      },
      {
        heading: 'Building a Healthcare Brand Strategy That Works',
        content: "The most effective healthcare brand strategies share three characteristics: they are grounded in deep patient and stakeholder insight, they translate clinical capability into meaningful human benefit, and they are expressed consistently across every experience — from the first Google search to the post-discharge follow-up call. Strategy precedes execution. Get the strategic foundation right, and everything else flows from it.",
      },
    ],
  },
  'referral-ecosystem-physician-networks': {
    category: 'Hospital Marketing Strategy',
    color: '#4F8A77',
    title: 'The Referral Ecosystem: Building Physician Networks That Drive Sustainable Growth',
    date: 'June 5, 2025',
    readTime: '6 min read',
    intro: "Physician referral networks remain the single most powerful driver of sustainable hospital growth. Yet most healthcare organizations treat referral development as a tactical sales exercise rather than a strategic priority. The organizations that win long-term build referral ecosystems — structured, data-driven, relationship-first programs that turn physicians into genuine brand advocates.",
    sections: [
      {
        heading: 'Why Referral Networks Are Under-Invested',
        content: "Most hospitals allocate disproportionate resources to direct-to-patient advertising while underinvesting in physician engagement. This reflects a fundamental misunderstanding of how patients actually make complex healthcare decisions. For high-value service lines — cardiology, oncology, orthopaedics, fertility — the referring physician remains the most trusted source of recommendation. A patient who is told by their trusted GP to visit your hospital is infinitely more valuable than one who found you through an ad.",
      },
      {
        heading: 'The Three Dimensions of Physician Loyalty',
        content: "Physician loyalty is not earned through gifts or generic CME events. It is built across three dimensions: clinical trust (confidence in your outcomes and capabilities), communication quality (reliable, fast, respectful communication about shared patients), and relationship depth (genuine personal connection and recognition). Most referral programs fail because they focus only on the first dimension while neglecting the other two.",
      },
      {
        heading: 'Designing the Referral Ecosystem',
        content: "An effective referral ecosystem has three layers. The first is intelligence — knowing exactly who your referring physicians are, what they value, what information they need, and how they prefer to communicate. The second is engagement — a structured program of CME events, practice support, outcome sharing, and relationship touchpoints. The third is measurement — tracking referral volumes, conversion rates, and physician satisfaction with relentless precision.",
      },
      {
        heading: 'Technology and the Modern Referral Network',
        content: "Digital tools are transforming referral management. Dedicated referral portals, mobile communication platforms, and outcome dashboards give referring physicians real-time access to patient status and outcomes. Organizations that build digital-first referral infrastructure not only improve physician experience but gain competitive differentiation in markets where physician loyalty is genuinely contested.",
      },
    ],
  },
  'patient-digital-journey-design': {
    category: 'Digital Health',
    color: '#B8924A',
    title: 'Patient Digital Journey Design: From First Search to Brand Loyalty',
    date: 'May 22, 2025',
    readTime: '10 min read',
    intro: "The patient decision journey begins long before the first appointment — and extends long after the final discharge. In today's digital-first healthcare environment, every touchpoint between a patient and your brand is an opportunity to build trust, deepen relationship, and create the conditions for advocacy. Designing that journey intentionally is one of the highest-ROI investments a healthcare organization can make.",
    sections: [
      {
        heading: 'The Five Stages of the Patient Digital Journey',
        content: "Modern patients navigate five distinct stages in their healthcare decision journey: Awareness (discovering your brand exists), Consideration (evaluating your capabilities against alternatives), Decision (choosing to book an appointment), Experience (their clinical and service experience with your organization), and Advocacy (recommending your organization to others). Each stage requires a different communications strategy, different content, and different success metrics.",
      },
      {
        heading: 'Winning the Awareness Stage',
        content: "For most healthcare conditions, the patient journey begins with a Google search. This makes healthcare SEO the most critical awareness investment for any provider organization. But organic search is only part of the picture. Social proof — reviews, ratings, patient testimonials — shapes initial perception before a patient has ever visited your website. Organizations that actively manage their digital reputation at the awareness stage convert significantly more searchers into consideration-stage prospects.",
      },
      {
        heading: 'The Consideration Stage Is Where Most Hospitals Lose',
        content: "A patient who visits your website is in active consideration. They are evaluating you against alternatives, forming impressions based on website quality, content depth, doctor profiles, and patient reviews. Yet most hospital websites fail at this critical stage — with outdated content, poor mobile experiences, and doctor profiles that read like academic CVs rather than trust-building communications. The consideration stage is where outstanding digital design delivers the highest ROI.",
      },
      {
        heading: 'Designing for Advocacy',
        content: "Patient advocacy — the state where patients proactively recommend your organization to friends and family — is the gold standard outcome of patient experience design. It is not accidental. Organizations that achieve high advocacy rates design for it intentionally: through post-discharge communication, patient education programs, community events, and systematic collection and amplification of patient stories. Advocacy is the most cost-effective form of patient acquisition available.",
      },
    ],
  },
  'clinical-outcomes-data-storytelling': {
    category: 'Healthcare Communications',
    color: '#1F3A5F',
    title: 'Communicating Clinical Outcomes: The Art and Science of Healthcare Data Storytelling',
    date: 'May 10, 2025',
    readTime: '7 min read',
    intro: "Clinical outcomes data is one of the most powerful assets a healthcare organization possesses — and one of the most systematically underutilized. The challenge is not a lack of data. It is the translation of complex clinical information into communications that build trust, inspire confidence, and drive patient decision-making without compromising scientific integrity.",
    sections: [
      {
        heading: 'Why Outcomes Data Is Underused in Healthcare Marketing',
        content: "Most healthcare organizations collect extensive clinical outcomes data — success rates, complication rates, length of stay, readmission rates — but fail to communicate it effectively. There are two reasons. The first is regulatory caution: compliance teams are rightly concerned about misleading health claims. The second is communication failure: clinical data is presented in the language of researchers rather than the language of patients. The solution is not to communicate less — it is to communicate more skillfully.",
      },
      {
        heading: 'The Hierarchy of Clinical Claims',
        content: "Not all outcomes data is equally communicable. At the base of the hierarchy are technical metrics — measures that are meaningful to clinicians but opaque to patients. At the top are outcome narratives — patient stories that translate clinical success into human experience. The most effective outcomes communications ladder from technical credibility at the foundation (supporting physician confidence) to human narrative at the peak (driving patient decision-making).",
      },
      {
        heading: 'Patient Story as Outcomes Communication',
        content: "A well-constructed patient story is the single most effective form of outcomes communication available to healthcare organizations. It translates clinical outcomes into emotional reality. It answers the question every patient actually asks: 'Could this be my story?' The best patient stories are rigorously accurate, sensitively produced, and structurally designed to address the specific fears and hopes of the target patient population.",
      },
      {
        heading: 'The Ethics of Healthcare Data Communication',
        content: "Communicating clinical outcomes ethically requires three commitments: accuracy (data that is verifiable and contextually presented), balance (acknowledgment of limitations and appropriate patient selection criteria), and transparency (clear sourcing and methodology). Organizations that communicate outcomes ethically — rather than selectively — build deeper physician trust and demonstrate the clinical confidence that is the hallmark of genuine market leadership.",
      },
    ],
  },
  'hcp-engagement-digital-age': {
    category: 'MedTech Growth',
    color: '#2E75B6',
    title: 'HCP Engagement in the Digital Age: Rethinking Medical Representative Strategies',
    date: 'April 28, 2025',
    readTime: '9 min read',
    intro: "The traditional medical representative model — built on face-to-face detailing, sample drops, and relationship-driven engagement — is under profound pressure. Digital channels have transformed how healthcare professionals access information, evaluate products, and make prescribing decisions. MedTech and pharmaceutical organizations that fail to redesign their HCP engagement strategies for the digital age will find themselves increasingly invisible to the physicians they need to reach.",
    sections: [
      {
        heading: 'The Structural Shift in HCP Information Consumption',
        content: "Healthcare professionals today consume the majority of their clinical and product information through digital channels — peer-reviewed publications accessed online, webinars, medical social networks, and increasingly, curated digital newsletters. The medical representative, who once controlled access to product information, now competes with an overwhelming volume of digital content for physician attention. The organizations that win are those that deliver genuine clinical value through digital channels rather than relying on relationship-based access.",
      },
      {
        heading: 'The Role of the Medical Representative in 2026',
        content: "The medical representative is not obsolete — but their role has fundamentally shifted. From information deliverer to clinical consultant. From relationship maintainer to complex problem-solver. From product detailer to patient pathway advisor. The highest-performing medical representatives in 2026 are those equipped with deep clinical knowledge, real-time digital tools, and the ability to have consultative conversations that a digital channel cannot replicate.",
      },
      {
        heading: 'Building a Digital-First HCP Engagement Platform',
        content: "An effective digital HCP engagement platform has five components: a high-quality content library (clinical data, case studies, patient education resources), a physician-facing digital portal (for product information, patient materials, and outcome tracking), an educational webinar program (regular CME content delivered by KOLs), a digital communication workflow (personalized, relevant, and respectful of physician time), and an analytics system (to understand what content drives engagement and conversion).",
      },
      {
        heading: 'Measuring HCP Engagement Effectiveness',
        content: "Digital HCP engagement is measurable in ways that traditional detailing never was. Content engagement rates, webinar attendance, portal logins, and digital communication response rates all provide real-time insight into physician interest and intent. Organizations that build robust measurement frameworks for their HCP engagement programs gain a significant competitive advantage — the ability to optimize in real time and allocate resources to the physicians and content types that drive the most commercial impact.",
      },
    ],
  },
  'holistic-patient-experience-advocacy': {
    category: 'Patient Experience',
    color: '#4F8A77',
    title: 'Beyond Treatment: Designing the Holistic Patient Experience That Builds Advocacy',
    date: 'April 15, 2025',
    readTime: '8 min read',
    intro: "Patient experience extends far beyond clinical care. From the moment a patient first discovers your organization to the months following their treatment, every interaction shapes their perception, their loyalty, and their willingness to recommend you to others. Healthcare organizations that design the holistic patient experience — not just the clinical encounter — consistently outperform peers on every metric that matters.",
    sections: [
      {
        heading: 'The Seven Moments of Patient Experience',
        content: "Patient experience is not a single event — it is a series of discrete moments, each of which contributes to the overall emotional impression of your organization. The seven critical moments are: Discovery (how patients find you), First Contact (their initial call or digital enquiry), Pre-Appointment (the period between booking and arriving), Arrival (physical and emotional first impression), Clinical Encounter (the core care experience), Departure (discharge communication and emotional closure), and Follow-Up (post-care communication and recovery support). Excellence at each moment compounds.",
      },
      {
        heading: 'The Physical Environment as Brand Communication',
        content: "Your physical environment communicates your brand values before a clinical word is spoken. The quality of your reception area, the cleanliness of your facilities, the behaviour of your administrative staff, the clarity of your wayfinding — all of these form the non-clinical patient experience that shapes overall satisfaction scores. Healthcare organizations that invest in environmental design as a brand strategy tool consistently outperform those that treat physical environment as a facilities management issue rather than a patient experience priority.",
      },
      {
        heading: 'Staff as Experience Designers',
        content: "Every member of your staff — from the radiographer to the billing executive — is a patient experience designer. Organizations that achieve the highest advocacy scores train and empower all staff to think about patient experience, not just technical role delivery. This requires investment in culture change, communication training, and the measurement systems that make patient experience visible to every team member — not just patient relations staff.",
      },
      {
        heading: 'From Satisfaction to Advocacy',
        content: "Patient satisfaction is necessary but insufficient. Satisfaction means you met expectations. Advocacy means you exceeded them so significantly that patients actively recommend you to others. The gap between satisfaction and advocacy is the gap between adequate and extraordinary. Organizations that close that gap do so by designing moments of unexpected delight — the personal follow-up call from the surgeon, the handwritten card from the nursing team, the patient education session that answers every question the patient was afraid to ask.",
      },
    ],
  },
  'physician-loyalty-referral-science': {
    category: 'Referral Network Development',
    color: '#B8924A',
    title: 'The Science of Physician Loyalty: What Makes Doctors Refer — And Keep Referring',
    date: 'April 5, 2025',
    readTime: '11 min read',
    intro: "Physician referral decisions are among the highest-stakes choices in healthcare commerce. When a GP refers their patient to a specialist or hospital, they are making a trust decision — trusting the receiving organization with their patient's health and their own professional reputation. Understanding what drives that trust, what sustains it, and what destroys it is the foundation of any effective referral network strategy.",
    sections: [
      {
        heading: 'The Trust Architecture of Physician Referral',
        content: "Physicians refer to organizations and colleagues they trust. That trust has four components: clinical confidence (trust in outcomes and capabilities), communication trust (confidence that the receiving organization will keep them informed about their patient), relationship trust (a genuine personal connection with the receiving team), and reputational trust (confidence that the referral reflects well on their own professional judgment). Most referral programs focus exclusively on clinical confidence while neglecting the other three — which is why most referral programs underperform.",
      },
      {
        heading: 'The Communication Factor',
        content: "Communication quality is the most frequently cited reason physicians stop referring to a specific hospital or specialist. When a patient is referred and the referring physician receives no feedback — no discharge summary, no outcome report, no courtesy call — the relationship is damaged. When this happens repeatedly, the referring physician finds an alternative. Organizations that systematically invest in referring physician communication — timely discharge summaries, regular outcome updates, dedicated relationship managers — see measurable improvement in referral loyalty within 6-12 months.",
      },
      {
        heading: 'Building the Physician Loyalty Program',
        content: "A physician loyalty program is not a transaction — it is a relationship architecture. The most effective programs have three tiers. The foundation tier serves all referring physicians with consistent communication quality, accessible clinical support, and regular educational engagement. The middle tier provides enhanced support — dedicated coordinator access, priority appointment scheduling, practice development assistance — to physicians who refer above a defined threshold. The top tier reserves executive relationship management, co-branded patient education, and joint research opportunities for the highest-value KOL relationships.",
      },
      {
        heading: 'Measuring Physician Loyalty',
        content: "Physician loyalty is measurable. The key metrics are referral volume trends (growing, stable, or declining), referral breadth (the range of conditions referred from a single physician), advocacy behaviour (whether the physician recommends your organization to colleagues), and physician satisfaction scores (systematically collected through regular survey or interview programs). Organizations that measure these metrics consistently can identify loyalty threats before they become referral losses — and intervene with targeted relationship investment.",
      },
    ],
  },
  'hospital-rebranding-strategic-playbook': {
    category: 'Healthcare Branding',
    color: '#2E75B6',
    title: 'Rebranding a Hospital: The Complete Strategic Playbook',
    date: 'March 20, 2025',
    readTime: '14 min read',
    intro: "A hospital rebrand is one of the highest-stakes strategic decisions an organization can make. Done well, it repositions the organization for sustainable growth, energizes staff, and creates a platform for the next decade of market leadership. Done poorly, it wastes significant investment, confuses stakeholders, and can actively damage the reputation it was meant to strengthen. This guide provides the complete strategic playbook.",
    sections: [
      {
        heading: 'When Rebranding Is the Right Decision',
        content: "Not every brand challenge requires a full rebrand. Before committing to a rebranding process, healthcare organizations should be clear about what problem they are solving. Rebranding is appropriate when the existing brand no longer accurately reflects the organization's capabilities or aspirations, when a merger or acquisition has created brand complexity that confuses stakeholders, when the organization is entering new markets or service lines that the current brand cannot credibly support, or when the brand has become a competitive liability in recruitment, physician engagement, or patient acquisition.",
      },
      {
        heading: 'The Strategic Foundation: Before Any Creative Work',
        content: "The most common rebranding failure is beginning with creative — visual identity, logo design, campaign concepts — before completing the strategic work. A rebrand without a clear positioning strategy is design for its own sake. The strategic foundation must include: a rigorous audit of the current brand's strengths and weaknesses, a competitive positioning analysis, deep research with key stakeholders (patients, physicians, staff, community leaders), and a clear articulation of the new brand positioning, personality, and promise.",
      },
      {
        heading: 'Stakeholder Management: The Most Underestimated Dimension',
        content: "Hospital rebranding involves the most complex stakeholder landscape of any sector. Clinical staff may feel that a rebrand implies the current brand is inadequate. Long-serving employees may have strong emotional attachment to the existing identity. Board members may have conflicting opinions on direction. Community stakeholders may feel that a beloved local institution is being 'corporatized.' Managing these stakeholders — with transparency, inclusion, and a clear narrative about why the rebrand serves everyone's interests — is as important as the creative work itself.",
      },
      {
        heading: 'Launch and Embedding: Where Rebrands Live or Die',
        content: "The launch of a new hospital brand is a moment of extraordinary opportunity — or extraordinary risk. Organizations that launch a new brand without embedding it into the lived experience of patients and staff quickly find that the brand exists only in marketing materials while the old culture persists underneath. Brand embedding requires investment in staff training and culture, systematic updating of all physical and digital touchpoints, a sustained communications campaign that explains the new brand to all stakeholders, and a measurement framework that tracks brand health in the months following launch.",
      },
    ],
  },
  'hospital-seo-organic-patient-acquisition': {
    category: 'Digital Health',
    color: '#4F8A77',
    title: 'SEO for Hospitals: The Definitive Guide to Organic Patient Acquisition',
    date: 'March 8, 2025',
    readTime: '12 min read',
    intro: "Healthcare SEO is uniquely complex. YMYL (Your Money Your Life) guidelines mean Google applies its highest quality standards to medical content. Local SEO determines whether patients in your catchment area find you. Medical terminology creates both content opportunity and keyword research complexity. Reputation management intersects with technical SEO in ways that affect both rankings and conversion. This definitive guide covers everything healthcare marketers need to know.",
    sections: [
      {
        heading: 'Why Healthcare SEO Is Different',
        content: "Google treats healthcare content differently from almost any other category. Under YMYL guidelines, medical information that could affect someone's health, safety, or financial wellbeing is held to an exceptionally high quality standard. This means that healthcare SEO success requires not just technical optimization but genuine clinical expertise expressed through high-quality content, demonstrable E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), and a digital reputation that reflects real-world clinical excellence.",
      },
      {
        heading: 'Local SEO: The Foundation of Hospital Search Visibility',
        content: "For most healthcare providers, local search is the primary battleground. A patient searching for 'best cardiologist in Mumbai' or 'IVF clinic near me' is looking for a local provider, and local SEO determines whether your organization appears in those results. The foundations of local healthcare SEO are: a fully optimized and actively managed Google Business Profile, consistent NAP (name, address, phone) information across all directories, a systematic approach to patient review generation and management, and local content that addresses the specific health concerns of your catchment population.",
      },
      {
        heading: 'Content Strategy for Healthcare SEO',
        content: "Content is the primary driver of organic search visibility for healthcare organizations. The most effective healthcare content strategies are built on three content types: condition and treatment information (answering the questions patients search when they or a family member are diagnosed), doctor and department profiles (capturing the significant search volume directed at specific physicians or specialties), and thought leadership (positioning your clinical team as trusted experts through research publications, clinical commentary, and patient education). Each content type serves different stages of the patient journey and different search intents.",
      },
      {
        heading: 'Measuring Healthcare SEO Performance',
        content: "Healthcare SEO measurement must connect digital performance to commercial outcomes. The primary metrics are organic search traffic by condition and service line, local pack visibility and click-through rates, new patient appointment enquiries attributed to organic search, and cost per organically acquired patient compared to paid acquisition. Organizations that build this measurement infrastructure — connecting SEO metrics to appointment booking systems and patient CRM data — gain the ability to optimize their SEO investment with precision and demonstrate clear ROI to organizational leadership.",
      },
    ],
  },
};

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = articleContent[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1F3A5F] dark:text-white mb-4">Article not found</h1>
          <Link href="/insights" className="text-[#2E75B6] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
              style={{ color: article.color, backgroundColor: article.color + '25' }}
            >
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-[#0f1923]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-[#3A3A3A]/80 dark:text-white/70 leading-relaxed mb-12 font-medium border-l-4 pl-6" style={{ borderColor: article.color }}>
              {article.intro}
            </p>

            <div className="space-y-10">
              {article.sections.map((section) => (
                <div key={section.heading} className="prose-healthcare">
                  <h2 className="dark:text-white">{section.heading}</h2>
                  <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-16 p-8 rounded-2xl border-2" style={{ borderColor: article.color + '40', backgroundColor: article.color + '08' }}>
              <h3 className="text-xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">
                Ready to Build Your Healthcare Brand Strategy?
              </h3>
              <p className="text-[#3A3A3A]/65 dark:text-white/60 mb-5">
                Schedule a strategy consultation to discuss how S.D Consultancy can help your organization achieve market leadership.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                style={{ backgroundColor: article.color }}
              >
                Book a Strategy Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
