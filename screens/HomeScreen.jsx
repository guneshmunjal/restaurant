import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon as AdjustmentsIcon,
} from "react-native-heroicons/outline";
import { SearchIcon } from "@heroicons/react/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import sanityClient from ".../sanity";
const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);
  console.log("hey ", featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-1">
      <Text className="text-red-500"> </Text>

      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 px-2  bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
          <Text className="font-bold text-xl">
            current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* search */}
      <View className=" flex-row pb-2 mx-4 space-x-2 ">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
          {/* <SearchIcon /> */}
          <TextInput
            className="rounded-3xl"
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color={"#00CCBB"} />
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories */}

        <Categories />

        {/* Featured Rows */}

        <FeaturedRow
          id="124"
          title="Featured"
          description="paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="125"
          title="Tasty Discounts"
          description="everyone is enjoying discounts"
        />

        {/* Offers near you */}

        <FeaturedRow
          id="126"
          title="Offers Near you"
          description="support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
