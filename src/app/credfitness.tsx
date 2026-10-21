import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function CredFitnessScreen() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");

  const generateOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Alert.alert(
        "Invalid mobile number",
        "Enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert("Missing details", "Please enter your first and last name.");
      return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.toUpperCase())) {
      Alert.alert("Invalid PAN", "Enter a valid 10-character PAN.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    // Frontend demo only. Connect a backend SMS OTP service here.
    Alert.alert(
      "Details validated",
      "Your details are ready. Real OTP delivery must be connected to the backend.",
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Back</Text>
          </Pressable>

          <Text style={styles.logo}>
            CRED<Text style={styles.logoPink}>fit</Text>
          </Text>

          <Text style={styles.heading}>Check your</Text>
          <Text style={styles.heading}>
            <Text style={styles.pink}>CredFitness</Text>
          </Text>

          <Text style={styles.subtitle}>
            Enter your details to begin your financial health assessment.
          </Text>

          <View style={styles.formCard}>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.mobileContainer}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                style={styles.mobileInput}
                placeholder="10-digit mobile number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                maxLength={10}
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="words"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="words"
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.label}>PAN Number</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. ABCDE1234F"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="characters"
              maxLength={10}
              value={pan}
              onChangeText={(value) => setPan(value.toUpperCase())}
            />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            <Pressable style={styles.button} onPress={generateOTP}>
              <Text style={styles.buttonText}>Generate OTP →</Text>
            </Pressable>

            <Text style={styles.privacyText}>
              Your information should be handled securely and used only for the
              purposes explained in the privacy notice.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  content: {
    padding: 22,
    paddingTop: 45,
    paddingBottom: 40,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
    paddingVertical: 6,
  },
  backText: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "700",
  },
  logo: {
    fontSize: 28,
    fontWeight: "900",
    color: "#172033",
    marginBottom: 24,
  },
  logoPink: {
    color: "#EC4899",
  },
  heading: {
    fontSize: 31,
    fontWeight: "900",
    color: "#172033",
    lineHeight: 38,
  },
  pink: {
    color: "#EC4899",
  },
  subtitle: {
    fontSize: 14,
    color: "#737B8C",
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 24,
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EEF0F5",
  },
  label: {
    color: "#172033",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E2E6EF",
    borderRadius: 12,
    paddingHorizontal: 14,
    color: "#172033",
    backgroundColor: "#FFFFFF",
    fontSize: 14,
  },
  mobileContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E6EF",
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  countryCode: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172033",
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: "#E2E6EF",
  },
  mobileInput: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 14,
    color: "#172033",
  },
  button: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  privacyText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#9299A7",
    textAlign: "center",
    marginTop: 16,
  },
});
