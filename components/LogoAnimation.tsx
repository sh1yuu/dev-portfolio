'use client'

import fivedhub from '@/assets/5dhub.tech.png'
import yandex from '@/assets/yandex.practicum.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
	{
		src: yandex,
		alt: 'yandex.practicum',
	},
	{
		src: fivedhub,
		alt: '5dhub tech',
	},
]

export const LogoAnimation = () => {
	return (
		<div className='py-8 bg-emerald-200/40 opacity-80 mb-10'>
			<div className='container mx-auto'>
				<div className='overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]'>
					<motion.div
						className='flex gap-14 flex-none pr-14'
						animate={{ translateX: '-50%' }}
						transition={{
							duration: 35,
							repeat: Infinity,
							ease: 'linear',
							repeatType: 'loop',
						}}
					>
						{images.map((image, index) => (
							<Image key={index} src={image.src} alt={image.alt} height={40} />
						))}
					</motion.div>
				</div>
			</div>
		</div>
	)
}
