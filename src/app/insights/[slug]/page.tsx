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
    date: 'June 15, 2026',
    readTime: '8 min read',
    intro: "In an era where patients have unprecedented access to information and options, clinical quality is the baseline — not the differentiator. The hospital that consistently delivers exceptional outcomes is meeting expectations, not exceeding them. Brand strategy is how leading healthcare organizations move from being 'good' to being 'the choice.'",
    sections: [
      {
        heading: 'The Commoditization of Clinical Excellence',
        content: 'Twenty years ago, a hospital with NABH accreditation and internationally trained surgeons had a genuine competitive advantage. Today, quality certifications are table stakes, and patients can access that information on your competitor\'s website before they ever engage with yours. The differentiation that once came from clinical capability now needs to come from brand — from the emotional, relational, and experiential dimensions of your healthcare organization.',
      },
      {
        heading: 'What Brand Strategy Actually Means in Healthcare',
        content: 'Healthcare brand strategy is not about logos, taglines, or advertising campaigns — though those are outputs. It is about defining precisely what your organization stands for in the minds of patients, physicians, payers, and partners. It is about creating a coherent narrative that connects your clinical capabilities to the deeper human needs your patients bring to you. It is about making a promise — and delivering on it consistently across every touchpoint.',
      },
      {
        heading: 'The Evidence for Brand Investment',
        content: 'The data is unambiguous: healthcare organizations with strong brands command premium pricing, attract better talent, build deeper physician referral relationships, and achieve higher patient lifetime value. A study of Indian hospital networks found that brands in the top quartile of patient perception scores achieved 28% higher revenue per patient and 35% lower patient acquisition costs than bottom-quartile peers. Brand is not a soft investment — it is a business multiplier.',
      },
      {
        heading: 'Building a Healthcare Brand Strategy That Works',
        content: 'The most effective healthcare brand strategies share three characteristics: they are grounded in deep patient and stakeholder insight, they translate clinical capability into meaningful human benefit, and they are expressed consistently across every experience — from the first Google search to the post-discharge follow-up call. Strategy precedes execution. Get the strategic foundation right, and everything else flows from it.',
      },
    ],
  },
  'referral-ecosystem-physician-networks': {
    category: 'Hospital Marketing Strategy',
    color: '#4F8A77',
    title: 'The Referral Ecosystem: Building Physician Networks That Drive Sustainable Growth',
    date: 'June 5, 2026',
    readTime: '6 min read',
    intro: 'Physician referrals remain the single most powerful growth lever for hospitals and specialty centres. Yet most healthcare organizations treat referral development as a relationship management task rather than a strategic communications discipline. The result is inconsistent, unscalable growth that depends entirely on individual relationships rather than systemic excellence.',
    sections: [
      {
        heading: 'Why Referral Networks Are Strategic Assets',
        content: 'A well-designed referral ecosystem is one of the most defensible competitive advantages in healthcare. It combines relationship capital, clinical reputation, and communication consistency into a network effect that compounds over time. Hospitals that invest strategically in referral development consistently outperform peers in volume, case complexity, and revenue per patient. Yet fewer than 20% of hospitals have a formal, structured approach to referral strategy.',
      },
      {
        heading: 'The Four Drivers of Physician Referral Decisions',
        content: 'Physicians refer based on four interconnected factors: clinical confidence (do they trust the receiving institution?), communication quality (are they kept informed about their patients?), relationship depth (is there a real professional connection?), and operational ease (is the referral process frictionless?). Most hospitals focus exclusively on clinical reputation and neglect the other three — which are often more decisive in the actual referral moment.',
      },
      {
        heading: 'Designing a Scalable Referral Communications System',
        content: 'Sustainable referral growth requires systems, not just relationships. This means a structured physician communication program — regular clinical updates, case follow-up protocols, CME events, and digital engagement — that maintains relationship quality at scale. It means a referral management infrastructure that makes the process easy for both the referring physician and the patient. And it means measurement: tracking referral volumes, sources, case mix, and relationship health across your physician network.',
      },
      {
        heading: 'From Transactional to Partnership: The KOL Approach',
        content: 'The highest-value referral relationships are partnerships, not transactions. Key Opinion Leader (KOL) programs identify the physicians whose influence extends beyond their own practice — those who train residents, speak at conferences, and shape the clinical opinions of their peers. Investing in these relationships through research partnerships, advisory roles, and thought leadership platforms creates referral loyalty that is nearly impossible for competitors to displace.',
      },
    ],
  },
  'patient-digital-journey-design': {
    category: 'Digital Health',
    color: '#B8924A',
    title: 'Patient Digital Journey Design: From First Search to Brand Loyalty',
    date: 'May 22, 2026',
    readTime: '10 min read',
    intro: 'The patient decision journey has been transformed by digital access. Before a patient books an appointment, they have typically searched the condition, compared hospitals, read reviews, visited your website, and formed a strong opinion — all without speaking to a single member of your team. How you show up in each of these digital moments determines whether you get the appointment.',
    sections: [
      {
        heading: 'Mapping the Five Stages of the Digital Patient Journey',
        content: 'The digital patient journey moves through five distinct stages: Awareness (recognizing a symptom or health need), Research (understanding options and providers), Evaluation (comparing and short-listing hospitals), Decision (booking an appointment), and Advocacy (sharing experience and referring others). Each stage requires different digital content, different emotional registers, and different conversion mechanisms. Most hospital digital strategies focus almost exclusively on the decision stage — and miss the crucial earlier stages where brand perception is formed.',
      },
      {
        heading: 'The Critical Role of Search in Healthcare Discovery',
        content: 'For most healthcare conditions, the patient journey begins with a search query — often symptom-based rather than brand-based. "Best cardiologist in Mumbai," "IVF success rates India," "knee replacement surgery cost" — these are the entry points of patient discovery. Hospitals that invest in comprehensive healthcare SEO — including local SEO, condition-specific content, and physician profile optimization — capture patients at the highest-intent moment of their journey.',
      },
      {
        heading: 'Designing Digital Touchpoints That Build Trust',
        content: 'Trust is the currency of healthcare. Every digital touchpoint — website, social media, review platforms, WhatsApp — either builds or erodes it. High-trust digital touchpoints share three characteristics: they demonstrate clinical expertise clearly, they put patient experience at the center of the narrative, and they make it easy to take the next step. A world-class clinical website that makes appointment booking difficult loses patients to a mediocre competitor with a simple booking flow.',
      },
      {
        heading: 'From Patient to Brand Advocate: The Advocacy Loop',
        content: 'The most powerful growth mechanism in healthcare is patient advocacy — the moment a satisfied patient becomes an active recommender. Digital advocacy loops are built through post-care engagement: follow-up communications, patient community platforms, review solicitation programs, and patient story content. Hospitals that systematically nurture the post-care relationship create an organic referral engine that grows without paid media investment.',
      },
    ],
  },
  'clinical-outcomes-data-storytelling': {
    category: 'Healthcare Communications',
    color: '#1F3A5F',
    title: 'Communicating Clinical Outcomes: The Art and Science of Healthcare Data Storytelling',
    date: 'May 10, 2026',
    readTime: '7 min read',
    intro: 'Clinical outcomes data is one of the most powerful — and most underutilized — assets in healthcare marketing. When communicated well, it transforms abstract quality claims into concrete evidence of excellence. When communicated poorly, it either overwhelms lay audiences with jargon or understates the genuine achievement it represents. The challenge is translating clinical rigor into human resonance.',
    sections: [
      {
        heading: 'Why Outcomes Data Matters More Than Ever',
        content: 'Patients are increasingly sophisticated healthcare consumers. They want evidence, not promises. Surgical success rates, complication rates, readmission rates, patient satisfaction scores — this data, when presented credibly and comprehensibly, differentiates healthcare brands in ways that taglines and advertising cannot. Regulatory bodies in several markets now mandate public reporting of quality metrics, making outcomes transparency a competitive imperative, not just a marketing choice.',
      },
      {
        heading: 'The Three Audiences for Clinical Outcomes Communication',
        content: 'Outcomes data needs to work for three very different audiences: patients (who want reassurance and understanding), referring physicians (who want clinical specificity and credibility), and payers/procurers (who want comparative benchmarking and cost-effectiveness data). Effective healthcare communications teams develop distinct outcomes messaging for each audience — using the same underlying data but translating it into the language, format, and channels that resonate with each group.',
      },
      {
        heading: 'The Storytelling Framework for Clinical Data',
        content: 'Raw data doesn\'t move people — stories do. The most effective clinical outcomes communications combine quantitative evidence with qualitative narrative: a survival rate becomes meaningful when paired with a patient story; a complication rate becomes powerful when explained through the clinical processes that achieve it. The framework: lead with the human impact, support with the evidence, contextualize with the process, and invite the reader to take action.',
      },
      {
        heading: 'Ethical Considerations in Outcomes Communication',
        content: 'Healthcare communicators bear a special responsibility to communicate outcomes with accuracy, context, and integrity. Cherry-picking favorable metrics, presenting uncontextualized comparisons, or making causal claims from correlational data damages trust and can mislead patients making important health decisions. The standard should be: would a clinical peer reviewing this communication find it accurate and appropriately contextualized? If not, revise before publishing.',
      },
    ],
  },
  'hcp-engagement-digital-age': {
    category: 'MedTech Growth',
    color: '#2E75B6',
    title: 'HCP Engagement in the Digital Age: Rethinking Medical Representative Strategies',
    date: 'April 28, 2026',
    readTime: '9 min read',
    intro: 'The traditional medical representative model — built on face-to-face detailing, sample distribution, and relationship management — is under structural pressure. Increasing physician time constraints, digital communication preferences, and post-pandemic behavioral shifts have fundamentally altered how healthcare professionals want to engage with industry. The winners in HCP engagement are those rebuilding the model from the physician perspective out.',
    sections: [
      {
        heading: 'The Collapse of the Traditional Detailing Model',
        content: 'The average physician today has less than two minutes of undivided attention for a medical representative — down from over seven minutes a decade ago. Access restrictions in hospitals and clinics have increased dramatically. And physician preference surveys consistently show that digital channels now rival or exceed in-person detailing for scientific information delivery. The model that built the pharmaceutical and medtech industries is not disappearing, but it is being fundamentally restructured.',
      },
      {
        heading: 'The Four Pillars of Modern HCP Engagement',
        content: 'Effective HCP engagement in the digital age rests on four pillars: Scientific credibility (peer-reviewed data, clinical evidence, and genuine medical education rather than promotional messaging), Digital accessibility (content and interactions available when and where physicians want them), Relevance (personalized to specialty, practice type, and patient population), and Relationship depth (technology enabling rather than replacing genuine professional relationships). Organizations that master all four build referral and prescription loyalty that persists across sales force transitions.',
      },
      {
        heading: 'Building a Digital HCP Engagement Ecosystem',
        content: 'A modern HCP engagement ecosystem combines multiple touchpoints: a dedicated physician portal with clinical resources and CME content, targeted digital detailing through approved channels, medical education webinars and virtual conferences, scientific publications and white papers, and peer-to-peer KOL networks. The integration of these touchpoints — with consistent messaging, personalized content delivery, and clear calls to action — creates a physician engagement system that scales beyond what a traditional sales force can achieve.',
      },
      {
        heading: 'Measuring HCP Engagement Effectiveness',
        content: 'The shift to digital HCP engagement enables measurement at a depth impossible with traditional detailing. Engagement metrics (content consumption, event attendance, portal activity), conversion metrics (prescription/adoption rates, referral volumes), and relationship metrics (NPS scores, advisory participation) create a comprehensive picture of engagement effectiveness. Organizations that invest in this measurement infrastructure can optimize their HCP engagement investment with precision — directing resources to the highest-impact interactions and channels.',
      },
    ],
  },
  'holistic-patient-experience-advocacy': {
    category: 'Patient Experience',
    color: '#4F8A77',
    title: 'Beyond Treatment: Designing the Holistic Patient Experience That Builds Advocacy',
    date: 'April 15, 2026',
    readTime: '8 min read',
    intro: 'Patient experience is not a department — it is the sum of every interaction a patient has with your healthcare organization, from their first online search to their last follow-up call. Organizations that understand this build systematic advantages in patient retention, referral generation, and brand reputation that are nearly impossible for competitors to replicate quickly.',
    sections: [
      {
        heading: 'The Seven Dimensions of Patient Experience',
        content: 'Comprehensive patient experience encompasses seven dimensions: Access (can patients reach you easily?), Communication (are they informed and heard?), Care Quality (do they feel clinically excellent care?), Safety (do they feel protected?), Respect (are they treated with dignity?), Coordination (does their care feel seamless?), and Follow-up (are they supported after discharge?). Most healthcare organizations perform well on some dimensions and poorly on others. The breakthrough comes from excellence across all seven.',
      },
      {
        heading: 'The Economics of Patient Experience Investment',
        content: 'The business case for patient experience investment is compelling. Hospitals in the top quartile of patient experience scores achieve 50% higher operating margins than bottom-quartile peers. A 5% improvement in patient retention delivers 25-95% improvement in profitability, depending on the care context. And patient advocacy — satisfied patients actively referring family and friends — has a customer acquisition cost of effectively zero. Patient experience is not a cost center. It is one of the highest-return investments in healthcare.',
      },
      {
        heading: 'Designing Moments That Matter',
        content: 'Patient experience design focuses on identifying and optimizing the moments that most influence patient perception. These "moments of truth" vary by specialty and care context, but commonly include: the first appointment booking interaction, the waiting room experience, the initial physician consultation, the communication of diagnosis, the discharge planning conversation, and the first follow-up contact. Systematically improving these moments — through process design, staff training, environmental design, and communication templates — creates measurable improvements in patient satisfaction.',
      },
      {
        heading: 'From Satisfaction to Advocacy: Closing the Loop',
        content: 'Patient satisfaction is necessary but not sufficient for advocacy. Advocacy — the active recommendation of your hospital to family and friends — requires emotional connection that goes beyond clinical competence and operational efficiency. It requires moments of genuine human care: the nurse who remembers a patient\'s name, the follow-up call that comes before the patient has to ask, the physician who explains a diagnosis in terms the patient\'s family can understand. These moments cannot be process-engineered — they require a culture of care that is built intentionally and sustained over time.',
      },
    ],
  },
  'physician-loyalty-referral-science': {
    category: 'Referral Network Development',
    color: '#B8924A',
    title: 'The Science of Physician Loyalty: What Makes Doctors Refer — And Keep Referring',
    date: 'April 5, 2026',
    readTime: '11 min read',
    intro: 'Physician referral loyalty is one of the most valuable and most misunderstood assets in healthcare. It is built on trust, communication, and relationship depth — not on gifts, events, or entertainment. The hospitals that sustain superior referral performance over time are those that have invested systematically in earning and maintaining physician confidence through clinical excellence and communication consistency.',
    sections: [
      {
        heading: 'What Physicians Actually Want From Referral Relationships',
        content: 'Research consistently shows that physicians make referral decisions based on three primary factors: clinical trust (confidence that their patients will receive excellent care), communication quality (timely, detailed feedback on referred patients), and relationship ease (a referral process that is simple and frictionless). Secondary factors include reputation, brand perception, and personal relationships with receiving specialists. Organizations that optimize for the primary factors — which require operational investment, not marketing spend — build referral loyalty that persists through competitive pressure.',
      },
      {
        heading: 'The Communication Gap That Destroys Referral Loyalty',
        content: 'The single most common reason physicians stop referring to a hospital is poor communication — specifically, the failure to provide timely, comprehensive feedback on referred patients. When a GP refers a patient and receives no communication about the outcome, they experience this as professional disrespect. They worry about their patient, they feel excluded from the care team, and they lose confidence in the receiving institution. Systematically closing this communication gap — through structured referral feedback protocols and physician liaison programs — is the highest-ROI intervention in referral development.',
      },
      {
        heading: 'Segmenting Your Physician Network for Strategic Investment',
        content: 'Not all physician referral relationships have equal strategic value. A mature referral development program segments the physician network by referral volume, case mix value, growth potential, and relationship strength — and allocates investment accordingly. High-volume, high-value referring physicians receive intensive engagement: dedicated liaison support, personal communications from specialist physicians, advisory board participation, and premium CME access. Emerging referrers receive a structured development program. Inactive referrers receive reactivation communications. This segmentation approach maximizes ROI from referral development investment.',
      },
      {
        heading: 'Building Referral Loyalty Through Clinical Partnership',
        content: 'The deepest referral relationships are clinical partnerships — collaborations in which the referring physician and the receiving specialist share genuine professional respect and engagement. These relationships are built through joint clinical education, co-authored publications, shared grand rounds participation, and genuine two-way consultation. When a referring physician feels like a valued clinical partner rather than a revenue source, referral loyalty becomes nearly unbreakable. This is the goal of a mature physician engagement program.',
      },
    ],
  },
  'hospital-rebranding-strategic-playbook': {
    category: 'Healthcare Branding',
    color: '#2E75B6',
    title: 'Rebranding a Hospital: The Complete Strategic Playbook',
    date: 'March 20, 2026',
    readTime: '14 min read',
    intro: 'A hospital rebrand is one of the highest-stakes communications decisions a healthcare organization can make. Done well, it repositions the institution for a new era of growth, aligns all stakeholders behind a compelling vision, and creates brand equity that drives sustainable competitive advantage. Done poorly, it creates confusion, alienates loyal patients and physicians, and wastes significant investment. This playbook covers every critical element of a successful hospital rebrand.',
    sections: [
      {
        heading: 'When Rebranding Is — and Is Not — the Answer',
        content: 'Rebranding should be driven by strategic necessity, not aesthetic preference. The legitimate triggers for a hospital rebrand include: a merger or acquisition that creates a new organizational entity, a fundamental strategic repositioning (entering new markets, pivoting service mix), a reputation crisis requiring narrative reset, or a brand that has become genuinely disconnected from organizational reality. A rebrand is not the answer to operational problems, physician dissatisfaction, or digital marketing underperformance. Solve the underlying issues first — then consider whether the brand needs to reflect the new reality.',
      },
      {
        heading: 'The Stakeholder Consultation Process',
        content: 'The most common cause of rebrand failure is inadequate stakeholder engagement. A successful hospital rebrand requires genuine consultation with physicians (especially senior clinicians and KOLs), nurses and clinical staff, administrative leadership, patients and patient communities, and in some cases, referring physicians and community partners. This consultation should be authentic — not a rubber-stamp exercise — and should genuinely inform the brand direction. Stakeholders who feel heard during the process become advocates during the launch.',
      },
      {
        heading: 'Architecture, Identity, and Naming Decisions',
        content: 'The three foundational decisions in a hospital rebrand are brand architecture (how the rebrand relates to existing brands, departments, and sub-brands), visual identity (the visual language that will represent the new brand), and naming (whether the institution name changes, and if so, how). Each of these decisions has significant downstream implications — for communications costs, stakeholder acceptance, and long-term brand equity. They should be made deliberately, with input from brand strategy expertise and genuine organizational consultation.',
      },
      {
        heading: 'Launch Strategy and Change Management',
        content: 'The launch of a rebrand is a change management challenge as much as a marketing one. Successful hospital rebrands deploy internal launch programs before external announcement — ensuring staff understand and can articulate the new brand before patients and media encounter it. External launch sequencing matters: physicians and referral partners should hear about the rebrand before public announcement, through personal communication from clinical leadership. Patient communities should receive direct communication explaining what the rebrand means for their care. And media strategy should be carefully coordinated to ensure accurate, positive coverage at launch.',
      },
    ],
  },
  'hospital-seo-organic-patient-acquisition': {
    category: 'Digital Health',
    color: '#4F8A77',
    title: 'SEO for Hospitals: The Definitive Guide to Organic Patient Acquisition',
    date: 'March 8, 2026',
    readTime: '12 min read',
    intro: 'Healthcare SEO operates under a different set of rules than general digital marketing. Google\'s YMYL (Your Money or Your Life) guidelines apply strict quality standards to health content. Local search dynamics determine visibility for the majority of patient acquisition queries. And reputation signals — reviews, citations, and authoritative backlinks — carry disproportionate weight. This guide covers the complete healthcare SEO strategy for hospitals seeking to grow organic patient acquisition.',
    sections: [
      {
        heading: 'Understanding Healthcare SEO\'s Unique Dynamics',
        content: 'Healthcare SEO is governed by three overlapping frameworks: YMYL quality standards (which require E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness), local SEO dynamics (most patient queries are locally-modified — "cardiologist near me" — requiring Google Business Profile optimization and local citation building), and medical content quality (accurate, clinically reviewed content that serves patient information needs rather than keyword stuffing). Hospitals that treat healthcare SEO as standard digital marketing consistently underperform those that understand its specific requirements.',
      },
      {
        heading: 'The Condition-Symptom Content Architecture',
        content: 'The highest-volume patient acquisition opportunity in healthcare SEO is condition and symptom content — the information patients search when they first recognize a health concern. A comprehensive condition-symptom content strategy covers the full spectrum of conditions treated by the hospital, structured around patient search intent (symptom queries, condition information, treatment options, doctor search, hospital comparison). This content architecture, when built with clinical accuracy and SEO best practice, creates a patient acquisition funnel that compounds in value over time.',
      },
      {
        heading: 'Physician SEO: The Underutilized Acquisition Channel',
        content: 'Physician name searches are among the highest-intent healthcare queries — patients searching for a specific doctor are often ready to book an appointment. Yet most hospitals invest minimally in physician SEO: incomplete or poorly optimized physician profiles, no physician-generated content, and limited review management. A systematic physician SEO program — optimizing profiles across Google, Practo, Healthgrades, and hospital websites, with consistent NAP (Name, Address, Phone) data and active review management — can dramatically improve appointment volume from existing physician brand strength.',
      },
      {
        heading: 'Measuring Healthcare SEO ROI',
        content: 'Healthcare SEO measurement should connect digital performance to clinical and commercial outcomes: organic traffic to appointment bookings, keyword rankings to patient inquiry volume, content performance to specific service line growth. The full SEO measurement stack includes keyword rank tracking, organic traffic analytics, conversion tracking (appointment forms, phone calls), and attribution modeling that connects SEO investment to patient acquisition cost. Hospitals that build this measurement infrastructure can make SEO investment decisions with business rigor rather than marketing intuition.',
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
      <section className="hero-gradient pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/insights"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
              style={{ color: article.color, backgroundColor: article.color + '25' }}>
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-6">{article.title}</h1>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0f1923]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-[#3A3A3A]/80 dark:text-white/70 leading-relaxed mb-12 font-medium border-l-4 pl-6"
              style={{ borderColor: article.color }}>
              {article.intro}
            </p>
            <div className="space-y-10">
              {article.sections.map((section) => (
                <div key={section.heading} className="prose-healthcare">
                  <h2>{section.heading}</h2>
                  <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 rounded-2xl border-2" style={{ borderColor: article.color + '40', backgroundColor: article.color + '08' }}>
              <h3 className="text-xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">Ready to Build Your Healthcare Brand Strategy?</h3>
              <p className="text-[#3A3A3A]/65 dark:text-white/60 mb-5">Schedule a strategy consultation to discuss how S.D Consultancy can help your organization achieve market leadership.</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                style={{ backgroundColor: article.color }}>
                Book a Strategy Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
