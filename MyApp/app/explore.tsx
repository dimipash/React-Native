import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} // Updated background color
      headerImage={
        <Image
          source={require('@/assets/images/coffee-icon.png')} // Use coffee icon
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">The Daily Grind</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">About Us</ThemedText>
        <ThemedText>
          Your friendly neighborhood coffee shop. Serving freshly brewed coffee, espresso drinks, pastries, and light snacks since 2024. We believe in quality beans and a welcoming atmosphere.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Opening Hours</ThemedText>
        <ThemedText>Monday - Friday: 7:00 AM - 6:00 PM</ThemedText>
        <ThemedText>Saturday - Sunday: 8:00 AM - 4:00 PM</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Location</ThemedText>
        <ThemedText>123 Main Street, Anytown, CA 91234</ThemedText>
        <ExternalLink href="https://maps.google.com/?q=123+Main+Street+Anytown+CA+91234">
          <ThemedText type="link">Get Directions</ThemedText>
        </ExternalLink>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Today's Special</ThemedText>
        <ThemedText>Try our signature 'Grindhouse Blend' - a smooth, medium roast with notes of chocolate and caramel. 10% off today!</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%', // Make image responsive
    height: 250,   // Adjust height as needed
    resizeMode: 'contain', // Or 'cover', depending on desired effect
    // Removed color, bottom, left, position as they might not be needed for Image
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align title nicely
    gap: 8,
    paddingHorizontal: 16, // Add padding
    marginTop: 16,        // Add margin top
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16, // Add padding to sections
    gap: 4,               // Add gap between text elements in a section
  },
});
