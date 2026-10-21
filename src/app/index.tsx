import { Stack, useRouter } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Brand */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            CRED<Text style={styles.logoPink}>fit</Text>
          </Text>
          <View style={styles.logoLine} />
        </View>

        {/* Welcome section */}
        <View style={styles.hero}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              YOUR FINANCIAL WELLNESS PARTNER
            </Text>
          </View>

          <Text style={styles.heading}>
            Build a healthier{"\n"}
            <Text style={styles.pink}>credit future.</Text>
          </Text>

          <Text style={styles.subtitle}>
            Understand your credit health, optimize your debt, and make smarter
            financial decisions. Your financial journey starts here.
          </Text>

          {/* Feature cards */}
          <View style={styles.featureCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>↗</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Credit Fitness</Text>
              <Text style={styles.featureSubtitle}>
                Understand and improve your credit health.
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.iconBoxBlue}>
              <Text style={styles.iconBlue}>₹</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Debt Optimization</Text>
              <Text style={styles.featureSubtitle}>
                Explore smarter debt repayment strategies.
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.iconBoxOrange}>
              <Text style={styles.iconOrange}>✓</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Privacy First</Text>
              <Text style={styles.featureSubtitle}>
                Stay informed and in control of your data.
              </Text>
            </View>
          </View>
        </View>

        {/* Authentication buttons */}
        <View style={styles.footer}>
          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.signupText}>Get Started →</Text>
          </Pressable>

          <Pressable
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text style={styles.loginLink}>Login</Text>
            </Text>
          </Pressable>

          <Text style={styles.privacy}>
            Your journey. Your choices. Your financial future.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "flex-start",
  },
  logo: {
    fontSize: 30,
    fontWeight: "900",
    color: "#172033",
    letterSpacing: -1,
  },
  logoPink: {
    color: "#EC4899",
  },
  logoLine: {
    width: 42,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#2563EB",
    marginTop: 5,
  },
  hero: {
    flexShrink: 1,
    justifyContent: "center",
    marginVertical: 16,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#FCE7F3",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 18,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#BE185D",
    letterSpacing: 0.8,
  },
  heading: {
    fontSize: 37,
    lineHeight: 44,
    fontWeight: "900",
    color: "#172033",
    letterSpacing: -1.2,
  },
  pink: {
    color: "#EC4899",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: "#737B8C",
    marginTop: 14,
    marginBottom: 20,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EDF0F5",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FCE7F3",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBoxBlue: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBoxOrange: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFEDD5",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#DB2777",
    fontSize: 25,
    fontWeight: "800",
  },
  iconBlue: {
    color: "#2563EB",
    fontSize: 22,
    fontWeight: "800",
  },
  iconOrange: {
    color: "#EA580C",
    fontSize: 23,
    fontWeight: "800",
  },
  featureText: {
    flex: 1,
    marginLeft: 12,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#172033",
  },
  featureSubtitle: {
    fontSize: 11,
    lineHeight: 16,
    color: "#737B8C",
    marginTop: 3,
  },
  footer: {
    paddingTop: 8,
  },
  signupButton: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  loginButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#737B8C",
    fontSize: 13,
  },
  loginLink: {
    color: "#EC4899",
    fontWeight: "800",
  },
  privacy: {
    fontSize: 10,
    color: "#9299A7",
    textAlign: "center",
    marginTop: 4,
  },
  pressed: {
    opacity: 0.8,
  },
});
