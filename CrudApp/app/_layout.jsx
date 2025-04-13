import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter"; // Import font hooks
import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen
import { useEffect } from "react"; // Import useEffect

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // Load fonts
    const [fontsLoaded, fontError] = useFonts({
        Inter_500Medium,
    });

    // Hide splash screen once fonts are loaded or error occurs
    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Prevent rendering until fonts are loaded
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
