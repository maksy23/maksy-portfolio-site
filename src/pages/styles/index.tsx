export default function Styles() {
  return (
    <div className='space-y-16 py-12'>
      {/* Header */}
      <section>
        <h1 className='text-foreground mb-2 text-4xl font-bold'>Style Guide</h1>
        <p className='text-muted-foreground'>Design system and component reference for maksy.dev</p>
      </section>

      {/* Typography */}
      <section className='space-y-6'>
        <h2 className='text-foreground border-border border-b pb-2 text-3xl font-bold'>
          Typography
        </h2>

        <div className='space-y-4'>
          <div>
            <p className='text-muted-foreground mb-2 text-sm'>Font Family: Satoshi</p>
            <h1 className='text-foreground text-5xl font-bold'>Heading 1 - Bold (900)</h1>
            <code className='text-muted-foreground text-xs'>text-5xl font-bold</code>
          </div>

          <div>
            <h2 className='text-foreground text-4xl font-bold'>Heading 2 - Bold (700)</h2>
            <code className='text-muted-foreground text-xs'>text-4xl font-bold</code>
          </div>

          <div>
            <h3 className='text-foreground text-3xl font-semibold'>Heading 3 - Semibold (600)</h3>
            <code className='text-muted-foreground text-xs'>text-3xl font-semibold</code>
          </div>

          <div>
            <h4 className='text-foreground text-2xl font-semibold'>Heading 4 - Semibold (600)</h4>
            <code className='text-muted-foreground text-xs'>text-2xl font-semibold</code>
          </div>

          <div>
            <h5 className='text-foreground text-xl font-medium'>Heading 5 - Medium (500)</h5>
            <code className='text-muted-foreground text-xs'>text-xl font-medium</code>
          </div>

          <div>
            <p className='text-foreground text-base'>Body text - Regular (400)</p>
            <code className='text-muted-foreground text-xs'>text-base text-foreground</code>
          </div>

          <div>
            <p className='text-muted-foreground text-base'>Secondary text - Regular (400)</p>
            <code className='text-muted-foreground text-xs'>text-base text-muted-foreground</code>
          </div>

          <div>
            <p className='text-muted-foreground text-sm'>Small text - Regular (400)</p>
            <code className='text-muted-foreground text-xs'>text-sm text-muted-foreground</code>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className='space-y-6'>
        <h2 className='text-foreground border-border border-b pb-2 text-3xl font-bold'>Colors</h2>

        <div className='space-y-8'>
          {/* Backgrounds */}
          <div>
            <h3 className='text-foreground mb-4 text-xl font-semibold'>Backgrounds</h3>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div className='space-y-2'>
                <div className='bg-background border-border h-24 rounded-lg border'></div>
                <p className='text-foreground text-sm font-medium'>Background</p>
                <code className='text-muted-foreground text-xs'>bg-background</code>
                <p className='text-muted-foreground text-xs'>Main page background</p>
              </div>

              <div className='space-y-2'>
                <div className='bg-card border-border h-24 rounded-lg border'></div>
                <p className='text-foreground text-sm font-medium'>Card</p>
                <code className='text-muted-foreground text-xs'>bg-card</code>
                <p className='text-muted-foreground text-xs'>Elevated surfaces, cards</p>
              </div>

              <div className='space-y-2'>
                <div className='bg-muted border-border h-24 rounded-lg border'></div>
                <p className='text-foreground text-sm font-medium'>Muted</p>
                <code className='text-muted-foreground text-xs'>bg-muted</code>
                <p className='text-muted-foreground text-xs'>Subtle backgrounds, less important</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className='text-foreground mb-4 text-xl font-semibold'>Text Colors</h3>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='bg-card border-border rounded-lg border p-4'>
                <p className='text-foreground mb-1 text-lg font-medium'>Foreground</p>
                <code className='text-muted-foreground text-xs'>text-foreground</code>
                <p className='text-muted-foreground mt-2 text-xs'>Primary text, headings</p>
              </div>

              <div className='bg-card border-border rounded-lg border p-4'>
                <p className='text-muted-foreground mb-1 text-lg font-medium'>Muted Foreground</p>
                <code className='text-muted-foreground text-xs'>text-muted-foreground</code>
                <p className='text-muted-foreground mt-2 text-xs'>Secondary text, descriptions</p>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h3 className='text-foreground mb-4 text-xl font-semibold'>Accent Colors</h3>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div className='space-y-2'>
                <div className='bg-primary flex h-24 items-center justify-center rounded-lg'>
                  <span className='text-primary-foreground font-medium'>Primary</span>
                </div>
                <code className='text-muted-foreground text-xs'>
                  bg-primary text-primary-foreground
                </code>
                <p className='text-muted-foreground text-xs'>
                  Main CTAs, important actions, active states
                </p>
              </div>

              <div className='space-y-2'>
                <div className='bg-secondary flex h-24 items-center justify-center rounded-lg'>
                  <span className='text-secondary-foreground font-medium'>Secondary</span>
                </div>
                <code className='text-muted-foreground text-xs'>
                  bg-secondary text-secondary-foreground
                </code>
                <p className='text-muted-foreground text-xs'>Less important actions</p>
              </div>

              <div className='space-y-2'>
                <div className='bg-accent flex h-24 items-center justify-center rounded-lg'>
                  <span className='text-accent-foreground font-medium'>Accent</span>
                </div>
                <code className='text-muted-foreground text-xs'>
                  bg-accent text-accent-foreground
                </code>
                <p className='text-muted-foreground text-xs'>Hover states, highlights</p>
              </div>
            </div>
          </div>

          {/* Border */}
          <div>
            <h3 className='text-foreground mb-4 text-xl font-semibold'>Borders</h3>
            <div className='bg-card border-border rounded-lg border-2 p-6'>
              <p className='text-foreground mb-1 font-medium'>Border</p>
              <code className='text-muted-foreground text-xs'>border border-border</code>
              <p className='text-muted-foreground mt-2 text-xs'>
                Dividers, card borders, separators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className='space-y-6'>
        <h2 className='text-foreground border-border border-b pb-2 text-3xl font-bold'>
          Components
        </h2>

        {/* Buttons */}
        <div className='space-y-4'>
          <h3 className='text-foreground text-xl font-semibold'>Buttons</h3>
          <div className='flex flex-wrap gap-4'>
            <button className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors'>
              Primary Button
            </button>
            <button className='bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-6 py-3 font-medium transition-colors'>
              Secondary Button
            </button>
            <button className='border-border text-foreground hover:bg-accent rounded-lg border px-6 py-3 font-medium transition-colors'>
              Outline Button
            </button>
            <button className='text-primary hover:bg-accent rounded-lg px-6 py-3 font-medium transition-colors'>
              Ghost Button
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className='space-y-4'>
          <h3 className='text-foreground text-xl font-semibold'>Cards</h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='bg-card border-border rounded-lg border p-6'>
              <h4 className='text-foreground mb-2 text-lg font-semibold'>Card Title</h4>
              <p className='text-muted-foreground'>
                Basic card with border. Use for sections, project cards, skill cards.
              </p>
            </div>

            <div className='bg-card border-border hover:bg-accent cursor-pointer rounded-lg border p-6 transition-colors'>
              <h4 className='text-foreground mb-2 text-lg font-semibold'>Hover Card</h4>
              <p className='text-muted-foreground'>
                Interactive card with hover state. Use for clickable project cards.
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className='space-y-4'>
          <h3 className='text-foreground text-xl font-semibold'>Links</h3>
          <div className='space-y-2'>
            <div>
              <a
                href='#'
                className='text-primary hover:text-primary/80 transition-colors'
              >
                Primary Link (Violet)
              </a>
              <code className='text-muted-foreground ml-2 text-xs'>
                text-primary hover:text-primary/80
              </code>
            </div>
            <div>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Muted Link (Gray → White on hover)
              </a>
              <code className='text-muted-foreground ml-2 text-xs'>
                text-muted-foreground hover:text-foreground
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className='space-y-6'>
        <h2 className='text-foreground border-border border-b pb-2 text-3xl font-bold'>
          Usage Guidelines
        </h2>

        <div className='space-y-6'>
          <div className='bg-card border-border rounded-lg border p-6'>
            <h3 className='text-foreground mb-3 text-lg font-semibold'>Typography Rules</h3>
            <ul className='text-muted-foreground space-y-2'>
              <li>
                • Use <code className='text-foreground'>font-bold</code> for H1, H2
              </li>
              <li>
                • Use <code className='text-foreground'>font-semibold</code> for H3, H4
              </li>
              <li>
                • Use <code className='text-foreground'>font-medium</code> for H5, buttons, emphasis
              </li>
              <li>
                • Use <code className='text-foreground'>font-regular</code> (default) for body text
              </li>
              <li>
                • Use <code className='text-foreground'>text-foreground</code> for headings and
                important text
              </li>
              <li>
                • Use <code className='text-foreground'>text-muted-foreground</code> for
                descriptions, secondary text
              </li>
            </ul>
          </div>

          <div className='bg-card border-border rounded-lg border p-6'>
            <h3 className='text-foreground mb-3 text-lg font-semibold'>Color Rules</h3>
            <ul className='text-muted-foreground space-y-2'>
              <li>
                • Use <code className='text-foreground'>bg-background</code> for main page
                background
              </li>
              <li>
                • Use <code className='text-foreground'>bg-card</code> for elevated surfaces and
                cards
              </li>
              <li>
                • Use <code className='text-foreground'>bg-primary</code> for main CTAs and active
                states
              </li>
              <li>
                • Use <code className='text-foreground'>text-primary</code> for links and emphasis
                (use sparingly!)
              </li>
              <li>
                • Use <code className='text-foreground'>bg-accent</code> for hover states on cards
              </li>
              <li>
                • Use <code className='text-foreground'>border-border</code> for all borders and
                dividers
              </li>
            </ul>
          </div>

          <div className='bg-card border-border rounded-lg border p-6'>
            <h3 className='text-foreground mb-3 text-lg font-semibold'>Spacing & Layout</h3>
            <ul className='text-muted-foreground space-y-2'>
              <li>
                • Container:{' '}
                <code className='text-foreground'>
                  container mx-auto max-w-7xl px-4 md:px-6 lg:px-8
                </code>
              </li>
              <li>
                • Section padding: <code className='text-foreground'>py-12</code> or{' '}
                <code className='text-foreground'>py-16</code>
              </li>
              <li>
                • Card padding: <code className='text-foreground'>p-6</code>
              </li>
              <li>
                • Section gaps: <code className='text-foreground'>space-y-8</code> or{' '}
                <code className='text-foreground'>space-y-12</code>
              </li>
              <li>
                • Border radius: <code className='text-foreground'>rounded-lg</code> for cards and
                buttons
              </li>
            </ul>
          </div>

          <div className='bg-card border-border rounded-lg border p-6'>
            <h3 className='text-foreground mb-3 text-lg font-semibold'>Transitions</h3>
            <ul className='text-muted-foreground space-y-2'>
              <li>
                • Always add <code className='text-foreground'>transition-colors</code> to
                interactive elements
              </li>
              <li>
                • Use <code className='text-foreground'>hover:bg-accent</code> for card hover states
              </li>
              <li>
                • Use <code className='text-foreground'>hover:text-foreground</code> for link/nav
                hover states
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
