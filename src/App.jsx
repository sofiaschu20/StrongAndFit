import { useState } from 'react';

const PROGRAM_NAME = 'Lean & Strong';

const benefits = [
  {
    icon: '💪',
    title: 'Strength that lasts',
    text: 'Progressive strength training built around compound lifts, so you get stronger every single week.',
  },
  {
    icon: '🌙',
    title: 'Cycle-aware training',
    text: 'Workouts and recovery adapt to your energy across the month, instead of fighting against it.',
  },
  {
    icon: '🥗',
    title: 'Food without rules',
    text: 'Flexible nutrition guidance and simple recipes. No crash diets, no cutting out what you love.',
  },
  {
    icon: '⏱️',
    title: '30–45 minute sessions',
    text: 'Efficient workouts that fit a real schedule, at home with dumbbells or at the gym.',
  },
  {
    icon: '🧘‍♀️',
    title: 'Mobility & recovery',
    text: 'Guided mobility flows and rest-day routines to keep your joints happy and your body moving well.',
  },
  {
    icon: '🤝',
    title: 'A community that shows up',
    text: 'Weekly live check-ins and a private group of women cheering you on through every milestone.',
  },
];

const phases = [
  {
    weeks: 'Weeks 1–4',
    name: 'Foundation',
    text: 'Learn the key movement patterns, build consistency, and establish your baseline strength.',
    items: ['Form-focused full-body sessions', 'Habit tracker & weekly goals', 'Mobility basics'],
  },
  {
    weeks: 'Weeks 5–8',
    name: 'Build',
    text: 'Increase load and volume with smart progression. This is where the visible changes begin.',
    items: ['Upper / lower split', 'Progressive overload plan', 'Nutrition fine-tuning'],
  },
  {
    weeks: 'Weeks 9–12',
    name: 'Peak',
    text: 'Test your new strength, set personal records, and leave with a plan to keep going.',
    items: ['PR week & re-assessment', 'Conditioning finishers', 'Your long-term roadmap'],
  },
];

const testimonials = [
  {
    quote:
      'I finally stopped jumping between random workouts. Twelve weeks later I deadlifted my bodyweight for the first time.',
    name: 'Maya R.',
    detail: 'Teacher, 34',
  },
  {
    quote:
      'As a mom of two, the 35-minute sessions were a game changer. I have more energy now than I did before kids.',
    name: 'Priya S.',
    detail: 'Nurse, 39',
  },
  {
    quote:
      'The cycle-aware approach made so much sense. I stopped feeling guilty on low-energy days and got stronger anyway.',
    name: 'Lauren K.',
    detail: 'Designer, 28',
  },
];

const plans = [
  {
    name: 'Self-Guided',
    price: 79,
    note: 'one-time',
    features: ['Full 12-week program', 'Video exercise library', 'Nutrition guide & recipes', 'Lifetime access'],
    featured: false,
  },
  {
    name: 'Coached',
    price: 149,
    note: 'one-time',
    features: [
      'Everything in Self-Guided',
      'Weekly live group check-ins',
      'Private community access',
      'Form-check video reviews',
    ],
    featured: true,
  },
  {
    name: '1:1 Premium',
    price: 349,
    note: 'one-time',
    features: [
      'Everything in Coached',
      'Personalized program tweaks',
      'Bi-weekly 1:1 coaching calls',
      'Direct message support',
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: 'I am a complete beginner. Is this right for me?',
    a: 'Absolutely. The Foundation phase teaches every movement from scratch, and each exercise has beginner-friendly variations.',
  },
  {
    q: 'What equipment do I need?',
    a: 'A set of dumbbells (or access to a gym) and a resistance band. Every workout has a home and a gym version.',
  },
  {
    q: 'Can I do this while pregnant or postpartum?',
    a: 'Please check with your healthcare provider first. Postpartum members get a modified on-ramp once they are cleared to exercise.',
  },
  {
    q: 'How long do I have access?',
    a: 'Forever. Once you join, the program, videos, and all future updates are yours to keep.',
  },
  {
    q: 'What if it is not for me?',
    a: 'You are covered by a 30-day money-back guarantee. If it is not a fit, email us and we will refund you in full.',
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Program', '#program'],
    ['Results', '#results'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq'],
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">✿</span> {PROGRAM_NAME}
        </a>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#join" className="btn btn-small" onClick={() => setOpen(false)}>
            Join now
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">12-week strength program for women</span>
          <h1>
            Get lean. Feel confident. <em>Stay strong.</em>
          </h1>
          <p className="lead">
            A science-backed training and nutrition program that fits your life, works with your body, and helps you
            build strength you can feel in everything you do.
          </p>
          <div className="hero-actions">
            <a href="#join" className="btn btn-orange">
              Start your 12 weeks
            </a>
            <a href="#program" className="btn btn-ghost">
              See the program
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatars">
              {['#f4a6a6', '#c9a7eb', '#f7c59f', '#9fd8cb'].map((c) => (
                <span key={c} style={{ background: c }} />
              ))}
            </div>
            <p>
              <strong>4,800+ women</strong> trained · ★★★★★ 4.9 average rating
            </p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="blob" />
          <div className="hero-card card-a">
            <span className="card-label">This week</span>
            <strong>4 / 4 workouts</strong>
            <div className="progress">
              <span style={{ width: '100%' }} />
            </div>
          </div>
          <div className="hero-card card-b">
            <span className="card-label">New PR 🎉</span>
            <strong>Hip thrust · 85 kg</strong>
          </div>
          <div className="hero-card card-c">
            <span className="card-label">Energy</span>
            <strong>↑ 42%</strong>
          </div>
          <svg className="figure" viewBox="0 0 200 260">
            <circle cx="100" cy="40" r="22" fill="#2d1b2e" />
            <path d="M100 62 L100 150" stroke="#2d1b2e" strokeWidth="18" strokeLinecap="round" />
            <path d="M100 85 L55 60 M100 85 L145 60" stroke="#2d1b2e" strokeWidth="12" strokeLinecap="round" />
            <rect x="30" y="50" width="12" height="26" rx="3" fill="#e2557a" />
            <rect x="158" y="50" width="12" height="26" rx="3" fill="#e2557a" />
            <path d="M42 63 L158 63" stroke="#e2557a" strokeWidth="5" />
            <path d="M100 150 L70 240 M100 150 L130 240" stroke="#2d1b2e" strokeWidth="14" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ['12', 'weeks of structured training'],
    ['36', 'guided workouts'],
    ['80+', 'exercise video tutorials'],
    ['30', 'day money-back guarantee'],
  ];
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([n, l]) => (
          <div key={l} className="stat">
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why {PROGRAM_NAME}</span>
          <h2>Designed for women, not adapted for them</h2>
          <p>Everything you need to train with purpose, eat with ease, and finally see the results you have worked for.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((b) => (
            <article key={b.title} className="benefit">
              <span className="benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section className="section section-tint" id="program">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The program</span>
          <h2>Three phases. Twelve weeks. One stronger you.</h2>
        </div>
        <div className="phase-grid">
          {phases.map((p, i) => (
            <article key={p.name} className="phase">
              <span className="phase-num">0{i + 1}</span>
              <span className="phase-weeks">{p.weeks}</span>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coach() {
  return (
    <section className="section">
      <div className="container coach">
        <div className="coach-photo" aria-hidden="true">
          <span>JM</span>
        </div>
        <div className="coach-copy">
          <span className="eyebrow">Meet your coach</span>
          <h2>Hi, I'm Jess.</h2>
          <p>
            I'm a certified strength coach with over 10 years of experience helping women ditch the endless cardio and
            fall in love with lifting. I built {PROGRAM_NAME} after seeing too many programs that ignored how women's
            bodies actually work.
          </p>
          <p>My goal is simple: help you feel strong, capable, and at home in your body — for life.</p>
          <ul className="creds">
            <li>NASM Certified Personal Trainer</li>
            <li>Precision Nutrition Level 1</li>
            <li>Pre & Postnatal Specialist</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Real results</span>
          <h2>Women who got lean &amp; strong</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Choose your path</h2>
          <p>One payment, lifetime access. Every plan includes the 30-day money-back guarantee.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <article key={p.name} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
              {p.featured && <span className="plan-badge">Most popular</span>}
              <h3>{p.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                {p.price}
                <span className="price-note">{p.note}</span>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#join" className={`btn ${p.featured ? '' : 'btn-ghost'}`}>
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section section-tint" id="faq">
      <div className="container faq-wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className={`faq ${isOpen ? 'open' : ''}`}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                  {f.q}
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Join() {
  const [form, setForm] = useState({ name: '', email: '', goal: 'strength' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your email provider or backend.
    console.log('Signup:', form);
    setSubmitted(true);
  };

  return (
    <section className="section join" id="join">
      <div className="container join-inner">
        <div className="join-copy">
          <h2>Your strongest season starts now.</h2>
          <p>
            Join the waitlist for the next cohort and get a free 7-day starter plan sent straight to your inbox.
          </p>
        </div>
        {submitted ? (
          <div className="join-success" role="status">
            <span>🌸</span>
            <h3>You're in, {form.name.split(' ')[0] || 'friend'}!</h3>
            <p>Check {form.email} for your free starter plan.</p>
          </div>
        ) : (
          <form className="join-form" onSubmit={handleSubmit}>
            <label>
              First name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Main goal
              <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
                <option value="strength">Get stronger</option>
                <option value="tone">Tone & shape</option>
                <option value="energy">More energy</option>
                <option value="habit">Build a consistent habit</option>
              </select>
            </label>
            <button type="submit" className="btn">
              Get my free starter plan
            </button>
            <small>No spam, ever. Unsubscribe anytime.</small>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">✿</span> {PROGRAM_NAME}
        </a>
        <p>© {new Date().getFullYear()} {PROGRAM_NAME}. All rights reserved.</p>
        <p className="disclaimer">
          Consult your physician before beginning any exercise program. Results vary by individual.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Program />
        <Coach />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Join />
      </main>
      <Footer />
    </>
  );
}
