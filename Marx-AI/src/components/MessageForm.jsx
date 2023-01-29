import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FormField, Loader } from '../components'

const MessageForm = () => {
	const navigate = useNavigate()

	const [ form, setForm ] = useState({
		name: '',
		message: ''
	})
	const [ sendingMessage, setSendingMessage ] = useState(false)
	const [ loading, setLoading ] = useState(false)

	const sendMessage = async () => {
		try {
			setSendingMessage(true)
			await fetch('http://localhost:8080/api/v2/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application.json'
				},
				body: JSON.stringify({ message: form.message })
			})

			const data = await response.json()
			setForm({ ...form, message: data.message })
		} catch (error) {
			alert(error)
		} finally {
			setSendingMessage(false)
		}
	}
	const handleSubmit = () => {}
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<section className='max-w-7xl mx-auto'>
			<form
				className=' fixed bottom-[2rem] w-full mt-16 max-w-3xl'
				onSubmit={handleSubmit}
			>
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
						labelName='Message'
						type='text'
						name='message'
						placeholder='Start a conversation'
						value={form.message}
						handleChange={handleChange}
					/>
				</div>

				<div className='mt-5 flex gap-5'>
					<button
						type='button'
						onClick={sendMessage}
						className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-12 py-2.5 text-center '
					>
						{sendingMessage ? 'Sending...' : 'Send'}
					</button>
				</div>
			</form>
		</section>
	)
}
export default MessageForm
