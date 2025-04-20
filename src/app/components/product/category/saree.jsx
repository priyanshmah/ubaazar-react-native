import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CgNotes} from '../../../utils/icons';
import colors from '../../../constants/colors';
import AppTextBold from '../../text/appTextbold';
import AppText from '../../text/appText';
import Scale from '../../../assets/icons/scale';
import Fabric from '../../../assets/icons/fabric';
import Border from '../../../assets/icons/border';
import Blouse from '../../../assets/icons/blouse';
import Ornamentation from '../../../assets/icons/ornamentation';
import Pattern from '../../../assets/icons/pattern';
import WashCare from '../../../assets/icons/washcare';

const Saree = ({ productData }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
        <CgNotes size={25} color={colors.darkGrayColor} />
        <AppTextBold style={{fontSize: 18}}>Product Details</AppTextBold>
      </View>

      <AppText
        style={{color: colors.grayColor, fontSize: 12, paddingVertical: 12}}>
        {productData?.description}
      </AppText>

      <View style={styles.blockContainer}>
        <AppTextBold style={styles.block}>Saree Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Scale size={25} />
              <AppTextBold>Saree Length</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData.sareeLength} meters
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Fabric size={25} />
              <AppTextBold>Saree Fabric</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.sareeFabric}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Border size={25} />
              <AppTextBold>Border</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.border}
            </AppTextBold>
          </View>

        </View>
      </View>

      <View style={styles.blockContainer}>
        <AppTextBold style={styles.block}>Blouse Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Blouse size={25} />
              <AppTextBold>Blouse Type</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.blouseType}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Fabric size={25} />
              <AppTextBold>Blouse Fabric</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.blouseFabric}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Scale size={25} />
              <AppTextBold>Blouse Length</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.blouseLength} meters
            </AppTextBold>
          </View>

        </View>
      </View>

      <View style={styles.blockContainer}>
        <AppTextBold style={styles.block}>Basic Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Ornamentation size={25} />
              <AppTextBold>Ornamentation</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.ornamentation}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Pattern size={25} />
              <AppTextBold>Pattern</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData?.pattern}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <WashCare size={25} />
              <AppTextBold>Wash Care</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
             {productData?.washCare}
            </AppTextBold>
          </View>

        </View>
      </View>


    </View>
  );
};

export default Saree;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 18,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 1,
  },
  block: {
    backgroundColor: colors.brightOrange,
    color: colors.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 12,
    fontSize: 16,
  },
  blockContainer: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.brightOrange,
    elevation: 5,
    backgroundColor: colors.white,
  },
});
