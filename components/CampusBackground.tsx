import { StyleSheet, View } from 'react-native';
import Svg, {
  Defs,
  Path,
  Pattern,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

import { CAMPUS } from '@/constants/colors';

// Faint grid + blue/cyan corner glows. Sits behind a screen's content.
export default function CampusBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width="100%" height="100%">
      <Defs>
        <Pattern
          id="bgGrid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <Path
            d="M32 0H0V32"
            fill="none"
            stroke="rgba(255,255,255,0.045)"
            strokeWidth="1"
          />
        </Pattern>
        <RadialGradient id="bgGlowA" cx="90%" cy="0%" r="55%">
          <Stop offset="0" stopColor={CAMPUS.primary} stopOpacity="0.4" />
          <Stop offset="1" stopColor={CAMPUS.primary} stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="bgGlowB" cx="0%" cy="100%" r="60%">
          <Stop offset="0" stopColor={CAMPUS.accent} stopOpacity="0.22" />
          <Stop offset="1" stopColor={CAMPUS.accent} stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#bgGlowA)" />
      <Rect width="100%" height="100%" fill="url(#bgGlowB)" />
      <Rect width="100%" height="100%" fill="url(#bgGrid)" />
      </Svg>
    </View>
  );
}