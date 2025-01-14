import React from 'react'
import { GoHome } from 'react-icons/go'
import { PiAtomLight, PiDna, PiTooth } from 'react-icons/pi'

const Navbar = () => {
  return (
    <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="relative group cursor-pointer">
              <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
                <GoHome />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                <span className="block w-1/3 h-[1.5px] bg-primary mb-1 mx-auto"></span>
                <p className="text-slate-700">Home</p>
              </div>
            </li>

            <li className="relative group cursor-pointer">
              <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
                <PiDna />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                <span className="block w-1/3 h-[1.5px] bg-primary mb-1 mx-auto"></span>
                <p className="text-slate-700">Checkup</p>
              </div>
            </li>

            <li className="relative group cursor-pointer">
              <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
                <PiTooth />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                <span className="block w-1/3 h-[1.5px] bg-primary mb-1 mx-auto"></span>
                <p className="text-slate-700">Dental</p>
              </div>
            </li>

            <li className="relative group cursor-pointer">
              <span className="bg-[#f1f5f9] size-12 rounded-full grid place-items-center text-2xl text-slate-700">
                <PiAtomLight />
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                <span className="block w-1/3 h-[1.5px] bg-primary mb-1 mx-auto"></span>
                <p className="text-slate-700">Research</p>
              </div>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar