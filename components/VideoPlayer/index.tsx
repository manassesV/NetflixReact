import { View, Text } from 'react-native'
import React , {useRef, useState, useEffect}from 'react'
import { Episode } from '../../types'
import { Video } from 'expo-av'
import { Playback } from 'expo-av/build/AV';
import styles from "./styles";

interface VideoPlayerProps{
    episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState({});

  console.log(episode);

  useEffect(() => {
    if(!video){
      return;
    }
      (async () => {
         await video?.current?.unloadAsync();
         await video?.current?.loadAsync(
          {uri: episode.video },
          {},
          false
         )
      })();
  }, [episode])
  
  return (
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster
        }}
        posterStyle={{
          width: '100%',
          height: 200,
          resizeMode: 'cover'
        }}
        usePoster={true}
        useNativeControls
        isLooping

 
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      >

      </Video>
   
  )
}

export default VideoPlayer