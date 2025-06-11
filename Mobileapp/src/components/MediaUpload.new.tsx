import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { uploadMedia } from "../services/mediaService";
import { THEME } from "../constants/config";

interface Props {
  onUploadComplete: () => void;
}

export const MediaUpload: React.FC<Props> = ({ onUploadComplete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    console.log('📷 Button pressed - requesting permissions...');
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log('🔐 Permission status:', status);
    
    if (status !== "granted") {
      console.log('❌ Permission denied');
      Alert.alert(
        "Permission needed",
        "Please grant camera roll permissions to upload media."
      );
      return;
    }

    console.log('✅ Permission granted - opening gallery...');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('📸 Gallery result:', result);
    if (!result.canceled && result.assets[0]) {
      console.log('🖼️ Image selected:', result.assets[0].uri);
      handleUpload(result.assets[0].uri);
    } else {
      console.log('🚫 No image selected or cancelled');
    }
  };

  const handleUpload = async (uri: string) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      
      // Get file extension from URI
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      
      formData.append("file", {
        uri,
        type: `image/${fileType}`,
        name: `upload.${fileType}`,
      } as any);

      console.log('📤 About to upload with URI:', uri);
      await uploadMedia(formData);
      onUploadComplete();
      Alert.alert("Success", "Media uploaded successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to upload media");
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.floatingButton, isLoading && styles.buttonDisabled]}
      onPress={() => {
        console.log('🔘 Upload button pressed');
        pickImage();
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <AntDesign name="plus" size={28} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: THEME.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 1000,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
});
