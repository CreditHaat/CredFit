import { useRouter } from "expo-router";
import {
    Alert,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  navy: "#142957",
  blue: "#3568E8",
  pink: "#EC4899",
  orange: "#F97316",
  bg: "#F4F6FC",
  white: "#FFFFFF",
  text: "#182747",
  muted: "#74809A",
  border: "#E8ECF5",
  green: "#16845B",
  paleBlue: "#EAF0FF",
  palePink: "#FCE7F3",
  paleOrange: "#FFF0E4",
};

function SectionTitle({
  title,
  action,
  onPress,
}: {
  title: string;
  action?: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {action ? (
        <Pressable onPress={onPress}>
          <Text style={styles.link}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function FeatureCard({
  emoji,
  title,
  subtitle,
  color,
  onPress,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.featureCard,
        { opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={onPress}
    >
      <View style={[styles.featureIcon, { backgroundColor: color }]}>
        <Text style={styles.featureEmoji}>{emoji}</Text>
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureSubtitle}>{subtitle}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();

  const comingSoon = (feature: string) => {
    Alert.alert(
      feature,
      "This feature is part of the CredFit demo. It can be connected to real data and services later.",
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              CRED<Text style={styles.logoPink}>fit</Text>
            </Text>
            <Text style={styles.tagline}>Better Credit. Brighter Future.</Text>
          </View>

          <Pressable
            style={styles.avatar}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.avatarText}>R</Text>
          </Pressable>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroDecoration} />
          <Text style={styles.greeting}>Hi there 👋</Text>
          <Text style={styles.heroTitle}>
            Take control of{"\n"}your Credit Fitness.
          </Text>
          <Text style={styles.heroDescription}>
            Understand your credit health and discover smarter financial
            decisions.
          </Text>

          <Pressable
            style={styles.heroButton}
            onPress={() => router.push("/credfitness")}
          >
            <Text style={styles.heroButtonText}>Check My CredFitness</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </Pressable>

          <View style={styles.heroDots}>
            <View style={styles.dotActive} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Demo notice */}
        <View style={styles.demoNotice}>
          <Text style={styles.demoIcon}>ⓘ</Text>
          <Text style={styles.demoText}>
            DEMO PREVIEW · The figures below are sample data, not your actual
            credit report.
          </Text>
        </View>

        {/* Credit score */}
        <SectionTitle
          title="Your Credit Overview"
          action="View details"
          onPress={() => router.push("/credfitness")}
        />

        <View style={styles.scoreCard}>
          <View style={styles.scoreTop}>
            <View>
              <Text style={styles.cardEyebrow}>SAMPLE CREDIT SCORE</Text>
              <View style={styles.scoreRow}>
                <Text style={styles.scoreNumber}>563</Text>
                <View style={styles.scoreOutOf}>
                  <Text style={styles.outOfText}>/ 900</Text>
                </View>
              </View>
              <View style={styles.statusBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Needs attention</Text>
              </View>
            </View>

            <View style={styles.scoreCircle}>
              <View style={styles.scoreCircleInner}>
                <Text style={styles.scoreEmoji}>📊</Text>
                <Text style={styles.scoreCircleLabel}>SAMPLE</Text>
              </View>
            </View>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.scoreHint}>
            Start with your credit report and payment history to understand
            where you stand.
          </Text>

          <Pressable
            style={styles.scoreButton}
            onPress={() => router.push("/credfitness")}
          >
            <Text style={styles.scoreButtonText}>
              Start Credit Assessment →
            </Text>
          </Pressable>
        </View>

        {/* Credit health */}
        <SectionTitle
          title="Credit Health Check"
          action="Explore"
          onPress={() => router.push("/credfitness")}
        />

        <View style={styles.healthCard}>
          <View style={styles.healthHeader}>
            <View style={styles.healthIcon}>
              <Text style={styles.healthEmoji}>❤️</Text>
            </View>
            <View style={styles.healthHeaderText}>
              <Text style={styles.healthTitle}>
                Build healthier credit habits
              </Text>
              <Text style={styles.healthSubtitle}>
                A few things worth checking
              </Text>
            </View>
          </View>

          <View style={styles.healthItem}>
            <View style={styles.healthBullet}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
            <View style={styles.healthItemText}>
              <Text style={styles.healthItemTitle}>Pay EMIs on time</Text>
              <Text style={styles.healthItemDescription}>
                Set reminders before every due date.
              </Text>
            </View>
          </View>

          <View style={styles.healthDivider} />

          <View style={styles.healthItem}>
            <View style={styles.healthBullet}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
            <View style={styles.healthItemText}>
              <Text style={styles.healthItemTitle}>
                Monitor credit utilisation
              </Text>
              <Text style={styles.healthItemDescription}>
                Review how much of your available limit you use.
              </Text>
            </View>
          </View>

          <View style={styles.healthDivider} />

          <View style={styles.healthItem}>
            <View style={styles.healthBullet}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
            <View style={styles.healthItemText}>
              <Text style={styles.healthItemTitle}>
                Check your credit report
              </Text>
              <Text style={styles.healthItemDescription}>
                Review account details and dispute errors if needed.
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.outlineButton}
            onPress={() => router.push("/credfitness")}
          >
            <Text style={styles.outlineButtonText}>Get My Action Plan →</Text>
          </Pressable>
        </View>

        {/* Debt planner */}
        <SectionTitle title="Debt & Savings Planner" />

        <View style={styles.debtCard}>
          <View style={styles.debtHeader}>
            <View style={styles.debtIcon}>
              <Text style={styles.debtEmoji}>💰</Text>
            </View>
            <View style={styles.debtHeaderText}>
              <Text style={styles.debtTitle}>Make your debt work smarter</Text>
              <Text style={styles.debtDescription}>
                Compare repayment strategies and eligible refinancing options.
              </Text>
            </View>
          </View>

          <View style={styles.debtStats}>
            <View style={styles.debtStat}>
              <Text style={styles.debtStatLabel}>Sample outstanding</Text>
              <Text style={styles.debtStatValue}>₹4.6L</Text>
            </View>
            <View style={styles.statSeparator} />
            <View style={styles.debtStat}>
              <Text style={styles.debtStatLabel}>Potential savings</Text>
              <Text style={[styles.debtStatValue, { color: C.green }]}>
                Calculate
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.debtButton}
            onPress={() => comingSoon("Debt & Savings Planner")}
          >
            <Text style={styles.debtButtonText}>Explore My Options →</Text>
          </Pressable>
        </View>

        {/* Quick actions */}
        <View style={styles.quickActions}>
          <Pressable
            style={styles.quickAction}
            onPress={() => comingSoon("Score Simulator")}
          >
            <View style={[styles.quickIcon, { backgroundColor: C.palePink }]}>
              <Text style={styles.quickEmoji}>📈</Text>
            </View>
            <Text style={styles.quickTitle}>Score Simulator</Text>
            <Text style={styles.quickSubtitle}>Explore scenarios</Text>
          </Pressable>

          <Pressable
            style={styles.quickAction}
            onPress={() => comingSoon("Credit Report")}
          >
            <View style={[styles.quickIcon, { backgroundColor: C.paleBlue }]}>
              <Text style={styles.quickEmoji}>📄</Text>
            </View>
            <Text style={styles.quickTitle}>Credit Report</Text>
            <Text style={styles.quickSubtitle}>Understand your report</Text>
          </Pressable>

          <Pressable
            style={styles.quickAction}
            onPress={() => comingSoon("EMI Calculator")}
          >
            <View style={[styles.quickIcon, { backgroundColor: C.paleOrange }]}>
              <Text style={styles.quickEmoji}>🧮</Text>
            </View>
            <Text style={styles.quickTitle}>EMI Calculator</Text>
            <Text style={styles.quickSubtitle}>Plan repayments</Text>
          </Pressable>
        </View>

        {/* Profile metrics */}
        <SectionTitle title="Your Credit Profile" />

        <View style={styles.profileCard}>
          <Metric value="15" label="Sample accounts" />
          <View style={styles.metricSeparator} />
          <Metric value="₹4.6L" label="Sample balance" />
          <View style={styles.metricSeparator} />
          <Metric value="—" label="Payment history" />
        </View>

        <Text style={styles.smallDisclaimer}>
          Sample values only. Actual figures require your verified credit
          information and consent.
        </Text>

        {/* Advisory */}
        <View style={styles.advisoryCard}>
          <View style={styles.advisoryTop}>
            <View style={styles.advisoryIcon}>
              <Text style={styles.advisoryEmoji}>✨</Text>
            </View>
            <View style={styles.advisoryText}>
              <Text style={styles.advisoryTitle}>CredFit Advisory</Text>
              <Text style={styles.advisorySubtitle}>
                Your finances, your decisions.
              </Text>
            </View>
            <View style={styles.comingBadge}>
              <Text style={styles.comingText}>COMING SOON</Text>
            </View>
          </View>

          <Text style={styles.advisoryDescription}>
            Get clear explanations, personalised action plans, and transparent
            comparisons to help you make informed choices.
          </Text>

          <Pressable
            style={styles.advisoryButton}
            onPress={() => comingSoon("CredFit Advisory")}
          >
            <Text style={styles.advisoryButtonText}>Explore Advisory →</Text>
          </Pressable>
        </View>

        {/* Learn section */}
        <SectionTitle
          title="Learn & Grow"
          action="See all"
          onPress={() => comingSoon("Learning Centre")}
        />

        <View style={styles.learningRow}>
          <FeatureCard
            emoji="▶️"
            title="Watch videos"
            subtitle="Learn in minutes"
            color={C.palePink}
            onPress={() => comingSoon("Credit Education Videos")}
          />
          <FeatureCard
            emoji="📚"
            title="Read guides"
            subtitle="Simple money lessons"
            color={C.paleBlue}
            onPress={() => comingSoon("Financial Guides")}
          />
          <FeatureCard
            emoji="🧮"
            title="EMI tools"
            subtitle="Calculate payments"
            color={C.paleOrange}
            onPress={() => comingSoon("EMI Calculator")}
          />
        </View>

        {/* Privacy */}
        <View style={styles.privacyCard}>
          <Text style={styles.privacyIcon}>🔒</Text>
          <View style={styles.privacyTextContainer}>
            <Text style={styles.privacyTitle}>Your data. Your choice.</Text>
            <Text style={styles.privacyDescription}>
              CredFit is designed for transparent, consent-based financial
              guidance. Review permissions before sharing personal data.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          CREDfit · Make informed financial decisions
        </Text>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Text style={[styles.navIcon, styles.navActive]}>⌂</Text>
          <Text style={[styles.navLabel, styles.navActive]}>Home</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => comingSoon("Accounts")}
        >
          <Text style={styles.navIcon}>▤</Text>
          <Text style={styles.navLabel}>Accounts</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => comingSoon("My Plan")}>
          <Text style={styles.navIcon}>◇</Text>
          <Text style={styles.navLabel}>My Plan</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => router.push("/login")}>
          <Text style={styles.navIcon}>○</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: -1,
    color: C.navy,
  },
  logoPink: {
    color: C.pink,
  },
  tagline: {
    color: C.muted,
    fontSize: 10,
    marginTop: 1,
    letterSpacing: 0.3,
  },
  avatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: C.palePink,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F9C9E3",
  },
  avatarText: {
    color: C.pink,
    fontSize: 17,
    fontWeight: "800",
  },
  hero: {
    backgroundColor: C.navy,
    borderRadius: 25,
    padding: 22,
    overflow: "hidden",
    marginBottom: 14,
  },
  heroDecoration: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#24447F",
    right: -65,
    top: -70,
  },
  greeting: {
    color: "#D5DEFF",
    fontSize: 14,
    marginBottom: 10,
  },
  heroTitle: {
    color: C.white,
    fontSize: 28,
    lineHeight: 35,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  heroDescription: {
    color: "#D8E0F3",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 11,
    maxWidth: 285,
  },
  heroButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: C.pink,
    borderRadius: 13,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 12,
  },
  heroButtonText: {
    color: C.white,
    fontWeight: "800",
    fontSize: 13,
  },
  buttonArrow: {
    color: C.white,
    fontSize: 19,
    fontWeight: "700",
  },
  heroDots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
  },
  dotActive: {
    width: 19,
    height: 5,
    borderRadius: 5,
    backgroundColor: C.pink,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#7887A8",
  },
  demoNotice: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFF7E9",
    borderRadius: 10,
    padding: 11,
    marginBottom: 23,
    gap: 8,
  },
  demoIcon: {
    color: "#A66B14",
    fontSize: 15,
    fontWeight: "800",
  },
  demoText: {
    flex: 1,
    color: "#83591D",
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 5,
  },
  sectionHeading: {
    color: C.text,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  link: {
    color: C.blue,
    fontSize: 12,
    fontWeight: "700",
  },
  scoreCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: C.border,
  },
  scoreTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardEyebrow: {
    color: C.muted,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 5,
  },
  scoreNumber: {
    color: C.navy,
    fontSize: 43,
    fontWeight: "900",
    letterSpacing: -1.5,
  },
  scoreOutOf: {
    marginLeft: 4,
  },
  outOfText: {
    color: C.muted,
    fontSize: 13,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    backgroundColor: "#FFF0E5",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 3,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.orange,
  },
  statusText: {
    color: "#A34E0E",
    fontSize: 10,
    fontWeight: "700",
  },
  scoreCircle: {
    width: 94,
    height: 94,
    borderRadius: 47,
    borderWidth: 7,
    borderColor: "#F8B7D8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF7FB",
  },
  scoreCircleInner: {
    alignItems: "center",
    justifyContent: "center",
  },
  scoreEmoji: {
    fontSize: 25,
  },
  scoreCircleLabel: {
    color: C.pink,
    fontSize: 8,
    fontWeight: "900",
    marginTop: 2,
  },
  progressTrack: {
    height: 7,
    backgroundColor: "#EDF0F7",
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 20,
  },
  progressFill: {
    height: "100%",
    width: "45%",
    backgroundColor: C.pink,
    borderRadius: 6,
  },
  scoreHint: {
    color: C.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 11,
  },
  scoreButton: {
    alignItems: "center",
    backgroundColor: C.navy,
    borderRadius: 12,
    paddingVertical: 13,
    marginTop: 16,
  },
  scoreButtonText: {
    color: C.white,
    fontWeight: "700",
    fontSize: 12,
  },
  quickActions: {
    flexDirection: "row",
    gap: 9,
    marginTop: 13,
    marginBottom: 25,
  },
  quickAction: {
    flex: 1,
    backgroundColor: C.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C.border,
    padding: 10,
    minHeight: 130,
  },
  quickIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  quickEmoji: {
    fontSize: 19,
  },
  quickTitle: {
    color: C.text,
    fontSize: 11,
    fontWeight: "800",
  },
  quickSubtitle: {
    color: C.muted,
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },
  healthCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 25,
  },
  healthHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  healthIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: C.palePink,
    alignItems: "center",
    justifyContent: "center",
  },
  healthEmoji: {
    fontSize: 20,
  },
  healthHeaderText: {
    flex: 1,
    marginLeft: 11,
  },
  healthTitle: {
    color: C.text,
    fontWeight: "800",
    fontSize: 13,
  },
  healthSubtitle: {
    color: C.muted,
    fontSize: 11,
    marginTop: 4,
  },
  healthItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 11,
    paddingVertical: 11,
  },
  healthBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E5F6EE",
    alignItems: "center",
    justifyContent: "center",
  },
  checkMark: {
    color: C.green,
    fontWeight: "900",
    fontSize: 13,
  },
  healthItemText: {
    flex: 1,
  },
  healthItemTitle: {
    color: C.text,
    fontWeight: "700",
    fontSize: 12,
  },
  healthItemDescription: {
    color: C.muted,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  healthDivider: {
    height: 1,
    backgroundColor: C.border,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: C.blue,
    borderRadius: 11,
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 14,
  },
  outlineButtonText: {
    color: C.blue,
    fontSize: 12,
    fontWeight: "800",
  },
  debtCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 17,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 24,
  },
  debtHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  debtIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#FFF0E4",
    alignItems: "center",
    justifyContent: "center",
  },
  debtEmoji: {
    fontSize: 22,
  },
  debtHeaderText: {
    flex: 1,
  },
  debtTitle: {
    color: C.text,
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
  },
  debtDescription: {
    color: C.muted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },
  debtStats: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F8FC",
    borderRadius: 13,
    padding: 13,
    marginTop: 17,
  },
  debtStat: {
    flex: 1,
  },
  debtStatLabel: {
    color: C.muted,
    fontSize: 10,
    lineHeight: 15,
  },
  debtStatValue: {
    color: C.navy,
    fontSize: 19,
    fontWeight: "900",
    marginTop: 5,
  },
  statSeparator: {
    width: 1,
    height: 36,
    backgroundColor: C.border,
    marginHorizontal: 13,
  },
  debtButton: {
    backgroundColor: C.orange,
    borderRadius: 11,
    alignItems: "center",
    paddingVertical: 13,
    marginTop: 14,
  },
  debtButtonText: {
    color: C.white,
    fontSize: 12,
    fontWeight: "800",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.white,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 17,
    paddingHorizontal: 9,
  },
  metric: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 3,
  },
  metricValue: {
    color: C.navy,
    fontSize: 18,
    fontWeight: "900",
  },
  metricLabel: {
    color: C.muted,
    fontSize: 9,
    textAlign: "center",
    marginTop: 5,
  },
  metricSeparator: {
    height: 34,
    width: 1,
    backgroundColor: C.border,
  },
  smallDisclaimer: {
    color: C.muted,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 8,
    marginBottom: 24,
  },
  advisoryCard: {
    backgroundColor: "#F0EDFF",
    borderRadius: 20,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E1DAFF",
    marginBottom: 25,
  },
  advisoryTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  advisoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#DED6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  advisoryEmoji: {
    fontSize: 20,
  },
  advisoryText: {
    flex: 1,
  },
  advisoryTitle: {
    color: C.navy,
    fontWeight: "900",
    fontSize: 14,
  },
  advisorySubtitle: {
    color: C.muted,
    fontSize: 10,
    marginTop: 4,
  },
  comingBadge: {
    backgroundColor: C.white,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },
  comingText: {
    color: "#7560C9",
    fontSize: 8,
    fontWeight: "900",
  },
  advisoryDescription: {
    color: "#505D7A",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 14,
  },
  advisoryButton: {
    alignSelf: "flex-start",
    backgroundColor: C.navy,
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 15,
  },
  advisoryButtonText: {
    color: C.white,
    fontWeight: "800",
    fontSize: 11,
  },
  learningRow: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 24,
  },
  featureCard: {
    flex: 1,
    backgroundColor: C.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C.border,
    padding: 10,
    minHeight: 128,
  },
  featureIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  featureEmoji: {
    fontSize: 18,
  },
  featureTitle: {
    color: C.text,
    fontWeight: "800",
    fontSize: 11,
  },
  featureSubtitle: {
    color: C.muted,
    fontSize: 9,
    lineHeight: 14,
    marginTop: 5,
  },
  privacyCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 15,
    padding: 14,
    gap: 11,
    marginBottom: 19,
  },
  privacyIcon: {
    fontSize: 22,
  },
  privacyTextContainer: {
    flex: 1,
  },
  privacyTitle: {
    color: C.text,
    fontSize: 12,
    fontWeight: "800",
  },
  privacyDescription: {
    color: C.muted,
    fontSize: 10,
    lineHeight: 16,
    marginTop: 5,
  },
  footer: {
    textAlign: "center",
    color: C.muted,
    fontSize: 10,
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingTop: 10,
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  navIcon: {
    color: C.muted,
    fontSize: 23,
    fontWeight: "700",
  },
  navLabel: {
    color: C.muted,
    fontSize: 10,
    fontWeight: "600",
  },
  navActive: {
    color: C.pink,
    fontWeight: "900",
  },
});
