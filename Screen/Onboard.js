import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image,Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';
import App from '../App';
import LoginScreen from '../Screen/LoginScreen';



const data = [
    {
    title: 'unknow',
    text: 'unknow',
    image: require ('../assets/images/Num1.png'),
    bg: colors.washedwhite,
    },
    {
    title: 'unknown',
    image: require ('../assets/images/Num4.png'),
    text: 'unknown',
    bg: colors.washedwhite,
    },
    {
    title: 'unknown',
    text: "unknown",
    image: require ('../assets/images/Num3.png'),
    bg: colors.washedwhite,
  },
  ];

  const styles = StyleSheet.create({
    slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    image: {
    width: 315,
    height: 264,
    marginTop: 0,
    marginBottom: 71,
    marginLeft: 30,
    marginRight: 30,
    },
    text: {
    color: colors.sliver,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginHorizontal: 0,
    marginTop: 19,
    marginLeft: 30,
    marginRight: 30,
    shadowOpacity: 0.4,
    shadowOffset:{ width: 4, height: 4},
  
    },
    title: {
    fontSize: 24,
    color: colors.blue,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    
    shadowOpacity: 0.4,
    shadowOffset:{ width: 4, height: 4}, 
    },
    dotStyle: {
    backgroundColor: colors.greydot,
    marginBottom: -10,
    shadowOpacity: 1,
    shadowColor: colors.blue,
    shadowOffset:{ width: 1, height: 1},
    },
    activeDotStyle: { 
    backgroundColor: colors.blue,
    width:17,
    height:6,
    marginBottom: -10,
    shadowOpacity:1.0,
    shadowColor: colors.blue,
    shadowOffset:{ width: 1, height: 1},
    
    },
    rightWrapper: {
    
    color: colors.blue,
    fontSize: 14,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 10,
    shadowOpacity: 0.4,
    shadowOffset:{ width: 2, height: 2},
    },    
  });

  
const Onboard = (props) => {

  const renderItem = ({item}: {item: item}) => { 
    return (
        <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
};

const handleDone = () => {props.handleDone ();};

const keyExtractor = (item) => item.title;

const renderNextButton = () => {};




const renderDoneButton = (navigation) => {renderDoneButton(props.navigation)
return (
<View style={styles.rightWrapper}>
  <Text style={styles.rightWrapper}> Done </Text>
  <Button title="Done" onPress={() => navigation.navigate('LoginScreen')}/>
</View>
);
};


    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          inActiveDotOpacity={styles.inActiveDotOpacity}
          activeDotScale={styles.activeDotScale}
          renderNextButton={renderNextButton}
          renderDoneButton={renderDoneButton}
          ExpandingDot={styles.ExpandingDot}
          data={data}
          onDone={handleDone}
        />
      </View>
    );
};


export default Onboard;