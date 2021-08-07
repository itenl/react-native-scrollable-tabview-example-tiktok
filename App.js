import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Animated,
} from "react-native";
import ScrollableTabView from "@itenl/react-native-scrollable-tabview";

const IMG_BG = require("./images/bg.jpeg");
const IMG_DEFAULT = require("./images/default.jpeg");

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notMore: false,
      list: Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${index} ---`,
          index,
        };
      }),
    };
  }
  onRefresh = (toggled) => {
    this.toggled = toggled;
    this.toggled && this.toggled();
    console.log("Works onRefresh");
    // to do
    this.toggled && this.toggled();
  };

  onEndReached = () => {
    if (this.state.list.length >= 50 || this.state.notMore) {
      this.setState({
        notMore: true,
      });
      return;
    }
    let length = this.state.list.length;
    this.state.list = this.state.list.concat(
      Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${length + index} ---`,
          index: length + index,
        };
      })
    );
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#151723",
        }}
      >
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={this.state.list}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  flex: 0.33,
                  height: 260,
                }}
                onPress={() => this.props.toTabView("私密")}
              >
                <ImageBackground
                  source={index % 2 == 0 ? IMG_DEFAULT : IMG_BG}
                  style={{ width: "100%", height: 260 }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      bottom: 10,
                      left: 10,
                      position: "absolute",
                      fontSize: 12,
                    }}
                  >
                    {index + 1} w
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}

class Private extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notMore: false,
      list: Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${index} ---`,
          index,
        };
      }),
    };
  }
  onRefresh = (toggled) => {
    this.toggled = toggled;
    this.toggled && this.toggled();
    console.log("Private onRefresh");
    // to do
    this.toggled && this.toggled();
  };

  onEndReached = () => {
    if (this.state.list.length >= 30 || this.state.notMore) {
      this.setState({
        notMore: true,
      });
      return;
    }
    let length = this.state.list.length;
    this.state.list = this.state.list.concat(
      Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${length + index} ---`,
          index: length + index,
        };
      })
    );
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#151723",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {this.state.list.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={{
                width: "50%",
                height: 260,
              }}
              onPress={() => {
                this.props.toTabView(2);
              }}
            >
              <ImageBackground
                source={index % 2 == 0 ? IMG_DEFAULT : IMG_BG}
                style={{ width: "100%", height: 260 }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    bottom: 10,
                    left: 10,
                    position: "absolute",
                    fontSize: 12,
                  }}
                >
                  {index + 1} w
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notMore: false,
      list: Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${index} ---`,
          index,
        };
      }),
    };
  }
  onRefresh = (toggled) => {
    this.toggled = toggled;
    this.toggled && this.toggled();
    console.log("Like onRefresh");
    // to do
    this.toggled && this.toggled();
  };

  onEndReached = () => {
    if (this.state.list.length >= 30 || this.state.notMore) {
      this.setState({
        notMore: true,
      });
      return;
    }
    let length = this.state.list.length;
    this.state.list = this.state.list.concat(
      Array.from({ length: 10 }, (val, i) => {
        return { index: i };
      }).map((item, index) => {
        return {
          title: `--- title ${length + index} ---`,
          index: length + index,
        };
      })
    );
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#151723",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {this.state.list.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={{
                width: "100%",
                height: 260,
              }}
              onPress={() => {
                this.props.scrollTo(0);
                // this.props.scrollTo(-1000);
              }}
            >
              <ImageBackground
                source={index % 2 == 0 ? IMG_DEFAULT : IMG_BG}
                style={{ width: "100%", height: 260 }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    bottom: 10,
                    left: 10,
                    position: "absolute",
                    fontSize: 12,
                  }}
                >
                  {index + 1} w
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

class Collect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View></View>;
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // 容器
      <View
        style={{
          backgroundColor: "#151723",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 背景图 */}
        <ImageBackground source={IMG_BG} style={{ width: "100%", height: 185 }}>
          <View
            style={{
              flex: 1,
              position: "absolute",
              right: 20,
              top: 40,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                opacity: 0.5,
                backgroundColor: "#000000",
                height: 30,
                width: 30,
                borderRadius: 15,
                marginRight: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#ffffff" }}>Go</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                opacity: 0.5,
                backgroundColor: "#000000",
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#ffffff" }}>Go</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* 基本信息 */}
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: -15,
            width: "100%",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#151723",
          }}
        >
          {/* 行一 */}
          <View
            style={{
              flexDirection: "row",
              marginTop: -20,
              alignItems: "center",
            }}
          >
            <Image
              source={IMG_DEFAULT}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: "#141c22",
              }}
            ></Image>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightColor: "#1d202b",
                  borderRightWidth: 1,
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 12 }}>获赞</Text>
                <Text style={{ color: "#ffffff", marginTop: 3 }}>999</Text>
              </View>
              <View
                style={{
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightColor: "#1d202b",
                  borderRightWidth: 1,
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 12 }}>粉丝</Text>
                <Text style={{ color: "#ffffff", marginTop: 3 }}>999</Text>
              </View>
              <View
                style={{
                  width: 120,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 12 }}>关注</Text>
                <Text style={{ color: "#ffffff", marginTop: 3 }}>999</Text>
              </View>
            </View>
          </View>
          {/* 行二 */}
          <View
            style={{
              paddingVertical: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#21232e",
            }}
          >
            <Text
              style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}
            >
              昵称加载中...
            </Text>
            <Text style={{ color: "#83848e", fontSize: 10, marginTop: 5 }}>
              私密账号 · 抖音号: 9999999999
            </Text>
          </View>
          {/* 行三 */}
          <View
            style={{
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "#b4b7c2", fontSize: 13, marginTop: 5 }}>
              点击添加介绍，让大家认识你
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#222430",
                  borderRadius: 3,
                  paddingVertical: 2,
                  paddingHorizontal: 4,
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 10 }}>18岁</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#222430",
                  borderRadius: 3,
                  paddingVertical: 2,
                  paddingHorizontal: 4,
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 10 }}>北京</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#222430",
                  borderRadius: 3,
                  paddingVertical: 2,
                  paddingHorizontal: 4,
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: "#83848e", fontSize: 10 }}>
                  + 添加学校等标签
                </Text>
              </View>
            </View>
          </View>
          {/* 行四 */}
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 5,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={IMG_DEFAULT}
                style={{
                  backgroundColor: "#222430",
                  borderRadius: 5,
                  height: 40,
                  width: 40,
                  marginRight: 10,
                }}
              ></Image>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "#ffffff", fontSize: 12 }}>抖音商城</Text>
                <Text style={{ color: "#83848e", fontSize: 10, marginTop: 5 }}>
                  发现超值好物
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 30 }}>
              <Image
                source={IMG_DEFAULT}
                style={{
                  backgroundColor: "#222430",
                  borderRadius: 5,
                  height: 40,
                  width: 40,
                  marginRight: 10,
                }}
              ></Image>
              <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "#ffffff", fontSize: 12 }}>我的音乐</Text>
                <Text style={{ color: "#83848e", fontSize: 10, marginTop: 5 }}>
                  已收藏999首
                </Text>
              </View>
            </View>
          </View>
          {/* 行五 */}
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 5,
              marginBottom: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                backgroundColor: "#3a3a44",
                borderRadius: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#ffffff" }}>
                编辑资料 <Text style={{ color: "#73737f" }}>99%</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                backgroundColor: "#3a3a44",
                borderRadius: 2,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "#ffffff" }}>添加朋友</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootTime: Date.now(),
      stacks: this.initStacks(),
      firstIndex: 0,
      scrollY: new Animated.Value(0),
    };
  }

  initStacks() {
    return [
      {
        screen: Works,
        tabLabel: "作品",
      },
      {
        screen: Private,
        tabLabel: "私密",
      },
      {
        screen: Like,
        tabLabel: "喜欢",
      },
      {
        screen: Collect,
        tabLabel: "收藏",
      },
    ];
  }

  componentDidMount() {}

  componentWillUnmount() {}

  refreshCurrentTab = () => {
    if (this.scrollableTabView) {
      const currentTabScreen = this.scrollableTabView.getCurrentRef();
      if (currentTabScreen && currentTabScreen.onRefresh)
        currentTabScreen.onRefresh();
    }
  };

  containerHeader = () => {
    return (
      <Animated.View
        style={{
          height: this.state.scrollY.interpolate({
            inputRange: [0, 240],
            outputRange: [0, 80],
            extrapolate: "clamp",
          }),
          opacity: this.state.scrollY.interpolate({
            inputRange: [180, 400],
            outputRange: [0, 1],
            extrapolate: "clamp",
          }),
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          //   transform: [
          //     {
          //       translateY: this.state.scrollY.interpolate({
          //         inputRange: [0, 100],
          //         outputRange: [0, 50],
          //         extrapolate: "clamp",
          //       }),
          //     },
          //   ],
        }}
      >
        <Text style={{ fontSize: 16, color: "#ffffff" }}>昵称加载中...</Text>
        <TouchableOpacity
          style={{
            opacity: 0.5,
            backgroundColor: "#000000",
            height: 30,
            width: 30,
            borderRadius: 15,
            marginRight: 15,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 0,
          }}
        >
          <Text style={{ color: "#ffffff" }}>Go</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.containerHeader()}
        <ScrollableTabView
          ref={(it) => (this.scrollableTabView = it)}
          onTabviewChanged={(index, tabLabel) => {
            console.log(`${index},${tabLabel}`);
            this.refreshCurrentTab();
          }}
          mappingProps={{
            rootTime: this.state.rootTime,
          }}
          stacks={this.state.stacks}
          tabWrapStyle={{ flex: 1 }}
          tabInnerStyle={{ width: "100%" }}
          tabActiveOpacity={1}
          tabsStyle={{
            height: 40,
          }}
          tabStyle={{
            backgroundColor: "#151723",
            borderBottomColor: "#22242f",
            borderBottomWidth: 0.5,
          }}
          tabUnderlineStyle={{
            backgroundColor: "#fbd45d",
            top: 8,
            height: 3,
          }}
          textStyle={{
            color: "#787a84",
            fontSize: 14,
          }}
          textActiveStyle={{
            color: "#ffffff",
          }}
          header={<Header />}
          firstIndex={this.state.firstIndex}
          //   onBeforeRefresh={async (next, toggled) => {
          //     toggled();
          //     setTimeout(() => {
          //       // to do
          //       toggled();
          //       next();
          //     }, 3000);
          //   }}
          toTabsOnTab={true}
          oneTabHidden={true}
          enableCachePage={true}
          sectionListProps={{
            onScroll: Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } },
                },
              ],
              {
                // useNativeDriver: true,
              }
            ),
          }}
        ></ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151723",
    alignItems: "center",
    justifyContent: "center",
  },
});

console.disableYellowBox = true;
