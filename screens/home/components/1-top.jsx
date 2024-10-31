import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function TopBox() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    const hours = currentTime.getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <View style={styles.topper}>
      <Text>{greeting} Marsh!</Text>
      <Text>
        {currentTime.toLocaleTimeString()} {currentTime.toLocaleDateString()}
      </Text>
      <View style={{ width: "100%", height: 10 }} />
      <Text>Fine weather isn't it, you have a great day</Text>
      <View style={{ width: "100%", height: 10 }} />
      <View style={styles.inviteFriends}>
        <Text>Fun With Friends</Text>
        <View style={{ width: "100%", height: 5 }} />
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={{ color: "#fff" }}>
            Invite a friend to win free ride !!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inviteFriends: {
    width: "90%",
    height: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  inviteButton: {
    width: "95%",
    height: "60%",
    backgroundColor: "limegreen",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
