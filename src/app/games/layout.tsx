export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <>
      <title>GamingHub | Home</title>
      <div className="relative">
        {children}
        {modal}
      </div>
    </>
  )
}