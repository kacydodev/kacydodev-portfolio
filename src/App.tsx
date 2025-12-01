import Header from './components/Header';
import { Button } from './components/ui/Button';
import SectionHeader from './components/ui/SectionHeader';
import TechStack from './components/ui/TechStack';

export default function App() {
	return (
		<>
			<Header />
			<section>
				<SectionHeader />
				<Button title='primary button' />
				<Button title='outline button' variants='outline' />
				<Button title='link button' variants='link' />
			</section>

			<TechStack />
		</>
	);
}
