import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Login", path: "/login" },
];

export function NavigationBar() {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink>Link</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
					{links.map((link) => (
						<NavigationMenuItem key={link.name}>
							<NavigationMenuLink>
								<Link to={link.path}>{link.name}</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
