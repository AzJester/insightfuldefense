const focusAreas = [
  {
    number: "01",
    title: "AI, autonomy & counter-UAS",
    description:
      "Artificial intelligence, uncrewed systems, sensor-to-effector workflows, and the operational realities of deploying them responsibly.",
  },
  {
    number: "02",
    title: "Electronic warfare, test & training",
    description:
      "The systems, environments, infrastructure, and methods required to test realistically, train effectively, and operate in contested conditions.",
  },
  {
    number: "03",
    title: "Acquisition & the industrial base",
    description:
      "Advanced manufacturing, procurement, production capacity, and the difficult path from promising prototype to sustainable capability.",
  },
  {
    number: "04",
    title: "Mission integration",
    description:
      "How new capabilities fit with existing forces, networks, doctrine, logistics, and people—and where integration risk can undermine their value.",
  },
];

const approach = [
  {
    number: "01",
    title: "Mission first",
    description:
      "Define the operational need before assessing the technology.",
  },
  {
    number: "02",
    title: "Evidence over assertion",
    description:
      "Use public sources, separate fact from analysis, and state uncertainty plainly.",
  },
  {
    number: "03",
    title: "Fielding over theater",
    description:
      "Examine the integration, testing, training, sustainment, and tradeoffs required to create operational value.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Insightful Defense",
  url: "https://insightfuldefense.com/",
  description:
    "Independent, practitioner-focused analysis of emerging defense technologies and their implications for missions, testing, acquisition, and fielding.",
  inLanguage: "en-US",
};

export default function Home() {
  return (
    <div className="siteShell">
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Insightful Defense home">
          <span className="brandMark" aria-hidden="true">
            <span />
          </span>
          <span className="brandName">Insightful Defense</span>
        </a>

        <nav className="headerNav" aria-label="Primary navigation">
          <a className="navLink" href="#focus">
            Focus areas
          </a>
          <a className="navLink" href="#approach">
            Approach
          </a>
          <a className="button buttonSmall" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="heroNoise" aria-hidden="true" />
          <div className="heroContent">
            <p className="eyebrow">
              <span className="eyebrowDot" aria-hidden="true" />
              Independent defense technology analysis
            </p>
            <h1>Clearer thinking for consequential defense decisions.</h1>
            <p className="heroLead">
              Insightful Defense examines how emerging technology moves from
              promise to operational effect. We focus on the mission, the
              evidence, and the realities of integration, testing, acquisition,
              and fielding.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#contact">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
              <a className="textLink" href="#focus">
                Explore focus areas
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="audienceLine">
              For operators <span>•</span> acquisition teams <span>•</span> test
              &amp; training professionals <span>•</span> industry leaders
            </p>
          </div>

          <div className="heroInstrument" aria-hidden="true">
            <div className="instrumentHeader">
              <span>Operating picture</span>
              <span className="instrumentStatus">Open source</span>
            </div>
            <div className="instrumentField">
              <span className="axis axisHorizontal" />
              <span className="axis axisVertical" />
              <span className="orbit orbitOuter" />
              <span className="orbit orbitMiddle" />
              <span className="orbit orbitInner" />
              <span className="scanLine" />
              <span className="signal signalOne" />
              <span className="signal signalTwo" />
              <span className="signal signalThree" />
              <div className="instrumentCenter">
                <span>Mission</span>
                <strong>Effect</strong>
              </div>
              <span className="fieldLabel fieldLabelTop">Evidence</span>
              <span className="fieldLabel fieldLabelRight">Integration</span>
              <span className="fieldLabel fieldLabelBottom">Fielding</span>
              <span className="fieldLabel fieldLabelLeft">Need</span>
            </div>
            <div className="instrumentFooter">
              <span>Signal / context / consequence</span>
              <span>AZ · 33.45°N</span>
            </div>
          </div>
        </section>

        <section className="positioning sectionLight" aria-labelledby="positioning-title">
          <div className="sectionLabel">
            <span>01</span>
            <span>The question</span>
          </div>
          <div className="positioningBody">
            <h2 id="positioning-title">
              Technology matters when it improves the mission.
            </h2>
            <div className="positioningCopy">
              <p>
                Defense innovation is crowded with announcements and ambitious
                claims. Insightful Defense asks the harder questions.
              </p>
              <ul className="questionList">
                <li>What problem does this solve?</li>
                <li>What evidence supports the claim?</li>
                <li>What will integration demand?</li>
                <li>What should decision-makers watch next?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="focus sectionLight" id="focus" aria-labelledby="focus-title">
          <div className="sectionHeadingRow">
            <div>
              <p className="sectionKicker">Areas of focus</p>
              <h2 id="focus-title">What we examine</h2>
            </div>
            <p className="sectionIntro">
              A focused lens on the systems, institutions, and decisions that
              determine whether promising technology becomes useful capability.
            </p>
          </div>

          <div className="focusGrid">
            {focusAreas.map((area) => (
              <article className="focusCard" key={area.number}>
                <span className="cardNumber">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="cardRule" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="grounded" aria-labelledby="grounded-title">
          <div className="groundedGrid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="sectionLabel sectionLabelDark">
            <span>02</span>
            <span>Point of view</span>
          </div>
          <div className="groundedContent">
            <p className="largeStatement" id="grounded-title">
              Analysis grounded in how defense work gets done.
            </p>
            <p>
              Insightful Defense applies a practitioner-oriented lens to the
              distance between a promising concept and a useful capability. The
              emphasis is on operational context, program realities, testing,
              training, sustainment, and responsible fielding—not hype.
            </p>
          </div>
        </section>

        <section className="approach sectionLight" id="approach" aria-labelledby="approach-title">
          <div className="sectionHeadingRow approachHeading">
            <div>
              <p className="sectionKicker">How we think</p>
              <h2 id="approach-title">Our approach</h2>
            </div>
          </div>

          <ol className="approachList">
            {approach.map((item) => (
              <li key={item.number}>
                <span className="approachNumber">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contactMeta">
            <span>Briefings</span>
            <span>Media</span>
            <span>Collaboration</span>
          </div>
          <div className="contactContent">
            <p className="sectionKicker sectionKickerDark">Contact</p>
            <h2 id="contact-title">Start a useful conversation.</h2>
            <p>
              Have a briefing request, media inquiry, collaboration idea, or a
              defense-technology question worth examining? Get in touch.
            </p>
            <a
              className="button buttonContact"
              href="mailto:contact@insightfuldefense.com?subject=Insightful%20Defense%20inquiry"
            >
              contact@insightfuldefense.com
              <span aria-hidden="true">↗</span>
            </a>
            <p className="sensitiveNote">
              Please do not send classified, controlled, export-controlled,
              proprietary, or otherwise sensitive information.
            </p>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <a className="brand footerBrand" href="#top">
          <span className="brandMark brandMarkSmall" aria-hidden="true">
            <span />
          </span>
          <span className="brandName">Insightful Defense</span>
        </a>
        <p className="footerDisclaimer">
          Independent analysis and commentary based on publicly available
          information. Views expressed do not represent any government agency,
          employer, client, or other organization.
        </p>
        <p className="copyright">© 2026 Insightful Defense</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
