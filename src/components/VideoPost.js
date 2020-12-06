import React,{useState} from 'react'
import {View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions, 
    TouchableWithoutFeedback,
    Image,
    KeyboardAvoidingView,
} from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/dist/Entypo';
import FontAwe from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/dist/Ionicons'

const VideoPost = ({post}) =>{
    const [openComment,setOpenComment] = useState(false)
    const [isPaused,setPaused] = useState(false)

    const myIcon = <Icon name="sound-mute" size={30} color="white" style={styles.icon} />;
    const unmute = <Icon name="sound" size={30} color="white" style={styles.icon} />;

    const openCommentBox = () =>{
        setOpenComment(!openComment)
    }
    
    return(
        <View style={styles.videoContainer}>
          <TouchableWithoutFeedback>
            <Video 
                source={{uri:post.video}}                       
                style={styles.video} 
                resizeMode={"cover"}
                repeat = {true}
                paused={isPaused}
                // playInBackground={false}
                // playWhenInactive={false}
            />
          </TouchableWithoutFeedback>

         <View style={styles.containers}>
            <View style={styles.rightConatiner}>
                <Image source={{uri:post.image}} style={styles.profileImg}/>
                <Icon.Button
                    name="heart-outlined"
                    backgroundColor= "rgba(0,0,0,0.5)"
                    style={{width:45,height:45,}}
                    iconStyle={{left:5}}
                    borderRadius={25}
                />
                <FontAwe.Button
                    name="comment"
                    backgroundColor= "rgba(0,0,0,0.5)"
                    style={{width:45,height:45,}}
                    iconStyle={{left:5}}
                    borderRadius={25}
                    onPress={() => openCommentBox()} 
                />
                <Icon.Button
                    name="forward"
                    backgroundColor= "rgba(0,0,0,0.5)"
                    style={{width:45,height:45,}}
                    iconStyle={{left:5}}
                    borderRadius={25}
                />
                <Icon.Button
                    name="plus"
                    backgroundColor= "rgba(0,0,0,0.5)"
                    style={{width:45,height:45,}}
                    iconStyle={{left:5}}
                    borderRadius={25}
                />
            </View>

            <View style={styles.bottomConatiner}> 
                <View style={{marginBottom:10,}}>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>{post.username}</Text>
                    <Text style={{color:"white",fontSize:15,}}>{post.desc}</Text>
                </View>
                {post.comments.map((com) => (
                    <View style={{flexDirection:"row",}}>
                    <Image source={{uri:com.image}} style={styles.profileImg}/>
                    <View>
                        <Text style={{color:"white",fontSize:13,}}>{com.followerName}</Text>
                        <Text style={{color:"white",fontSize:14,}}>{com.text}</Text>
                    </View>
                    </View>
                ) )}
                {openComment && 
                <View style={styles.commentBox}>
                    <TextInput 
                        placeholder="Type Here..."
                        placeholderTextColor = 'gray'
                        style={styles.input}
                    />
                    <IonIcon.Button
                        name="send"
                        backgroundColor="#009900"
                        style={{width:45,height:45,}}
                        iconStyle={{left:5}}
                        borderRadius={23}
                    />
                </View>
                }
            </View>
         </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    videoContainer:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    video:{
       position:"absolute",
       top:0,
       right:0,
       left:0,
       bottom:0,
    },
    iconContainer:{
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        padding:10,
        left:"45%",
        top:"45%",
        borderRadius:50,
    },
    bottomConatiner:{
        padding:20,
    },
    profileImg:{
        width:35,
        height:35,
        borderRadius:20,
        marginRight:10,
    },
    rightConatiner:{
        alignSelf:"flex-end",
        height:280,
        justifyContent:"space-between",
        padding:10
    },
    containers:{
        height:"100%",
        justifyContent:"flex-end"
    },
    commentBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
    },
    input:{
        backgroundColor:"white",
        borderRadius:8,
        width:"80%",
        padding:10
    }
    
})

export default VideoPost