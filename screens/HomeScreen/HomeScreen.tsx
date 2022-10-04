import { StyleSheet, Image, FlatList } from 'react-native'; 

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from '../HomeScreen/style';
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory';




function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return ( 
    <View style={styles.container} >
      {}
        <FlatList
              showsVerticalScrollIndicator={false}
              data={categories.items}
              renderItem={({item}) => <HomeCategory category={item}/>}
            />
    </View>
  );
}

export default HomeScreen;