import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListDetail from '../ListDetail/ListDetail';
const ListView = ({tech}) => {
  return (
    <FlatList
      data={tech}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => {
        return <ListDetail data={item} />;
      }}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    tech: state.Tech,
  };
};

export default connect(mapStateToProps)(ListView);

const styles = StyleSheet.create({});
