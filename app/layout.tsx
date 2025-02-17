import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '400', '700', '900'],
})

export const metadata: Metadata = {
	icons: {
		icon: ['/favicon.ico?'],
		apple: ['/apple-touch-icon.png?'],
		shortcut: ['/apple-touch-icon.png'],
	},
	title: 'Personal Portfolio | Mikhail Shukanov',
	description: 'Mikhail is a frontend developer with 1 year of experience',
	openGraph: {
		title: 'Personal Portfolio | Mikhail Shukanov',
		description: 'Mikhail is a frontend developer with 1 year of experience',
		images: ['../assets/seoimage.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	)
}
