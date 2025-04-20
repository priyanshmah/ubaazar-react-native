import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import AppText from '../text/appText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Send from '../../assets/icons/send';
import {useRealm} from '../../utils/realm';

const Comments = () => {
  const realm = useRealm();
  const user = realm.objects('UserData')?.at(0);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSendComment = async () => {
    if (!comment) return;

    setCommentsList(prev => {
      return [...prev, {name: user.name, comment}];
    });

    setComment('');
  };

  return (
    <View style={{height: 600}}>
      <View
        style={{
          height: 4,
          width: 50,
          backgroundColor: colors.darkGrayColor,
          borderRadius: 50,
          alignSelf: 'center',
        }}
      />
      <AppTextBold style={styles.commentsHeading}>Comments</AppTextBold>

      {commentsList.length > 0 ? (
        <AllComments comments={commentsList} />
      ) : (
        <NoComments />
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: colors.white,
          paddingVertical: 12,
        }}>
        <TextInput
          inputMode="text"
          value={comment}
          onChangeText={text => setComment(text)}
          multiline
          numberOfLines={4}
          placeholder="Add a comment"
          placeholderTextColor={colors.lightGrayColor}
          style={styles.input}
          selectionColor={colors.darkGrayColor}
          cursorColor={colors.darkGrayColor}
        />
        <Pressable onPress={handleSendComment}>
          <Send size={25} color={comment ? colors.orange : colors.silver} />
        </Pressable>
      </View>
    </View>
  );
};

export default Comments;

const NoComments = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 6,
      }}>
      <AppTextBold
        style={{
          backgroundColor: colors.white,
          fontSize: 16,
          color: colors.lightGrayColor,
        }}>
        No comments yet
      </AppTextBold>
      <AppText
        style={{
          color: colors.silver,
          fontSize: 12,
        }}>
        Start the conversation
      </AppText>
    </View>
  );
};

const AllComments = ({comments}) => {
  return (
    <View style={{flex: 1, paddingVertical: 12, gap: 12}}>
      <FlatList
        data={comments}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <CommentContainer comment={item.comment} name={item.name} />
        )}
      />
    </View>
  );
};
const CommentContainer = ({name, comment}) => {
  return (
    <View style={{flexDirection: 'row', gap: 12, paddingVertical: 6}}>
      <View style={styles.avatar}>
        <AppTextBold
          style={{textAlign: 'center', color: colors.white, fontSize: 20}}>
          {name.at(0)}
        </AppTextBold>
      </View>

      <View style={{flex: 1, gap: 4}}>
        <AppTextBold style={{color: colors.brightOrange}}>{name}</AppTextBold>
        <AppText style={styles.comment}>{comment}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsHeading: {
    fontSize: 16,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: colors.silver,
    width: '100%',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: colors.searchBarColor,
    paddingLeft: 18,
    borderRadius: 12,
    color: colors.darkGrayColor,
    fontFamily: 'Metropolis-Medium',
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: colors.brightOrange,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comment: {
    color: colors.darkGrayColor,
    fontSize: 12,
    fontFamily: 'Metropolis-Medium',
    flexWrap: 'wrap',
  },
});
