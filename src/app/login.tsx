import { useRouter } from "expo-router";
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

export default function LoginScreen() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Alert.alert(
        "Invalid mobile number",
        "Enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    // Demo only: connect to your backend to send a real OTP.
    setOtpSent(true);
    Alert.alert(
      "Demo mode",
      "OTP screen opened. Real SMS delivery is not configured yet.",
    );
  };

  const verifyOTP = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Alert.alert(
        "Invalid mobile number",
        "Enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

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
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>← Back</Text>
        </Pressable>

        <Text style={styles.logo}>
          CRED<Text style={styles.pink}>fit</Text>
        </Text>

        <Text style={styles.heading}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Login to continue your financial journey.
        </Text>

        <Text style={styles.label}>Mobile number</Text>

        <View style={styles.mobileInput}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter 10-digit mobile number"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        {otpSent && (
          <>
            <Text style={styles.label}>Enter OTP</Text>
            <TextInput
              style={styles.otpInput}
              placeholder="6-digit OTP"
              placeholderTextColor="#9CA3AF"
              keyboardType="number-pad"
              maxLength={6}
              value={otp}
              onChangeText={setOtp}
            />
          </>
        )}

        <Pressable
          style={styles.primaryButton}
          onPress={otpSent ? verifyOTP : sendOTP}
        >
          <Text style={styles.primaryButtonText}>
            {otpSent ? "Verify OTP" : "Get OTP  →"}
          </Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>New to CredFit? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={styles.link}>Sign Up</Text>
          </Pressable>
        </View>

        <Text style={styles.security}>Your financial journey, secured.</Text>
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
    flexGrow: 1,
    padding: 24,
    paddingTop: 45,
    justifyContent: "center",
  },
  back: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 35,
  },
  logo: {
    fontSize: 32,
    fontWeight: "900",
    color: "#172033",
    marginBottom: 35,
  },
  pink: {
    color: "#EC4899",
  },
  heading: {
    fontSize: 32,
    fontWeight: "900",
    color: "#172033",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: "#737B8C",
    marginTop: 10,
    marginBottom: 35,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172033",
    marginBottom: 10,
  },
  mobileInput: {
    height: 56,
    borderWidth: 1,
    borderColor: "#E2E6EF",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 22,
  },
  countryCode: {
    fontSize: 15,
    color: "#172033",
    fontWeight: "700",
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#172033",
  },
  otpInput: {
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E6EF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    letterSpacing: 6,
    marginBottom: 22,
    color: "#172033",
  },
  primaryButton: {
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },
  footerText: {
    color: "#737B8C",
    fontSize: 14,
  },
  link: {
    color: "#EC4899",
    fontWeight: "800",
    fontSize: 14,
  },
  security: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 45,
  },
});
