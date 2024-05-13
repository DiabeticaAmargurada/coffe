
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
 
const HomeScreen = () => {
  return (
    <ScrollView>
      <View className="bg-cafeleite">
        <View className="  flex justify-between items-center  ">
          <Text className=" mr-8  text-3xl text-amarelo">
            {" "}
            Escolha o seu Café
          </Text>
        </View>
 
        <View className=" mt-10 ml-4 w-40 flex justify-start flex-row">
          <img
            width={50}
            src="https://s3-alpha-sig.figma.com/img/f026/2b51/6f19438d33fbbab38825dc0e816e5b30?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVS-SW6~nDalLw9qIcgO8aJ6jl9ROp99kwVhMmBKk2qc8YcjU1mOUK7fWT2ypQIciyFABZm7XqfHn3XvGajmZE8SkgyQF6Z0t-IL0~V~bdWnl4bj6zjb5ZuX5BdToY6QddwTOqQnehIfHhxBZgzmTeuF3-W4jsZzScHZqhs2Ph99SmymUG2~DvUArJpsCilTS~UxAXW7ttvu9CrKSPFXExjiCx5z2j3j0UxvEKnd2yyt2~fXnJXGayKwq1j1AgPO-JkMXPUKGcgzzlSVWadJIWuVrW8NdGqcoTSOukhMxL1qI9e3Lhpz-F1iotpbBNqbVLHRBMPIcaTLcXoSXy2dtw__"
          ></img>
          <Text className=" text-xl  mt-4 "> Espresso</Text>
          <View className=" ml-44">
            <img width={40} height={40} src="./assets\src\imgseta.png"></img>
          </View>
        </View>
 
        <View className=" mt-10 ml-4 w-40 flex justify-start flex-row">
          <img
            width={40}
            src="https://s3-alpha-sig.figma.com/img/7322/9ba8/abb2188246833121fe337ef5a1ad3ceb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdhUVc9vtR4rFDecCZKInZQvSFd4h9uqEAUhVs3Lz8wV3vOay0LOOB6lzLyxyvc0wZhyMPsZF561~o9fbVIqB~WGNkTd8~p1VR4vPIrM-K6TSDS6eVwuOhDu6WHn-8fU~aUyJxny62rOM6aF0US1FWZCVTAcpI5Sp~trot9Dv4elnhav-P4Mm9kZJc-0ui6m4vug-cRk5bZ-m4svDRPZDC9etgVzes0C5peWzSgATVvCQnj39FjDbhVF5SeNVXgNzsTpl8XHm2qDTYFg4js5-nyOCQjk4FKO4UqRnYGtrB6jTPPiHHBUvMKOrM628pu2USEDku-F95O1piX9GfrtnQ__"
          ></img>
          <Text className=" text-xl  mt-4 "> Cappuccino</Text>
          <View className="  ml-40">
            <img width={40} height={40} src="./assets\src\imgseta.png"></img>
          </View>
        </View>
 
        <View className=" mt-10 ml-4 w-40 flex justify-start flex-row">
          <img
            width={38}
            src="https://s3-alpha-sig.figma.com/img/ee90/2815/78acbfa051997d2a3c16b2b15fe7032e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qw9N4DrgRpZYTsO9YnwdwbaSRD7VBrAQi-BLTKTEBMxUDABAaDTqo-w0zAMPvx8ua7l7H6n-zFw5wqYjeEvR7xluuuXe9SDlY439TbvQZBGcWghvxDQqn9U02Tw0NnvgxkN7Kdq4GJPdCz9C9kqDAxyLHTpKUJ6WVkrX~cdHwtYFn7kaYLFuSWiL4krF69dK2fJ89NKs5VCjKPza6nlSzPCU2uMk4MXCavvk8ZUbd7wVWS~ezeI0ANVTPCWcqzVWYQaMNW5DurMfd84k6ZN4p9KXZnTNBpXM60mS3PiFoIK7GcVNUD1Yi6EI-y35WUwLe1sVzKgQQGRYthrggQzIHw__"
          ></img>
          <Text className=" text-xl  mt-4 "> Macchiato</Text>
          <View className=" flex-row ml-44">
            <img width={40} height={40} src="./assets\src\imgseta.png"></img>
          </View>
        </View>
 
        <View className=" mt-10 ml-4  w-40  flex justify-start flex-row">
          <img
            width={40}
            src="https://s3-alpha-sig.figma.com/img/5b2c/9fd0/e5bb93b8bb110272d43f04dae6b811f0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqsRFBeRgY3sL2ENuq73DXhHSK0blvnifV4yASxIORsllrtfXLhR71dVLG4wUHyKC8JJCnIXc2Xd~N7JhveZcK7PtkMlcHPOd~-Wx32WVgA8jf98X2MlCHn-Leb3ZPimxoEbvpWHXWwLzvz6KCOIfNcMzlUKUPlo3aON0K5WQkvk15BGaB2gkUNT36iwWTvFJpnT1OO~ilYxK0wJUKiXe8Lt1xnIw7qZQm0sQCX-Y4-elQlvb8q-sWLdKmZNZCbhuTT3ht0Jth8j5Js6FfYxB9MzJh29Z~m8WdrUJ2dWd7lRtbS61AzmvUHKwLok9G4a~FYVoZqttQdN1-CRPADZhA__"
          ></img>
          <Text className=" text-xl mt-4 "> Mocha</Text>
          <View className="  ml-52">
            <img width={40} height={40} src="./assets\src\imgseta.png"></img>
          </View>
        </View>
 
        <View className=" mt-10 ml-4  w-40 flex justify-start flex-row">
          <img
            width={50}
            src="https://s3-alpha-sig.figma.com/img/6984/a298/9f8d7764bf750b8757169458bcd55f20?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pejq7rsCh4eYap~t0A2eeHua4dted-9ctWyrUcZx39o6~IS8Sd1SBh8ndup56xmDxyU0wYBwQEwgmBMnUa53KW1r2pz7JV2hx9DhiRM4QGA1QnEDXrhYydwZfngzvIxZWZySbAC~Nwyp1awsQpKGexW6-Xws0ZqIyKXnBz7ZQvL4Z4YkOHiONdzd3ayb-qfWKCPlpH9MGDtCmtWdPaJ1aKPmdAQlrGD4egYPzHSF3HpI~3PbA~oinjYCbOzDLdWpVL4L~wFGk7mM9XuE0T6pur-yomv~SbpLUrnq0KkzmnSkCfUJjKQ61QuhEz1h31qX-6m5o8-~sktai7n0kzzEfQ__"
          ></img>
          <Text className=" text-xl  mt-4 "> Latte</Text>
          <View className="  ml-52">
            <img width={40} height={40} src="./assets\src\imgseta.png"></img>
          </View>
        </View>
 
        <View className=" flex-row justify-evenly mt-10">
          <View>
            <img
              width={30}
              src="https://s3-alpha-sig.figma.com/img/8e05/8422/b09ad125205eeb4d07073e7b1dba095f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YszHeYxg6ErLB3dw2~TOnmot2wv64SS40ArySlinrMQhrT~1mrRaE~WsTaVn9lgLhF-B0h-VAhbWGGns2evml-fy8~r6C6J8Nfo~tJ2C2xq2eGAvWIJh1pTEOR5W0632KIi5rf7NNsL9yXbzAVEZYlPNOMoNpZAsFDaaTQEHweJ9RDxK5WdPiJtEWUQTU4JaMzFA3B0sXlhbuPI0m6iw7Jm0vFLYl8xoCSj31hEjYzPjarqnQPHW-hMiziJ9ek8I8hmIPLL2CqtdHUZR8nXO5rC7LonHfPTkpcVZ-NNs~YYYKisfScsKC5G6Gp5bMOe7z4l2R0yLJ9OFYwd6iI8IJg__"
            ></img>
          </View>
 
          <View>
            <img
              width={30}
              src="https://s3-alpha-sig.figma.com/img/322e/8c40/88a74fe354a90ef36c5d8a092ec427bf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7YUsrvMzccEE0Z2NmVht4V8AB8LB8pMr5WCMy-npW5yfNe1nv5yaPNIClWxbEyOt20SxS2rd2Z-tSrrSCAu853R8dxGKkDX4kzUYZilORFGHPxxK4vx2XIjEH7pruOpIF5kVlIhtdCx~G0ZXitWVkBI8TiOie7Wa7EfdWW69uq62r82NbPdzt~norThRZbGMBg9VPik1xjGlhMhX7i-2VvIVsNokK5ECfPr83VAgj09xWzOhDCaIQpzv0v~~HoD-n6fu~ol9Wps4-93kXCJ2NNq84Sd45qxpMOhMP~rYrX119UcyDmuONxdi5zRrrwS2MAye9W04PqHwIMvD8fU2Q__"
            ></img>
          </View>
          <View>
            <img
              width={30}
              src="https://s3-alpha-sig.figma.com/img/1935/e350/deda690a646b43d72d9d8cb596563150?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEIzsTb-OCzCUjQttRwEQeENO-XYmo2dowxljzmCYk4ZI7qET0lnwh12PTmO0qbETrw1BcNQPjhQGpgZ2YB~jEvwRiZvupxy0R~QlhoEzm1Uv79jFDoUjI-FLGoPZoP4R0BzCdsEwyXwPyPhhncTuRmUB0ExhgrGDAoWCZhOWcCbAIb99IQq-~Dqt8ZeHNAc864VBdKs2FBoV2TlV5eTpkwWugPfe9Sm91pDupimBfZ5F~oHEqEanMfrboPTxGVNivozEdsVqMKxZUqzS~DqNunuMFFDlCEDJmu2oA9FpTUNbZrFbSgEmejZgPAc38QVLb36D3Y6uqwEtFDrUtDHng__"
            ></img>
          </View>
          <View>
            <img
              width={30}
              src="https://s3-alpha-sig.figma.com/img/ed9f/a271/77286691fe2e0924062e383d158e2554?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HcEfCWcqFp1Gg1nD8cQOPOcYFdOFXl1UMu-DMq0ycDgdB6ryDCXD8EqNb0Xjax7mbjpGWUxMKRRQIsRuR3bF~V3ZzBj1s6tARy9bqaaI71ADtK9HWKSGeEs26Iui6RWmYg9WDeZ0Vb~06BOjJuBvMhh1k2mNq4jyDWpaF0HvmLAHZS0Nk6vIDWT9yYX2712VmgubkcJg5W7LFy~fF1whp9BvMVBaNwtuSfJxDS1uMtw9UhevPj4ZbYd1tITxNvHJwA-q7mk4DUyPb9GLZrKPkJfXWuu88eMvogx3HA73hU5AiuVEJfvnKT7vZaS1GBWLpckxKZovAunWcrl~7x5Sag__"
            ></img>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;