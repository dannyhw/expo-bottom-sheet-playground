import { BottomSheetNavigationOptions } from "@th3rdwave/react-navigation-bottom-sheet"
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet"
import { withLayoutContext } from "expo-router"

const { Navigator } = createBottomSheetNavigator()

export const BottomSheet = withLayoutContext<
	BottomSheetNavigationOptions,
	typeof Navigator
>(Navigator)

export default function BottomLayout() {
	return <BottomSheet screenOptions={{ snapPoints: ["50%"] }} />
}
