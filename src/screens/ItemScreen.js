import { NativeWindStyleSheet } from "nativewind";
 
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  img,
} from "react-native";
 
NativeWindStyleSheet.setOutput({
  default: "native",
});
const NewsScreen = () => {
  return (
    <ScrollView>
      <View className=" bg-cafeleite">
      <View className="">
        <View className="  flex  justify-center ml-32 ">
          <Text className="   text-3xl font-semibold"> Macchiato</Text>
          <View className=" ml-3 py-5">
            <img
              width={120}
              height={200}
              src="https://s3-alpha-sig.figma.com/img/ee90/2815/78acbfa051997d2a3c16b2b15fe7032e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qw9N4DrgRpZYTsO9YnwdwbaSRD7VBrAQi-BLTKTEBMxUDABAaDTqo-w0zAMPvx8ua7l7H6n-zFw5wqYjeEvR7xluuuXe9SDlY439TbvQZBGcWghvxDQqn9U02Tw0NnvgxkN7Kdq4GJPdCz9C9kqDAxyLHTpKUJ6WVkrX~cdHwtYFn7kaYLFuSWiL4krF69dK2fJ89NKs5VCjKPza6nlSzPCU2uMk4MXCavvk8ZUbd7wVWS~ezeI0ANVTPCWcqzVWYQaMNW5DurMfd84k6ZN4p9KXZnTNBpXM60mS3PiFoIK7GcVNUD1Yi6EI-y35WUwLe1sVzKgQQGRYthrggQzIHw__"
            ></img>
          </View>
        </View>
        </View>
 
        <View className="mt-10  ml-56">
          <Text className=" text-2xl font-semibold">
            {" "}
            Macchiato {"\n"} <Text className="text-amarelo">R$15,59</Text>
          </Text>
        </View>
        </View>
 
        <View className="ml-5 mt-10 ">
          <Text className="text-2xl"> Tamanhos</Text>
        </View>
 
        <View className="flex-row justify-around  mt-5 ">
          <img
            width={50}
            src="https://s3-alpha-sig.figma.com/img/1b10/9ed8/9f9d825bde402c73e7423fe3f89cf4ff?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNRqtwgw-WI4Dn~FnUWDjNY2k9mP-rjkoW0RBypNH2eR0naawV5IB2A9Pam9BN6MG~yU3~zLGD2FlytPvHGeAbfT5rE~cMg3~G5hUD4qNBGVU2hZVeBuNBHgYO6Z2-c2N371YQhHmh~IplzRQLzyBix91vUXdQcY6YTLB6PlM-rxafK9It4n-EQFXnM4Dn92Cmy7eTMKDbD8f5Iwi8F63hILdXl43UI08xoGMM8d-b1aFbhEv6UwacwuhQYBCHgHGU9u1Wie4Nn3DqNg2ZRSHl0PVIh~I17q~4Kn4GqdrU~Ek8dWh8mVcPRBaEomTifdqg8nWVEJA2raqiBGIfCIuA__"
          ></img>
          <img
            width={50}
            src="https://s3-alpha-sig.figma.com/img/f7fb/9d96/d92035fe233d47e7bf845358c7259ccf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TagyuPws3zssIe9nVPGN7q7lLUGd~9~0~gnMdnMoP4clH1kOVnRRFEk1bPKYf6ABuzxGxGdAUOFCzOkdg-GmhriSjUjAMSkBot1CZ8cF0cQpogUjeZ-CCuZqRvBtUN7MlBT6SEmGYYuWNWBTEB23sgjTPD0CpAGipLtP-HjETg4DfYH~GL42SMPTJJlwe886LIi9AO2ajv86YIfeBMiw4YP~juHHPZ7fc4vDl6Xua~rlqI4EjcJXvNFl3fgiwQml1VXMO6G9ksn6GGCxGNQC9kFJcZcgqp~CtId46olWz8TyS6A3gLQa18j41hqWIxmi7ojXzMk7W0R2WOYg4iwVwg__"
          ></img>
          <img
            width={50}
            src="https://s3-alpha-sig.figma.com/img/8d20/615e/26af501d0bd3c8d69292fa9d5b465267?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SHb0LeJpqNKGczO7X9eROoSvusRpG4vy0eD0BXXpzDPbTIPw7fMTAAd0OQDenSRW5NwQ~AEHs48ty~sgxeYvCBtEg5EvdfxKdCRSDrXxo~GeMeIAc16IA~5V4mp4sRND0v2pyeJIkKn0RYren8ylZwxS9GogwwcdAd8ajotwk9C3dFp9pnWMZqOr-qv8V5rMfQ0xunp-kXgE7fSJTGsbTZ8urr6J7e9TsUa6R1EoOP4406hhTVpa1q5DV8ceI7wjlHSg~p02xddCOf8h2d8TsB2tw2TRl8NqNaTIHWYJV2cJc8xcjP25sE5T6cjaacul9YgcqE0-A-myMLRDgtGu1g__"
          ></img>
        </View>
 
        <View className=" justify-center space-x-4 mb-2 mt-3  ml-1 ">
          <TouchableOpacity className=" mb-2 bg-amarelo rounded-full  border-2 border-amarelo w-70 h-10 m-10">
            <Text className=" text-white text-lg justify-center items-center flex ">
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      
    </ScrollView>
  );
}
export default NewsScreen;