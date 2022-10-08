import React from 'react'
import { Text, View} from '../../components/Themed';
import styles from '../EpsodeItem/styles';
import { Image, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Episode } from '../../types';


interface EpisodeItemProps{
    episode: Episode;
    onPress: (eppisode: Episode) => {}
}

const EpisodeItem = (props: EpisodeItemProps) => {
   const { episode, onPress } = props;

    return (
    <Pressable style={{margin: 10}} onPress={() => onPress}>
        <View style={styles.row}>
             <Image
              style={styles.image} 
              source={{ uri : episode.poster}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{episode.title}</Text>
                <Text style={styles.duration}>{episode.duration}</Text>
            </View>
            <AntDesign name='download' size={24} color={'white'}/>
       </View>
        <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  )
}

export default EpisodeItem

