'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'

export const Footer = () => {
	return (
		<footer className='py-8' id='contact'>
			<div className='max-w-[1200px] mx-auto px-4'>
				<div className='flex items-center flex-col'>
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='md:text-7xl text-4xl font-bold mb-10 text-white/50'
						>
							Contact <span className='text-gray-400'>me</span>
						</motion.h2>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='text-white/50 mt-12'
						>
							<div className='mb-8'>
								<p className='text-lg mb-1'>Email</p>
								<Link
									className='text-2xl font-semibold underline text-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300'
									href='mailto:mikhail.shukanov@mail.ru'
								>
									mikhail.shukanov@mail.ru
								</Link>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='text-white/50 mt-12'
						>
							<div className='mb-8'>
								<p className='text-lg mb-1'>Telegram</p>
								<Link
									className='text-2xl font-semibold underline text-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300'
									href='https://t.me/shizzzx'
								>
									https://t.me/shizzzx
								</Link>
							</div>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='relative z-10 text-center mt-8 py-12'
				>
					<h1 className='hidden md:block text-[18rem] md:text-[6rem] lg:text-[6rem] font-bold text-white opacity-10'>
						MIKHAIL
						<br />
						SHUKANOV
					</h1>

					<h1 className='md:hidden relative text-5xl md:text-[12rem] lg:text-[5rem] font-bold text-white opacity-10'>
						MIKHAIL
						<br />
						SHUKANOV
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col m-auto'
				>
					<p className='text-gray-200 caption text-n-4 lg:block'>
						© 2025. All rights reserved.
					</p>

					<ul className='flex gap-5 flex-wrap'>
						<Link
							href='https://github.com/sh1yuu'
							aria-label='GitHub'
							className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'
						>
							<AiFillGithub size={30} />
						</Link>
						<Link
							href='https://www.instagram.com/etternall.forgotten/'
							aria-label='Instagram'
							className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'
						>
							<AiFillInstagram size={30} />
						</Link>
						<Link
							href='https://www.linkedin.com/in/mikhail-shukanov/'
							aria-label='LinkedIn'
							className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'
						>
							<FaLinkedinIn size={30} />
						</Link>
						<Link
							href='https://t.me/shizzzx'
							aria-label='Telegram'
							className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'
						>
							<FaTelegramPlane size={30} />
						</Link>
					</ul>
				</motion.div>
			</div>
		</footer>
	)
}
