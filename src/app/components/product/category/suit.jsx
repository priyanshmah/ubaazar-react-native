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
import TopPattern from '../../../assets/icons/toppattern';
import TopShape from '../../../assets/icons/topshape';
import Neck from '../../../assets/icons/neck';
import BottomType from '../../../assets/icons/skirt';
import BottomPattern from '../../../assets/icons/bottom-pattern';
import Dupatta from '../../../assets/icons/dupatta';
import Occasion from '../../../assets/icons/occasion';

const Suit = ({productData}) => {
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
        <AppTextBold style={styles.block}>Top Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Fabric size={25} />
              <AppTextBold>Top Fabric</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
              {productData.topFabric}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Scale size={25} />
              <AppTextBold>Top Length</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.topLength}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <TopPattern size={25} />
              <AppTextBold>Top Pattern</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.topPattern}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <TopShape size={25} />
              <AppTextBold>Top Shape</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.topShape}
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Neck size={25} />
              <AppTextBold>Neck Shape</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.neck}
            </AppTextBold>
          </View>

        </View>
      </View>

      <View style={styles.blockContainer}>
        <AppTextBold style={styles.block}>Bottom Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Fabric size={25} />
              <AppTextBold>Bottom Fabric</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.bottomFabric} 
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <BottomType size={25} />
              <AppTextBold>Bottom Type</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.bottomType} 
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <BottomPattern size={25} />
              <AppTextBold>Bottom Pattern</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.bottomPattern} 
            </AppTextBold>
          </View>

        </View>
      </View>

      <View style={styles.blockContainer}>
        <AppTextBold style={styles.block}>Dupatta Details</AppTextBold>
        <View style={{padding: 18}}>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Dupatta size={25} />
              <AppTextBold>Dupatta Fabric</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.dupattaFabric} 
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Scale size={25} />
              <AppTextBold>Dupatta Length</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.dupattaLength} meters
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
            {productData.ornamentation} 
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Occasion size={25} />
              <AppTextBold>Occasion</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.occasion} 
            </AppTextBold>
          </View>

          <View style={styles.detailContainer}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <WashCare size={25} />
              <AppTextBold>Wash Care</AppTextBold>
            </View>
            <AppTextBold style={{color: colors.grayColor}}>
            {productData.washCare} 
            </AppTextBold>
          </View>

        </View>
      </View>


    </View>
  );
};

export default Suit;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
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
    fontSize: 16
  },
  blockContainer: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.brightOrange,
    elevation: 2,
    backgroundColor: colors.white,
  },
});
