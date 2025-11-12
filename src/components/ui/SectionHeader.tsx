export default function SectionHeader() {
	return (
		<>
			<hr className='opacity-50' />
			<h2 className='ml-6 before:content-["●"] before:absolute before:left-0 before:text-primary uppercase font-mono'>
				Section Header
			</h2>
		</>
	);
}
