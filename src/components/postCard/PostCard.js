import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { convertEpochToTimeAgo } from '../../utilities/convertEpochToTime';

export default function PostCard({ onPress, content }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ url: content.thumbnail }} />
            <View style={styles.secondaryContainer}>
                <Text style={[styles.body, { textAlign: 'right' }]}>{convertEpochToTimeAgo(content.created_utc)}</Text>
                <Text style={styles.title}>{content.title}</Text>
                <View style={styles.divider} />
                <View style={styles.tertiaryContainer}>
                    <Text style={styles.bodyBottom}>{content.name}</Text>
                    <Text style={styles.bodyBottom}>Score:{content.score}</Text>
                    <Text style={styles.bodyBottom}>Comments:{content.num_comments}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        minHeight: hp('20%'),
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    secondaryContainer: {
        padding: wp('2%'),
        width: wp('65%'),
    },
    tertiaryContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: wp('65%'),
    },
    divider: {
        height: hp('5%')
    },
    image: {
        width: wp('35%'),
    },
    title: {
        fontWeight: 'bold',
        fontSize: wp('5%')
    },
    body: {
        fontSize: wp('3.5%'),
    },
    bodyBottom: {
        fontSize: wp('2.5%'),
    }

});
