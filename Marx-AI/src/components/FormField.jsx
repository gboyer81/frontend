const FormField = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange
}) => {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className='block text-sm font-medium text-gray-900'
				>
					{labelName}
				</label>
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className='bg-gray-100  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 outline-none block w-full p-3'
			/>
		</div>
	)
}
export default FormField
