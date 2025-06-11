import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
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
  const [title, setTitle] = useState("");
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
    }    console.log('✅ Permission granted - opening gallery...');
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
  const handleUpload = async (uri: string) => {    // Temporarily disable title requirement for testing
    // if (!title.trim()) {
    //   Alert.alert("Error", "Please enter a title for your media");
    //   return;
    // }

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
      setTitle("");
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter media title"
        placeholderTextColor={THEME.colors.textSecondary}
        editable={!isLoading}
      />      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={() => {
          console.log('🔘 Upload button pressed');
          pickImage();
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <AntDesign name="upload" size={24} color="#fff" />
            <Text style={styles.buttonText}>Choose and Upload Media</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.medium,
    backgroundColor: THEME.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
  },
  input: {
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 5,
    padding: THEME.spacing.medium,
    marginBottom: THEME.spacing.medium,
    fontSize: 16,
    color: THEME.colors.text,
  },
  button: {
    backgroundColor: THEME.colors.primary,
    padding: THEME.spacing.medium,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: THEME.spacing.small,
  },
});
