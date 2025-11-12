import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// @ts-expect-error icon pack installed as instructed
import 'devicon';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
