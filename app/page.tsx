import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { LogoAnimation } from '@/components/LogoAnimation'
import { Navbar } from '@/components/Navbar'
import { Portfolio } from '@/components/Portfolio'
import { Stack } from '@/components/Stack'
import { User } from '@/components/User'

export default function Home() {
	return (
		<>
			<Navbar />
			<User />
			<About />
			<Portfolio />
			<Stack />
			<LogoAnimation />
			<Footer />
		</>
	)
}
