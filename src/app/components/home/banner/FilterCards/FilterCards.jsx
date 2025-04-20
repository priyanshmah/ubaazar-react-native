import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ColouredHeading from '../../../ui/ColouredHeading'
import DailyWearCard from './DailyWearCard'
import EthnicWear from './EthnicWear'
import PartyWearCard from './PartyWear'
import WeddingCard from './WeddingCard'

const FilterCards = () => {
  return (
    <View>
      <ColouredHeading primaryText='Explore' secondaryText='everything'/>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{
      flexDirection: 'row',
    }}
    >
        <View style={{
            flexDirection: 'row',
            gap: 12,
            padding: 12
        }}>
            <EthnicWear />
            <PartyWearCard />
            <DailyWearCard />
            <WeddingCard />
        </View>
    </ScrollView>
    </View>
  )
}

export default FilterCards

const styles = StyleSheet.create({})