import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import CustomActionSheet from '../ui/CustomBottomSheet';
import Comments from './Comments';

const Actions = ({url}) => {
  const [commentSheetOpen, setCommentSheetOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async() => {
    try {
      await Share.share({
        title: 'Checkout this video of Ubaazar!!!',
        message: `Watch this and shop now on Ubaazar: ${url}`
      })
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <View style={styles.actionsContainer}>
      <View style={styles.iconContainer}>
        {liked ? (
          <View style={{alignItems: 'center'}}>
            <Pressable
              style={{position: 'relative'}}
              onPress={() => setLiked(prev => !prev)}>
              <Ionicons
                name="heart"
                size={30}
                color={colors.red}
                style={{position: 'absolute'}}
              />
              <Ionicons name="heart-outline" size={30} color={colors.white} />
            </Pressable>
            <AppTextBold
              style={{
                color: colors.red,
                backgroundColor: colors.white,
                paddingHorizontal: 6,
                borderRadius: 2,
              }}>
              Liked
            </AppTextBold>
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <Ionicons
              name="heart-outline"
              color={colors.white}
              size={30}
              onPress={() => setLiked(prev => !prev)}
            />
            <AppTextBold
              style={{
                color: colors.white,
              }}>
              Liked
            </AppTextBold>
          </View>
        )}
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="chatbubble-outline"
          color={colors.white}
          size={30}
          onPress={() => setCommentSheetOpen(true)}
        />
        <AppTextBold style={{color: colors.white}}>Comment</AppTextBold>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={handleShare}
          name="paper-plane-outline"
          color={colors.white}
          size={30}
        />
        <AppTextBold style={{color: colors.white}}>Share</AppTextBold>
      </View>
      <View style={styles.iconContainer}>
        {saved ? (
          <View style={{alignItems: 'center'}}>
            <Pressable
              onPress={() => setSaved(prev => !prev)}
              style={{position: 'relative'}}>
              <Ionicons
                name="bookmark"
                size={30}
                color={colors.green}
                style={{position: 'absolute'}}
              />
              <Ionicons
                name="bookmark-outline"
                size={30}
                color={colors.white}
              />
            </Pressable>
            <AppTextBold
              style={{
                color: colors.green,
                backgroundColor: colors.white,
                paddingHorizontal: 6,
                borderRadius: 2,
              }}>
              Saved
            </AppTextBold>
          </View>
        ) : (
          <View>
            <Ionicons
              name="bookmark-outline"
              color={colors.white}
              size={30}
              onPress={() => setSaved(prev => !prev)}
            />
            <AppTextBold style={{color: colors.white}}>Save</AppTextBold>
          </View>
        )}
      </View>
      <CustomActionSheet
        children={<Comments />}
        isOpen={commentSheetOpen}
        onClose={() => setCommentSheetOpen(false)}
      />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  actionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 12,
    paddingVertical: 50,
    gap: 18,
  },
  iconContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
