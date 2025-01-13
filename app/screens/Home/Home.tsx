import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';
import {SizeConfig} from '../../assets/component/component';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface VideoFile {
  id: number;
  quality: string;
  file_type: string;
  link: string;
}

interface VideoData {
  id: number;
  video_files: VideoFile[];
}

const HomeScreen: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreVideos, setHasMoreVideos] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [videoEnded, setVideoEnded] = useState<number | null>(null);

  const videoRefs = useRef<any[]>([]);
  const flatListRef = useRef<FlatList<any>>(null);
  const API_KEY = 'rjrpysVppX1Df8EJsO7di8o8HbS89lExgHumhTtmIgOOv3LYnb8nZRa7';
  const PAGE_SIZE = 1;
  const API_URL = 'https://api.pexels.com/v1/videos/search';

  const fetchVideos = async (page: number) => {
    if (!hasMoreVideos) return;

    setIsLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {Authorization: API_KEY},
        params: {page, per_page: PAGE_SIZE, query: 'india'},
      });

      const newVideos = response.data.videos;
      setVideos(prevVideos => [...prevVideos, ...newVideos]);
      setHasMoreVideos(newVideos.length === PAGE_SIZE);
      setloading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMoreVideos) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const viewHeight = Dimensions.get('window').height;
    const currentIndex = Math.round(offsetY / viewHeight);
    if (currentIndex !== focusedIndex) {
      flatListRef.current?.scrollToIndex({index: currentIndex, animated: true});
      setFocusedIndex(currentIndex);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={styles.loader} />;
  };

  const getHighQualityVideo = (videoFiles: VideoFile[]) => {
    const hdVideo = videoFiles.find(file => file.quality === 'hd');
    return hdVideo?.link;
  };

  const handleVideoEnd = useCallback((index: number) => {
    setVideoEnded(index);
  }, []);

  const replayVideo = useCallback((index: number) => {
    setVideoEnded(null);
    videoRefs.current[index]?.seek(0);
  }, []);

  const handleBuffering = useCallback((isBuffering: boolean, index: number) => {
    if (isBuffering) {
      console.log(`Video ${index} started buffering`);
    } else {
      console.log(`Video ${index} finished buffering`);
    }
  }, []);

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  console.log('====================================');
  console.log('videos', videos);
  console.log('====================================');

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          ref={flatListRef}
          data={videos}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({item, index}) => (
            <View style={styles.item}>
              <Video
                ref={ref => (videoRefs.current[index] = ref)}
                source={{uri: getHighQualityVideo(item.video_files)}}
                style={styles.video}
                controls={false}
                resizeMode="cover"
                repeat={false}
                paused={focusedIndex !== index}
                onBuffer={e => handleBuffering(e.isBuffering, index)}
                onLoadStart={() => handleBuffering(true, index)}
                onEnd={() => handleVideoEnd(index)}
              />
              {videoEnded === index && (
                <TouchableOpacity
                  style={styles.replayContainer}
                  onPress={() => replayVideo(index)}>
                  <AntDesign name="reload1" color="#fff"></AntDesign>
                  <View style={{}}>
                    <Text style={styles.replayText}>Watch Again</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )}
          onScroll={handleScroll}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{paddingBottom: 20}}
          removeClippedSubviews={true}
          initialNumToRender={3}
          maxToRenderPerBatch={2}
          windowSize={5}
          snapToInterval={Dimensions.get('window').height}
          decelerationRate="fast"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loader: {
    marginVertical: 20,
  },
  replayContainer: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    padding: 10,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: SizeConfig.width * 2,
    // left: 0,
    // right: 0,
  },
  replayText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
