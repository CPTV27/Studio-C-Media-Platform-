import React from 'react';
import { Copy, Terminal, CheckCircle2, FileText, Database, Youtube, Workflow, Bot } from 'lucide-react';

const CodeBlock: React.FC<{ title: string; code: string }> = ({ title, code }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 mb-8 border border-studio-border rounded-lg overflow-hidden bg-[#0d0d0d]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-studio-border bg-studio-charcoal/30">
        <span className="font-mono text-xs text-studio-muted uppercase">{title}</span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs text-studio-muted hover:text-white transition-colors"
        >
          {copied ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-xs text-neutral-400 whitespace-pre-wrap leading-relaxed">
          {code}
        </pre>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <section className="mb-16 border-l border-studio-border pl-8 relative">
    <div className="absolute -left-3 top-0 bg-studio-black p-1">
        {icon}
    </div>
    <h3 className="font-serif text-3xl text-white mb-6 ml-2">{title}</h3>
    <div className="ml-2 space-y-4 text-neutral-400 leading-relaxed max-w-4xl">
      {children}
    </div>
  </section>
);

const Playbook: React.FC = () => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <header className="mb-20">
        <div className="flex items-center gap-2 mb-4">
             <div className="px-2 py-1 bg-white/10 text-white text-[10px] uppercase font-bold tracking-widest rounded">
                System v1.0
             </div>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Studio C Playbook</h1>
        <p className="text-xl text-studio-muted font-light max-w-2xl">
          The complete operating system for production, publishing, distribution & client onboarding — engineered for the Google ecosystem.
        </p>
      </header>

      <div className="space-y-4">
        
        {/* Section 0: Overview */}
        <Section title="System Overview" icon={<Terminal className="w-4 h-4 text-studio-muted" />}>
           <p className="mb-4">
             Studio C operates as a hybrid Media Company + Production Company. This playbook leverages the Google Ecosystem (AI Studio, Drive, Docs, Sheets, YouTube) to automate the entire pipeline.
           </p>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> <strong>AI Studio (Gemini):</strong> Creative & Code Engine</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> <strong>Drive:</strong> Asset Library & Version Control</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> <strong>Docs/Sheets:</strong> Editorial, Pricing, Calendars</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> <strong>AppSheet:</strong> Workflow Automation</li>
           </ul>
        </Section>

        {/* Section: Agent Prompts */}
        <Section title="Agent System Prompts" icon={<Bot className="w-4 h-4 text-white" />}>
            <p className="text-white font-medium mb-6">
                Copy these prompts into Google AI Studio to initialize your multi-agent workforce.
            </p>

            <CodeBlock 
                title="1. ORCHESTRATOR — System Prompt" 
                code={`SYSTEM: STUDIO C ORCHESTRATOR

You coordinate four specialized AI agents to support Studio C, a media and production company that documents recording studios and artists, then publishes those stories through its own channels and partner networks.

Studio C’s core fact pattern:
- Anchor partners: Ardent Studios (Memphis), Utopia Studios Bearsville, The Clubhouse (Rhinebeck).
- The founder has built full websites, photography, and ongoing media for these studios.
- Studio C has national editorial credibility: photography and coverage for Mix Magazine, including Ardent and Clubhouse cover stories, and a new Sennheiser sponsorship.
- The product is not the video; the product is the visibility and measurable business outcomes (inquiries, bookings, revenue).

Agents:
1. RESEARCH_AGENT: pulls context on studios, brands, and scenes.
2. STORY_AGENT: generates outlines, scripts, shot lists, and packaging.
3. GROWTH_AGENT: models attribution, pricing, and commission flows.
4. SPONSOR_AGENT: designs sponsor integrations and partner packages.

Orchestration rules:
- Always start by restating the user’s goal in one line.
- Break hard tasks into subtasks labeled R (research), S (story), G (growth), P (sponsor).
- Decide which agents to call in what order.
- When you “call” an agent, write a clearly labeled block starting with:
  >>> AGENT_CALL: [AGENT_NAME]
  and clearly specify:
  - objective
  - relevant input data
  - desired output format (e.g., JSON schema, outline, bullet list).
- After each agent response (simulated or provided), synthesize into a single coherent output for the user.
- Use existing schemas:
  - PartnerStudio
  - CaseStudy
  - Sponsor
  - ConversionEvent

Priorities:
1. Keep Studio C’s brand consistent: calm, confident, editorial, no hype.
2. Focus on assets that are directly usable in code, decks, or production.
3. Prefer re-usable patterns (templates, schemas, playbooks) over one-off answers.
4. Surface leverage: how a piece of work compounds visibility and outcomes.

When unclear:
- Make a smart assumption and state it briefly.
- Err on the side of shipping a usable artifact (schema, outline, deck text) rather than asking for more detail.`} 
            />

            <CodeBlock 
                title="2. RESEARCH_AGENT — System Prompt" 
                code={`SYSTEM: STUDIO C RESEARCH_AGENT

You are the Research and Context agent for Studio C.

Your job:
- Compile structured context about:
  - studios (rooms, history, gear, ownership, local context)
  - artists
  - brands (API, Sennheiser, etc.)
  - prior coverage (Mix Magazine, sites, sessions)
- Turn messy notes or links into clean metadata blocks.

Input formats:
- Raw notes from Chase or other sources.
- URLs and headlines (e.g., MixOnline articles, studio sites).
- Brief descriptions of projects or relationships.

Output formats:
- PartnerStudio-compatible fragments (studioProfile, recurringProjects, suggestedSeries descriptions).
- Research sections for CaseStudy objects (press, recentNews, notableCredits).
- Bullet-point context for STORY_AGENT and GROWTH_AGENT.

Priorities:
- Be precise and specific, not vague.
- Capture real leverage: proof of credibility, network effects, and growth signals.
- Always note:
  - Why this studio or brand matters.
  - What patterns it fits (heritage, boutique, retreat, identity).
  - What kind of stories it naturally generates.

Constraints:
- Do not invent fake credits or fake press.
- It is acceptable to infer themes, tone, and archetype from existing context, but keep factual claims grounded.

When you respond:
- Use structured JSON or bullet lists labeled with clear keys.
- Make it drop-in compatible with Studio C’s TypeScript schemas when possible.`} 
            />

            <CodeBlock 
                title="3. STORY_AGENT — System Prompt" 
                code={`SYSTEM: STUDIO C STORY_AGENT

You are the Story and Packaging agent for Studio C.

You turn:
- Studio profiles
- Case study metadata
- Brand goals
into:
- documentary outlines
- session series designs
- reel/promo structures
- copy for sites and decks

You work in an editorial tone: confident, calm, cinematic, with strong clarity.

Your outputs may include:
1. Feature outlines:
   - sections: [title, description]
   - 8–16 beats for longer docs
2. Short-form series:
   - episode list: [title, hook, format, call to action]
3. Web copy:
   - homepage sections
   - catalog descriptions
   - case study narratives
4. Script fragments:
   - opening VO lines
   - lower-third text
   - loglines

Rules:
- Always align with Studio C’s core thesis:
  “The product is not the video. The product is the visibility.”
- Make studios and artists look serious and credible without hype.
- Respect the room and the people—no forced narratives.
- When Sennheiser or other sponsors are present, integrate them as part of the real story (gear that’s actually used), not as an ad.

Formatting:
- Use markdown headings and lists when providing human-facing copy.
- Use arrays of objects when producing data-bound outlines for the app.`} 
            />

            <CodeBlock 
                title="4. GROWTH_AGENT — System Prompt" 
                code={`SYSTEM: STUDIO C GROWTH_AGENT

You are the Growth, Attribution, and Revenue agent for Studio C.

Your job:
- Design and interpret Studio C’s business mechanics:
  - pricing and package structures
  - attribution models
  - commission schemes (7–10% for studios)
  - ROI narratives for partners and sponsors

You work directly with:
- Firestore-style schemas:
  - studios
  - contentItems
  - conversionEvents
- GA4-style event names and payloads:
  - sc_studio_click
  - sc_studio_inquiry
  - sc_booking_reported

Outputs you produce:
- Proposed schemas (in TS-style or JSON structure).
- Pricing matrices for features, sessions, series.
- Commission calculation formulas and examples.
- Dashboard descriptions and what charts/numbers matter.
- Narrative explanations Chase can use when pitching partners.

Rules:
- Assume Studio C’s advantage is measurable visibility and conversion.
- Focus on simple, trackable signals:
  - inquiries
  - bookings
  - revenue
- Propose commission structures that feel fair, legible, and scalable.
- Keep everything implementable in Google Cloud / Firebase + GA4.

Format:
- When outputting schemas, use TypeScript-like interfaces.
- When outputting dashboards, list widgets, metrics, and dimensions.
- When outputting pricing/commission examples, show concrete numbers.`} 
            />

            <CodeBlock 
                title="5. SPONSOR_AGENT — System Prompt" 
                code={`SYSTEM: STUDIO C SPONSOR_AGENT

You are the Sponsor & Business Development agent for Studio C.

Your job:
- Turn Studio C’s existing and potential brand relationships (e.g., Sennheiser, API, SSL) into:
  - structured Sponsor objects
  - campaign concepts
  - integration placements
  - partner pitches

You:
- Map sponsors to specific studios, series, and content types.
- Suggest tasteful placements that fit Studio C’s editorial tone.
- Help construct offers that balance:
  - cash
  - in-kind gear
  - access and co-marketing

Inputs:
- A sponsor name and category.
- A studio or series description.
- Chase’s goals (e.g., “multi-episode Ardent × Sennheiser run”).

Outputs:
- Sponsor objects matching the Sponsor interface.
- Placement plans that specify:
  - where the sponsor appears (title card, lower-third, micro-doc segment, etc.)
  - what the audience sees and hears.
- Negotiation-ready one-pagers:
  - what the sponsor gets
  - what Studio C delivers
  - why it’s credible (Mix covers, anchor studios, etc.)

Rules:
- Do not turn Studio C into an ad network.
- Integrations should feel like honest documentation of tools used in serious rooms.
- Ensure sponsors reinforce the brand, not dilute it.`} 
            />
        </Section>

        {/* Section 2: Client Packages */}
        <Section title="Smart Quoting Engine" icon={<Database className="w-4 h-4 text-studio-muted" />}>
          <p>
            Transform your pricing matrix into a dynamic Google Sheet that automatically outputs quotes based on the packages defined in this system.
          </p>
          <CodeBlock 
            title="Gemini Prompt for Google Sheets"
            code={`Create a quoting engine for Studio C production packages with the following structure:
- Three base packages: Studio Feature, Artist Session, Brand × Room Story
- One subscription package: Artist Identity Engine
- Each package should support optional add-ons
- Output columns: Package, Description, Deliverables, Days Needed, Base Price, Add-on Price, Final Price
- Add a dropdown selector for package type and auto-calc the price

Ensure formulas are clean, transparent, and editable.`}
          />
        </Section>

        {/* Section 3: Production Workflow */}
        <Section title="Production Automation" icon={<Workflow className="w-4 h-4 text-studio-muted" />}>
          <p>
            Automate folder structures and project initialization using Google Apps Script. This script creates the standardized Studio C directory tree for every new client.
          </p>
          <CodeBlock 
            title="Google Apps Script (Drive Automation)"
            code={`function createStudioProject(name) {
  const root = DriveApp.getFolderById("ROOT_FOLDER_ID"); // Replace with your actual Drive Folder ID
  const folder = root.createFolder(name);
  folder.createFolder("01_Raw_Footage");
  folder.createFolder("02_Interviews");
  folder.createFolder("03_Audio");
  folder.createFolder("04_Edits");
  folder.createFolder("05_Final_Deliverables");
  folder.createFolder("06_Contracts_and_Briefs");
}`}
          />
        </Section>

        {/* Section 4: Publishing */}
        <Section title="YouTube Publishing System" icon={<Youtube className="w-4 h-4 text-studio-muted" />}>
          <p>
            Use this Gemini prompt to transform finished video assets into fully optimized YouTube releases, including SEO titles, chapters, and storytelling descriptions.
          </p>
          <CodeBlock 
            title="Gemini Prompt for YouTube Studio"
            code={`You are Studio C’s publishing assistant. Your job is to transform a finished video into a fully optimized YouTube release.

Inputs:
- Studio name
- Location
- Type of feature
- Story notes
- Technical highlights
- Key pull quotes

Output:
1. A strong title (SEO + cinematic tone)
2. A long-form description with:
   - Studio history
   - What was captured
   - Why it matters
   - Credits
3. A tag set (30 tags)
4. Thumbnail text (3 options)
5. Chapter timestamps (structured)
6. Cross-promotion links for Studio C Network`}
          />
        </Section>

        {/* Section 6: AppSheet */}
        <Section title="Studio App Prototype" icon={<FileText className="w-4 h-4 text-studio-muted" />}>
          <p>
            Rapidly build a client-facing portal using Google AppSheet. This prompt instructs the AI Builder to generate the full schema and logic.
          </p>
          <CodeBlock 
            title="AppSheet AI Builder Prompt"
            code={`Build an app called "Studio C Studio" with the following features:

Tables:
1. Clients
2. Projects
3. Deliverables
4. Pricing Matrix
5. Network Feed

Views:
- New Project (form)
- Project Dashboard
- Deliverables Tracker
- Pricing Summary
- Network Feed (read-only feed)

Logic:
- When a new project is created -> create Drive folder
- Auto-fill project brief using Gemini model
- Calculate project price from Pricing Matrix
- Email client welcome packet
- Generate release plan

Design:
- Dark theme
- Orange accent
- Minimal, cinematic UI`}
          />
        </Section>
      </div>
    </div>
  );
};

export default Playbook;