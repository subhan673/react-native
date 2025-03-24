import { Image, View, Text, SafeAreaView ,ScrollView, Button ,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
export default function TabTwoScreen() {
  const data = [
    {url:"https://framerusercontent.com/images/xwt00t2Je5cSSuUF8XsWGqS1Dv4.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"},
    {url:"https://framerusercontent.com/images/yIYS6UJJ1tCVunyaMSasf0ore0s.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"},
    {url:"https://framerusercontent.com/images/WvKAdupeiMT6dfuzud0D6d2kJs.jpeg?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"},
    {url:"https://framerusercontent.com/images/vfN3ZdhXEA1whaq9XcHA7DMuw.jpeg?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/u8Hbolu5TPvA09U8r2QBlIDFuA.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/qiJlDgTsQNIdGpL9CtDZjDoWZSA.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/qDnBJmKT23nXOg5jq2a2kpi7mo4.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/Pc7cuiY2Qn3yxMcfMJO1UJ3Gz70.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/Oootekc4aFbZeeDDrsOzpIZ0hw.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
    {url:"https://framerusercontent.com/images/7kssT89iBCO3qdpVSdHuaDlcFJQ.png?scale-down-to=1024" ,text:"Improved Sonar Models: Industry Leading Performance at Lower Costs", date:"2021-09-01"}, 
  ]
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  return (
    <SafeAreaView className="flex-1 mt-8 px-2 bg-white">
       <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Title */}
      <View className="w-full py-3">
        <Text className="text-3xl font-bold">Perplexity</Text>
      </View>

      {/* Image Section */}
      <View className="w-full py-3">
        <Image
          className="w-full h-80"
          source={{ uri: 'https://framerusercontent.com/images/ZREx5DCRX2R5bVduQbT5cwGds.png' }}
          resizeMode="contain"
        />
      </View>

      {/* Description Section */}
      <View className="w-full py-3">
        <Text className="text-xl font-light text-gray-900 italic">
          Improved Sonar Models: Industry Leading Performance at Lower Costs
        </Text>
        <Text className="text-lg font-light text-gray-600">
        New tiered search modes balance cost and performance, delivering superior results at the best price
        </Text>
        <TouchableOpacity 
          className="bg-black py-4 w-40 border-2 border-white rounded-full mt-4 items-center "
          onPress={() => console.log("See More button pressed")}
        >
          <Text className="text-white text-lg font-bold">See More</Text>
        </TouchableOpacity>
      </View>
      {data.map((item, index) => {
          const isSelected = selectedImage === index; // Check if this image is selected

          return (
            <View className="relative w-full py-3" key={index}>
            <TouchableOpacity onPress={() => setSelectedImage(index)}>
              {/* Image */}
              <Image
                className="w-full h-80 rounded-lg"
                source={{ uri: item.url }}
                resizeMode="contain"
                style={isSelected ? { opacity: 0.2 } : { opacity: 1 }}
              />
              {/* Overlay "See More" text */}
              {isSelected && (
                <View className="absolute inset-0 flex items-center justify-center">
                  <Text className="text-white/60 text-xl font-bold bg-black/70 px-4 py-2 rounded-lg">
                    See More
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            {/* Image details */}
            <Text className="text-lg font-light text-gray-800">{item.text}</Text>
            <Text className="text-lg font-light text-gray-600">{item.date}</Text>
          </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
