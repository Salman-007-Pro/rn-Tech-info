import React, {useEffect} from 'react';
import {StyleSheet, Text, View, LayoutAnimation, UIManager} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {getSelectedId} from '../../Redux/Actions';
let randomColor = require('randomcolor');
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const ListDetail = ({data, selectItem, isShow}) => {
  const {id, title, description} = data;
  const isExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    selectItem(id);
  };
  return (
    <View style={styles.container_wrapper}>
      <View
        style={[styles.heading_container, {backgroundColor: randomColor()}]}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          {title}
        </Text>
        <Icon name="caretdown" size={20} color="black" onPress={isExpand} />
      </View>
      {isShow && (
        <View style={styles.descriptionStyle}>
          <Text style={{textAlign: 'center'}}>{description}</Text>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = (state, ownProps) => {
  const isShow = state.Selected === ownProps.data.id;
  return {
    isShow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: (id) => dispatch(getSelectedId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetail);

const styles = StyleSheet.create({
  container_wrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  heading_container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionStyle: {
    padding: 5,
  },
});
