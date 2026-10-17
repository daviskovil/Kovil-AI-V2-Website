import RelatedHireRoles from '@/src/components/hire/RelatedHireRoles'

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RelatedHireRoles />
    </>
  )
}
