import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from '../../constants/colors';
import { StyleSheet, View } from 'react-native';
import AppTextBold from "../../components/text/appTextbold";
import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';


export const SuccessToast = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 2000); // Auto hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      isVisible={visible}
      animationIn="fadeInDown"
      animationOut="fadeOutUp"
      backdropOpacity={0}
      style={styles.modal}
    >
      <View style={styles.success}>
      <Ionicons
            name="checkmark-circle"
            size={30}
            style={{
              color: colors.green,
              verticalAlign: 'middle',
            }}
          />
          <AppTextBold style={styles.successText}>
            {message}
          </AppTextBold>
    </View>
    </Modal>
  );
};

export const ErrorToast = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 2000); // Auto hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Modal
      isVisible={visible}
      animationIn="fadeInDown"
      animationOut="fadeOutUp"
      backdropOpacity={0}
      style={styles.modal}
    >
      <View style={styles.error}>
      <Feather
            name="x-circle"
            size={30}
            style={{
              color: colors.red,
              verticalAlign: 'middle',
            }}
          />
          <AppTextBold style={styles.errorText}>
            {message}
          </AppTextBold>
    </View>
    </Modal>
  );
};



const styles = StyleSheet.create({
  successText: {
    fontSize: 14,
    paddingHorizontal: 12,
    color: colors.green
  },
  errorText: {
    fontSize: 14,
    paddingHorizontal: 12,
    color: colors.red
  },
  modal: {
    marginTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 12
  },
  success: {
    flexDirection: 'row',
    padding: 12,
    elevation: 2,
    borderLeftColor: colors.green,
    borderLeftWidth: 4,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: "90%"
  },
  error: {
    flexDirection: 'row',
    padding: 12,
    elevation: 2,
    borderColor: colors.red,
    borderLeftWidth: 4,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: "90%"
  }
})
