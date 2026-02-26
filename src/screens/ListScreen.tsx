import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS, SHADOWS, FONTS } from "../constants/theme";
import { supabase } from "../services/supabase";
import { Place } from "../types/place";

const { width } = Dimensions.get("window");

const CATEGORY_LABELS: Record<string, string> = {
    tourist: "สถานที่ท่องเที่ยว",
    restaurant: "ร้านอาหาร",
    cafe: "ร้านกาแฟ",
    temple: "วัด",
    festival: "งานประเพณี",
};

export default function ListScreen({ route, navigation }: any) {
    const { category, categoryLabel } = route.params;
    const [data, setData] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const title = categoryLabel || CATEGORY_LABELS[category] || category;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        const { data: places, error: err } = await supabase
            .from("locations")
            .select("*")
            .eq("category", category)
            .order("name");

        if (err) {
            setError("ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่");
            console.error("Supabase error:", err.message);
        } else if (places) {
            setData(places);
        }

        setLoading(false);
    };

    const renderItem = ({ item }: { item: Place }) => (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Detail", { place: item })}
        >
            <Image source={{ uri: item.image_url }} style={styles.cardImage} />
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.7)"]}
                style={styles.cardOverlay}
            >
                <Text style={styles.cardTitle} numberOfLines={1}>
                    {item.name}
                </Text>
                <View style={styles.cardAddressRow}>
                    <MaterialCommunityIcons name="map-marker" size={14} color="rgba(255,255,255,0.8)" />
                    <Text style={styles.cardAddress} numberOfLines={1}>
                        {item.address}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    const renderEmpty = () => (
        <View style={styles.emptyContainer}>
            <MaterialCommunityIcons name="database-off-outline" size={64} color={COLORS.secondary} />
            <Text style={styles.emptyTitle}>ยังไม่มีข้อมูล</Text>
            <Text style={styles.emptySubtitle}>
                หมวดหมู่นี้ยังไม่มีสถานที่ในระบบ
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            {/* Header */}
            <LinearGradient
                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                style={styles.header}
            >
                <View style={styles.headerInner}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <View style={{ width: 40 }} />
                </View>
            </LinearGradient>

            {/* Content */}
            {loading ? (
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                    <Text style={styles.loadingText}>กำลังโหลด...</Text>
                </View>
            ) : error ? (
                <View style={styles.centerContainer}>
                    <MaterialCommunityIcons name="alert-circle-outline" size={64} color={COLORS.primary} />
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={fetchData}>
                        <Text style={styles.retryText}>ลองใหม่</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={renderEmpty}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    /* Header */
    header: {
        paddingTop: StatusBar.currentHeight || 44,
        paddingBottom: SPACING.md,

    },
    headerInner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SPACING.lg, // เพิ่มระยะห่างจากขอบ
        paddingTop: SPACING.sm,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        color: COLORS.textLight,
        fontFamily: FONTS.bold,
    },

    /* List */
    listContent: {
        padding: SPACING.lg,
        paddingBottom: SPACING.xl,
    },

    /* Card */
    card: {
        height: 200,
        borderRadius: RADIUS.lg,
        overflow: "hidden",
        marginBottom: SPACING.md,
        backgroundColor: COLORS.card,
        ...SHADOWS.card,
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    cardOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SPACING.md,
        paddingTop: SPACING.xl,
    },
    cardTitle: {
        fontSize: 18,
        color: COLORS.textLight,
        marginBottom: SPACING.xs,
        fontFamily: FONTS.bold,
    },
    cardAddressRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.xs,
    },
    cardAddress: {
        fontSize: 12,
        color: "rgba(255,255,255,0.8)",
        flex: 1,
        fontFamily: FONTS.regular,
    },

    /* States */
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: SPACING.xl,
    },
    loadingText: {
        marginTop: SPACING.md,
        color: COLORS.textSecondary,
        fontSize: 14,
        fontFamily: FONTS.regular,
    },
    errorText: {
        marginTop: SPACING.md,
        color: COLORS.textPrimary,
        fontSize: 16,
        textAlign: "center",
        fontFamily: FONTS.regular,
    },
    retryButton: {
        marginTop: SPACING.md,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm + 2,
        borderRadius: RADIUS.xl,
    },
    retryText: {
        color: COLORS.textLight,
        fontSize: 14,
        fontFamily: FONTS.bold,
    },

    /* Empty */
    emptyContainer: {
        alignItems: "center",
        paddingTop: 80,
    },
    emptyTitle: {
        fontSize: 18,
        color: COLORS.textPrimary,
        marginTop: SPACING.md,
        fontFamily: FONTS.bold,
    },
    emptySubtitle: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: SPACING.xs,
        fontFamily: FONTS.regular,
    },
});