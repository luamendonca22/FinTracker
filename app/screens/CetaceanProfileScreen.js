import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import AppText from "../components/AppText";
import { ListDetails } from "../components/Lists";
import IconButton from "../components/Buttons/IconButton";
import BottomSheet from "../components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import defaultStyles from "../config/styles";

const windowHeight = Dimensions.get("window").height;

const CetaceanProfileScreen = (props) => {
  const cetaceans = [
    {
      id: 1,
      name: "Atlantic spotted Dolphin",
      details: {
        nomeCientífico: "Stenella frontalis",
        idade: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Atlantic_spotted_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 2,
      name: "Bottlenose Dolphins",
      details: {
        nomeCientífico: "Tursiops",
        idade: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Bottlenose_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 3,
      name: "Common Dolphin",
      details: {
        nomeCientífico: "Delphinus delphis",
        idade: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Common_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 4,
      name: "Frasers Dolphin",
      details: {
        nomeCientífico: "Lagenodelphis hosei",
        idade: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Frasers_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 5,
      name: "Risso's Dolphin",
      details: {
        scientificName: "Grampus griseuss",
        age: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Rissos_Dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 6,
      name: "Rough toothed Dolphin",
      details: {
        scientificName: "Steno bredanensiss",
        age: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Rough_toothed_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
    {
      id: 7,
      name: "Stripped Dolphin",
      details: {
        scientificName: "Stenella coeruleoalba",
        age: "1",
        comprimento: "3m",
        peso: "650kg",
        localização: "Camâra de Lobos",
      },
      imageUrl: require("../assets/dolphins/Stripped_dolphin.jpg"),
      introduction:
        "Ocorrem na Madeira durante todo o ano. Muito activas e lúdicas na superfície. Muitas vezes aproximam-se curiosamente de barcos e saltam, fazem proa e enfiam a cabeça fora de água. A população desta espécie na Madeira é constituída por dois ecótipos; o maior, do tipo offshore pelágico e o menor, do tipo costeiro, com esta última comunidade mesmo contendo grupos residentes.",
      history:
        "Os golfinhos roaz-corvineiro comuns recebem o seu nome do seu focinho curto e grosso (ou rostro). São geralmente de cor cinzenta. Podem variar entre cinzento claro e quase preto no topo perto da barbatana dorsal e cinzento claro até quase branco na barriga.",
      migration:
        "Os golfinhos roazes dos Estados Unidos migram para cima e para baixo na costa atlântica, dirigindo-se para norte na Primavera, e novamente para sul no Outono.",
    },
  ];

  const notifications = [
    { id: 1, title: "Quando estiver perto da minha localização" },
    { id: 2, title: "Quando estiver perto de um local personalizado" },
  ];

  const index = 1;

  const [isFavorite, setIsFavorite] = useState(false);
  const [BottomSheetActive, setBottomSheetActive] = useState(false);
  const [notifyMyLocationActive, setnotifyMyLocationActive] = useState(false);
  const [notifyCustomLocationActive, setnotifyCustomLocationActive] =
    useState(false);

  const handleNotificationSelect = ({ id }) => {
    if (id == 1) {
      setnotifyMyLocationActive(true);
      setnotifyCustomLocationActive(false);
    } else if (id == 2) {
      setnotifyMyLocationActive(false);
      setnotifyCustomLocationActive(true);
    }
  };

  const handleNotificationPress = () => {
    setBottomSheetActive(!BottomSheetActive);
  };
  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const selectFavoriteIcon = () => {
    return isFavorite ? ["favorite", "red"] : ["favorite-outline", "black"];
  };

  const selectNotificationIcon = () => {
    return !BottomSheetActive ? "notifications-none" : "notifications";
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={cetaceans[index].imageUrl} />
        </View>

        <View style={styles.profileContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={{ flex: 1 }}>
                <AppText numberOfLines={3} style={styles.cetaceanName}>
                  {cetaceans[index].name}
                </AppText>
              </View>
              <View style={styles.headerIcons}>
                <IconButton
                  onPress={handleFavoritePress}
                  name={selectFavoriteIcon()[0]}
                  color={selectFavoriteIcon()[1]}
                  size={32}
                />
                <IconButton
                  onPress={handleNotificationPress}
                  name={selectNotificationIcon()}
                  color={defaultStyles.colors.black}
                  size={32}
                />
              </View>
            </View>
            <AppText style={styles.title}>Detalhes</AppText>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ListDetails details={cetaceans[index].details} />
            </ScrollView>
            <AppText style={styles.title}>Introdução</AppText>
            <AppText style={styles.text}>
              {cetaceans[index].introduction}.
            </AppText>
            <AppText style={styles.title}>História</AppText>
            <AppText style={styles.text}>{cetaceans[index].history}</AppText>
            <AppText style={styles.title}>Rota de migração</AppText>
            <AppText style={styles.text}>{cetaceans[index].migration}</AppText>
          </ScrollView>
        </View>
        {BottomSheetActive ? (
          <>
            <View style={styles.transparentContainer}></View>
            <BottomSheet>
              {notifications.map((item, index) => (
                <View key={index} style={styles.option}>
                  <IconButton
                    onPress={handleNotificationSelect(item.id)}
                    name={"add-circle-outline"}
                    size={22}
                  />
                  <AppText numberOfLines={3} style={{ flex: 1, marginLeft: 4 }}>
                    {item.title}
                  </AppText>
                </View>
              ))}
            </BottomSheet>
          </>
        ) : (
          ""
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  transparentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: defaultStyles.colors.transparent,
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: windowHeight / 3,
    position: "absolute",
    top: 0,
    backgroundColor: defaultStyles.colors.primary,
    left: 0,
    right: 0,
  },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  profileContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: defaultStyles.colors.white,
    flex: 1,
    marginTop: windowHeight / 3.5,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  headerIcons: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
  },
  cetaceanName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    lineHeight: 22,
    textAlign: "justify",
  },

  option: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default CetaceanProfileScreen;
