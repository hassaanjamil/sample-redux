
import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableNativeFeedback, Image, Modal, Pressable, Alert } from "react-native";
import { store } from '../store/store';
import Item from '../models/Item'
import { primary } from '../constants/Colors';

const ListScreen = props => {

    const [modalVisible, setModalVisible] = React.useState(false);

    const DATA = [
        new Item(1, "Apple", "A sweet fruit, mostly red in color.",
            "https://7esl.com/wp-content/uploads/2017/12/apples-150x150.png"),
        new Item(2, "Watermelon", "A sweet fruit, mostly green in color.",
            "https://7esl.com/wp-content/uploads/2017/12/watermelon-150x150.png"),
        new Item(3, "Orange", "A citrus taste fruit, mostly orange in color.",
            "https://7esl.com/wp-content/uploads/2017/12/organge2-150x150.png"),
        new Item(4, "Pear", "A sweet and a little hard fruit, mostly green in color.",
            "https://7esl.com/wp-content/uploads/2017/12/pears-150x150.png"),
        new Item(5, "Cherry", "A sweet fruit, mostly dark-red in color.",
            "https://7esl.com/wp-content/uploads/2017/12/cherries-150x150.png"),
    ];

    const { value } = store.getState();
    const [counter, setCounter] = React.useState(value);

    React.useEffect(() => {
        store.subscribe(() => {
            const { value } = store.getState();
            setCounter(value);
        })
    }, [store]);

    const AddItemModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View>

                    </View>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Previous Screen Count: {counter}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    }

    let modal = null;
    if(modalVisible) {
        modal = AddItemModal();
    }

    const renderListItem = (data) => {
        return (
            <TouchableNativeFeedback onPress={listItemPressHandler.bind(this, data.item)}>
                <View style={styles.listItem}>
                    <Image source={{ uri: data.item.image }} style={styles.image} />
                    <View style={styles.content}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'>
                            {data.item.title}
                        </Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'>
                            {data.item.desc}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    };

    const listItemPressHandler = (data) => {
        console.log(data.id);
    };

    return (
        <View styles={styles.screen}>
            <Text onPress={() => setModalVisible(!modalVisible)}>
                Previous Screen Count: {counter}</Text>
            {modal}
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={renderListItem}
                    data={DATA}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        backgroundColor: 'green',
    },
    listContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    content: {
        flexDirection: 'column',
        width: '80%',
        marginStart: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: primary,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});

export default ListScreen;