import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/SubRedditInfoStyles';
import Images from '../../assets/Images';

const SubRedditInfoContainer = (props) => {

  return (
    <View style={styles.subRedditInfoContainer}>
      <View style={styles.subRedditTitleContainer}>
        <Text style={styles.subRedditTitle}>{`r/${props.searchValue}`}</Text>
        <TouchableOpacity
          onPress={() => alert('If user is logged in they can join become a member of this SubReddit')}
          style={styles.joinButton}
        >
          <Text style={styles.joinPlus}>+</Text>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subRedditStatsContainer}>
        <Text style={styles.subRedditStats}>25,172,716 Photographers • 21,818 online</Text>
        <Text style={styles.subRedditTagLine}>A place for pictures and photographers</Text>
      </View>
      <View style={styles.sortOptionsContainer}>
        <View style={styles.sortOptions}>
          <Image style={styles.sortIcon} source={Images.hot} />
          <Text style={styles.sortBy}>HOT POSTS</Text>
          <Image style={styles.dropDownIcon} source={Images.dropDown} />
        </View>
        <View style={styles.viewOptions}>
          <Image style={styles.viewOptionImage} source={Images.classicView} resizeMode="contain" />
        </View>
      </View>
    </View>
  )
}

export default SubRedditInfoContainer