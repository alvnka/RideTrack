import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Learn from "../pages/Learn";

type Props = {
	setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
	isDark: boolean;
};

export default function AppRoutes({ setMode, isDark }: Props) {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home setMode={setMode} isDark={isDark} />}
			/>

			<Route path="/learn" element={<Learn />} />

			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}