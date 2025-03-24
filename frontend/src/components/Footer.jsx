import React from 'react'

export default function Footer() {
  return (
    <div
  style={{ fontFamily: "Poppins" }}
  className="flex justify-center py-4 px-4 text-center mt-[-8vh]"
>
  <span className="bg-black font px-3 py-2 text-[10px] sm:text-[10px] md:text-[11px] text-white">
    © Phoebe Kardita 2025, built by
    <a
      href="https://swarui.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="underline ml-1"
    >
      this guy
    </a>
  </span>
</div>  )
}
