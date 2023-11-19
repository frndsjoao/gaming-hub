import '../styles/globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>GamingHub | Login</title>
      </head>
      <body>{children}</body>
    </html>
  )
}