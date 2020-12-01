import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';

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
      <Text>{hashtag}</Text>
    </TouchableOpacity>
  );
};

const renderHashtags = (hashtags, onPress) => {
  return hashtags.map((hashtag, index) => {
    return renderHashtag(hashtag, index, onPress);
  });
};

const HashtagsList = ({product}) => {
  let [hashtags, setHashtags] = useState(
    product.hashtags !== undefined
      ? product.hashtags.map((h) => {
          return h.name;
        })
      : [],
  );
  let [filterHashtag, setFilterHashtag] = useState('');
  let [foundHashtags, setFoundHashtags] = useState([]);

  const getFoundHashtags = async (text) => {
    let foundHashtags = await getHashtagsForFilter({
      categoryName: selectedCategory,
      name: text,
    });

    if (foundHashtags !== undefined) {
      setFoundHashtags(
        foundHashtags
          .map((h) => h.name)
          .filter((h) => hashtags.includes(h) === false),
      );
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
          value={filterHashtag}
          placeholder={'Search for hashtag'}
          onChangeText={async (text) => {
            setFilterHashtag(text);
          }}
        />
      </View>
    );
  };

  const renderAddHashtags = () => {
    console.log('found');
    console.log(foundHashtags);

    if (foundHashtags.length > 0) {
      return (
        <View style={{margin: 5}}>
          <Text>Found Hashtags</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 1,
              marginTop: 5,
            }}>
            {renderHashtags(foundHashtags, (h) => {
              setHashtags([...hashtags, h]);
            })}
          </View>
        </View>
      );
    }
  };

  const renderCurrentHashtags = () => {
    if (hashtags.length > 0) {
      return (
        <View style={{margin: 5}}>
          <Text>Current Hashtags</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 1,
              marginTop: 5,
            }}>
            {renderHashtags(hashtags, (hashtag) => {
              console.log(hashtag);
            })}
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      {renderAddHashtag()}
      {renderCurrentHashtags()}
    </View>
  );
};

export default HashtagsList;
