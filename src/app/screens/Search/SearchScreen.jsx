import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/colors';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AppTextBold from '../../components/text/appTextbold';
import axios from 'axios';
import {API_ENDPOINT} from '@env';
import ProductHorizontal from '../../components/home/product/productHorizontal';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);

  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedQuery(query);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [query]);

  // useEffect(() => {
  //   if (debouncedQuery) {
  //     fetchSearchResults(debouncedQuery);
  //   }
  // }, [debouncedQuery]);

  const fetchSearchResults = async()  => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/search`, {
        query,
      });

      if (response.data && response.data.success) {
        setShowSuggestion(false);
        setSearchResults(response.data.results);        
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <View
      style={{flex: 1, backgroundColor: colors.white, padding: 12, gap: 12}}>
      <View style={styles.searchBox}>
        <Feather
          name="chevron-left"
          size={30}
          color={colors.brightOrange}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          onSubmitEditing={() => fetchSearchResults()}
          inputMode="search"
          value={query}
          onChangeText={text => setQuery(text)}
          style={styles.input}
          cursorColor={colors.darkGrayColor}
          placeholder="Search for brands, products and more..."
          placeholderTextColor={colors.lightGrayColor}
          selectionColor={colors.darkGrayColor}
          numberOfLines={1}
          autoFocus={true}
        />
      </View>
      {showSuggestion && (
        <View style={{paddingVertical: 12, gap: 12}}>
          <AppTextBold style={{fontSize: 16}}>Popular Search</AppTextBold>
          <View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestion}>Bandhani sarees</Text>
              <Feather
                name="chevron-right"
                color={colors.lightGrayColor}
                size={20}
              />
            </View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestion}>Bandhani suits</Text>
              <Feather
                name="chevron-right"
                color={colors.lightGrayColor}
                size={20}
              />
            </View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestion}>Party wear sarees</Text>
              <Feather
                name="chevron-right"
                color={colors.lightGrayColor}
                size={20}
              />
            </View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestion}>Cordsets</Text>
              <Feather
                name="chevron-right"
                color={colors.lightGrayColor}
                size={20}
              />
            </View>
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestion}>Lehengas</Text>
              <Feather
                name="chevron-right"
                color={colors.lightGrayColor}
                size={20}
              />
            </View>
          </View>
        </View>
      )}
       <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProductHorizontal product={item}/>}
        style={{ 
          paddingBottom: 100,
          gap: 12,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBox: {
    borderWidth: 1,
    borderColor: colors.grayColor,
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  input: {
    // backgroundColor: 'red',
    fontFamily: 'Metropolis-Medium',
    color: colors.darkGrayColor,
  },
  icon: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 6,
    height: '100%',
    paddingHorizontal: 6,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: colors.grayColor,
    width: '10%',
  },
  suggestion: {
    fontFamily: 'Metropolis-Medium',
    color: colors.lightGrayColor,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
    padding: 1,
  },
  suggestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
  },
});
