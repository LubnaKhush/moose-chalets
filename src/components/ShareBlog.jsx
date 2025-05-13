'use client'
import { Share2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ToastContainer, toast, Slide, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ShareButton() {
  const pathname = usePathname()

  const handleClick = () => {
    const url = `${window.location.origin}${pathname}`
    navigator.clipboard.writeText(url)
    toast.success('Link copied!', {
      position: "top-right",
      autoClose: 2000, // Shortened display time for small screens
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500} // Ensure toast is brief
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div onClick={handleClick} className="flex items-center text-sm text-gray-500 hover:text-green-600 transition-colors">
        <Share2 className="w-4 h-4 mr-1" />
        Share this article
      </div>
    </>
  )
}
