'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'

const projects = [
	{
		id: 1,
		title: 'Web service for ordering burgers',
		description:
			'The "Stellar Burgers" website is a web application developed using React.js, allowing users to create and order burgers with a variety of ingredients. The main sections of the site include a ‘Builder’ where you can assemble a burger to your liking, an ‘Order Feed’ to track your current orders, and a ‘My Account’ to manage your personal information',
		devstack: 'React, Redux Toolkit, React Router, TypeScript, HTML5, ССЅ3',
		link: 'https://sh1yuu.github.io/stellar-burgers/',
		git: 'https://github.com/sh1yuu/stellar-burgers',
		image: proj1,
		type: 'frontend',
	},
	{
		id: 2,
		title: 'Web service for viewing/uploading new locations by the user',
		description:
			'"Mesto" is a web application that allows users to share photos of interesting places. Users can edit their profile, add new photos with descriptions, update their avatar and view other members publications. The interface includes features to edit profile, create new posts and update avatar',
		devstack: 'JavaScript, HTML5, ССЅ3',
		link: 'https://sh1yuu.github.io/mesto-project-ff/',
		git: 'https://github.com/sh1yuu/mesto-project-ff',
		image: proj2,
		type: 'frontend',
	},
]

export const Portfolio = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const toggleExpand = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<section className='text-white py-24 md:py-64' id='portfolio'>
			<div className='container mx-auto px-4'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='text-6xl font-bold text-center mb-16'
				>
					Selected <span className='text-emerald-300'>Projects</span>
				</motion.h2>

				<div className='space-y-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
						>
							<div
								className='p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10'
								onClick={() => toggleExpand(index)}
							>
								<h3 className='text-4xl font-semibold'>{project.title}</h3>
								<div className='flex items-center space-x-4'>
									<span className='text-3xl font-light text-emerald-300'>
										0{index + 1}
									</span>
									<FiChevronDown
										className={`w-6 h-6 transform transition-transform ${
											expandedIndex === index ? 'rotate-180' : ''
										} `}
									/>
								</div>
							</div>
							<AnimatePresence>
								{expandedIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className='px-6 pb-6 bg-black/20 border border-white/10'
									>
										<div className='flex flex-col md:flex-row gap-8'>
											<Image
												src={project.image}
												alt={project.title}
												className='w-full md:w-1/2 h-64 object-cover rounded-lg'
											/>
											<div className='flex-1'>
												<p className='text-white/70 mb-4 mt-4'>
													{project.description}
												</p>
												<p className='text-emerald-300 font-medium mb-2'>
													Stack: {project.devstack}
												</p>
												<p className='text-emerald-400/60 font-medium mb-4 capitalize'>
													Type: {project.type}
												</p>
												<div className='flex justify-start items-center space-x-3'>
													<Link
														href={project.link}
														className='text-emerald-400 hover:text-blue-300 transition-colors'
													>
														<HiOutlineExternalLink size={30} />
													</Link>
													<Link
														href={project.git}
														className='text-gray-400 hover:text-gray-300 transition-colors'
													>
														<FaGithub size={30} />
													</Link>
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
