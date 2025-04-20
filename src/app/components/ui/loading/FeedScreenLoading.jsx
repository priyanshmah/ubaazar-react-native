import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import PlaceHolder from './PlaceHolder';
import CapitalHeading from '../CapitalHeading';
import ColouredHeading from '../ColouredHeading';
const {height, width} = Dimensions.get('screen');

const FeedScreenLoading = () => {
  return (
    <View style={{paddingBottom: 300}}>
      
      <ColouredHeading primaryText='All' secondaryText='Products' />
      <View style={{gap: 12, padding: 12}}>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{gap: 6, flexDirection: 'row'}}>
            <PlaceHolder width={width * 0.3} height={width * 0.3} />
            <View style={{gap: 6, justifyContent: 'center'}}>
            <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PlaceHolder
                  height={width * 0.15}
                  width={width * 0.15}
                  borderRadius={100}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                </View>
              </View>
              
              <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{gap: 6, flexDirection: 'row'}}>
            <PlaceHolder width={width * 0.3} height={width * 0.3} />
            <View style={{gap: 6, justifyContent: 'center'}}>
            <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PlaceHolder
                  height={width * 0.15}
                  width={width * 0.15}
                  borderRadius={100}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                </View>
              </View>

              <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{gap: 6, flexDirection: 'row'}}>
            <PlaceHolder width={width * 0.3} height={width * 0.3} />
            <View style={{gap: 6, justifyContent: 'center'}}>
            <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PlaceHolder
                  height={width * 0.15}
                  width={width * 0.15}
                  borderRadius={100}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                </View>
              </View>

              <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{gap: 6, flexDirection: 'row'}}>
            <PlaceHolder width={width * 0.3} height={width * 0.3} />
            <View style={{gap: 6, justifyContent: 'center'}}>
            <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PlaceHolder
                  height={width * 0.15}
                  width={width * 0.15}
                  borderRadius={100}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'}  borderRadius={4} />
                </View>
              </View>

              <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{gap: 6, flexDirection: 'row'}}>
            <PlaceHolder width={width * 0.3} height={width * 0.3} />
            <View style={{gap: 6, justifyContent: 'center'}}>
            <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <PlaceHolder
                  height={width * 0.15}
                  width={width * 0.15}
                  borderRadius={100}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                  <PlaceHolder width={'100%'} borderRadius={4} />
                </View>
              </View>

              <PlaceHolder width={width * 0.6} height={18} borderRadius={4} />

            </View>
          </View>
        </View>

        

      </View>
    </View>
  );
};

export default FeedScreenLoading;

const styles = StyleSheet.create({});
