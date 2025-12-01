import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>
      <Image
        src={'/images/header/logo.svg'}
        alt='logo'
        width={140}
        height={58}
        unoptimized={true}
        className='dark:hidden'
      />
      <Image
        src={'/images/header/dark-logo.svg'}
        alt='logo'
        width={140}
        height={58}
        unoptimized={true}
        className='dark:block hidden'
      />
    </>
  )
}

export default Logo
