import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh_sans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'FAQ Accordion Card Component',
	description:
		'Frontend Mentor Challenge | FAQ Accordion Card Component | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS, Headless UI and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${kumbh_sans.className} grid min-h-screen bg-gradient-to-b from-softViolet to-softBlue px-6 py-36 md:place-content-center overflow-y-auto`}>
				{children}
			</body>
		</html>
	)
}
