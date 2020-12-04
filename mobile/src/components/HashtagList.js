import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import {getHashtagsForFilter} from '../redux/actions/hashtagActions';

const renderHashtag = (hashtag, index, onPress) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        backgroundColor: hashtag.isHighlighted ? '#F8CBAD' : '#D3D3D3',
        marginTop: 5,
        marginRight: 10,
        borderRadius: 7,
      }}
      key={index}
      onPress={() => onPress(hashtag)}>
      <Text>{hashtag.name}</Text>
    </TouchableOpacity>
  );
};

const renderHashtags = (hashtags, onPress) => {
  return hashtags.map((hashtag, index) => {
    return renderHashtag(hashtag, index, onPress);
  });
};

const HashtagsList = ({product, selectedCategory}) => {
  let [hashtags, setHashtags] = useState([]);
  let [filterHashtags, setFilterHashtags] = useState('');

  useEffect(() => {
    console.log('h list');
    getHashtags('');
  }, []);

  const getHashtags = async (text) => {
    let foundHashtags = await getHashtagsForFilter({
      categoryName: selectedCategory,
      name: text,
    });

    if (foundHashtags !== undefined) {
      let hashtags = foundHashtags.map((h) => {
        let isSelected = false;
        if (
          product.hashtags &&
          product.hashtags.map((tag) => tag.name).includes(h.name)
        ) {
          isSelected = true;
        }
        return {name: h.name, isSelected: isSelected};
      });

      setHashtags(hashtags);
    }
  };

  const renderAddHashtag = () => {
    return (
      <View style={{margin: 5}}>
        <Text>#hashtag</Text>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'gray',
            marginTop: 5,
            padding: 5,
          }}
          value={filterHashtags}
          placeholder={'Search for hashtag'}
          onChangeText={async (text) => {
            setFilterHashtags(text);
          }}
        />
      </View>
    );
  };

  const renderHashtagsContainer = (title, isSelected, filter) => {
    let displayHashtags = hashtags.filter((h) => h.isSelected === isSelected);
    if (filter) {
      displayHashtags = displayHashtags.filter((h) =>
        h.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    if (displayHashtags.length > 0) {
      return (
        <View style={{margin: 5}}>
          <Text>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 1,
              marginTop: 5,
            }}>
            {renderHashtags(displayHashtags, (hashtag) => {
              let index = hashtags.indexOf(hashtag);
              if (index > -1) {
                hashtags[index].isSelected = !hashtags[index].isSelected;
                setHashtags([...hashtags]);
              }
            })}
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      {renderAddHashtag()}
      {renderHashtagsContainer('Found Hashtags', false, filterHashtags)}
      {renderHashtagsContainer('Current Hashtags', true)}
    </View>
  );
};

export default HashtagsList;