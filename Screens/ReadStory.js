import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from "react-native";
import {SearchBar,Header} from 'react-native-elements'
import db from "../Config"
export default class ReadStory extends React.Component{
    constructor(){
        super()
       this.state={
            search:'',
            docId:[],
        }
    }
    componentDidMount=async()=>{
        const query = await db.collection("stories").get()
        query.docs.map((doc)=>{
            this.setState({
                docId:[...this.state.docId,doc.data()],
            })
        })
    }
    updateSearch=(search)=>{
        this.setState({
            search
        })
    }
    render(){
        
                const { search } = this.state;
                return (
                   
                     
                     <ScrollView>
                          {/* <Header
                         backgroundColor={'#FFC0CB'}
                         centerComponent={{
                         text: 'Story Hub',
                         style: { color: 'black', fontSize: 40 },
                     }}
                     /> */}
                       {/* <SearchBar
                    placeholder="Search For Stories.."
                    onChangeText={this.updateSearch}
                    value={search}
                  /> */}
                        
                         {this.state.docId.map((stories)=>{
                             return(
                                <View style={{borderBottomWidth:2}}>
                                    <Text>{stories.title}</Text>
                                     </View>
                             )
                             
                         })}
                        
                        </ScrollView>
                   
                 
                  
                  
                );

              }
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar:{
        width:500   
    }
  });