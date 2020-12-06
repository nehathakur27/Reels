import React from 'react'
import {View,FlatList,Dimensions} from 'react-native'
import VideoPost from '../components/VideoPost'

const posts = [
    {
        id:'p1',
        username:"HBO",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3X34uKJYCC1eM-a99fJglu4xQV04hRn9-uA&usqp=CAU",
        desc:"Here a extract from tom and jerry",
        comments:[
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
                followerName:"Elon Musk",
                text:"Where are the aliens?"
            },
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
                followerName:"Elon Musk",
                text:"Lorem ipsum"
            }
        ],
    },
    {
        id:'p2',
        username:"Chrome Cast",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png",
        desc:"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough",
        comments:[
            {
                image:"https://i.pinimg.com/originals/72/7e/5e/727e5ea10a3f1852dcbdb06b3733cb7f.jpg",
                followerName:"Tom and Jerry",
                text:"Lorem ipsum"
            },
        ],
    },
    {
        id:'p3',
        username:"Bigger MeltDowns",
        video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png",
        desc:"Learn how to use Chromecast with Netflix and more at google.com/chromecast",
        comments:[
            {
                image:"https://i.pinimg.com/originals/72/7e/5e/727e5ea10a3f1852dcbdb06b3733cb7f.jpg",
                followerName:"Tom and Jerry",
                text:"Lorem ipsum"
            },
        ],
    }
]

const HomeScreen = () =>{
    return(
        <View >
            <FlatList 
              data = {posts}
              renderItem = {({item,index}) => <VideoPost post={item} key={index} />}
              keyExtractor ={ x => x.id }
              showsVerticalScrollIndicator={false}
              snapToInterval={Dimensions.get('window').height}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
            />
        </View>
    )
}


export default HomeScreen