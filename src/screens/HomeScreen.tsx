import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    ImageBackground,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { province } from "../constants/province";
import { COLORS, SPACING, RADIUS, SHADOWS, FONTS } from "../constants/theme";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - SPACING.lg * 2 - SPACING.md) / 2;

type CategoryItem = {
    label: string;
    value: string;
    icon: string;
    color: string;
};

const categories: CategoryItem[] = [
    {
        label: "สถานที่ท่องเที่ยว",
        value: "tourist",
        icon: "map-marker-radius",
        color: COLORS.categoryTourist,
    },
    {
        label: "ร้านอาหาร",
        value: "restaurant",
        icon: "silverware-fork-knife",
        color: COLORS.categoryRestaurant,
    },
    {
        label: "ร้านกาแฟ",
        value: "cafe",
        icon: "coffee",
        color: COLORS.categoryCafe,
    },
    {
        label: "วัด",
        value: "temple",
        icon: "temple-buddhist",
        color: COLORS.categoryTemple,
    },
    {
        label: "งานประเพณี",
        value: "festival",
        icon: "party-popper",
        color: COLORS.categoryFestival,
    },
];

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                {/* Hero Header */}
                <ImageBackground
                    source={{ uri: province.heroImage }}
                    style={styles.hero}
                    resizeMode="cover"
                >
                    <LinearGradient
                        colors={["transparent", "rgba(233,30,99,0.3)", COLORS.primaryDark]}
                        style={styles.heroOverlay}
                    >
                        <SafeAreaView style={{ flex: 1 }}>
                            {/* Weather & Date Widget */}
                            <View style={styles.weatherWidget}>
                                <View style={styles.weatherInfo}>
                                    <Text style={styles.dateText}>
                                        {new Date().toLocaleDateString("th-TH", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "short",
                                        })}
                                    </Text>
                                    <View style={styles.tempRow}>
                                        <MaterialCommunityIcons name="weather-sunny" size={20} color="#FFD700" />
                                        <Text style={styles.tempText}>32°C สดใส</Text>
                                    </View>
                                </View>
                                <View style={styles.locationTag}>
                                    <MaterialCommunityIcons name="map-marker" size={14} color="white" />
                                    <Text style={styles.locationText}>อุบลราชธานี</Text>
                                </View>
                            </View>

                            <View style={styles.heroContent}>
                                <Text style={styles.heroSubtitle}>ยินดีต้อนรับสู่</Text>
                                <Text style={styles.heroTitle}>{province.name}</Text>
                                <View style={styles.sloganBadge}>
                                    <Text style={styles.heroSlogan}>{province.slogan}</Text>
                                </View>
                            </View>
                        </SafeAreaView>
                    </LinearGradient>
                </ImageBackground>

                {/* Province Info */}
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <View style={styles.infoChip}>
                            <MaterialCommunityIcons name="flower-tulip" size={18} color={COLORS.primary} />
                            <Text style={styles.infoChipText}>ดอกไม้: {province.flower}</Text>
                        </View>
                        <View style={styles.infoChip}>
                            <MaterialCommunityIcons name="tree" size={18} color={COLORS.success} />
                            <Text style={styles.infoChipText}>ต้นไม้: {province.tree}</Text>
                        </View>
                    </View>
                    <Text style={styles.infoDescription}>{province.description}</Text>
                </View>

                {/* Category Section */}
                <View style={styles.categorySection}>
                    <Text style={styles.sectionTitle}>สำรวจ</Text>
                    <Text style={styles.sectionSubtitle}>เลือกหมวดหมู่ที่คุณสนใจ</Text>

                    <View style={styles.grid}>
                        {categories.map((item, index) => (
                            <TouchableOpacity
                                key={item.value}
                                style={[
                                    styles.card,
                                    index === categories.length - 1 && categories.length % 2 !== 0
                                        ? styles.cardFull
                                        : null,
                                ]}
                                activeOpacity={0.8}
                                onPress={() =>
                                    navigation.navigate("List", {
                                        category: item.value,
                                        categoryLabel: item.label,
                                    })
                                }
                            >
                                <LinearGradient
                                    colors={[item.color + "15", item.color + "08"]}
                                    style={styles.cardGradient}
                                >
                                    <View style={[styles.iconCircle, { backgroundColor: item.color + "20" }]}>
                                        <MaterialCommunityIcons
                                            name={item.icon as any}
                                            size={32}
                                            color={item.color}
                                        />
                                    </View>
                                    <Text style={styles.cardText}>{item.label}</Text>
                                    <MaterialCommunityIcons
                                        name="chevron-right"
                                        size={20}
                                        color={COLORS.textSecondary}
                                        style={styles.cardArrow}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={{ height: SPACING.xl }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    hero: {
        width: "100%",
        height: 320,
    },
    heroOverlay: {
        flex: 1,
        paddingTop: SPACING.xl,
    },
    heroContent: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.lg,
    },
    heroSubtitle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.8)",
        letterSpacing: 1,
        marginBottom: SPACING.xs,
        fontFamily: FONTS.regular,
    },
    heroTitle: {
        fontSize: 36,
        color: COLORS.textLight,
        letterSpacing: 1,
        fontFamily: FONTS.bold,
    },
    sloganBadge: {
        marginTop: SPACING.sm,
        backgroundColor: "rgba(255,255,255,0.15)",
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: RADIUS.lg,
        alignSelf: "flex-start",
    },
    heroSlogan: {
        fontSize: 12,
        color: COLORS.textLight,
        lineHeight: 18,
        fontFamily: FONTS.regular,
    },

    /* Weather Widget */
    weatherWidget: {
        position: "absolute",
        top: SPACING.xl + 10,
        right: SPACING.lg,
        backgroundColor: "rgba(255,255,255,0.15)",
        padding: SPACING.sm,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.2)",
        alignItems: "flex-end",
    },
    weatherInfo: {
        alignItems: "flex-end",
        marginBottom: 4,
    },
    dateText: {
        color: "white",
        fontSize: 12,
        fontFamily: FONTS.medium,
        opacity: 0.9,
    },
    tempRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 2,
    },
    tempText: {
        color: "white",
        fontSize: 14,
        fontFamily: FONTS.bold,
    },
    locationTag: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: RADIUS.sm,
    },
    locationText: {
        color: "white",
        fontSize: 10,
        fontFamily: FONTS.regular,
    },
    infoSection: {
        marginHorizontal: SPACING.lg,
        marginTop: -SPACING.md,
        backgroundColor: COLORS.card,
        borderRadius: RADIUS.lg,
        padding: SPACING.md,
        ...SHADOWS.card,
    },
    infoRow: {
        flexDirection: "row",
        gap: SPACING.sm,
        marginBottom: SPACING.sm,
    },
    infoChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.xs,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.sm + 4,
        paddingVertical: SPACING.xs + 2,
        borderRadius: RADIUS.xl,
    },
    infoChipText: {
        fontSize: 12,
        color: COLORS.textPrimary,
        fontFamily: FONTS.medium,
    },
    infoDescription: {
        fontSize: 13,
        color: COLORS.textSecondary,
        lineHeight: 20,
        fontFamily: FONTS.regular,
    },

    /* Category Section */
    categorySection: {
        paddingHorizontal: SPACING.lg,
        marginTop: SPACING.lg,
    },
    sectionTitle: {
        fontSize: 22,
        color: COLORS.textPrimary,
        fontFamily: FONTS.bold,
    },
    sectionSubtitle: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginTop: SPACING.xs,
        marginBottom: SPACING.md,
        fontFamily: FONTS.regular,
    },

    /* Grid */
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: CARD_WIDTH,
        marginBottom: SPACING.md,
        borderRadius: RADIUS.lg,
        backgroundColor: COLORS.card,
        overflow: "hidden",
        ...SHADOWS.soft,
    },
    cardFull: {
        width: "100%",
    },
    cardGradient: {
        padding: SPACING.md,
        alignItems: "center",
        minHeight: 130,
        justifyContent: "center",
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: SPACING.sm,
    },
    cardText: {
        fontSize: 14,
        color: COLORS.textPrimary,
        textAlign: "center",
        fontFamily: FONTS.medium,
    },
    cardArrow: {
        position: "absolute",
        top: SPACING.sm,
        right: SPACING.sm,
    },
});