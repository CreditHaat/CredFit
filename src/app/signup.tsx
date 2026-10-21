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

export default function SignupScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const generateOTP = () => {
    if (!firstName.trim() || !lastName.trim()) {
      Alert.alert("Missing details", "Enter your first and last name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Alert.alert(
        "Invalid mobile number",
        "Enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      Alert.alert("Invalid PAN", "Enter a valid PAN, for example ABCDE1234F.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Invalid email", "Enter a valid email address.");
      return;
    }

    // Demo only: no SMS is actually sent.
    setOtpSent(true);
    setOtp("");

    Alert.alert(
      "Demo OTP",
      "Your temporary OTP is 000111. No SMS has been sent.",
    );
  };

  const verifyOTP = () => {
    if (otp !== "000111") {
      Alert.alert("Invalid OTP", "Please enter the correct 6-digit demo OTP.");
      return;
    }

    router.replace("/cred-fitness");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Stack.Screen options={{ headerShown: false }} />

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

        <Text style={styles.heading}>
          Create your{"\n"}
          <Text style={styles.pink}>CredFit account.</Text>
        </Text>

        <Text style={styles.subtitle}>
          Start your journey toward better credit health and smarter financial
          decisions.
        </Text>

        <View style={styles.card}>
          {!otpSent ? (
            <>
              <Text style={styles.sectionTitle}>Your details</Text>

              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter first name"
                placeholderTextColor="#9CA3AF"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                maxLength={50}
              />

              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter last name"
                placeholderTextColor="#9CA3AF"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                maxLength={50}
              />

              <Text style={styles.label}>Mobile Number</Text>
              <View style={styles.mobileRow}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="10-digit mobile number"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={mobile}
                  onChangeText={(value) => setMobile(value.replace(/\D/g, ""))}
                />
              </View>

              <Text style={styles.label}>PAN Number</Text>
              <TextInput
                style={styles.input}
                placeholder="ABCDE1234F"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="characters"
                autoCorrect={false}
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

              <Pressable style={styles.primaryButton} onPress={generateOTP}>
                <Text style={styles.primaryButtonText}>Generate OTP →</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Verify your mobile</Text>

              <Text style={styles.otpDescription}>
                Enter the 6-digit demo OTP to complete your CredFit
                registration.
              </Text>

              <Text style={styles.label}>Mobile Number</Text>
              <Text style={styles.mobileDisplay}>+91 {mobile}</Text>

              <Text style={styles.label}>Enter OTP</Text>
              <TextInput
                style={styles.otpInput}
                placeholder="000000"
                placeholderTextColor="#9CA3AF"
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={(value) => setOtp(value.replace(/\D/g, ""))}
              />

              <Text style={styles.demoNote}>Demo OTP: 000111</Text>

              <Pressable style={styles.primaryButton} onPress={verifyOTP}>
                <Text style={styles.primaryButtonText}>
                  Verify & Create Account →
                </Text>
              </Pressable>

              <Pressable
                style={styles.secondaryButton}
                onPress={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
              >
                <Text style={styles.secondaryButtonText}>Edit details</Text>
              </Pressable>
            </>
          )}
        </View>

        <Text style={styles.privacy}>
          Your financial information should be protected and handled according
          to your privacy notice.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  content: {
    padding: 22,
    paddingTop: 35,
    paddingBottom: 35,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    marginBottom: 16,
  },
  backText: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "700",
  },
  logo: {
    fontSize: 29,
    fontWeight: "900",
    color: "#172033",
    marginBottom: 24,
  },
  logoPink: {
    color: "#EC4899",
  },
  heading: {
    fontSize: 32,
    lineHeight: 39,
    fontWeight: "900",
    color: "#172033",
  },
  pink: {
    color: "#EC4899",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: "#737B8C",
    marginTop: 10,
    marginBottom: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EEF0F5",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172033",
    marginBottom: 8,
  },
  label: {
    color: "#172033",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
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
  mobileRow: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E6EF",
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  countryCode: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "700",
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: "#E2E6EF",
  },
  mobileInput: {
    flex: 1,
    paddingLeft: 12,
    color: "#172033",
    fontSize: 14,
  },
  primaryButton: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  otpDescription: {
    color: "#737B8C",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  mobileDisplay: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172033",
    paddingVertical: 10,
  },
  otpInput: {
    height: 58,
    borderWidth: 1,
    borderColor: "#2563EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    textAlign: "center",
    letterSpacing: 8,
    fontSize: 23,
    fontWeight: "800",
    color: "#172033",
  },
  demoNote: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 14,
  },
  secondaryButton: {
    alignItems: "center",
    padding: 14,
    marginTop: 8,
  },
  secondaryButtonText: {
    color: "#2563EB",
    fontWeight: "700",
  },
  privacy: {
    fontSize: 11,
    lineHeight: 17,
    color: "#9299A7",
    textAlign: "center",
    marginTop: 20,
  },
});
