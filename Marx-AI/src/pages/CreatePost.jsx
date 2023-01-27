import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormField, Loader } from '../components'

const CreatePost = () => {
	const navigate = useNavigate()
	const [ form, setForm ] = useState({
		name: '',
		prompt: ''
	})

	const [ loading, setLoading ] = useState(false)
	const sendMessage = () => {}
	const handleSubmit = () => {}
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>
					Ask A Question
				</h1>
				<p className='mt-2 text-[#666e75] text-[15px] max-w [500px]'>
					Subheader to go here.....
				</p>
			</div>

			<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-5'>
					<FormField
						labelName='Your name'
						type='text'
						name='name'
						placeholder='John Doe'
						value={form.name}
						handleChange={handleChange}
					/>
					<FormField
						labelName='Prompt'
						type='text'
						name='prompt'
						placeholder='Start a conversation'
						value={form.prompt}
						handleChange={handleChange}
					/>
				</div>

				<div className='mt-5 flex gap-5'>
					<button
						type='button'
						onClick={sendMessage}
						className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{sendMessage ? 'Sending...' : 'Send'}
					</button>
				</div>
			</form>
		</section>
	)
}
export default CreatePost
