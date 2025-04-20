import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../constants/colors';

const CustomActionSheet = ({isOpen, onClose, children}) => {
  const [modalVisible, setModalVisible] = useState(isOpen);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  const screenHeight = Dimensions.get('window').height;
  const contentHeight = screenHeight * 0.8; // 80% of screen height

  useEffect(() => {
    if (isOpen) {
      setModalVisible(true);
      isAnimating.current = true;
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        isAnimating.current = false;
      });
    } else handleClose();
  }, [isOpen]);

  const handleClose = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setTimeout(() => {
          setModalVisible(false);
          isAnimating.current = false;
          onClose();
        }, 50); // Small delay to ensure animation completes
      }
    });
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [contentHeight, 0], // Use actual content height for translation
  });

  const backdropOpacity = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <KeyboardAvoidingView style={{ flex: 1}} behavior='height'>
      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={handleClose}
        animationType="none">
        <View style={styles.overlay}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: backdropOpacity,
              },
            ]}>
            <TouchableWithoutFeedback onPress={handleClose}>
              <View style={styles.backdropTouchable} />
            </TouchableWithoutFeedback>
          </Animated.View>

          <Animated.View
            style={[
              styles.content,
              {
                transform: [{translateY}],
                maxHeight: contentHeight,
              },
            ]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdropTouchable: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomActionSheet;
