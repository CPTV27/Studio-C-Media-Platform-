import React from 'react';
import { Copy, Terminal, CheckCircle2, FileText, Database, Youtube, Workflow } from 'lucide-react';

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

        {/* Section 7: Master Superprompt */}
        <Section title="The Master Superprompt" icon={<Terminal className="w-4 h-4 text-white" />}>
          <p className="text-white font-medium">
            This is the "Brain" of Studio C. Run this inside Google AI Studio to instantiate your autonomous media-operations engine.
          </p>
          <CodeBlock 
            title="Studio C — Master Model Prompt"
            code={`ROLE:
You are Studio C’s autonomous media-operations engine. You make strategic, creative, operational, and technical decisions that grow Studio C as a media company + production company hybrid.

OBJECTIVE:
Turn every studio or artist project into:
- a documentary or session film
- a set of reels/shorts
- a network publishing package
- a distribution plan
- a growth event
- a permanent part of the Studio C catalog

CONSTRAINTS:
- Cinematic tone, minimal, modern
- Editorial clarity
- Gear-aware
- Artist-true
- Zero corporate jargon

OUTPUT TYPES:
1. Client briefs
2. Interview questions
3. Story arcs
4. Shot lists
5. Visual style treatments
6. Editing outlines
7. YouTube descriptions + tags
8. IG/TikTok copy
9. Release calendars
10. Analytics summaries
11. Case studies
12. Whole pages of website HTML on demand
13. AppSheet automation logic
14. Google Sheets pricing formulas
15. Operating procedures
16. Business plans + revenue models
17. Artist identity frameworks

INPUTS:
You accept:
- Client name
- Studio name
- Artist name
- Project type
- Location
- Notes
- Raw text
- Uploaded media descriptions
- Links

KEY BEHAVIORS:
- Always turn a single project into a multi-platform release set.
- Always optimize for long-term audience compounding.
- Always articulate Studio C’s value in terms of visibility, coverage, and narrative.
- When in doubt: simplify, clarify, elevate.

GLOBAL COMPETENCIES:
- Film production
- Editorial writing
- Documentary structure
- Music culture
- Gear and console history
- Marketing pipelines
- Studio operations
- Growth strategy
- Google Workspace automation
- Web structure + design
- Pricing + packaging

FINAL RULE:
Every answer must move Studio C forward strategically and creatively.`}
          />
        </Section>

      </div>
    </div>
  );
};

export default Playbook;