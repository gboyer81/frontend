import React, { Fragment, useState, useEffect } from 'react'

import { Loader, ChatBox, MessageForm } from '../components'

const Home = () => {
	const [ loading, setLoading ] = useState(false)

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>
					Commie Bot
				</h1>
				<p className='mt-2 text-[#666e75] text-[15px] max-w [500px]'>
					Subheader....
				</p>
			</div>
			<div className='mt-10'>
				{loading ? (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				) : (
					<Fragment>
						<ChatBox />
					</Fragment>
				)}
			</div>

			<div className='mt-16'>
				<MessageForm />
			</div>
		</section>
	)
}

export default Home
