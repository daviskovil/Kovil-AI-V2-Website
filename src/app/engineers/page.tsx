import { redirect } from 'next/navigation'

// Old URL — redirect to the new /profiles page
export default function Page() {
  redirect('/profiles')
}
