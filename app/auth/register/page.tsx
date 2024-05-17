import Image from "next/image";
import FormLogin from "@/components/client/FormLogin"
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import FormRegister from "@/components/client/FormRegister";
const bg11 = '/images/bg-11.png'
const logo = '/images/logo.png'

const Login = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full flex flex-row-reverse flex-wrap">

        {/* Image Section */}
        <div className="lg:block w-1/2 xl:w-1/3 shadow-2xl">
          <Image
            className="bg-brown-900 rounded-bl-2xl rounded-tl-2xl w-full h-screen hidden md:block hover:brightness-110 duration-200 cursor-pointer transition-all"
            src={bg11}
            alt="Background"
            width={1000}
            height={1000}
            quality={100}
            loading="eager"
            priority
          />
        </div>

        {/* Login Section */}
        <div className="relative w-full h-screen md:w-1/2 xl:w-2/3 flex flex-col overflow-y-auto">
          <div className="flex justify-center md:justify-start md:pt-12 md:pl-12 md:-mb-24">
            <Image
              className="p-4 size-[100px] hover:brightness-125 duration-150 cursor-pointer transition-all"
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              quality={100}
              loading="eager"
              priority
            />
          </div>

          <Image
            className='absolute xl:-top-12 2xl:-top-20 left-0 right-0 w-full opacity-50 rounded-bl-lg rounded-br-lg -z-10'
            src={'/images/svg-wave-3.svg'}
            width={50}
            height={50}
            quality={100}
            alt='background wave'
            priority
            loading='eager'
          />

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 lg:px-16 xl:px-32">
            <p className="text-center text-3xl select-none">قهوه آنلاین</p>
            <FormRegister />
          </div>

          <div className="w-full flex flex-row gap-4 items-center justify-center mb-8 mt-16">
            <Link
              href={'/auth/login'}
              className='text-sky-500 text-lg'>
              ورود
            </Link>
            <p className="text-base">
              از قبل حساب کاربری دارید؟
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login