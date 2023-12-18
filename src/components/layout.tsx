import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavigationBar } from "./navigation-bar";

export function Layout() {
	return (
		<>
			<NavigationBar />
			<main className="container mx-auto px-4">
				{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
				<Outlet />
			</main>
		</>
	);
}
