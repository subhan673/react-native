import { Image, View, Text, SafeAreaView ,ScrollView, Button ,TouchableOpacity,Modal,TextInput  } from 'react-native';
import React, { useState } from 'react';

export default function TabTwoScreen() {
  const NameDialog = ({ visible, onClose, onSubmit }: { visible: boolean, onClose: () => void, onSubmit: (name: string) => void }) => {
    const [name, setName] = useState("");
  
    return (
      <Modal visible={visible} transparent animationType="fade">
        <View className="flex-1 w-full justify-center items-center bg-[rgba(0,0,0,0.5)]">
          <View className="w-80 h-30 bg-white p-5 rounded-lg shadow-lg">
            <Text className="text-xl font-bold mb-3">Enter Your Name</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Type your name"
              value={name}
              onChangeText={setName}
            />
            <View className="flex flex-row justify-end mt-4">
              <TouchableOpacity onPress={onClose} className="mr-3">
                <Text className="text-red-500 mt-2 font-bold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onSubmit(name);
                  onClose();
                }}
                className="bg-blue-500 px-4 py-2 rounded-md"
              >
                <Text className="text-white">Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  




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
  const [opne, setopne] = useState(false);
  console.log(opne);
  const  handleSubmit = (name: string) => {
    console.log(name);
  }
  return (
    <SafeAreaView className="flex-1 mt-8 px-2 bg-white">
       <NameDialog
        visible={opne}
        onClose={() => setopne(false)}
        onSubmit={handleSubmit}
      />
       <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Title */}
      <View className="w-full py-5 px-4 flex flex-row justify-between items-center">  
  <Text className="text-3xl font-bold text-black">Perplexity</Text>
  <TouchableOpacity onPress={() => setopne(!opne)} className="w-12 h-10 flex  bg-wheate rounded-xl bg-[#6e5e5e] justify-center items-center">
    <View className="w-full h-1 bg-gray-400"></View>
    <View className="w-full h-1 bg-gray-400 my-2"></View>
    <View className="w-full h-1 bg-gray-400"></View>
  </TouchableOpacity>
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
