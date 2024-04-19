import Link from 'next/link'

export default function SideNavBar () {
  return (
    <>
      <div>Side Nav Bar</div>
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <Link href='/patient'>Patient</Link>
      </div>
    </>
  )
}
