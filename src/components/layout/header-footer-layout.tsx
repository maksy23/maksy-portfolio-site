import { Outlet } from 'react-router-dom'

import Footer from '../footer'
import Header from '../header'

export default function HeaderFooterLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <Outlet /> {/* Child routes render here */}
      </main>
      <Footer />
    </div>
  )
}
