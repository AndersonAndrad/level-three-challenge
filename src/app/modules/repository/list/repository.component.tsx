import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

// services
import api from '../../../../services/api/api';

// styles
import styles from './repository.styled';

export default function RepositoryList() {
  const [repositories, setRepository] = useState([]);

  async function loadRepositoryes() {
    await api
      .get<any>('/repositories')
      .then((response) => setRepository(response.data));
  }

  useEffect(() => {
    loadRepositoryes();
  }, [repositories]);

  interface IRepository {
    id: String;
    title: String;
    url: String;
    techs: String[];
  }

  return (
    <View style={styles.Container}>
      <View style={styles.listCardContainer}>
        <FlatList
          data={repositories}
          keyExtractor={(reposi: IRepository) => String(reposi.id)}
          renderItem={({ item: repository }) => (
            <View style={styles.cardContainer}>
              <View>
                <Text style={styles.textCard}>ID: {repository.id}</Text>
                <Text style={styles.textCard}>Title: {repository.title}</Text>
                <Text style={styles.textCard}>URL: {repository.url}</Text>
                <Text style={styles.textCard}>
                  Techs: faksjfajl3324234jskdlf
                </Text>
              </View>
              <View style={styles.likesContainer}>
                <Text>Likes</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Remove repository</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add repository</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
