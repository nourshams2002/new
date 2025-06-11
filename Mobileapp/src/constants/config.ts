import { Platform } from "react-native";

// API Configuration
export const API_CONFIG = {
  // For mobile devices running in Expo Go, always use the computer's IP
  // For simulators, use localhost
  BASE_URL: Platform.select({
    android: "http://192.168.1.17:4000/api", // Use IP for both emulator and real device
    ios: "http://192.168.1.17:4000/api", // Use IP for both simulator and real device  
    web: "http://localhost:4000/api", // Web development
    default: "http://192.168.1.17:4000/api", // Fallback
  }),
};

// Theme Configuration
export const THEME = {
  colors: {
    primary: "#FF69B4", // Hot pink matching frontend
    secondary: "#FFB6C1", // Light pink
    background: "#FFF0F5", // Lavender blush
    surface: "#ffffff",
    text: "#2D1B29", // Dark text
    textSecondary: "#8B5A83", // Purple-gray text
    border: "#F8BBD9", // Light pink border
    error: "#FF3B30",
    success: "#34C759",
    warning: "#FF9500",
    pink: "#FF69B4",
    lightPink: "#FFB6C1",
    darkPink: "#C44177",
  },
  spacing: {
    xs: 4,
    small: 8,
    medium: 16,
    large: 24,
    xl: 32,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  shadows: Platform.select({
    ios: {
      small: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      medium: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    },
    android: {
      small: {
        elevation: 2,
      },
      medium: {
        elevation: 5,
      },
    },
    default: {},
  }),
};
