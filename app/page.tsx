import Accordion from '@/components/Accordion'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='grid grid-cols-1 gap-32 rounded-3xl bg-white p-6 md:grid-cols-2 md:gap-20 md:pb-20 md:pr-24 md:pt-16 '>
			<div className='relative -left-10 flex items-center justify-center md:items-start'>
				<div className='absolute -top-32'>
					<Image
						src={'/images/illustration-woman-online-mobile.svg'}
						alt=''
						width={237}
						height={180}
						className='block md:hidden '
					/>
					<Image
						src={'/images/bg-pattern-mobile.svg'}
						alt=''
						width={240}
						height={145}
						className='absolute inset-y-2/3 block md:hidden'
					/>
				</div>
				<div className='absolute -inset-x-12 -inset-y-3'>
					<Image
						src={'/images/illustration-woman-online-desktop.svg'}
						alt=''
						width={472}
						height={359}
						className='hidden overflow-clip md:block'
					/>
					<Image
						src={'/images/bg-pattern-desktop.svg'}
						alt=''
						width={964}
						height={568}
						className='absolute -top-56 hidden -translate-x-6 translate-y-48 md:block'
					/>
					<Image
						src={'/images/illustration-box-desktop.svg'}
						alt=''
						width={90}
						height={106}
						className='hidden w-auto -translate-x-4 -translate-y-56 md:block'
					/>
				</div>
			</div>

			<Accordion />
		</main>
	)
}
