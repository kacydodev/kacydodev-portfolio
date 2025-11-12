import Header from './components/Header';
import Button from './components/ui/Button';
import SectionHeader from './components/ui/SectionHeader';

export default function App() {
	return (
		<>
			<Header />
			<section>
				<SectionHeader />
				<Button title='primary button' />
				<Button title='outline button' variants='outline' />
			</section>
		</>
	);
}
