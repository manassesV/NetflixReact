import { StyleSheet, Image, FlatList, Pressable } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { Text, View} from '../../components/Themed';
import styles from './styles';

interface HomeCategoryProps{
    category:{
        id: string,
        title: string,
        movies:{
           id: string,
           poster: string
        }[]
    }
}




const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    
    const onMoviePress = (movie) =>{
        console.warn(movie.id);
    }
  
    return ( 
    <>
        <Text style={styles.title}>{category.title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category.movies}
            renderItem={({item}) => (
                <Pressable>
                <Image style={styles.image} source={{ uri: item.poster}} />

                </Pressable>
            )}
        
        />
    </>
  );
}

export default HomeCategory;