import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';

const DialogBox = ({
  isVisible,
  heading,
  message,
  onConfirm,
  onCancel,
  confirmText='Proceed',
}) => {
  return (
    <Modal
      backdropOpacity={0.75}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      style={{margin: 0}}
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutRight">
      <View style={styles.dialogContainer}>
        <AppTextBold style={styles.heading}>{heading}</AppTextBold>
        <Text style={styles.dialogText}>{message}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onCancel}
            style={[styles.button, styles.cancelButton]}>
            <AppTextBold style={styles.cancelButtonText}>Cancel</AppTextBold>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onConfirm}
            style={[styles.button, styles.confirmButton]}>
            <AppTextBold style={styles.confirmButtonText}>
              {confirmText}
            </AppTextBold>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: colors.white,
    padding: 18,
    paddingTop: 24,
    borderRadius: 24,
    marginHorizontal: 18,
    gap: 12,
  },
  dialogText: {
    fontSize: 14,
    paddingBottom: 24,
    fontFamily: 'Metropolis-Medium',
    color: colors.lightGrayColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: colors.white,
  },
  cancelButtonText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.brightOrange,
  },
  confirmButton: {
    backgroundColor: colors.brightOrange,
  },
  confirmButtonText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Metropolis-Bold',
    fontSize: 18,
  },
});

export default DialogBox;
