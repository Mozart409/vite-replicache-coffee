import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./components/layout";
import { NoMatch } from "./pages/NoMatch";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}
