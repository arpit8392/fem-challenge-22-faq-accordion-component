'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { data } from '@/data'

const Accordion = () => {
	return (
		<div className='flex flex-col gap-y-8 md:gap-y-11'>
			<h1 className='self-center text-3xl font-bold text-darkDesaturatedBlue md:self-start md:text-4xl'>
				FAQ
			</h1>
			<dl className='flex flex-col gap-y-3'>
				{data.map((faq) => (
					<Disclosure as='div' key={faq.question}>
						{({ open }) => (
							<>
								<dt>
									<Disclosure.Button className='flex w-full items-center justify-between'>
										<span
											className={`text-left text-sm  text-veryDarkGrayishBlue md:text-base ${
												open ? 'font-bold' : 'font-normal'
											}`}>
											{faq.question}
										</span>
										<span className='md:ml-20'>
											<ChevronDownIcon
												className={
													open
														? 'h-6 w-6 rotate-180 transform text-softRed'
														: 'h-6 w-6 text-softRed'
												}
											/>
											<span className='sr-only'>Button to show the answer</span>
										</span>
									</Disclosure.Button>
								</dt>
								<Disclosure.Panel as='dd' className='pt-3 '>
									<p className='max-w-sm text-xs leading-5 text-darkGrayishBlue md:text-sm md:leading-7'>
										{faq.answer}
									</p>
								</Disclosure.Panel>
								<hr className='mt-4 h-[1px] bg-lightGrayishBlue' />
							</>
						)}
					</Disclosure>
				))}
			</dl>
		</div>
	)
}
export default Accordion
