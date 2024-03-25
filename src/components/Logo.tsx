import Image from 'next/image'
import logo from '@/images/logos/Petrichor-logo-transparent.png'

export function Logo(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <Image src={logo} alt='Petrichor Productions Logo' width={500} height={300} />
  )
}
