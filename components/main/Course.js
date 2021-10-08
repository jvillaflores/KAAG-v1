import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import Svg, {Path, G,} from 'react-native-svg';


export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHead}>Hello, Kent! </Text>
            <Text style={styles.textSubHead}>New user </Text>
        </View>

        <View style={styles.headline_box}>
            <Text 
                style={styles.textHeadline}>What do you want to learn today?</Text>
                <View style = {styles.containerbox}>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate("Vocabulary")}
                        >
                        <Text style={styles.text}>Get Started</Text>
                    </Pressable>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 116.028 115.624">
                        <G id="Learning-pana" transform="translate(-122.51 -147.531)">
                          <G id="freepik--Character--inject-34" transform="translate(122.51 147.531)">
                            <Path id="Path_496" data-name="Path 496" d="M218.668,274.948l-7.974-1.538-15.3,3.51-7.754,1.617-.112,10.594,17.3,3.185,11.672-3.458,4.412-6.493Z" transform="translate(-129.109 -226.305)" fill="#ffbe9d"/>
                            <Path id="Path_497" data-name="Path 497" d="M188.376,277.374l-7.525-1.774s-5.321,16.465-18.452,15.743c-10.7-.58-10.714-11.436-10.714-11.436l-7.825,1.381s-3.282,19.867.314,33.8c2.994,11.6,5.651,27.5,5.651,27.5h51.982Z" transform="translate(-93.255 -227.675)" fill="#8e2835"/>
                            <Path id="Path_498" data-name="Path 498" d="M288.19,337.66s21.439-37.56,25.3-42.379c4.225-5.276,7.6-4.666,7.6-4.666l2.268,25.3-18.228,25.862-4.345,1.568Z" transform="translate(-269.051 -237.057)" fill="#8e2835"/>
                            <Path id="Path_499" data-name="Path 499" d="M125.036,279.78s12.184.973,16.555,20.956c1.976,9.03,4.491,19.612,5.194,26.722.524,5.16-2.661,10.527-7.806,11.185l-6.459,1.2a6.781,6.781,0,0,1-7.829-5.074l-2.182-9.033,5.811-1.953-1.343-26.91Z" transform="translate(-30.813 -230.291)" fill="#8e2835"/>
                            <Path id="Path_500" data-name="Path 500" d="M292.288,328.12a1.324,1.324,0,0,0-.056.277c-.034.2-.071.471-.123.8-.026.176-.052.374-.086.584s-.045.445-.067.7c-.052.5-.112,1.066-.138,1.7a40.94,40.94,0,0,0-.03,4.442,53.3,53.3,0,0,0,.539,5.411c.281,1.909.632,3.712.988,5.344s.711,3.095,1.014,4.322.569,2.212.748,2.893c.09.326.161.587.217.782a2.115,2.115,0,0,0,.086.269,1.521,1.521,0,0,0-.049-.277c-.045-.2-.109-.464-.183-.793l-.689-2.923c-.288-1.231-.632-2.694-.973-4.326s-.692-3.431-.973-5.336-.471-3.742-.55-5.392a39.444,39.444,0,0,1,0-4.423c0-.629.067-1.2.108-1.7.019-.247.037-.479.052-.7s.049-.4.067-.584c.037-.333.064-.6.086-.8a2.022,2.022,0,0,0,.011-.269Z" transform="translate(-242.479 -260.541)" fill="#263238"/>
                            <Path id="Path_501" data-name="Path 501" d="M169.34,359.1a1.039,1.039,0,0,0,.064-.165c.037-.123.09-.281.153-.483l.239-.775a2.309,2.309,0,0,1,.434-.969,3.1,3.1,0,0,1,1.123-.689,9.011,9.011,0,0,1,1.519-.427,22.516,22.516,0,0,1,3.742-.374h.1v-.1l-1.1-7.174c-.707-4.517-1.351-8.607-1.819-11.6-.243-1.467-.438-2.661-.576-3.506-.067-.4-.123-.719-.165-.954a1.029,1.029,0,0,0-.049-.247.247.247,0,0,0-.022-.082.217.217,0,0,0,0,.086.821.821,0,0,0,.03.251c.03.236.075.554.127.958.123.849.3,2.047.513,3.518.457,2.994,1.078,7.076,1.766,11.6.4,2.582.782,5.026,1.123,7.17l.086-.1a22.279,22.279,0,0,0-3.783.423,8.978,8.978,0,0,0-1.538.453,3.113,3.113,0,0,0-1.156.748,1.391,1.391,0,0,0-.292.52l-.138.5c-.086.3-.157.565-.217.782s-.1.374-.127.49A.809.809,0,0,0,169.34,359.1Z" transform="translate(-78.155 -262.694)" fill="#263238"/>
                            <Path id="Path_502" data-name="Path 502" d="M153.821,401.484a2.107,2.107,0,0,0-.1-.5,7.817,7.817,0,0,0-.472-1.313,8.94,8.94,0,0,0-7.151-5.205,7.8,7.8,0,0,0-1.392-.045,2.283,2.283,0,0,0-.509.064,16.678,16.678,0,0,1,1.871.116,9.224,9.224,0,0,1,7.046,5.127,17.7,17.7,0,0,1,.7,1.759Z" transform="translate(-45.91 -302.022)" fill="#263238"/>
                            <Path id="Path_503" data-name="Path 503" d="M158.467,386.692a.925.925,0,0,0-.292-.026,6.183,6.183,0,0,0-.8.037,9.172,9.172,0,0,0-2.571.644,9.377,9.377,0,0,0-2.283,1.351,6.027,6.027,0,0,0-.6.539c-.131.138-.2.217-.191.228s.329-.262.868-.659a10.785,10.785,0,0,1,4.79-1.968C158.052,386.741,158.467,386.726,158.467,386.692Z" transform="translate(-53.374 -297.178)" fill="#263238"/>
                            <Path id="Path_504" data-name="Path 504" d="M175.808,296.155a3.037,3.037,0,0,0,.026-.535c0-.344.022-.838.067-1.448a23.611,23.611,0,0,1,.816-4.7,24.017,24.017,0,0,1,1.755-4.438c.284-.543.524-.977.7-1.269a3.021,3.021,0,0,0,.254-.471,2.822,2.822,0,0,0-.318.43,13.609,13.609,0,0,0-.748,1.246,20.956,20.956,0,0,0-2.582,9.2,14.23,14.23,0,0,0,0,1.456A2.71,2.71,0,0,0,175.808,296.155Z" transform="translate(-83.263 -232.487)" fill="#263238"/>
                            <G id="Group_46" data-name="Group 46" transform="translate(47.952 66.752)" opacity="0.3">
                              <Path id="Path_505" data-name="Path 505" d="M300.687,343.5a18.813,18.813,0,0,1-.46-17.588,49.134,49.134,0,0,0,.554,17.565" transform="translate(-298.27 -325.91)"/>
                            </G>
                            <G id="Group_47" data-name="Group 47" transform="translate(71.55 85.982)" opacity="0.3">
                              <Path id="Path_506" data-name="Path 506" d="M209.823,381.611a13.762,13.762,0,0,0,7.922,0,7.679,7.679,0,0,1-8.278,2.649,8.521,8.521,0,0,1-6.017-6.96A12.834,12.834,0,0,0,209.823,381.611Z" transform="translate(-203.45 -377.3)"/>
                            </G>
                            <Path id="Path_507" data-name="Path 507" d="M201.74,366.1a.979.979,0,0,0,.056.21c.045.135.1.341.2.588a12.194,12.194,0,0,0,1.014,2.054,13.177,13.177,0,0,0,2.129,2.649,12.888,12.888,0,0,0,7.406,3.555,13.207,13.207,0,0,0,3.4,0,12.606,12.606,0,0,0,2.245-.49c.262-.079.453-.165.588-.213a1.307,1.307,0,0,0,.2-.086,8.235,8.235,0,0,0-.8.225,13.384,13.384,0,0,1-16.095-7.727C201.86,366.377,201.759,366.092,201.74,366.1Z" transform="translate(-132.491 -284.309)" fill="#263238"/>
                            <Path id="Path_508" data-name="Path 508" d="M142.54,436.11a.553.553,0,0,0,.094.1,2.577,2.577,0,0,0,.3.258,4.74,4.74,0,0,0,1.287.681,7.385,7.385,0,0,0,2.126.374,19.456,19.456,0,0,0,2.619-.094c1.871-.161,3.533-.434,4.734-.647.6-.109,1.089-.2,1.422-.273a2.547,2.547,0,0,0,.52-.127,3.22,3.22,0,0,0-.531.052l-1.433.21c-1.2.183-2.874.43-4.73.591a21.306,21.306,0,0,1-2.619.109,7.636,7.636,0,0,1-2.088-.337A6.436,6.436,0,0,1,142.54,436.11Z" transform="translate(-47.113 -328.12)" fill="#263238"/>
                            <Path id="Path_509" data-name="Path 509" d="M259.608,170.5,258.07,169c-2.047.891-2.994,3.267-3.342,5.475s-.3,4.528-1.235,6.556c-.718,1.56-2.025,2.994-1.871,4.719.146,1.628,1.62,2.945,1.628,4.58,0,1.575-1.31,2.784-2.073,4.161-1.546,2.788-2.548,14.194-1.74,17.281,6.8-.588,18.842-1.313,25.645-2.878C273.289,197.174,265.741,180.634,259.608,170.5Z" transform="translate(-206.257 -160.966)" fill="#263238"/>
                            <Path id="Path_510" data-name="Path 510" d="M264.81,295.87Z" transform="translate(-201.87 -240.36)" fill="#ffbe9d"/>
                            <Path id="Path_511" data-name="Path 511" d="M212.534,173.613A15.413,15.413,0,0,1,225.913,157.4a14.97,14.97,0,0,1,16.84,13.449l2.006,33.657a2.923,2.923,0,0,1-.516,1.83,13.739,13.739,0,0,1-8.753,5.594,14.382,14.382,0,0,1-8.869-1.841,2.867,2.867,0,0,1-1.456-2.462l-.138-7.533a.045.045,0,0,0-.049-.049,10.227,10.227,0,0,1-2.114-.06c-1.991-.486-7.069-2.44-8.775-9.894C213.519,187.616,212.95,180.6,212.534,173.613Z" transform="translate(-162.27 -153.635)" fill="#ffbe9d"/>
                            <Path id="Path_512" data-name="Path 512" d="M272.509,212.05a8.958,8.958,0,0,0-2.185-.232c-.341,0-.666-.056-.748-.281a1.677,1.677,0,0,1,.165-1l.838-2.619a43.883,43.883,0,0,0,1.826-6.8,43.95,43.95,0,0,0-2.376,6.639q-.415,1.375-.8,2.619a1.894,1.894,0,0,0-.09,1.321.835.835,0,0,0,.588.445,2.32,2.32,0,0,0,.58.041A8.545,8.545,0,0,0,272.509,212.05Z" transform="translate(-211.146 -181.066)" fill="#263238"/>
                            <Path id="Path_513" data-name="Path 513" d="M280.346,206.082c.146.161,1.029-.58,2.294-.617s2.208.625,2.343.453c.067-.079-.086-.374-.5-.681a3.035,3.035,0,0,0-1.871-.569,2.994,2.994,0,0,0-1.822.7C280.4,205.7,280.253,206.011,280.346,206.082Z" transform="translate(-227.836 -183.285)" fill="#263238"/>
                            <Path id="Path_514" data-name="Path 514" d="M244.859,206.586c.172.161,1.093-.674,2.474-.793s2.455.513,2.593.326c.067-.086-.12-.374-.588-.681a3.435,3.435,0,0,0-2.081-.464,3.368,3.368,0,0,0-1.953.849C244.9,206.186,244.777,206.515,244.859,206.586Z" transform="translate(-179.54 -183.468)" fill="#263238"/>
                            <Path id="Path_515" data-name="Path 515" d="M234.99,264.54s5.157.056,11.324-4.18c0,0-1.594,6.8-11.282,6.59Z" transform="translate(-172.235 -218.138)" fill="#eb996e"/>
                            <Path id="Path_516" data-name="Path 516" d="M256.4,236.918a2.429,2.429,0,0,1,2.088-1.022,2.185,2.185,0,0,1,1.56.689,1.343,1.343,0,0,1,.206,1.549,1.631,1.631,0,0,1-1.714.554,5.055,5.055,0,0,1-1.766-.883,1.557,1.557,0,0,1-.4-.374.438.438,0,0,1-.03-.486" transform="translate(-194.283 -202.827)" fill="#eb996e"/>
                            <Path id="Path_517" data-name="Path 517" d="M261.758,232c-.217,0-.131,1.422-1.3,2.515s-2.713,1.04-2.713,1.239c0,.094.374.254,1.01.225a3.66,3.66,0,0,0,2.268-.954,3.076,3.076,0,0,0,1-2.1C262.039,232.329,261.855,232,261.758,232Z" transform="translate(-196.44 -200.391)" fill="#263238"/>
                            <Path id="Path_518" data-name="Path 518" d="M242.707,193.382c.157.344,1.471.079,3.039.142s2.859.374,3.046.056c.079-.161-.161-.475-.7-.782a5.351,5.351,0,0,0-4.633-.15C242.921,192.918,242.655,193.217,242.707,193.382Z" transform="translate(-177.611 -175.48)" fill="#263238"/>
                            <Path id="Path_519" data-name="Path 519" d="M279.429,193.872c.269.3,1.336,0,2.619,0s2.361.213,2.619-.1c.112-.15-.056-.449-.528-.748a4.363,4.363,0,0,0-4.214.09C279.463,193.419,279.31,193.726,279.429,193.872Z" transform="translate(-227.193 -175.689)" fill="#263238"/>
                            <Path id="Path_520" data-name="Path 520" d="M208.438,149.607a4.506,4.506,0,0,1,3.432-1.938c5.9-.894,12.476,2.657,15.78,7.619s3.48,12.368,1.063,17.816l-3.678-2.3c-7.383-3.046-12.6-10.16-17.345-17.509C207.027,152.3,207.82,150.636,208.438,149.607Z" transform="translate(-145.984 -147.531)" fill="#263238"/>
                            <Path id="Path_521" data-name="Path 521" d="M269.852,154.548c2.466-2.807,4.259-5.613,9.378-3.652.748,1.433-.748,3.293-2.036,4.378-1.871,1.594-3.476,2.668-4.7,3.809-2.462,2.3-5.261,10.044-5.5,14.269,0,.266-.468-3.626-.748-3.667-.344-.052-1.733-1.751-1.542-4.071C265.361,157.684,267.385,157.351,269.852,154.548Z" transform="translate(-216.419 -149.227)" fill="#263238"/>
                            <Path id="Path_522" data-name="Path 522" d="M261.414,147.835a2.107,2.107,0,0,0-1.149.1,4.97,4.97,0,0,0-2.328,1.531,4.173,4.173,0,0,0-.464.655,3.344,3.344,0,0,0-.269.707,7.736,7.736,0,0,0-.3,1.212,1.74,1.74,0,0,0,.109,1.149,8.768,8.768,0,0,1,.138-1.1,11.288,11.288,0,0,1,.374-1.156,3.588,3.588,0,0,1,.262-.64,4.224,4.224,0,0,1,.434-.606,5.5,5.5,0,0,1,2.137-1.519C260.991,147.932,261.422,147.895,261.414,147.835Z" transform="translate(-195.505 -147.697)" fill="#455a64"/>
                            <Path id="Path_523" data-name="Path 523" d="M283.669,213.29a1.123,1.123,0,0,0,1.059,1.123,1.074,1.074,0,0,0,1.171-.992,1.123,1.123,0,0,0-1.059-1.149,1.07,1.07,0,0,0-1.171,1.018Z" transform="translate(-229.992 -188.042)" fill="#263238"/>
                            <Path id="Path_524" data-name="Path 524" d="M250.729,213.493a1.123,1.123,0,0,0,1.059,1.149,1.07,1.07,0,0,0,1.171-.988A1.123,1.123,0,0,0,251.9,212.5a1.07,1.07,0,0,0-1.171.992Z" transform="translate(-184.763 -188.186)" fill="#263238"/>
                            <Path id="Path_525" data-name="Path 525" d="M186.342,184.082a5.814,5.814,0,0,0-2.769-2.7c-1.272-.475-2.717-.748-3.716-1.676-1.568-1.441-1.5-3.836-1.355-5.924s.18-4.491-1.422-5.894c-1.34-1.171-3.469-1.276-4.629-2.619a7.334,7.334,0,0,1-1.2-3.271c-.748-3.057-2.421-8.4-11.432-11.47l7.971,30.289a4.076,4.076,0,0,0-2.1,2.44c-.071.857.3,1.725.307,2.586,0,1.052-1.145,1.68-1.871,2.459a4.743,4.743,0,0,0-1.063,3.742,26.278,26.278,0,0,0,1.441,5.28c7.394-.748,18.187-.988,23.822-5.7C189.355,190.769,187.892,186.63,186.342,184.082Z" transform="translate(-86.608 -149.408)" fill="#263238"/>
                            <Path id="Path_526" data-name="Path 526" d="M205.8,208.955c.138-.075,5.583-2.245,5.931,3.5s-5.478,4.891-5.5,4.73S205.8,208.955,205.8,208.955Z" transform="translate(-126.786 -185.679)" fill="#ffbe9d"/>
                            <Path id="Path_527" data-name="Path 527" d="M209.72,217.94c.026-.022.1.064.281.127a1,1,0,0,0,.748-.026,2.486,2.486,0,0,0,1.01-2.286,3.334,3.334,0,0,0-.374-1.411,1.167,1.167,0,0,0-.8-.722.509.509,0,0,0-.573.311c-.067.165-.022.277-.052.288s-.131-.09-.1-.329a.625.625,0,0,1,.2-.374.748.748,0,0,1,.543-.18,1.4,1.4,0,0,1,1.1.823,3.409,3.409,0,0,1,.442,1.579,2.586,2.586,0,0,1-1.306,2.56,1.055,1.055,0,0,1-.921-.1C209.739,218.074,209.7,217.951,209.72,217.94Z" transform="translate(-128.654 -188.71)" fill="#eb996e"/>
                            <Path id="Path_528" data-name="Path 528" d="M286.817,204.654a9.064,9.064,0,0,0-.183-1.284,5.239,5.239,0,0,0-6.8-3.708,4.866,4.866,0,0,0-1.325.689,4.79,4.79,0,0,0-1.123,1.085,5.164,5.164,0,0,0-.1,6.137,4.865,4.865,0,0,0,1.078,1.123,4.783,4.783,0,0,0,1.3.73,5.206,5.206,0,0,0,2.728.277,5.149,5.149,0,0,0,2.212-.932,5.269,5.269,0,0,0,1.972-2.833,9.729,9.729,0,0,0,.225-1.28.778.778,0,0,1,0,.086V205a2.67,2.67,0,0,1-.041.408,3.585,3.585,0,0,1-.1.55,5.324,5.324,0,0,1-7.05,3.637,5.368,5.368,0,0,1-2.372-8.27,5.071,5.071,0,0,1,1.16-1.123,4.977,4.977,0,0,1,1.358-.689,5.321,5.321,0,0,1,6.93,3.866,4.022,4.022,0,0,1,.09.554,2.952,2.952,0,0,1,.026.412c0,.1,0,.183,0,.251Q286.813,204.623,286.817,204.654Z" transform="translate(-228.086 -179.877)" fill="#455a64"/>
                            <Path id="Path_529" data-name="Path 529" d="M248.024,205.242a9.317,9.317,0,0,0-.18-1.284,5.273,5.273,0,0,0-1.871-2.9,5.175,5.175,0,0,0-2.182-1,5.239,5.239,0,0,0-2.736.191,4.974,4.974,0,0,0-1.325.689,4.866,4.866,0,0,0-1.123,1.085,5.168,5.168,0,0,0-.1,6.133,4.9,4.9,0,0,0,1.081,1.123,4.771,4.771,0,0,0,1.3.73,5.205,5.205,0,0,0,2.728.277,5.13,5.13,0,0,0,2.208-.932,5.28,5.28,0,0,0,1.976-2.833,9.357,9.357,0,0,0,.221-1.28.308.308,0,0,1,0,.086v.254a2.215,2.215,0,0,1-.037.408,3.225,3.225,0,0,1-.109.55,5.239,5.239,0,0,1-1.965,2.926,5.318,5.318,0,0,1-2.245.98,5.385,5.385,0,0,1-2.818-.269,5.369,5.369,0,0,1,.161-10.1,5.344,5.344,0,0,1,6.942,3.862,3.126,3.126,0,0,1,.09.554,2.1,2.1,0,0,1,.026.412v.251A.225.225,0,0,1,248.024,205.242Z" transform="translate(-174.882 -180.234)" fill="#455a64"/>
                            <Path id="Path_530" data-name="Path 530" d="M269.358,211.153c-.03.019-.18-.225-.528-.505a2.552,2.552,0,0,0-3.188-.056c-.374.266-.516.505-.543.483a1.34,1.34,0,0,1,.457-.591,2.5,2.5,0,0,1,3.368.064A1.351,1.351,0,0,1,269.358,211.153Z" transform="translate(-206.52 -186.538)" fill="#455a64"/>
                            <Path id="Path_531" data-name="Path 531" d="M225.486,208.75a5.16,5.16,0,0,1-1.059.217c-.662.1-1.579.2-2.59.292l-2.593.232a7.071,7.071,0,0,1-1.074.082,5.208,5.208,0,0,1,1.059-.221c.659-.1,1.575-.2,2.59-.288l2.59-.232a6.559,6.559,0,0,1,1.078-.082Z" transform="translate(-145.138 -185.841)" fill="#455a64"/>
                            <Path id="Path_532" data-name="Path 532" d="M300.022,215.844a6.779,6.779,0,0,1-1.123-1.807,6.877,6.877,0,0,1-.326-2.107,1.5,1.5,0,0,0-.112.636,4.139,4.139,0,0,0,.254,1.538,4.069,4.069,0,0,0,.808,1.332C299.8,215.728,300.007,215.863,300.022,215.844Z" transform="translate(-249.633 -187.831)" fill="#fff"/>
                            <Path id="Path_533" data-name="Path 533" d="M301.32,206.573c-.03-.045-.243.064-.374.318s-.075.486-.022.483.1-.195.2-.4S301.354,206.615,301.32,206.573Z" transform="translate(-251.836 -184.473)" fill="#fff"/>
                            <Path id="Path_534" data-name="Path 534" d="M261.041,210.787c.03,0-.075-.3-.161-.782a5.344,5.344,0,0,1,.685-3.671c.251-.419.453-.651.43-.674a2.033,2.033,0,0,0-.546.6,4.76,4.76,0,0,0-.722,3.772A2.044,2.044,0,0,0,261.041,210.787Z" transform="translate(-197.486 -183.907)" fill="#fff"/>
                            <Path id="Path_535" data-name="Path 535" d="M211.844,230.834a3.7,3.7,0,0,1,.191.318,1.991,1.991,0,0,1,.247.954,1.755,1.755,0,0,1-.531,1.3,1.871,1.871,0,0,1-1.617.52,1.909,1.909,0,0,1-1.34-1.052,1.778,1.778,0,0,1-.041-1.407,2.033,2.033,0,0,1,.561-.808c.18-.153.3-.217.292-.232a.861.861,0,0,0-.337.172,1.92,1.92,0,0,0-.644.816,1.871,1.871,0,0,0,0,1.534,1.976,1.976,0,0,0,3.248.584,1.871,1.871,0,0,0,.543-1.433,1.912,1.912,0,0,0-.318-.988A.8.8,0,0,0,211.844,230.834Z" transform="translate(-128.454 -199.408)" fill="#e0e0e0"/>
                            <Path id="Path_536" data-name="Path 536" d="M297.207,236.065a1.583,1.583,0,0,1-1,.06,1.953,1.953,0,0,1-.917-.565,2.372,2.372,0,0,1-.591-1.175,2.133,2.133,0,0,1,.157-1.3,2.379,2.379,0,0,1,.67-.857,3.9,3.9,0,0,1,.9-.49.643.643,0,0,0-.281.037,2.181,2.181,0,0,0-.7.341,2.45,2.45,0,0,0-.748.894,2.245,2.245,0,0,0-.187,1.411,2.5,2.5,0,0,0,.659,1.269,2.021,2.021,0,0,0,1.014.573,1.4,1.4,0,0,0,.782-.041C297.14,236.148,297.215,236.073,297.207,236.065Z" transform="translate(-245.328 -200.224)" fill="#e0e0e0"/>
                            <Path id="Path_537" data-name="Path 537" d="M187.8,414.761l-5.55,1.643a39.158,39.158,0,0,1-4.55,1.654c-1.849.423-3.11-.15-3.177-1.179s1.37-1.16,1.37-1.16a28.432,28.432,0,0,0,3.555-1.643,6.3,6.3,0,0,0,1.983-2.245l-1.983.273s-4.172,2.994-5.744,3.9-1.916-.685-2.051-1.164,4.648-5.333,4.648-5.333-4.58,2.941-5.4,3.675-2.054.973-2.328.5-1.025-.479,0-2.507,9.232-7.484,9.232-7.484l-2.245-.479-2.462,1.1a6.066,6.066,0,0,1-1.025,2.343c-.887,1.317-2.462,0-2.462,0l.977-5.052,4.865-3.046a53.6,53.6,0,0,1,5.812.958,5.333,5.333,0,0,1,1.575,1.774l1.366.554c2.122.614,2.051,2.735,2.735,2.8s20.645-3.824,20.645-3.824l1.807-.472c2.994,2.271,4.187,6.025,4.715,9.355a3.721,3.721,0,0,1,0,2.53Z" transform="translate(-115.36 -304.616)" fill="#ffbe9d"/>
                            <Path id="Path_538" data-name="Path 538" d="M233.688,421.4a1.021,1.021,0,0,0,.019-.326,1.869,1.869,0,0,0-.034-.374,2.862,2.862,0,0,0-.1-.5,7.073,7.073,0,0,0-1.4-2.571,15.29,15.29,0,0,0-2.066-2.069,6.115,6.115,0,0,0-.969-.722,10.045,10.045,0,0,0,.879.808,19.361,19.361,0,0,1,2.006,2.088,7.709,7.709,0,0,1,1.411,2.489C233.662,420.94,233.647,421.407,233.688,421.4Z" transform="translate(-157.462 -314.81)" fill="#eb996e"/>
                            <Path id="Path_539" data-name="Path 539" d="M238.647,405.85a2.86,2.86,0,0,1,.419.292,4.543,4.543,0,0,1,.909,1.044,4.962,4.962,0,0,1,.457.842,4.546,4.546,0,0,1,.217,1.07,2.7,2.7,0,0,0,.442,1.183,4.8,4.8,0,0,1,.662,1.123,2.994,2.994,0,0,1,0,2.111l-.026.071.064.041a4.161,4.161,0,0,1,1.763,2.421,6.734,6.734,0,0,1,.168,1.2.972.972,0,0,0,.037-.322,3.764,3.764,0,0,0-.1-.9,4.154,4.154,0,0,0-1.774-2.552l.037.112a3.2,3.2,0,0,0,0-2.245,4.633,4.633,0,0,0-.689-1.149,2.53,2.53,0,0,1-.419-1.123,3.521,3.521,0,0,0-.748-1.957,4.083,4.083,0,0,0-.98-1.029,1.5,1.5,0,0,0-.337-.191A.439.439,0,0,0,238.647,405.85Z" transform="translate(-171.053 -309.184)" fill="#eb996e"/>
                            <Path id="Path_540" data-name="Path 540" d="M258.15,410.272a3.072,3.072,0,0,0,2.619-.928c-.037-.045-.539.341-1.261.591S258.15,410.216,258.15,410.272Z" transform="translate(-195.341 -311.368)" fill="#eb996e"/>
                            <Path id="Path_541" data-name="Path 541" d="M257.56,423.621a12.382,12.382,0,0,0,2.1-.8,13.21,13.21,0,0,0,2.021-.98,13.52,13.52,0,0,0-2.1.8A13.213,13.213,0,0,0,257.56,423.621Z" transform="translate(-196.029 -319.19)" fill="#eb996e"/>
                            <Path id="Path_542" data-name="Path 542" d="M250.86,432.436a17.97,17.97,0,0,0,2.126-.876,2.78,2.78,0,0,0-1.123.292A2.679,2.679,0,0,0,250.86,432.436Z" transform="translate(-184.838 -325.273)" fill="#eb996e"/>
                            <Path id="Path_543" data-name="Path 543" d="M263.123,427.532a2.679,2.679,0,0,1,1.321,1.665c.026,0,.049-.131,0-.341a1.748,1.748,0,0,0-1-1.261C263.266,427.517,263.131,427.509,263.123,427.532Z" transform="translate(-200.902 -322.745)" fill="#eb996e"/>
                            <Path id="Path_544" data-name="Path 544" d="M269.527,419.422c-.022.052.344.239.591.659a5.736,5.736,0,0,1,.314.823.992.992,0,0,0-.15-.924C270,419.5,269.534,419.37,269.527,419.422Z" transform="translate(-209.304 -317.67)" fill="#eb996e"/>
                            <Path id="Path_545" data-name="Path 545" d="M270.528,401.721c.019,0,.094-.086.15-.266a1.411,1.411,0,0,0,0-.748,1.392,1.392,0,0,0-.374-.636c-.135-.131-.247-.176-.258-.157a3.745,3.745,0,0,1,.43.842,4.083,4.083,0,0,1,.052.965Z" transform="translate(-209.74 -305.466)" fill="#eb996e"/>
                            <Path id="Path_546" data-name="Path 546" d="M278.967,390.933a6.566,6.566,0,0,1,5.34-5.927c5.089-1.018,14,3.308,14,3.308l24.975,17.4-.748,2.152-25.349-3.533-2.32.891-17.8-11.7-16.8-12.147,1.871-1.463a65.543,65.543,0,0,0,7.821,4.64C273.066,385.956,277.567,388.4,278.967,390.933Z" transform="translate(-258.449 -292.957)" fill="#f5f5f5"/>
                            <Path id="Path_547" data-name="Path 547" d="M324.451,409.326l-21.135-13.131-22.344-3.589a3.088,3.088,0,0,1-3.02,1.227h0L259.578,381.11l-.348.767,35.632,25.035a3.057,3.057,0,0,0,3.1-.606Z" transform="translate(-259.23 -293.702)" fill="#455a64"/>
                            <Path id="Path_548" data-name="Path 548" d="M330.01,411.83a.822.822,0,0,0,.172.142l.516.374c.449.322,1.1.79,1.871,1.381,1.587,1.179,3.742,2.859,6.07,4.764s4.419,3.675,5.916,4.966l1.785,1.534.486.412a.87.87,0,0,0,.176.135,1.537,1.537,0,0,0-.15-.161l-.46-.442c-.4-.374-.992-.921-1.733-1.575-1.474-1.317-3.544-3.1-5.883-5.011s-4.491-3.574-6.111-4.726c-.8-.58-1.463-1.029-1.927-1.332l-.535-.344A1.24,1.24,0,0,0,330.01,411.83Z" transform="translate(-308.346 -312.926)" fill="#263238"/>
                            <Path id="Path_549" data-name="Path 549" d="M261.05,399.921a10.075,10.075,0,0,1,8.177-2.717,29.839,29.839,0,0,1,8.54,2.432l25.854,17.7-.232.666L277.4,400.411a70.059,70.059,0,0,0-8.379-2.193A13.714,13.714,0,0,0,261.05,399.921Z" transform="translate(-239.186 -303.749)" fill="#e0e0e0"/>
                            <Path id="Path_550" data-name="Path 550" d="M398.081,396.726,385.65,388.34S395.836,393.639,398.081,396.726Z" transform="translate(-380.168 -298.226)" fill="#e0e0e0"/>
                            <Path id="Path_551" data-name="Path 551" d="M304.9,417.218a.633.633,0,0,0-.1-.086l-.322-.228-1.239-.872-4.58-3.173L283.5,402.452l-4.4-2.994h0a31.185,31.185,0,0,0-7.858-2.361,11.754,11.754,0,0,0-6.444.909,7.991,7.991,0,0,0-2.062,1.385,6.1,6.1,0,0,0-1.153,1.463,4.827,4.827,0,0,0-.449,1.082c-.026.123-.049.221-.067.3a.885.885,0,0,0-.019.1,6.113,6.113,0,0,1,.591-1.444,6.266,6.266,0,0,1,1.16-1.426,8.256,8.256,0,0,1,2.051-1.347,11.746,11.746,0,0,1,6.362-.853,31.452,31.452,0,0,1,7.8,2.346h-.019l4.4,2.994,15.167,10.369,4.618,3.125,1.257.838.333.217A.725.725,0,0,0,304.9,417.218Z" transform="translate(-240.465 -303.634)" fill="#263238"/>
                            <Path id="Path_552" data-name="Path 552" d="M342.819,408.649a.814.814,0,0,0-.195-.12c-.131-.071-.326-.18-.576-.307-.505-.262-1.242-.629-2.17-1.048a28.218,28.218,0,0,0-7.585-2.324,16.532,16.532,0,0,0-7.858.719,11.9,11.9,0,0,0-2.174,1.044,4.828,4.828,0,0,0-.546.374,1.217,1.217,0,0,0-.183.138s.273-.157.767-.438a13.2,13.2,0,0,1,2.182-.977,16.928,16.928,0,0,1,7.795-.655,29.937,29.937,0,0,1,7.555,2.245c.932.4,1.676.748,2.193.992l.591.273A1.128,1.128,0,0,0,342.819,408.649Z" transform="translate(-300.988 -308.442)" fill="#263238"/>
                            <Path id="Path_553" data-name="Path 553" d="M382.5,382.42a1.572,1.572,0,0,0,.161.124l.483.322,1.792,1.153c1.519.973,3.611,2.316,5.905,3.828s4.345,2.9,5.841,3.911l1.77,1.19.486.318a.794.794,0,0,0,.176.1.956.956,0,0,0-.153-.131l-.468-.348c-.4-.3-1-.722-1.733-1.242-1.474-1.037-3.525-2.447-5.823-3.959s-4.4-2.837-5.939-3.78c-.767-.471-1.392-.846-1.826-1.1l-.505-.292a1.024,1.024,0,0,0-.168-.09Z" transform="translate(-380.023 -294.522)" fill="#263238"/>
                            <Path id="Path_554" data-name="Path 554" d="M329.45,408.411a8.709,8.709,0,0,0,.962,1.729c.479.569,2.043,1.362,2.167,2.444s-.131,3.619,1.56,5.55a9.5,9.5,0,0,0,4.008,2.619l6.672-.651,10.658-4.195a.936.936,0,0,0,.681-1.123,1.347,1.347,0,0,0-1.123-1l-.254-.041s.614-.5-.266-1.381c-.748-.748-2.346-.326-3.17-.052s-5.651,2.29-6.515,2.6c-.767.273-1.358.516-1.358.516s6.178-4.169,6.264-4.715a1.179,1.179,0,0,0-.6-1.411c-.748-.543-1.976.037-3.166.539-.887.374-6.541,3.166-6.541,3.166s-.254-.247,0-.748,2.133-2.919,2.429-3.368.374-.7.079-1.081a1.7,1.7,0,0,0-2.5.123c-.632.584-2.881,2.1-2.881,2.1l-10.381-7.574s-1.291-.034-.842,1.766S329.45,408.411,329.45,408.411Z" transform="translate(-315.664 -307.056)" fill="#ffbe9d"/>
                            <Path id="Path_555" data-name="Path 555" d="M371,432.619a2.646,2.646,0,0,0,1.871-1.572c-.049-.03-.352.434-.868.864S370.975,432.563,371,432.619Z" transform="translate(-349.543 -324.951)" fill="#eb996e"/>
                            <Path id="Path_556" data-name="Path 556" d="M380.007,423.106c0-.022-.138-.064-.374-.034a1.62,1.62,0,0,0-1.3,1.074c-.071.217-.06.374-.034.374a2.931,2.931,0,0,1,.659-.928A3,3,0,0,1,380.007,423.106Z" transform="translate(-359.335 -319.955)" fill="#eb996e"/>
                            <Path id="Path_557" data-name="Path 557" d="M377.514,424.876c.056,0,.082-.558.3-1.194s.531-1.1.486-1.123a2.092,2.092,0,0,0-.67,1.074,2.062,2.062,0,0,0-.12,1.242Z" transform="translate(-357.333 -319.641)" fill="#eb996e"/>
                            <Path id="Path_558" data-name="Path 558" d="M394.432,413.277c0,.019.131-.056.266-.236a1.718,1.718,0,0,0,.187-1.665c-.09-.2-.191-.3-.21-.288a2.447,2.447,0,0,1-.243,2.189Z" transform="translate(-380.391 -312.461)" fill="#eb996e"/>
                            <Path id="Path_559" data-name="Path 559" d="M359.42,438.632a1.636,1.636,0,0,0,.73,0,4.866,4.866,0,0,0,1.647-.614,9.11,9.11,0,0,0,1.418-1.029,2.436,2.436,0,0,0,.513-.509,2.909,2.909,0,0,0-.6.4,14.041,14.041,0,0,1-1.43.969,5.9,5.9,0,0,1-1.575.647A6.355,6.355,0,0,0,359.42,438.632Z" transform="translate(-336.072 -328.352)" fill="#eb996e"/>
                            <Path id="Path_560" data-name="Path 560" d="M373.067,439.37c-.052,0-.056.374.258.685s.7.3.689.243-.3-.127-.55-.374S373.123,439.362,373.067,439.37Z" transform="translate(-351.381 -330.16)" fill="#eb996e"/>
                            <Path id="Path_561" data-name="Path 561" d="M379.05,434.368c-.022,0-.022.1.049.236a.921.921,0,0,0,.423.374.943.943,0,0,0,.565.082c.15-.03.225-.09.213-.112a1.809,1.809,0,0,1-.7-.146C379.252,434.627,379.1,434.35,379.05,434.368Z" transform="translate(-359.913 -327.03)" fill="#eb996e"/>
                            <Path id="Path_562" data-name="Path 562" d="M329,437.683c.019.049,2.5-.984,5.538-2.313s5.486-2.447,5.449-2.492-2.5.988-5.542,2.316S328.977,437.634,329,437.683Z" transform="translate(-300.968 -326.097)" fill="#eb996e"/>
                          </G>
                        </G>
                    </Svg>    
                                {/* <Image
                                    source={require("../../assets/Learning-pana.png")}
                                    style={{ width: 140, height: 140 }}/> */}
                </View>
        </View>

        <View style={styles.Kagan}>
         <Text style={styles.textKagan}> Kagan Course </Text>
        </View>
        <View>
            <Pressable
              style={styles.buttonVocab}
              onPress={() => navigation.navigate("Vocabulary")}>
              
              <View style={styles.contextButton}>
              <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
>
              <Image
                id="dictionary"
                width="41"
                height="41"
                xlink:href="data:image/png;base64,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"
              />
            </Svg>

                <Image 
                  style = {{width: 60, height: 60}}
                  source={require("../../assets/Learning-cuate.png")}/>
                  <View style={styles.text_Context}>
                    <Text style={styles.textVocab}> Vocabulary</Text>
                    <Text style={styles.textVocabSub}> 70 words to study</Text>
                  </View>
              </View>
            </Pressable> 
            <Pressable
              style={styles.buttonVocab}
              onPress={() => navigation.navigate("Grammar")}>
              
              <View style={styles.contextButton}>
                <Image 
                  style = {{width: 60, height: 60}}
                  source={require("../../assets/Learning-cuate.png")}/>
                  <View style={styles.text_Context}>
                    <Text style={styles.textVocab}> Grammar</Text>
                    <Text style={styles.textVocabSub}> 7 topics to study</Text>
                  </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.buttonVocab}
              onPress={() => navigation.navigate("Vocabulary")}>
              
              <View style={styles.contextButton}>
                <Image 
                  style = {{width: 60, height: 60}}
                  source={require("../../assets/Learning-cuate.png")}/>
                  <View style={styles.text_Context}>
                    <Text style={styles.textVocab}> Pronunciation</Text>
                    <Text style={styles.textVocabSub}> 70 words to study</Text>
                  </View>
              </View>
            </Pressable>
        </View>                            

        
    </View>
    // <View>
    //   <View style={styles.header}>
    //     <Text style={styles.textHead}>Hello, Kent! </Text>
    //     <Text style={styles.textSubHead}>New user </Text>
    //   </View>

    //   
    //     <View style={styles.headLine}>
    //       <Text style={styles.textHeadline}>
    //         What do you want to learn today?
    //       </Text>
          
    //       <Image
    //         source={require("../../assets/learning.svg")}
    //         style={{ width: 140, height: 140, left: 120 }}
    //       />
    //       <Pressable
    //         style={styles.button}
    //         onPress={() => navigation.navigate("Vocabulary")}
    //       >
    //         <Text style={styles.text}>Get Started</Text>
    //       </Pressable>
    //     </View>
    //   </View>

    //   <View style={styles.Kagan}>
    //     <Text style={styles.textKagan}> Kagan Course </Text>
    //   </View>

    //   <View style={styles.Kagan}>
    //     <Pressable
    //       style={styles.buttonVocab}
    //       onPress={() => navigation.navigate("Vocabulary")}
    //     >
    //       <Text style={styles.textVocab}>
    //         <Image
    //           style={{ width: 35, height: 35, left: -10, top: 25 }}
    //           source={require("../../assets/Vocabulary.svg")}
    //         />
    //       </Text>
    //       <View style={styles.Vocab}>
    //         <Text style={styles.textVocab}> Vocabulary</Text>
    //       </View>
    //       <View style={styles.VocabSub}>
    //         <Text style={styles.textVocabSub}> 70 words to study</Text>
    //       </View>
    //     </Pressable>
    //   </View>

    //   <View style={styles.grammar}>
    //     <Pressable
    //       style={styles.buttonGrammar}
    //       onPress={() => navigation.navigate("Grammar")}
    //     >
    //       <Text style={styles.textGrammar}>
    //         <Image
    //           style={{ width: 35, height: 35, left: -10, top: 25 }}
    //           source={require("../../assets/Grammar.svg")}
    //         />
    //       </Text>
    //       <View style={styles.Vocab}>
    //         <Text style={styles.textVocab}> Grammar</Text>
    //       </View>
    //       <View style={styles.VocabSub}>
    //         <Text style={styles.textVocabSub}> 7 topics to study</Text>
    //       </View>
    //     </Pressable>
    //   </View>

    //   <View style={styles.pronun}>
    //     <Pressable style={styles.buttonPronun}>
    //       <Text style={styles.textPronun}>
    //         <Image
    //           style={{ width: 35, height: 35, left: -10, top: 25 }}
    //           source={require("../../assets/Pronounciation.svg")}
    //         />
    //       </Text>
    //       <View style={styles.Vocab}>
    //         <Text style={styles.textVocab}> Pronunciation</Text>
    //       </View>
    //       <View style={styles.VocabSub}>
    //         <Text style={styles.textVocabSub}> 70 words to study</Text>
    //       </View>
    //     </Pressable>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    top: 50,
    alignItems:"center",
  },
  containerbox: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center"
    
  },
  header: {
    //flex:1,
    alignContent:"flex-start",
    alignSelf:"flex-start",
    marginLeft: 50,
    marginTop: 20,
  },
  headline_box: {
    width: "78%",
    //height: 200,
    backgroundColor: "#EBEBEB",
    alignItems:"center",
    //top: 70,
    padding: 10,
    marginTop: 20,
    //left: 40,
    borderRadius: 15,
  },
  contextButton:{
    padding: 13,
    flexDirection:"row",
    left: 20,
    alignItems:"center"
  },
  text_Context:{
    flexDirection:"column",
    marginLeft: 30,
  },
  textHead: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    // fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  headLine: {
    top: 15,
    left: 10,
  },
  textHeadline: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    padding: 15,
    marginBottom: -30,
  },
  Kagan: {
    alignContent:"flex-start",
    alignSelf:"flex-start",
    marginLeft: 50,
    marginTop: 20,
  },
  grammar: {
    top: 70,
    left: 40,
  },
  pronun: {
    top: 100,
    left: 40,
  },
  textKagan: {
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "bold",
    //lineHeight: 21,
    letterSpacing: 0.5,
    color: "black",
  },
  button: {
    justifyContent: "center",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    backgroundColor: "#8E2835",
  },
  buttonVocab: {
    alignSelf: "center",
    alignItems:"flex-start",
    marginTop: 10,
    elevation: 0.7,
    width: 300,
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    
  },
  buttonGrammar: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 60,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  buttonPronun: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "78%",
    backgroundColor: "#dadada",
    top: 60,
    left: -40,
    height: 60,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderColor: "black",
  },
  Vocab: {
    top: -20,
    left: 40,
  },
  VocabSub: {
    top: -22,
    left: 40,
  },
  textVocab: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  textVocabSub: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "grey",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
