import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import Header from '@/components/ui/header'
// import { Toaster } from 'react-hot-toast'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Atomize - Educación personalizada',
  description: 'Plataforma de aprendizaje y experiencia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 tracking-tight`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ToastContainer
          transition={Bounce}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {children}
          </div>
          <Analytics/>
      </ThemeProvider>
      </body>
    </html>
  )
}
 