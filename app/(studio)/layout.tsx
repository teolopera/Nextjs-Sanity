import '../globals.css'

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Have fun! Next + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
