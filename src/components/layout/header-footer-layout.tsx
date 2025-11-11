import { Outlet } from 'react-router-dom'

import Footer from '../footer'
import Header from '../header'

export default function HeaderFooterLayout() {
  return (
    <div className='bg-background text-foreground flex min-h-screen flex-col'>
      <header>
        <div className='container mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16'>
          <Header />
        </div>
      </header>

      <main className='flex-1'>
        <div className='container mx-auto max-w-7xl px-6 md:px-10 lg:px-16'>
          <Outlet /> {/* Child routes render here */}
        </div>
      </main>

      <footer className='bg-violet-900'>
        <div className='container mx-auto max-w-7xl px-6 md:px-10 lg:px-16'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}
