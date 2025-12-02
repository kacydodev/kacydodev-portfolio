import Header from './components/Header';
import { Card } from './components/ui/Card';
import SectionHeader from './components/ui/SectionHeader';
import TechStack from './components/ui/TechStack';

export default function App() {
	return (
		<>
			<Header />
			<section>
				<SectionHeader />
				<Card header='02 - Web Browser'>
					<h4>Lorem Ipsum Generator</h4>
					<p>
						Quickly and easily generate Lorem Ipsum placeholder text. Select the
						number of characters, words, sentences or paragraphs, and hit
						generate!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</Card>
			</section>

			<TechStack />
		</>
	);
}
