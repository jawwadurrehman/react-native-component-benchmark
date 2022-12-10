import * as React from "react";
import { Button, View } from "react-native";
import { Benchmark, BenchmarkType } from "react-component-benchmark";

import Animated from "react-native-reanimated";
// import { Animated } from "react-native";


const BenchmarkComponent = () => {
  return <Animated.View />;
};

export default function App() {
  return <BenchmarkCheck component={BenchmarkComponent} />;
}

const BenchmarkCheck = ({ component }) => {
  const ref = React.useRef();

  const handleComplete = React.useCallback((results) => {
    let a = results;
    delete a.samples;
    console.log(JSON.stringify(a));
  }, []);

  const handleStart = () => {
    ref.current.start();
  };

  return (
    <View style={{ maxWidth: 400, alignSelf: "center" }}>
      <Button title="Run" onPress={handleStart} />
      <Benchmark
        component={component}
        //	componentProps={}
        onComplete={handleComplete}
        ref={ref}
        samples={100}
        timeout={10000}
        type={"mount"}
      
      />
    </View>
  );
};
