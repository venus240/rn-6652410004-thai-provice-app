import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    StatusBar,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { COLORS, SPACING, RADIUS, SHADOWS, FONTS } from "../constants/theme";

const { width } = Dimensions.get("window");

export default function DetailScreen({ route, navigation }: any) {
    const { place } = route.params;

    const openMap = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;
        Linking.openURL(url);
    };

    const callPhone = () => {
        if (place.phone) {
            Linking.openURL(`tel:${place.phone}`);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                {/* Hero Image */}
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: place.image_url }} style={styles.image} />
                    <LinearGradient
                        colors={["rgba(0,0,0,0.4)", "transparent", "rgba(0,0,0,0.3)"]}
                        style={styles.imageOverlay}
                    />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {/* Title Card */}
                    <View style={styles.titleCard}>
                        <Text style={styles.title}>{place.name}</Text>

                        <View style={styles.addressRow}>
                            <MaterialCommunityIcons
                                name="map-marker"
                                size={18}
                                color={COLORS.primary}
                            />
                            <Text style={styles.address}>{place.address}</Text>
                        </View>

                        {place.phone && (
                            <View style={styles.addressRow}>
                                <MaterialCommunityIcons
                                    name="phone"
                                    size={18}
                                    color={COLORS.primary}
                                />
                                <Text style={styles.address}>{place.phone}</Text>
                            </View>
                        )}
                    </View>

                    {/* Description */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>รายละเอียด</Text>
                        <Text style={styles.description}>{place.description}</Text>
                    </View>

                    {/* Map */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>แผนที่</Text>
                        <View style={styles.mapWrapper}>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: place.latitude,
                                    longitude: place.longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: place.latitude,
                                        longitude: place.longitude,
                                    }}
                                    title={place.name}
                                />
                            </MapView>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={openMap}
                            activeOpacity={0.85}
                        >
                            <LinearGradient
                                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                                style={styles.actionGradient}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <MaterialCommunityIcons name="google-maps" size={22} color="white" />
                                <Text style={styles.actionText}>นำทาง Google Maps</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        {place.phone && (
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={callPhone}
                                activeOpacity={0.85}
                            >
                                <LinearGradient
                                    colors={[COLORS.accent, COLORS.secondary]}
                                    style={styles.actionGradient}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                    <MaterialCommunityIcons name="phone" size={22} color="white" />
                                    <Text style={styles.actionText}>โทรหาร้าน</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={{ height: SPACING.xl }} />
                </View>
            </ScrollView>

            {/* Floating Back Button - Fixed position */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
            >
                <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    /* Image */
    imageWrapper: {
        width: "100%",
        height: 300,
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    backButton: {
        position: "absolute",
        top: (StatusBar.currentHeight || 44) + SPACING.sm,
        left: SPACING.md,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        alignItems: "center",
    },

    /* Content */
    content: {
        marginTop: -SPACING.lg,
        paddingHorizontal: SPACING.lg,
    },

    /* Title Card */
    titleCard: {
        backgroundColor: COLORS.card,
        borderRadius: RADIUS.lg,
        padding: SPACING.lg,
        ...SHADOWS.card,
    },
    title: {
        fontSize: 24,
        color: COLORS.textPrimary,
        marginBottom: SPACING.sm,
        fontFamily: FONTS.bold,
    },
    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.sm,
        marginTop: SPACING.xs,
    },
    address: {
        fontSize: 14,
        color: COLORS.textSecondary,
        flex: 1,
        fontFamily: FONTS.regular,
    },

    /* Section */
    section: {
        marginTop: SPACING.lg,
    },
    sectionTitle: {
        fontSize: 18,
        color: COLORS.textPrimary,
        marginBottom: SPACING.sm,
        fontFamily: FONTS.bold,
    },
    description: {
        fontSize: 15,
        color: COLORS.textSecondary,
        lineHeight: 24,
        fontFamily: FONTS.regular,
    },

    /* Map */
    mapWrapper: {
        borderRadius: RADIUS.lg,
        overflow: "hidden",
        ...SHADOWS.soft,
    },
    map: {
        width: "100%",
        height: 200,
    },

    /* Actions */
    actions: {
        marginTop: SPACING.lg,
        gap: SPACING.sm,
    },
    actionButton: {
        borderRadius: RADIUS.lg,
        overflow: "hidden",
        ...SHADOWS.soft,
    },
    actionGradient: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SPACING.md,
        gap: SPACING.sm,
    },
    actionText: {
        color: "white",
        fontSize: 16,
        fontFamily: FONTS.bold,
    },
});