// implemented in game
namespace internal {
    //! Add support for FOREVER time
    //% blockId=timePicker_ block="%ms"
    //% blockHidden=1 shim=TD_ID
    //% colorSecondary="#FFFFFF"
    //% ms.fieldEditor="numberdropdown" ms.fieldOptions.decompileLiterals=true
    //% ms.fieldOptions.data='[["100 ms", 100], ["200 ms", 200], ["500 ms", 500], ["1 second", 1000], ["2 seconds", 2000], ["5 seconds", 5000]]'
    //% ms.defl="1000"
    export function ___timePicker(ms: number): number | string {
        return ms;
    }
    /**
     * A shim to render a boolean as a high/low toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleHighLow_ block="%high"
    //% high.fieldEditor=togglehighlow
    //% high.fieldOptions.decompileLiterals=true
    export function __highLow_(high: boolean): boolean {
        return high;
    }

    /**
     * A shim to render a boolean as a on/off toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleOnOff_ block="%on"
    //% on.fieldEditor=toggleonoff
    //% on.fieldOptions.decompileLiterals=true
    export function __onOff_(on: boolean): boolean {
        return on;
    }
    /**
   * A shim to render a boolean as a line/no line toggle
   */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleLineNoLine block="%state"
    //% state.fieldEditor=togglelinenoline
    //% state.fieldOptions.decompileLiterals=true
    export function __lineNoLine_(state: boolean): boolean {
        return state;
    }

    //% blockId=speedPicker_ block="%speed" shim=TD_ID
    //% speed.fieldEditor="speed" colorSecondary="#FFFFFF" speed.defl=70 speed.fieldOptions.min=0 speed.fieldOptions.max=255
    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1
    export function __speedPicker_(speed: number): any {
        return speed;
    }


}

enum LambdaName {
    //% block="Double click to define"
    //% block.loc.vi="Nhấn dúp để định nghĩa"
    NotDefined,
}

enum ButtonIndex {
    //% block="Button A"
    ButtonA,
    //% block="Button B"
    ButtonB,
    //% block="Touch"
    Touch
}

enum LineSensorState {
    //% block="line"
    DetectLine,
    //% block="no line",
    DetectSpace
}






// enum Note {
//   //% blockIdentity=music.noteFrequency enumval=262
//   C = 262,
//   //% block=C#
//   //% blockIdentity=music.noteFrequency enumval=277
//   CSharp = 277,
//   //% blockIdentity=music.noteFrequency enumval=294
//   D = 294,
//   //% blockIdentity=music.noteFrequency enumval=311
//   Eb = 311,
//   //% blockIdentity=music.noteFrequency enumval=330
//   E = 330,
//   //% blockIdentity=music.noteFrequency enumval=349
//   F = 349,
//   //% block=F#
//   //% blockIdentity=music.noteFrequency enumval=370
//   FSharp = 370,
//   //% blockIdentity=music.noteFrequency enumval=392
//   G = 392,
//   //% block=G#
//   //% blockIdentity=music.noteFrequency enumval=415
//   GSharp = 415,
//   //% blockIdentity=music.noteFrequency enumval=440
//   A = 440,
//   //% blockIdentity=music.noteFrequency enumval=466
//   Bb = 466,
//   //% blockIdentity=music.noteFrequency enumval=494
//   B = 494,
//   //% blockIdentity=music.noteFrequency enumval=131
//   C3 = 131,
//   //% block=C#3
//   //% blockIdentity=music.noteFrequency enumval=139
//   CSharp3 = 139,
//   //% blockIdentity=music.noteFrequency enumval=147
//   D3 = 147,
//   //% blockIdentity=music.noteFrequency enumval=156
//   Eb3 = 156,
//   //% blockIdentity=music.noteFrequency enumval=165
//   E3 = 165,
//   //% blockIdentity=music.noteFrequency enumval=175
//   F3 = 175,
//   //% block=F#3
//   //% blockIdentity=music.noteFrequency enumval=185
//   FSharp3 = 185,
//   //% blockIdentity=music.noteFrequency enumval=196
//   G3 = 196,
//   //% block=G#3
//   //% blockIdentity=music.noteFrequency enumval=208
//   GSharp3 = 208,
//   //% blockIdentity=music.noteFrequency enumval=220
//   A3 = 220,
//   //% blockIdentity=music.noteFrequency enumval=233
//   Bb3 = 233,
//   //% blockIdentity=music.noteFrequency enumval=247
//   B3 = 247,
//   //% blockIdentity=music.noteFrequency enumval=262
//   C4 = 262,
//   //% block=C#4
//   //% blockIdentity=music.noteFrequency enumval=277
//   CSharp4 = 277,
//   //% blockIdentity=music.noteFrequency enumval=294
//   D4 = 294,
//   //% blockIdentity=music.noteFrequency enumval=311
//   Eb4 = 311,
//   //% blockIdentity=music.noteFrequency enumval=330
//   E4 = 330,
//   //% blockIdentity=music.noteFrequency enumval=349
//   F4 = 349,
//   //% block=F#4
//   //% blockIdentity=music.noteFrequency enumval=370
//   FSharp4 = 370,
//   //% blockIdentity=music.noteFrequency enumval=392
//   G4 = 392,
//   //% block=G#4
//   //% blockIdentity=music.noteFrequency enumval=415
//   GSharp4 = 415,
//   //% blockIdentity=music.noteFrequency enumval=440
//   A4 = 440,
//   //% blockIdentity=music.noteFrequency enumval=466
//   Bb4 = 466,
//   //% blockIdentity=music.noteFrequency enumval=494
//   B4 = 494,
//   //% blockIdentity=music.noteFrequency enumval=523
//   C5 = 523,
//   //% block=C#5
//   //% blockIdentity=music.noteFrequency enumval=555
//   CSharp5 = 555,
//   //% blockIdentity=music.noteFrequency enumval=587
//   D5 = 587,
//   //% blockIdentity=music.noteFrequency enumval=622
//   Eb5 = 622,
//   //% blockIdentity=music.noteFrequency enumval=659
//   E5 = 659,
//   //% blockIdentity=music.noteFrequency enumval=698
//   F5 = 698,
//   //% block=F#5
//   //% blockIdentity=music.noteFrequency enumval=740
//   FSharp5 = 740,
//   //% blockIdentity=music.noteFrequency enumval=784
//   G5 = 784,
//   //% block=G#5
//   //% blockIdentity=music.noteFrequency enumval=831
//   GSharp5 = 831,
//   //% blockIdentity=music.noteFrequency enumval=880
//   A5 = 880,
//   //% blockIdentity=music.noteFrequency enumval=932
//   Bb5 = 932,
//   //% blockIdentity=music.noteFrequency enumval=988
//   B5 = 988,
// }

enum NoteLength {
    //% block="4 beats"
    S4,
    //% block="2 beats"
    S2,
    //% block="1 beats"
    S1,
    //% block="1/2 beats"
    S12,
    //% block="1/4 beats"
    S14,
    //% block="1/8 beats"
    S18,
    //% block="1/16 beats"
    S116,

}

enum GNote {
    C1,
    D1,
    E1,
    F1,
    G1,
    A1,
    B1,
    C2,
    D2,
    E2,
    F2,
    G2,
    A2,
    B2,
    C3,
    D3,
    E3,
    F3,
    G3,
    A3,
    B3,
    C4,
    D4,
    E4,
    F4,
    G4,
    A4,
    B4,
    C5,
    D5,
    E5,
    F5,
    G5,
    A5,
    B5,
    C6,
    D6,
    E6,
    F6,
    G6,
    A6,
    B6,
    C7,
    D7,
    E7,
    F7,
    G7,
    A7,
    B7,
    C8,
    D8,
}

enum ReturnTypeList {
    Number,
    String,
}

enum FL5Channel {
    //% block="Channel 1"
    //% block.loc.vi="Kênh 1"
    Channel1,
    //% block="Channel 2"
    //% block.loc.vi="Kênh 2"
    Channel2,
    //% block="Channel 3"
    //% block.loc.vi="Kênh 3"
    Channel3,
    //% block="Channel 4"
    //% block.loc.vi="Kênh 4"
    Channel4,
    //% block="Switch"
    //% block.loc.vi="Công tắc"
    Switch
}
enum WebcamOrMicrophone {
    Webcam,
    Microphone
}

enum StreamType {
    //% block="get frame from webcam 1"
    //% block.loc.vi="hình ảnh từ webcam 1"
    Webcam1,
    //% block="get frame from webcam 2"
    //% block.loc.vi="hình ảnh từ webcam 2"
    Webcam2,
}

enum WebcamType {
    //% block="front"
    //% block.loc.vi="webcam trước"
    Front,
    //% block="back"
    //% block.loc.vi="webcam sau"
    Back
}

enum ImageOrSound {
    Image,
    Sound
}

enum PretrainedModel {
    Animal,
    Fruits,
    Fingers,
    Gestures,
    Emotion,
    Money,
    Cars,
}

enum Voices {
    //% block="(Vietnamese) Ban Mai",
    BanMai,
    //% block="(Vietnamese) Lê Minh",
    LeMinh,
    //% block="(Vietnamese) Thu Minh",
    ThuMinh,
    //% block="(Vietnamese) Mỹ An",
    MyAn,
    //% block="(Vietnamese) Gia Huy",
    GiaHuy,
    //% block="(Vietnamese) Lan Nhi",
    LanNhi,
    //% block="(Vietnamese) Linh San",
    LinhSan,
}

enum InternationalVoices {
    English,
    Vietnamese,
    Chinese,
    Malaysian,
    Thai,
    Khmer,
}

enum DayOfWeek {
    //% block.loc.vi="Thứ hai"
    Monday,
    //% block.loc.vi="Thứ ba"
    Tuesday,
    //% block.loc.vi="Thứ tư"
    Wednesday,
    //% block.loc.vi="Thứ năm"
    Thursday,
    //% block.loc.vi="Thứ sáu"
    Friday,
    //% block.loc.vi="Thứ bảy"
    Saturday,
    //% block.loc.vi="Chúa nhật"
    Sunday
}
enum TimeType {
    //% block.loc.vi="giây"
    Second,
    //% block.loc.vi="phút"
    Minute,
    //% block.loc.vi="giờ"
    Hour,
    //% block.loc.vi="ngày"
    Date,
    //% block.loc.vi="tháng"
    Month,
    //% block.loc.vi="năm"
    Year,
    //% block.loc.vi="thứ"
    Day,
    //% block.loc.vi="epoch"
    Epoch,
}
//𝙿𝙾𝚁𝚃𝟷 𝙿𝙾𝚁𝚃𝟸 𝙿𝙾𝚁𝚃𝟹 𝙿𝙾𝚁𝚃𝟺 𝙿��𝚁𝚃𝟻 𝙿𝙾𝚁𝚃𝟼
enum Controller {
    //% block.loc.vi = "Cổng 1"
    PORT1,
    //% block.loc.vi = "Cổng 2"
    PORT2,
    //% block.loc.vi = "Cổng 3"
    PORT3,
    //% block.loc.vi = "Cổng 4"
    PORT4,
    //% block.loc.vi = "Cổng 5"
    PORT5,
    //% block.loc.vi = "Cổng 6"
    PORT6,
}
enum ControllerSub {

    //% block.loc.vi="Cổng 1"
    PORT1,
    //% block.loc.vi="Cổng 2"
    PORT2,
    //% block.loc.vi="Cổng 3"
    PORT3,
    //% block.loc.vi="Cổng 4"
    PORT4,
    // PORT5,
    // PORT6,
}

enum TeachableClass {
    Class1,
    Class2,
    Class3,
    Class4,
    Class5,
    Class6,
    Cat, Dog, Duck, Chicken, Pig, Cow, Pen, Cup, Bottle, Bowl, Plate, Tennis, Basketball, Football, Spoon, Straw, Keychain
}

enum ModulesList {
    //% block="Line Sensor"
    //% block.loc.vi="Cảm biến dò line"
    LineSensor,
    //% block="Button"
    //% block.loc.vi="Nút nhấn"
    Button,
    //% block="Motion Sensor"
    //% block.loc.vi="Cảm biến chuyển động"
    MotionSensor,
    //% block="Sound Sensor"
    //% block.loc.vi="Cảm biến âm thanh"
    SoundSensor,
    //% block="Weather Sensor"
    //% block.loc.vi="Cảm biến môi trường"
    WeatherSensor,
    //% block="Light Sensor"
    //% block.loc.vi="Cảm biến ánh sáng"
    LightSensor,
    //% block="Gas Sensor"
    //% block.loc.vi="Cảm biến khí gas"
    GasSensor,
    //% block="Slider"
    //% block.loc.vi="Biến trở"
    Slider,
    //% block="Distance Sensor"
    //% block.loc.vi="Cảm biến khoảng cách"
    DistanceSensor,

    //% block="Relay"
    //% block.loc.vi="Công tắc điện"
    Relay,
    //% block="LED"
    //% block.loc.vi="Đèn LED"
    LED,
    //% block="Servo"
    //% block.loc.vi="Động cơ servo"
    Servo,
    //% block="Camera"
    //% block.loc.vi="Camera"
    Camera,
    //% block="Speaker"
    //% block.loc.vi="Loa"
    Speaker,
    //% block="Microphone"
    //% block.loc.vi="Microphone"
    Microphone,
}

enum PortsBCreator {
    PORT3,
    PORT4,
}

enum SoftwareSerialRole {
    Master,
    Sllave,
}

enum Direction {
    Forward,
    Backward,
}

enum LeftRight {
    Left,
    Right,
}
enum ButtonState {
    //% block="is being pressed"
    //% block.loc.vi="đang được nhấn"
    IsBeingPressed,
    //% block="is being release"
    //% block.loc.vi="đang được thả"
    IsBeingReleased,
}
enum MotionState {
    //% block="detecting motion"
    //% block.loc.vi="đang phát hiện chuyển động"
    StartDetectMotion,
    //% block="no longer detecting motion"
    //% block.loc.vi="ngừng phát hiện chuyển động"
    StopDetectMotion,
}

enum WeatherReadEnum {
    //% block="temperature"
    //% block.loc.vi="Nhiệt độ"
    Temperature,
    //% block="humidity"
    //% block.loc.vi="Độ ẩm"
    Humidity,
}
enum UnitLength {
    //% block="mm"
    //% block.loc.vi="__________________________________"
    Milimeter,
    //% block="cm"
    //% block.loc.vi="__________________________________"
    Centimeter,
    //% block="m"
    //% block.loc.vi="__________________________________"
    Meter,
}

enum TimeUnit {
    Microseconds,
    Milisecond,
    Second,
    Minute,
    Hour
}

enum DisplayLine {
    //% block="Line 1"
    //% block.loc.vi="Kênh 1"
    Line1,
    //% block="Line 2"
    //% block.loc.vi="Kênh 2"
    Line2,
    //% block="Line 3"
    //% block.loc.vi="Kênh 3"
    Line3,
    //% block="Line 4"
    //% block.loc.vi="Kênh 4"
    Line4,
}

enum IRChannel {
    //% block="Channel 1"
    //% block.loc.vi="__________________________________"
    Channel1,
    //% block="Channel 2"
    //% block.loc.vi="__________________________________"
    Channel2,
    //% block="Channel 3"
    //% block.loc.vi="__________________________________"
    Channel3,
    //% block="Channel 4"
    //% block.loc.vi="__________________________________"
    Channel4,
    //% block="Channel 5"
    //% block.loc.vi="__________________________________"
    Channel5,
    //% block="Channel 6"
    //% block.loc.vi="__________________________________"
    Channel6,
    //% block="Channel 7"
    //% block.loc.vi="__________________________________"
    Channel7,
    //% block="Channel 8"
    //% block.loc.vi="__________________________________"
    Channel8,
    //% block="Channel 9"
    //% block.loc.vi="__________________________________"
    Channel9,
    //% block="Channel 10"
    //% block.loc.vi="__________________________________"
    Channel10,
    //% block="Channel 11"
    //% block.loc.vi="__________________________________"
    Channel11,
    //% block="Channel 12"
    //% block.loc.vi="__________________________________"
    Channel12,
}

enum InputButtonEvent {
    //% block="press"
    //% block.loc.vi="nhấn"
    ButtonPressed,
    //% block="release"
    //% block.loc.vi="thả"
    ButtonReleased,
    //% block="clicked 1 times"
    //% block.loc.vi="bấm 1 lần"
    ButtonPressed1,
    //% block="clicked 2 times"
    //% block.loc.vi="bấm 2 lần"
    ButtonPressed2,
    //% block="clicked 3 times"
    //% block.loc.vi="bấm 3 lần"
    ButtonPressed3,
    //% block="clicked 4 times"
    //% block.loc.vi="bấm 4 lần"
    ButtonPressed4,
}
enum InputSoundEvent {
    //% block="heard 1 clap"
    //% block.loc.vi="vỗ 1 cái"
    Sound1Clap,
    //% block="heard 2 claps"
    //% block.loc.vi="vỗ 2 cái"
    Sound2Clap,
    //% block="heard 3 claps"
    //% block.loc.vi="vỗ 3 cái"
    Sound3Clap,
    //% block="heard 4 claps"
    //% block.loc.vi="vỗ 4 cái"
    Sound4Clap,
}

enum ControlKey {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
}

enum GroupChannelList {
    V0,
    V1,
    V2,
    V3,
    V4,
    V5,
    V6,
    V7,
    V8,
    V9,
    V10,
    V11,
    V12,
    V13,
    V14,
    V15,
    V16,
    V17,
    V18,
    V19,
    V20,
    V21,
    V22,
    V23,
    V24,
    V25,
    V26,
    V27,
    V28,
    V29,
    V30,
    // V31,  
    // V32,  
    // V33,  
    // V34,  
    // V35,  
    // V36,  
    // V37,  
    // V38,  
    // V39,  
    // V40,  
    // V41,  
    // V42,  
    // V43,  
    // V44,  
    // V45,  
    // V46,  
    // V47,  
    // V48,  
    // V49,  
    // V50,  
    // V51,  
    // V52,  
    // V53,  
    // V54,  
    // V55,  
    // V56,  
    // V57,  
    // V58,  
    // V59,  
    // V60,  
    // V61,  
    // V62,  
    // V63,  
    // V64,  
    // V65,  
    // V66,  
    // V67,  
    // V68,  
    // V69,  
    // V70,  
    // V71,  
    // V72,  
    // V73,  
    // V74,  
    // V75,  
    // V76,  
    // V77,  
    // V78,  
    // V79,  
    // V80,  
    // V81,  
    // V82,  
    // V83,  
    // V84,  
    // V85,  
    // V86,  
    // V87,  
    // V88,  
    // V89,  
    // V90,  
    // V91,  
    // V92,  
    // V93,  
    // V94,  
    // V95,  
    // V96,  
    // V97,  
    // V98,  
    // V99,  
}

//% color="#426AEB" weight=900 icon="\uf2c8" blockGap=6
namespace Input {
    //% blockId="makecode_webcam_stream"
    //% block="$module $port get stream"
    //% block.loc.vi="lấy stream từ $module $port"
    //% block.loc.vi="__________________________________"
    //% group="Camera"
    //% module.fieldEditor="label"
    //% module.defl="tag_camera"
    //% blockHidden=true
    export function makecode_webcam_stream(module: string, port: Controller): any {
        return ''
    }

    //% blockId="iot_read_camera"
    //% block="$module capture frame from $port"
    //% block.loc.vi="__________________________________"
    //% group="Camera"
    //% module.fieldEditor="label"
    //% module.defl="tag_camera"
    //% blockHidden=false
    export function iot_read_camera(module: string, port: Controller): any {
        return ''
    }


    //% blockId="iot_camera_set_brightness"
    //% block="set camera brightness $port to $bn"
    //% block.loc.vi="__________________________________"
    //% group="Camera"
    //% blockGap=6
    //% inlineInputMode=inline
    //% blockHidden=true
    //! [Value]
    export function iot_camera_set_brightness(
        port: Controller,
        bn: number
    ): any {
        return 1;
    }

    //% blockId="iot_read_sound"
    //% block="$module $wifi $port record $time second and transcribe into $language"
    //% block.loc.vi="__________________________________"
    //% group="Microphone"
    //% blockGap=6
    //% inlineInputMode=inline
    //% blockHidden=false
    //% module.fieldEditor="label"
    //% module.defl="tag_microphone"
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% blockHidden=true
    //! [Value]
    export function iot_read_sound(module: string, wifi: string, language: LanguageType, port: Controller, time: number): any {
        return 1;
    }
    //% blockId="iot_record_sound"
    //% block="$module $port record $time second"
    //% block.loc.vi="__________________________________"
    //% group="Microphone"
    //% blockGap=6
    //% inlineInputMode=inline
    //% blockHidden=true
    //% module.fieldEditor="label"
    //% module.defl="tag_microphone"
    //! [Value]
    export function iot_record_sound(module: string, port: Controller, time: number): any {
        return 1;
    }
    //% blockId="iot_check_sound_button"
    //% block="$module $port record button is pressed"
    //% block.loc.vi="__________________________________"
    //% group="Microphone"
    //% blockGap=6
    //% inlineInputMode=inline
    //% blockHidden=true
    //% module.fieldEditor="label"
    //% module.defl="tag_microphone"
    //% blockHidden=true
    //! [Value]
    export function iot_check_sound_button(module: string, port: Controller): boolean {
        return false;
    }

    //% blockId="iot_read_sound_button_cb"
    //% block="$module $port when press RECORD"
    //% block.loc.vi="__________________________________"
    //% group="Microphone"
    //% blockGap=6
    //% inlineInputMode=inline
    //% blockHidden=true
    //% module.fieldEditor="label"
    //% module.defl="tag_microphone"
    //% blockHidden=true
    //! [Value]
    export function iot_read_sound_button_cb(module: string, port: Controller, handler: () => void) {
    }

    //% blockId="grobot_line_readmask2"
    //% block="$module $port Line Follow 2 Channel: check if left%c1 right%c2"
    //% block.loc.vi="$module $port kiểm tra 2 kênh: $c1 $c2"
    //% group="Line Follower Sensor"
    //% blockGap=6
    //% module.fieldEditor="label"
    //% module.defl="tag_line"
    //% inlineInputMode=inline
    //% c1.shadow="ls_state_picker_"
    //% c2.shadow="ls_state_picker_"
    //! [Value]
    export function GB_ReadLineMask2(
        module: string,
        port: Controller,
        c1: number | boolean,
        c2: number | boolean
    ): boolean {
        return true;
    }

    //% blockId="grobot_line_readsensor2"
    //% block="$module $port Line Follow 2 Channel: read $channel"
    //% block.loc.vi="$module $port đọc kênh $channel"
    //% group="Line Follower Sensor"
    //% blockGap=6
    //% module.fieldEditor="label"
    //% module.defl="tag_line"
    //% inlineInputMode=inline
    //! [Value]
    export function GB_ReadLineSensor2(
        module: string,
        port: Controller,
        channel: LineSensorSelector2
    ): boolean {
        return true;
    }


    //% block="$state"
    //% blockId="ls_state_picker__"
    //% group="Line Follower Sensor"
    export function ls_state_picker__(state: LineSensorState): boolean {
        return false
    }

    // //% blockId="grobot_line_readposition2"
    // //% block="$module Read line position (0-100)"
    //% block.loc.vi="__________________________________"//
    //% group="Line Follower (2 channels)"
    // //% blockGap=6
    // //% module.fieldEditor="label"
    // //% module.defl="LINE"
    // //% inlineInputMode=inline
    // //% blockHidden=true
    // //! [Value]
    // export function GB_ReadLinePosition2(module: string): any {
    //     return 0;
    // }
    


    //% group="Button"
    //% blockId="input_button_callback"
    //% block="$module $port $btn when $event do"
    //% block.loc.vi="khi $button ở $port được $event thì"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_button"
    //% event.fieldEditor="gridpicker"
    //% weight=100
    //% blockHidden=false
    export function input_button_callback(
        module: string,
        port: ControllerSub,
        btn: ButtonIndex,
        event: InputButtonEvent,
        handler: () => void
    ) { }



    //% group="Button"
    //% blockId="input_button_checkevent"
    //% block="$module $port nút $btn được $event"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_button"
    //% event.fieldEditor="gridpicker"
    //% event.fieldOptions.column=2
    //% inlineInputMode=inline
    export function ButtonIsPressed(
        module: string,
        port: ControllerSub,
        event: InputButtonEvent,
        btn: ButtonIndex
    ): boolean {
        return true;
    }

    //% group="Button"
    //% blockId="input_button_readvalue"
    //% block="▣ $module $port read potentiometer"
    //% port.fieldEditor="gridpicker"
    //% module.fieldEditor="label"
    //% module.defl="tag_button"
    //% inlineInputMode=inline
    export function input_button_readvalue(
        module: string,
        port: ControllerSub,
    ): any {
        return 0
    }

    //% group="Button"
    //% blockId="input_button_brightness"
    //% block="$module $port set brightness to $brightness"
    //% module.fieldEditor="label"
    //% module.defl="tag_button"
    //% brightness.max=100 brightness.min=0
    //% blockHidden=true
    export function input_button_brightness(
        module: string,
        port: Controller,
        brightness: number
    ) {

    }


    //% group="Laser"
    //% blockId="input_laser_checkevent"
    //% block="$module $port is detected"
    //% block.loc.vi="khi $module ở $port phát hiện laser"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_laser"
    //% event.fieldEditor="gridpicker"
    //% event.fieldOptions.column=2
    export function LaserIsDetect(
        module: string,
        port: Controller,
        event: InputButtonEvent
    ): boolean {
        return true;
    }

    //% group="Pot Switch"
    //% blockId="input_potswitch_callback"
    //% block="$module $port when $event do"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="POT SWITCH"
    //% event.fieldEditor="gridpicker"
    //% weight=100
    //% blockHidden=false
    //% blockHidden=true
    export function PotSwitchOnEvent(
        module: string,
        port: Controller,
        event: InputButtonEvent,
        handler: () => void
    ) { }

    //% group="Pot Switch"
    //% blockId="input_potswitch_checkbutton"
    //% block="$module $port button is pressed"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="POT SWITCH"
    //% event.fieldEditor="gridpicker"
    //% event.fieldOptions.column=2
    //% blockHidden=true
    export function PotSwichButton(
        module: string,
        port: Controller,
    ): boolean {
        return true;
    }

    //% group="Pot Switch"
    //% blockId="input_potswitch_readpot"
    //% block="$module $port read pot value"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="POT SWITCH"
    //% event.fieldEditor="gridpicker"
    //% event.fieldOptions.column=2
    //% blockHidden=true
    export function input_potswitch_readpot(
        module: string,
        port: Controller,
    ): any {
        return true;
    }



    //% group="Motion Sensor"
    //% blockId="input_motion_callback"
    //% block="$module $port when $event do"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_motion"
    //% event.fieldEditor="gridpicker"  
    //% weight=100
    export function input_motion_callback(
        module: string,
        port: Controller,
        event: MotionState,
        handler: () => void
    ) { }

    //% group="Motion Sensor"
    //% blockId="input_motion_read"
    //% block="$module $port is $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_motion"
    //% event.fieldEditor="gridpicker"
    export function input_motion_read(
        module: string,
        port: Controller,
        state: MotionState
    ): boolean {
        return true;
    }

    //% group="Sound Sensor"
    //% blockId="input_sound_callback"
    //% block="$module $port when $event do"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_sound"
    //% event.fieldEditor="gridpicker"
    //% weight=100
    //% blockHidden=false
    export function input_sound_callback(
        module: string,
        port: Controller,
        event: InputSoundEvent,
        handler: () => void
    ) { }

    //% group="Sound Sensor"
    //% blockId="input_sound_checkstate"
    //% block="$module $port if $event"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_sound"
    //% event.fieldEditor="gridpicker"
    //% event.fieldEditor.column=2
    export function SoundCheckEvent(
        module: string,
        port: Controller,
        event: InputSoundEvent
    ): boolean {
        return false;
    }
    //% group="Sound Sensor"
    //% blockId="input_sound_read"
    //% block="▣ $module $port read loudness"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=2
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_sound"
    //% event.fieldEditor="gridpicker"
    //% event.fieldEditor.column=2
    export function input_sound_read(
        module: string,
        port: Controller,
        event: InputSoundEvent
    ): any {
        return 1;
    }

    //% group="Weather Sensor"
    //% blockId="input_weather_readvalue"
    //% block="$module $port read $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_weather"
    //% state.fieldEditor="gridpicker"
    export function WeatherRead(
        module: string,
        port: Controller,
        state: WeatherReadEnum
    ): any {
        return 0;
    }

    //% group="Light Sensor"
    //% blockId="input_light_readvalue"
    //% block="$module $port detecting light"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_light"
    //% event.fieldEditor="gridpicker"
    export function input_light_readvalue(module: string, port: Controller): boolean {
        return true;
    }
    //% group="Light Sensor"
    //% blockId="input_light_readvalue_analog"
    //% block="▣ $module $port read light level"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_light"
    //% event.fieldEditor="gridpicker"
    export function input_light_readvalue_analog(module: string, port: Controller): any {
        return true;
    }

    //% group="Water Sensor"
    //% blockId="input_water_readvalue"
    //% block="$module $port detecting water"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_water"
    //% event.fieldEditor="gridpicker"
    export function input_water_readvalue(module: string, port: Controller): boolean {
        return true;
    }
    //% group="Water Sensor"
    //% blockId="input_water_readvalue_analog"
    //% block="▣ $module $port read water level"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_water"
    //% event.fieldEditor="gridpicker"
    export function input_water_readvalue_analog(module: string, port: Controller): any {
        return true;
    }

    //% group="Flame Sensor"
    //% blockId="input_flame_readvalue"
    //% block="$module $port detecting flame"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_flame"
    //% event.fieldEditor="gridpicker"
    export function input_flame_readvalue(module: string, port: Controller): boolean {
        return true;
    }
    //% group="Flame Sensor"
    //% blockId="input_flame_readvalue_analog"
    //% block="▣ $module $port read heat level"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_flame"
    //% event.fieldEditor="gridpicker"
    export function input_flame_readvalue_analog(module: string, port: Controller): any {
        return true;
    }

    //% group="Temperature Sensor"
    //% blockId="input_temperature_read"
    //% block="$module $port measure temperature"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_temperature"
    //% event.fieldEditor="gridpicker"
    export function input_temperature_read(module: string, port: Controller): any {
        return true;
    }

    //% group="Gas Sensor"
    //% blockId="input_gas_readvalue"
    //% block="$module $port detecting gas"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_gas"
    //% event.fieldEditor="gridpicker"
    export function input_gas_readvalue(module: string, port: Controller): boolean {
        return true;
    }
    //% group="Gas Sensor"
    //% blockId="input_gas_readvalue_analog"
    //% block="▣ $module $port read gas level"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_gas"
    //% event.fieldEditor="gridpicker"
    export function input_gas_readvalue_analog(module: string, port: Controller): any {
        return true;
    }

    //% group="Proximity Sensor"
    //% blockId="input_proximity_readvalue"
    //% block="$module $port is triggered"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_proximity"
    //% event.fieldEditor="gridpicker"
    export function input_proximity_readvalue(module: string, port: ControllerSub): boolean {
        return false;
    }

    //% group="Potentiometer"
    //% blockId="input_slider_readvalue"
    //% block="▣ $module $port read potentiometer"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_slider"
    //% event.fieldEditor="gridpicker"
    export function input_slider_readvalue(module: string, port: Controller): any {
        return 0;
    }

    //% group="DistanceSensor"
    //% blockId="input_distance_readvalue"
    //% block="$module $port measure distance in $unit"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_distance"
    //% event.fieldEditor="gridpicker"
    export function input_distance_readvalue(
        module: string,
        port: ControllerSub,
        unit: UnitLength
    ): any {
        return 0;
    }

    //% group="RFID"
    //% blockId="input_rfid_read"
    //% block="$module $port read card id"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_rfid"
    //% event.fieldEditor="gridpicker"
    export function input_rfid_read(
        module: string,
        port: ControllerSub,
    ): any {
        return 0;
    }

    //% group="RFID"
    //% blockId="input_rfid_check"
    //% block="$module $port detected new card"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_rfid"
    //% event.fieldEditor="gridpicker"
    export function input_rfid_check(
        module: string,
        port: ControllerSub,
    ): boolean {
        return false;
    }

    //% group="RFID"
    //% blockId="input_rfid_callback"
    //% block="$module $port when detect card"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_rfid"
    //% draggableParameters
    export function input_rfid_callback(
        module: string,
        port: ControllerSub,
        handler: () => void
    ) {
    }



    //% group="Colour Sensor"
    //% blockId="input_colour_read"
    //% block="$module read colour"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_colour_sensor"
    //% event.fieldEditor="gridpicker"
    export function input_colour_read(
        module: string,
    ): any {
        return 0;
    }


    //% group="Colour Sensor"
    //% blockId="input_colour_check"
    //% block="$module detected $colour"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_colour_sensor"
    //% event.fieldEditor="gridpicker"
    //% colour.shadow="colorNumberPicker"
    export function input_colour_check(
        module: string,
        colour: any
    ): boolean {
        return false;
    }




}

//% color="#f99205" weight=800 icon="\uf069" blockGap=6
namespace actuator {
    //% group="Pixel"
    //% blockId="output_pixel_setcolour"
    //% block="$module $port set colour $colour"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_pixel"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% blockHidden=false
    export function PixelSet(module: string, port: Controller, colour: number) { }

    //% group="Relay"
    //% blockId="output_relay_setstate"
    //% block="$module $port set turn $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_relay"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% state.shadow="toggleOnOff"
    export function RelaySet(
        module: string,
        port: Controller,
        state: boolean | number
    ) { }

    //% group="Laser"
    //% blockId="output_laser_setstate"
    //% block="$module $port set turn $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_laser_2"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% state.shadow="toggleOnOff"
    export function LaserSet(
        module: string,
        port: Controller,
        state: boolean | number
    ) { }

    //% group="LED"
    //% blockId="output_led_setstate"
    //% block="$module $port set turn $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_led"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% state.shadow="toggleOnOff"
    export function LEDSet(
        module: string,
        port: Controller,
        state: boolean | number
    ) { }

    //% group="Infrared"
    //% blockId="output_infrared_setsignal"
    //% block="$module $port send signal $signal"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_infrared"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% blockHidden=true
    //! must inevent signalPicker after port Picker for this
    export function InfraredSet(
        module: string,
        port: Controller,
        signal: string
    ) { }

    //% group="Servo"
    //% blockId="output_servo_setangle"
    //% block="$module $port set angle to $angle"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_servo"
    //% colour.shadow="colorNumberPicker"
    //% event.fieldEditor="gridpicker"
    //% angle.shadow="protractorPicker"
    export function ServoSet(module: string, port: Controller, angle: number) { }






    //% group="MP3 Player"
    //% blockId="output_mp3_stop"
    //% block="$module $port stop playing"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_mp3_action"
    //% weight=1002
    export function output_mp3_stop(module: string, port: ControllerSub) { }

    //% group="MP3 Player"
    //% blockId="output_mp3_isPlaying"
    //% block="$module $port is playing"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_mp3"
    //% colour.shadow="colorNumberPicker"
    //% weight=1001
    export function output_mp3_isPlaying(module: string, port: ControllerSub, file: number): boolean {
        return false;
    }

    //% group="MP3 Player"
    //% blockId="output_mp3_play"
    //% block="$module $port play file number $file"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_mp3_action"
    //% colour.shadow="colorNumberPicker"
    //% weight=1003
    export function output_mp3_play(module: string, port: ControllerSub, file: number) { }




    // //% blockId="iot_speaker_say"
    // //% block="$module $port say $text with $voice 's voice"
    //% block.loc.vi="__________________________________"// 
    //% group="Speaker"
    // //% module.fieldEditor="label"
    // //% module.defl="tag_speaker"
    // //% inlineInputMode=inline
    // //% blockHidden=false
    // export function iot_speaker_say(
    //   module: string,
    //   port: Controller,
    //   text: string,
    //   voice: Voices
    // ) { }


    //% block="$module $port $wifi $voice say  $arg1 || $arg2 | $arg3| $arg4| $arg5| $arg6"
    //% block.loc.vi="__________________________________"
    //% blockId="iot_speaker_say_multiple"
    //% module.fieldEditor="label"
    //% module.defl="tag_speaker"
    //% group="Speaker"
    //% expandableArgumentMode=enabled
    //% inlineInputMode=inline
    //% arg1.shadow="text"
    //% blockHidden=false
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% blockHidden=true
    export function iot_speaker_say_multiple(
        module: string,
        wifi: string,
        // type: ReturnTypeList,
        voice: Voices,
        port: Controller,

        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
        arg6?: any
    ) {
    }

    //% block="$module $port $wifi $voice say  $arg1 || $arg2 | $arg3| $arg4| $arg5| $arg6"
    //% block.loc.vi="__________________________________"
    //% blockId="iot_speaker_say_multiple_intl"
    //% module.fieldEditor="label"
    //% module.defl="tag_speaker"
    //% group="Speaker"
    //% expandableArgumentMode=enabled
    //% inlineInputMode=inline
    //% arg1.shadow="text"
    //% blockHidden=false
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% blockHidden=true
    export function iot_speaker_say_multiple_intl(
        module: string,
        wifi: string,
        // type: ReturnTypeList,
        voice: InternationalVoices,
        port: Controller,
        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
        arg6?: any
    ) {
    }

    //% blockId="iot_speaker_play"
    //% block="$module $port $wifi play song $sound || from second $start to second $stop"
    //% block.loc.vi="__________________________________"
    //% group="Speaker"
    //% module.fieldEditor="label"
    //% module.defl="tag_speaker"
    //% inlineInputMode=inline
    //% blockHidden=false
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% start.defl="0"
    //% stop.defl="60"
    //% blockHidden=true
    export function iot_speaker_play(
        module: string,
        wifi: string,
        port: Controller,
        sound: string,
        start: number,
        stop: number
    ) { }

    //% blockId="iot_speaker_stop"
    //% block="$module $port stop playing"
    //% block.loc.vi="__________________________________"
    //% group="Speaker"
    //% module.fieldEditor="label"
    //% module.defl="tag_speaker"
    //% blockHidden=true
    export function iot_speaker_stop(module: string, port: Controller) {

    }

    //% block="$module $port send signal $name"
    //% blockId="output_infrared_send"
    //% group="Infrared"
    //% module.fieldEditor="label"
    //% module.defl="tag_infrared_action"
    export function output_infrared_sound(module: string, port: Controller, name: string) {

    }
}

//% color="#005a9e" weight=700 icon="\uf26c"
namespace Display {
    //% group="LCD Display"
    //% blockId="LCDPrint"
    //% block="$module Print $text at column $column row $row"
    //% block.loc.vi="__________________________________"
    //% module.fieldEditor="label"
    //% module.defl="tag_lcd"
    //% inlineInputMode=inline
    //% text.shadow="text"
    export function LCDPrint(module: string, text: any, column: number, row: number) {

    }

    //% group="LCD Display"
    //% blockId="LCD_clear"
    //% block="$module clear screen"
    //% block.loc.vi="__________________________________"
    //% module.fieldEditor="label"
    //% module.defl="tag_lcd"
    export function LCD_clear(module: string) {

    }

    //% group="LCD"
    //% blockId="display_lcd_settext"
    //% block="$module $port write $text on line $line"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_lcd"
    //% inlineInputMode=inline
    //% deprecated=true
    export function LCDSet(module: string, line: DisplayLine, text: string) { }
    //% group="LCD"
    //% blockId="display_lcd_setclear"
    //% block="$module $port clear line $line"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_lcd"
    //% inlineInputMode=inline
    //% deprecated=true
    export function LCDClearLine(module: string, line: DisplayLine) { }
    //% blockId="display_lcd_setbacklight"
    //% block="$module $port set backlight $state"
    //% block.loc.vi="__________________________________"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% line.fieldEditor="toggleOnOff"
    //% module.fieldEditor="label"
    //% module.defl="tag_lcd"
    //% inlineInputMode=inline
    //% deprecated=true
    export function LCDTurnBacklight(module: string, state: number) { }
}





//% color="#ec584c" weight=1005 icon="\uf017" blockHidden=true
namespace Routine {
    //% block="$module Every $time do"
    //% block.loc.vi="__________________________________"
    //% module.fieldEditor="label"
    //% module.defl="ROUTINE"
    //% time.shadow="timePicker_"
    //% blockId="routine_timer_callback"
    //% blockHidden=true
    export function Timer_EveryDo(
        module: string,
        time: number,
        handler: () => void
    ) { }

    //% block="$module every $time"
    //% block.loc.vi="__________________________________"
    //% module.fieldEditor="label"
    //% module.defl="ROUTINE"
    //% time.shadow="timePicker_"
    //% blockId="routine_timer_checkstate"
    //% blockHidden=true
    export function Timer_CheckState(module: string, time: number): boolean {
        return false;
    }

    //% block="$module wait for $time (ms)"
    //% block.loc.vi="__________________________________"
    //% module.fieldEditor="label"
    //% module.defl="ROUTINE"
    //% time.shadow="timePicker_"
    //% blockId="routine_timer_delay"
    //% blockHidden=true
    export function Timer_Delay(module: string, time: number) { }
}


enum MicropythonExec {
    Device,
    Cloud
}
//% color="#326e9c" weight=1005 icon="\uf121" blockHidden=true
namespace Code {
    //% group="Python"
    //% block="$code|$logo run on $loc"
    //% block.loc.vi="$code"
    //% inlineInputMode=external
    //% blockId="micropython_exec"
    //% code.fieldEditor="monaco"
    //% blockHidden=false
    //% icon.fieldEditor="label"
    //% icon.defl="tag_python"
    //% color="#326e9c"
    //% blockHidden=true
    export function micropython_exec_py(code: string, loc: MicropythonExec) {

    }
    //% group="JavaScript"
    //% block="$code|run"
    //% block.loc.vi="$code"
    //% inlineInputMode=external
    //% blockId="micropython_exec_js"
    //% code.fieldEditor="monaco"
    //% blockHidden=false
    //% color="#e9d44c"
    //% blockHidden=true
    export function micropython_exec_js(code: string) {

    }


}



enum AccessoryType {
    //% block="fan"
    //% block.loc.vi="__________________________________"
    CID_FAN,
    //% block="garage door opener"
    //% block.loc.vi="__________________________________"
    CID_GARAGE_DOOR_OPENER,
    //% block="lighting"
    //% block.loc.vi="__________________________________"
    CID_LIGHTING,
    //% block="lock"
    //% block.loc.vi="__________________________________"
    CID_LOCK,
    //% block="outlet"
    //% block.loc.vi="__________________________________"
    CID_OUTLET,
    //% block="switch"
    //% block.loc.vi="__________________________________"
    CID_SWITCH,
    //% block="thermostat"
    //% block.loc.vi="__________________________________"
    CID_THERMOSTAT,
    //% block="sensor"
    //% block.loc.vi="__________________________________"
    CID_SENSOR,
    //% block="security system"
    //% block.loc.vi="__________________________________"
    CID_SECURITY_SYSTEM,
    //% block="door"
    //% block.loc.vi="__________________________________"
    CID_DOOR,
    //% block="window"
    //% block.loc.vi="__________________________________"
    CID_WINDOW,
    //% block="window covering"
    //% block.loc.vi="__________________________________"
    CID_WINDOW_COVERING,
    //% block="programmable switch"
    //% block.loc.vi="__________________________________"
    CID_PROGRAMMABLE_SWITCH,
    //% block="video doorbell"
    //% block.loc.vi="__________________________________"
    CID_VIDEO_DOORBELL,
    //% block="air purifier"
    //% block.loc.vi="__________________________________"
    CID_AIR_PURIFIER,
    //% block="heater"
    //% block.loc.vi="__________________________________"
    CID_HEATER,
    //% block="air conditioner"
    //% block.loc.vi="__________________________________"
    CID_AIR_CONDITIONER,
    //% block="humidifier"
    //% block.loc.vi="__________________________________"
    CID_HUMIDIFIER,
    //% block="dehumidifier"
    //% block.loc.vi="__________________________________"
    CID_DEHUMIDIFIER,
}
/*
  //% block="reserved"
  //% block.loc.vi="__________________________________"
  CID_RESERVED, 
  //% block="IP camera"
  //% block.loc.vi="__________________________________"
  CID_IP_CAMERA, 
    //% block="none"
  //% block.loc.vi="__________________________________"CI
  D_NONE,
  //% block="other"
  //% block.loc.vi="__________________________________"
  CID_OTHER,
  //% block="bridge"
  //% block.loc.vi="__________________________________"
  CID_BRIDGE,



*/

enum CharacteristicType {
    // //% block="administrator only access"
    //% block.loc.vi="__________________________________"// 
    UUID_ADMINISTRATOR_ONLY_ACCESS,
    // //% block="audio feedback"
    //% block.loc.vi="__________________________________"// 
    UUID_AUDIO_FEEDBACK,
    //% block="brightness"
    //% block.loc.vi="__________________________________"
    UUID_BRIGHTNESS,
    //% block="cooling threshold temperature"
    //% block.loc.vi="__________________________________"
    UUID_COOLING_THRESHOLD_TEMPERATURE,
    //% block="current door state"
    //% block.loc.vi="__________________________________"
    UUID_CURRENT_DOOR_STATE,
    //% block="current heating cooling state"
    //% block.loc.vi="__________________________________"
    UUID_CURRENT_HEATING_COOLING_STATE,
    //% block="current relative humidity"
    //% block.loc.vi="__________________________________"
    UUID_CURRENT_RELATIVE_HUMIDITY,
    //% block="current temperature"
    //% block.loc.vi="__________________________________"
    UUID_CURRENT_TEMPERATURE,
    // //% block="firmware version"
    //% block.loc.vi="__________________________________"// 
    UUID_FIRMWARE_REVISION,
    // //% block="hardware version"
    //% block.loc.vi="__________________________________"// 
    UUID_HARDWARE_REVISION,
    //% block="heating threshold temperature"
    //% block.loc.vi="__________________________________"
    UUID_HEATING_THRESHOLD_TEMPERATURE,
    //% block="hue"
    //% block.loc.vi="__________________________________"
    UUID_HUE,
    // //% block="identify"
    //% block.loc.vi="__________________________________"// 
    UUID_IDENTIFY,
    // //% block="lock control point"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_CONTROL_POINT,
    //% block="lock current state"
    //% block.loc.vi="__________________________________"
    UUID_LOCK_CURRENT_STATE,
    // //% block="last known action"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_LAST_KNOWN_ACTION,
    // //% block="lock management auto security timeout"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_MANAGEMENT_AUTO_SECURITY_TIMEOUT,
    //% block="lock target state"
    //% block.loc.vi="__________________________________"
    UUID_LOCK_TARGET_STATE,
    // //% block="logs"
    //% block.loc.vi="__________________________________"// 
    UUID_LOGS,
    // //% block="manufacturer"
    //% block.loc.vi="__________________________________"// 
    UUID_MANUFACTURER,
    // //% block="model"
    //% block.loc.vi="__________________________________"// 
    UUID_MODEL,
    //% block="motion detected"
    //% block.loc.vi="__________________________________"
    UUID_MOTION_DETECTED,
    //% block="name"
    //% block.loc.vi="__________________________________"
    UUID_NAME,
    //% block="obstruction detected"
    //% block.loc.vi="__________________________________"
    UUID_OBSTRUCTION_DETECTED,
    //% block="on/off"
    //% block.loc.vi="__________________________________"
    UUID_ON,
    //% block="outlet in use"
    //% block.loc.vi="__________________________________"
    UUID_OUTLET_IN_USE,
    // //% block="rotation direction"
    //% block.loc.vi="__________________________________"UUI
    D_ROTATION_DIRECTION,
    //% block="rotation speed"
    //% block.loc.vi="__________________________________"
    // UUID_ROTATION_SPEED,
    //% block="saturation"
    //% block.loc.vi="__________________________________"
    UUID_SATURATION,
    // //% block="serial number"
    //% block.loc.vi="__________________________________"// 
    UUID_SERIAL_NUMBER,
    //% block="target door state"
    //% block.loc.vi="__________________________________"
    UUID_TARGET_DOOR_STATE,
    // //% block="target heating cooling state"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_HEATING_COOLING_STATE,
    // //% block="target relative humidity"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_RELATIVE_HUMIDITY,
    //% block="target temperature"
    //% block.loc.vi="__________________________________"
    UUID_TARGET_TEMPERATURE,
    //% block="temperature display units"
    //% block.loc.vi="__________________________________"
    UUID_TEMPERATURE_DISPLAY_UNITS,
    // //% block="version"
    //% block.loc.vi="__________________________________"// 
    UUID_VERSION,
    // //% block="air particulate density"
    //% block.loc.vi="__________________________________"// 
    UUID_AIR_PARTICULATE_DENSITY,
    // //% block="air particulate size"
    //% block.loc.vi="__________________________________"// 
    UUID_AIR_PARTICULATE_SIZE,
    // //% block="security system current state"
    //% block.loc.vi="__________________________________"// 
    UUID_SECURITY_SYSTEM_CURRENT_STATE,
    // //% block="security system target state"
    //% block.loc.vi="__________________________________"// 
    UUID_SECURITY_SYSTEM_TARGET_STATE,
    // //% block="battery level"
    //% block.loc.vi="__________________________________"// 
    UUID_BATTERY_LEVEL,
    //% block="carbon monoxide detected"
    //% block.loc.vi="__________________________________"
    UUID_CARBON_MONOXIDE_DETECTED,
    //% block="contact sensor state"
    //% block.loc.vi="__________________________________"
    UUID_CONTACT_SENSOR_STATE,
    //% block="current ambient light level"
    //% block.loc.vi="__________________________________"
    UUID_CURRENT_AMBIENT_LIGHT_LEVEL,
    // //% block="current horizontal tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_HORIZONTAL_TILT_ANGLE,
    // //% block="current position"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_POSITION,
    // //% block="current vertical tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_VERTICAL_TILT_ANGLE,
    // //% block="hold position"
    //% block.loc.vi="__________________________________"// 
    UUID_HOLD_POSITION,
    //% block="leak detected"
    //% block.loc.vi="__________________________________"
    UUID_LEAK_DETECTED,
    //% block="occupancy detection"
    //% block.loc.vi="__________________________________"
    UUID_OCCUPANCY_DETECTED,
    // //% block="position state"
    //% block.loc.vi="__________________________________"// 
    UUID_POSITION_STATE,
    // //% block="programmable switch event"
    //% block.loc.vi="__________________________________"// 
    UUID_PROGRAMMABLE_SWITCH_EVENT,
    // //% block="status active"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_ACTIVE,
    //% block="smoke detected"
    //% block.loc.vi="__________________________________"
    UUID_SMOKE_DETECTED,
    // //% block="status fault"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_FAULT,
    // //% block="status jammed"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_JAMMED,
    // //% block="status low battery"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_LOW_BATTERY,
    // //% block="status tampered"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_TAMPERED,
    // //% block="target horizontal tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_HORIZONTAL_TILT_ANGLE,
    // //% block="target position"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_POSITION,
    // //% block="target vertical tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_VERTICAL_TILT_ANGLE,
    // //% block="status security system alarm type"
    //% block.loc.vi="__________________________________"// 
    UUID_STATUS_SECURITY_SYSTEM_ALARM_TYPE,
    // //% block="charging state"
    //% block.loc.vi="__________________________________"// 
    UUID_CHARGING_STATE,
    // //% block="carbon monoxide level"
    //% block.loc.vi="__________________________________"// 
    UUID_CARBON_MONOXIDE_LEVEL,
    // //% block="carbon monoxide peak level"
    //% block.loc.vi="__________________________________"// 
    UUID_CARBON_MONOXIDE_PEAK_LEVEL,
    // //% block="carbon dioxide detected"
    //% block.loc.vi="__________________________________"UUI
    D_CARBON_DIOXIDE_DETECTED,
    //% block="carbon dioxide level"
    //% block.loc.vi="__________________________________"
    // UUID_CARBON_DIOXIDE_LEVEL,
    // //% block="carbon dioxide peak level"
    //% block.loc.vi="__________________________________"// 
    UUID_CARBON_DIOXIDE_PEAK_LEVEL,
    //% block="air quality"
    //% block.loc.vi="__________________________________"
    UUID_AIR_QUALITY,
    // //% block="accessory flags"
    //% block.loc.vi="__________________________________"// 
    UUID_ACCESSORY_FLAGS,
    // //% block="physical controls"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_PHYSICAL_CONTROLS,
    // //% block="current air purifier state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_AIR_PURIFIER_STATE,
    // //% block="current slat state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_SLAT_STATE,
    // //% block="slat type"
    //% block.loc.vi="__________________________________"// 
    UUID_SLAT_TYPE,
    // //% block="filter life level"
    //% block.loc.vi="__________________________________"// 
    UUID_FILTER_LIFE_LEVEL,
    // //% block="filter change indication"
    //% block.loc.vi="__________________________________"// 
    UUID_FILTER_CHANGE_INDICATION,
    // //% block="reset filter indication"
    //% block.loc.vi="__________________________________"// 
    UUID_RESET_FILTER_INDICATION,
    // //% block="target air purifier state"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_AIR_PURIFIER_STATE,
    // //% block="target fan state"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_FAN_STATE,
    // //% block="current fan state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_FAN_STATE,
    // //% block="active"
    //% block.loc.vi="__________________________________"// 
    UUID_ACTIVE,
    // //% block="swing mode"
    //% block.loc.vi="__________________________________"// 
    UUID_SWING_MODE,
    // //% block="current tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_TILT_ANGLE,
    // //% block="target tilt angle"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_TILT_ANGLE,
    // //% block="ozone density"
    //% block.loc.vi="__________________________________"// 
    UUID_OZONE_DENSITY,
    // //% block="nitrogen dioxide density"
    //% block.loc.vi="__________________________________"// 
    UUID_NITROGEN_DIOXIDE_DENSITY,
    // //% block="sulphur dioxide density"
    //% block.loc.vi="__________________________________"// 
    UUID_SULPHUR_DIOXIDE_DENSITY,
    // //% block="PM2.5 density"
    //% block.loc.vi="__________________________________"// 
    UUID_PM_2_5_DENSITY,
    // //% block="PM10 density"
    //% block.loc.vi="__________________________________"// 
    UUID_PM_10_DENSITY,
    // //% block="VOC density"
    //% block.loc.vi="__________________________________"// 
    UUID_VOC_DENSITY,
    // //% block="service label index"
    //% block.loc.vi="__________________________________"// 
    UUID_SERVICE_LABEL_INDEX,
    // //% block="service label namespace"
    //% block.loc.vi="__________________________________"// 
    UUID_SERVICE_LABEL_NAMESPACE,
    // //% block="color temperature"
    //% block.loc.vi="__________________________________"// 
    UUID_COLOR_TEMPERATURE,
    // //% block="current heater cooler state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_HEATER_COOLER_STATE,
    // //% block="target heater cooler state"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_HEATER_COOLER_STATE,
    // //% block="current(de)humidifier state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_HUMIDIFIER_DEHUMIDIFIER_STATE,
    // //% block="target (de)humidifier state"
    //% block.loc.vi="__________________________________"// 
    UUID_TARGET_HUMIDIFIER_DEHUMIDIFIER_STATE,
    // //% block="target (de)humidifier state"
    //% block.loc.vi="__________________________________"// 
    UUID_WATER_LEVEL,
    // //% block="water level"
    //% block.loc.vi="__________________________________"// 
    UUID_RELATIVE_HUMIDITY_DEHUMIDIFIER_THRESHOLD,
    // //% block="relative humidity threshold"
    //% block.loc.vi="__________________________________"// 
    UUID_RELATIVE_HUMIDITY_HUMIDIFIER_THRESHOLD,
    // //% block="program mode"
    //% block.loc.vi="__________________________________"// 
    UUID_PROGRAM_MODE,
    // //% block="in use"
    //% block.loc.vi="__________________________________"// 
    UUID_IN_USE,
    // //% block="set duration"
    //% block.loc.vi="__________________________________"// 
    UUID_SET_DURATION,
    // //% block="remaining duration"
    //% block.loc.vi="__________________________________"// 
    UUID_REMAINING_DURATION,
    // //% block="valve type"
    //% block.loc.vi="__________________________________"// 
    UUID_VALVE_TYPE,
    // //% block="is configured"
    //% block.loc.vi="__________________________________"// 
    UUID_IS_CONFIGURED,
    // //% block="input source type"
    //% block.loc.vi="__________________________________"// 
    UUID_INPUT_SOURCE_TYPE,
    // //% block="input accessory type"
    //% block.loc.vi="__________________________________"// 
    UUID_INPUT_DEVICE_TYPE,
    // //% block="closed captions"
    //% block.loc.vi="__________________________________"// 
    UUID_CLOSED_CAPTIONS,
    // //% block="power mode selection"
    //% block.loc.vi="__________________________________"// 
    UUID_POWER_MODE_SELECTION,
    // //% block="configured name"
    //% block.loc.vi="__________________________________"// 
    UUID_CONFIGURED_NAME,
    // //% block="identifier"
    //% block.loc.vi="__________________________________"// 
    UUID_IDENTIFIER,
    // //% block="active identifier"
    //% block.loc.vi="__________________________________"// 
    UUID_ACTIVE_IDENTIFIER,
    // //% block="sleep discovery mode"
    //% block.loc.vi="__________________________________"// 
    UUID_SLEEP_DISCOVERY_MODE,
    // //% block="current media state"
    //% block.loc.vi="__________________________________"// 
    UUID_CURRENT_MEDIA_STATE,
    // //% block="picture mode"
    //% block.loc.vi="__________________________________"// 
    UUID_PICTURE_MODE,
    // //% block="remote key"
    //% block.loc.vi="__________________________________"// 
    UUID_REMOTE_KEY,
    // //% block="product data"
    //% block.loc.vi="__________________________________"// 
    UUID_PRODUCT_DATA,
}

enum ServiceType {
    // //% block="accessory information"
    //% block.loc.vi="__________________________________"// 
    UUID_ACCESSORY_INFORMATION,
    // //% block="protocol information"
    //% block.loc.vi="__________________________________"// 
    UUID_PROTOCOL_INFORMATION,
    //% block="fan"
    //% block.loc.vi="__________________________________"
    UUID_FAN,
    //% block="garage door opener"
    //% block.loc.vi="__________________________________"
    UUID_GARAGE_DOOR_OPENER,
    //% block="lightbulb"
    //% block.loc.vi="__________________________________"
    UUID_LIGHTBULB,
    // //% block="lock management"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_MANAGEMENT,
    // //% block="lock mechanism"
    //% block.loc.vi="__________________________________"// 
    UUID_LOCK_MECHANISM,
    //% block="switch"
    //% block.loc.vi="__________________________________"
    UUID_SWITCH,
    //% block="outlet"
    //% block.loc.vi="__________________________________"
    UUID_OUTLET,
    //% block="thermostat"
    //% block.loc.vi="__________________________________"
    UUID_THERMOSTAT,
    //% block="air quality sensor"
    //% block.loc.vi="__________________________________"
    UUID_AIR_QUALITY_SENSOR,
    // //% block="security system"
    //% block.loc.vi="__________________________________"// 
    UUID_SECURITY_SYSTEM,
    //% block="carbon monoxide sensor"
    //% block.loc.vi="__________________________________"
    UUID_CARBON_MONOXIDE_SENSOR,
    //% block="contact sensor"
    //% block.loc.vi="__________________________________"
    UUID_CONTACT_SENSOR,
    //% block="door"
    //% block.loc.vi="__________________________________"
    UUID_DOOR,
    //% block="humidity sensor"
    //% block.loc.vi="__________________________________"
    UUID_HUMIDITY_SENSOR,
    //% block="leak sensor"
    //% block.loc.vi="__________________________________"
    UUID_LEAK_SENSOR,
    //% block="light sensor"
    //% block.loc.vi="__________________________________"
    UUID_LIGHT_SENSOR,
    //% block="motion sensor"
    //% block.loc.vi="__________________________________"
    UUID_MOTION_SENSOR,
    //% block="occupancy sensor"
    //% block.loc.vi="__________________________________"
    UUID_OCCUPANCY_SENSOR,
    //% block="smoke sensor"
    //% block.loc.vi="__________________________________"
    UUID_SMOKE_SENSOR,
    //% block="stateless programmable switch"
    //% block.loc.vi="__________________________________"
    UUID_STATLESS_PROGRAMMABLE_SWITCH,
    //% block="temperature sensor"
    //% block.loc.vi="__________________________________"
    UUID_TEMPERATURE_SENSOR,
    //% block="window"
    //% block.loc.vi="__________________________________"
    UUID_WINDOW,
    //% block="window covering"
    //% block.loc.vi="__________________________________"
    UUID_WINDOW_COVERING,
    //% block="battery service"
    //% block.loc.vi="__________________________________"
    UUID_BATTERY_SERVICE,
    //% block="carbon dioxide sensor"
    //% block.loc.vi="__________________________________"
    UUID_CARBON_DIOXIDE_SENSOR,
    //% block="fan v2"
    //% block.loc.vi="__________________________________"
    UUID_FAN_V2,
    // //% block="slat"
    //% block.loc.vi="__________________________________"// 
    UUID_SLAT,
    // //% block="filter maintenance"
    //% block.loc.vi="__________________________________"// 
    UUID_FILTER_MAINTENANCE,
    //% block="air purifier"
    //% block.loc.vi="__________________________________"
    UUID_AIR_PURIFIER,
    //% block="heater cooler"
    //% block.loc.vi="__________________________________"
    UUID_HEATER_COOLER,
    //% block="(de)humidifier"
    //% block.loc.vi="__________________________________"
    UUID_HUMIDIFIER_DEHUMIDIFIER,
    // //% block="service label"
    //% block.loc.vi="__________________________________"// 
    UUID_SERVICE_LABEL,
    //% block="irrigation system"
    //% block.loc.vi="__________________________________"
    UUID_IRRIGATION_SYSTEM,
    //% block="valve"
    //% block.loc.vi="__________________________________"
    UUID_VALVE,
    //% block="faucet"
    //% block.loc.vi="__________________________________"
    UUID_FAUCET,
    //% block="television"
    //% block.loc.vi="__________________________________"
    UUID_TELEVISION,
    // //% block="input source"
    //% block.loc.vi="__________________________________"// 
    UUID_INPUT_SOURCE,
}

enum DeviceType {
    GRobot,
    GIoT
}


enum CharacteristicUnit {
    //% block="Celsius"
    UNIT_CELSIUS,
    //% block="Percentage"
    UNIT_PERCENTAGE,
    //% block="Arc Degrees"
    UNIT_ARCDEGREES,
    //% block="Lux"
    UNIT_LUX,
    //% block="Seconds"
    UNIT_SECONDS,
}

enum NotiType {
    Info,
    Warning
}

//% color="#996600" weight=600 icon="\uf015" blockGap=6
namespace SmartHome {
    //% group="Link"
    //% block="$tag when the link is clicked ► $data $path"
    //% block.loc.vi="$tag khi đường dẫn được nhấn ► $data $path"
    //% blockId="link_event"
    //% draggableParameters
    //% tag.fieldEditor="label"
    //% tag.defl="tag_link"
    //% blockHidden=true
    export function link_event(tag: string, handler: (data: any, path: string) => void) {

    }


    //% group="Apple Homekit"
    //% block="$tag when $accessory named $name updated ► $charact $value"
    //% block.loc.vi="$tag khi thiết bị $accessory $name được cập nhật ► $charact $value"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_siri"
    //% blockId="homekit_accessory_event"
    //% draggableParameters
    //% accessory.defl="CID_FAN"
    //% name.defl="bedroom fan"
    //% accessory.fieldEditor="gridpicker"
    //% accessory.fieldOptions.column=3
    //% accessory.fieldOptions.width=220
    //% weight=1000
    //% blockHidden=true
    export function homekit_accessory_event(
        tag: string,
        accessory: ServiceType,
        name: string,
        handler: (charact: string, value: any) => void
    ) {

    }

    //% group="Apple Homekit"
    //% block="$tag factory clear all accessory"
    //% block.loc.vi="$tag xóa tất cả thiết bị"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_siri_action"
    //% blockId="homekit_accessory_reset"
    //% blockHidden=true
    export function homekit_accessory_reset(
        tag: string,
    ) {

    }

    //% group="Apple Homekit"
    //% block="$tag accessory $name ► set $charact to $value"
    //% block.loc.vi="$tag thiết bị $name ► ghi trạng thái $charact thành $value"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_siri_action"
    //% name.defl="bedroom fan"
    //% blockId="homekit_accessory_set"
    //% inlineInputMode=inline
    //% charact.fieldEditor="gridpicker"
    //% charact.fieldOptions.column=3
    //% charact.fieldOptions.width=220
    //% value.shadow="math_number"
    //% blockHidden=true
    export function homekit_accessory_set(
        tag: string, name: string,
        charact: CharacteristicType, value: any
    ) {

    }
}


//% color="#0a3b8d" weight=300 icon="\uf11b" blockGap=6
namespace Bluetooth {
    //% group="Signal"
    //% block="$tag get all nearby devices"
    //% blockId="ble_scan_results"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_bluetooth"
    //% blockHidden=true
    export function ble_scan_results(tag: string): any {
        return ''
    }

    //% group="Signal"
    //% block="$tag get signal strength of $ble"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_bluetooth"
    //% ble.defl="Grobot_0511"
    //% blockId="ble_get_rssi"
    //% blockHidden=true
    export function ble_get_rssi(tag: string, ble: string): any {
        return 0
    }



    //% group="Communication"
    //% block="$tag share Internet to device %ble"
    //% blockId="grobot_ble_share"
    //% tag.defl="tag_bluetooth_action"
    //% tag.fieldEditor="label"
    //% ble.defl="GRobot 0501"
    //% blockHidden=true
    export function grobot_ble_share(tag: string, ble: string) {

    }

    //% group="Control"
    //% block="$tag control GRobot %ble to do"
    //% block.loc.vi="__________________________________"
    //% handlerStatement
    //% blockId="grobot_ble_control"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_bluetooth_action"
    //% ble.defl="1304"
    //% blockHidden=true
    export function grobot_ble_control(tag: string, ble: string, handler: () => void) {

    }
    //% group="Control"
    //% block="$tag ask %ble about value of $query"
    //% block.loc.vi="__________________________________"
    //% blockId="grobot_ble_query"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_bluetooth"
    //% ble.defl="GRobot 0501"
    //% blockHidden=true
    export function grobot_ble_query(tag: string, ble: string, query: any): any {
        return 0;
    }
}

//% color="#f76821" weight=6000 icon="\uf0db" blockGap=6
namespace GaraBlock {
    //% block="GaraBlock: say  $text"
    //% block.loc.vi="__________________________________"
    //% blockId="gb_say_multiple"
    //% module.fieldEditor="label"
    //% module.defl="tag_speaker"
    //% group="Voice"
    //% expandableArgumentMode=enabled
    //% inlineInputMode=inline
    //% text.shadow="text"
    //% text.defl="hello world"
    //% blockHidden=false
    //% wifi.fieldEditor="label"
    export function gb_say_multiple(
        // type: ReturnTypeList,
        text: any,
    ) {
    }

    //% block="GaraBlock: get answer for $text"
    //% blockId="gb_input"
    //% text.shadow="text"
    export function gb_input(text: any): any {
        return true
    }

    //% block="GaraBlock: play song $text || from second $start to second $stop"
    //% blockId="gb_play"
    //% text.defl="Input Youtube Link"
    //% text.shadow=text
    //% blockHidden=true
    export function gb_play(text: any, start: number, stop: number) {

    }


    //% block="GaraBlock: show text $text"
    //% blockId="gb_noti"
    //% text.shadow=text
    //% text.defl="Hello"
    export function gb_noti(text: any) {

    }

}

//% color="#9966ff" weight=500 icon="\uf140" blockGap=12
namespace AI {

    //% blockId="livestream"
    //% block="from livestream $streamId"
    //% block.loc.vi="lấy ảnh từ livestream $streamId"
    //% color="#a5268b"
    //% group="Video Stream"
    export function livestream(streamId: string) {
        return 0;
    }


    //% block="$module match $stream with model $model ► $matched $confidence"
    //% block.loc.vi="__________________________________"
    //% blockId="makecode_ml_matchimage"
    //% group="Machine Learning"
    //% model.shadow="text"
    //% stream.shadow="webcam_frame"
    //% module.fieldEditor="label"
    //% module.defl="tag_tensorflow"
    //% handlerStatement
    //% draggableParameters
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    export function makecode_ml_matchimage(module: string, stream: any, model: any, handler: (matched: any, confidence: any) => void) {
    }

    //% color="#6633dd"
    //% block="TFLite model %link"
    //% blockId="tflite_file"
    //% blockHidden=true 
    export function tflite_file(link: string): any {
        return ''
    }
    //% block="TensorFlow.js model %link"
    //% blockId="tensorjs_file"
    //% blockHidden=true 
    export function tensorjs_file(link: string): any {
        return ''
    }

    //% block="trained model $model"
    //% block.loc.vi="__________________________________"
    //% blockId="pretrained_model"
    //% blockHidden=true
    export function tflite_model(model: PretrainedModel) {
        return "model"
    }
    //% block="$type model named $model"
    //% block.loc.vi="__________________________________"
    //% blockId="custom_model"
    //% group="Machine Learning"
    //% model.movable=false
    //% blockHidden=true
    export function custom_model(type: ImageOrSound, model: string) {
        return model
    }

}

enum LanguageType {
    Vietnamese,
    English,
    Malaysian,
    Chinese,
    Japanese
}

//% color="#e30ec0" weight=400 icon="\uf0c2"
namespace Cloud {
    //% group="Group"
    //% block="$tag $wifi join group $name with password $password"
    //% block.loc.vi="__________________________________"
    //% blockId="cloud_join_group"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_group_action"
    //% weight=9000
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% inlineInputMode=inline
    //% blockHidden=true
    export function cloud_join_group(wifi: string, tag: string, name: string, password: string) {

    }

    //% blockHidden=true
    //% block="$channel"
    //% block.loc.vi="__________________________________"
    //% blockId="cloud_channels"
    //% channel.fieldEditor="gridpicker"
    //% channel.fieldOptions.column=6
    //% channel.fieldOptions.width=220
    //% weight=8990
    export function cloud_channels(channel: GroupChannelList): string {
        return ''
    }


    //% group="Group"
    //% block="$tag $wifi write $value to channel $channel of group $group"
    //% block.loc.vi="__________________________________"
    //% blockId="cloud_write_channel"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_group_action"
    //% channel.shadow="cloud_channels"
    //% value.shadow="text"
    //% weight=8980
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% inlineInputMode=inline
    export function cloud_write_channel(wifi: string, tag: string, value: any, channel: string, group: string) {

    }

    //% group="Group"
    //% block="$tag $wifi when receive message from $channel of group $group ► $message"
    //% block.loc.vi="__________________________________"
    //% draggableParameters
    //% tag.fieldEditor="label"
    //% tag.defl="tag_group"
    //% blockId="cloud_event_channel"
    //% channel.shadow="cloud_channels"
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% weight=1000
    export function cloud_event_channel(wifi: string, tag: string, channel: string, group: string, handler: (message: any) => void) {

    }



    //% block="$module $wifi control $device"
    //% block.loc.vi="__________________________________"
    //% device.defl="Another device"
    //% blockId="cloud_direct_control"
    //% group="Cloud Control"
    //% model.shadow="text"
    //% stream.shadow="webcam_frame"
    //% module.fieldEditor="label"
    //% module.defl="tag_"
    //% handlerStatement
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% blockHidden=true
    export function cloud_direct_control(module: string, wifi: string, device: string, handler: () => void) {
    }



    //% group="Google Sheet"
    //% block="$module %wifi add $cells to sheet $worksheet of speadsheet link $workbook "
    //% block.loc.vi="__________________________________"
    //% blockId="sheet_add_line"
    //% module.fieldEditor="label"
    //% module.defl="tag_sheet_action"
    //% inlineInputMode=inline
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% cells.shadow="lists_create_with"
    export function sheet_add_line(wifi: string, module: string, cells: any, worksheet: string, workbook: string) {

    }



    //% block="$module $wifi when received message from $sender ► $message "
    //% block.loc.vi="__________________________________"
    //% blockId="cloud_handle_messenger"
    //% draggableParameters
    //% module.fieldEditor="label"
    //% module.defl="tag_messenger"
    //% group="Messenger"
    //% weight=1000
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% sender.shadow="cloud_id_messenger"
    export function cloud_handle_messenger(sender: string, wifi: string, module: string, handler: (sender: string, message: string) => void) {
    }

    //% block="$module $wifi send message $message to $sender"
    //% block.loc.vi="__________________________________"
    //% blockId="cloud_send_messenger"
    //% draggableParameters
    //% module.fieldEditor="label"
    //% module.defl="tag_messenger_action"
    //% group="Messenger"
    //% message.shadow="text"
    //% weight=999
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% inlineInputMode=inline
    //% sender.shadow="cloud_id_messenger"
    export function cloud_send_messenger(wifi: string, module: string, message: any, sender: any) {

    }

    //% block="%module User %userid"
    //% blockId="cloud_id_messenger"
    //% module.defl="tag_messenger"
    //% module.fieldEditor="label"
    //% group="Messenger"
    //% weight=999
    //% blockHidden=true
    export function cloud_id_messenger(module: string, userid: string): string {
        return ''
    }


    //% block="$module $wifi every $date at $hour : $minute"
    //% block.loc.vi="__________________________________"
    //% group="Clock"
    //% blockId="cloud_clock_event"
    //% module.fieldEditor="label"
    //% module.defl="tag_clock"
    //% time.defl="7:00"
    //% date.fieldEditor="gridpicker"
    //% date.fieldOptions.column=3
    //% date.fieldOptions.width=220
    //% hour.min=0 hour.max=24
    //% minute.min=0 minute.max=60
    //% weight=1000
    //% hour.defl=6
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    export function cloud_clock_event(wifi: string, module: string, date: DayOfWeek, hour: number, minute: number, handler: () => void) {

    }

    //% block="$module $wifi current $type"
    //% block.loc.vi="__________________________________"
    //% group="Clock"
    //% blockId="cloud_clock_get"
    //% module.fieldEditor="label"
    //% module.defl="tag_clock"
    //% time.defl="7:00"
    //% type.fieldEditor="gridpicker"
    //% type.fieldOptions.column=3
    //% type.fieldOptions.width=220
    //% weight=999
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    export function cloud_clock_get(wifi: string, module: string, type: TimeType): any {
        return 0;
    }


    //% block="$module $wifi current time as $format"
    //% block.loc.vi="__________________________________"
    //% group="Clock"
    //% blockId="cloud_clock_format"
    //% module.fieldEditor="label"
    //% module.defl="tag_clock"
    //% format.defl="YYYY/MM/DD hh:mm:ss"
    //% weight=999
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    export function cloud_clock_format(wifi: string, module: string, format: string): string {
        return '';
    }








    //% block="$icon $wifi trigger function $fname || with  $arg1 | $arg2 | $arg3| $arg4| $arg5| $arg6"
    //% block.loc.vi="__________________________________"
    //% icon.fieldEditor="label"
    //% icon.defl="tag_python"
    //% group="Cloud Computing"
    //% expandableArgumentMode=enabled
    //% inlineInputMode=inline
    //% blockId=cloud_RunOnLambda
    //% wifi.fieldEditor="label"
    //% wifi.defl="logo_wifi"
    //% blockHidden=true
    export function Cloud_RunOnLambda(
        icon: string,
        wifi: string,
        // type: ReturnTypeList,
        fname: string,
        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
        arg6?: any
    ): any {
        return;
    }

    //% block="$icon $code"
    //% block.loc.vi="__________________________________"
    //% code.fieldEditor="monaco"
    //% code.defl="# Write your Python code here"
    //% icon.fieldEditor="label"
    //% icon.defl="p"
    //% group="Lambda Computing"
    //% blockId="cloud_lambda_setcode"
    //% blockHidden=true
    export function cloud_lambda_setcode(icon: string, code: string) {
        // console.log('RunOnCloud', code)
    }

    //% block="$icon get value of $code"
    //% block.loc.vi="__________________________________"
    //% code.fieldEditor="monaco"
    //% code.defl="# Write your Python code here"
    //% icon.fieldEditor="label"
    //% icon.defl="p"
    //% group="Lambda Computing"
    //% blockId="cloud_lambda_readresult"
    //% blockHidden=true
    export function cloud_lambda_readresult(icon: any, code: String): number | string {
        return '""';
    }


    //% block="$icon trigger topic $topic"
    //% blockId="cloud_ifttt_write"
    //% group="If This Then That (IFTTT)"
    //% icon.fieldEditor="label"
    //% icon.defl="tag_ifttt_action"
    export function cloud_ifttt_write(icon: string, topic: string) {

    }
    //% block="$icon set key $key"
    //% blockId="cloud_ifttt_config"
    //% group="If This Then That (IFTTT)"
    //% icon.fieldEditor="label"
    //% icon.defl="tag_ifttt_action"
    export function cloud_ifttt_config(icon: string, key: string) {

    }
    ``

    //% block="%icon set key $key"
    //% blockId="cloud_thingspeak_config"
    //% group="ThingSpeak"
    //% icon.fieldEditor="label"
    //% icon.defl="tag_thingspeak_action"
    export function cloud_thinkspeak_config(icon: string, key: string) {

    }



    //% block="%icon update channel $channel"
    //% blockId="cloud_thingspeak_update"
    //% group="ThingSpeak"
    //% icon.fieldEditor="label"
    //% icon.defl="tag_thingspeak_action"
    export function cloud_thinkspeak_update(icon: string, channel: string, value: any) {

    }

    //% block="$tag add wifi name $ssid with password $password"
    //% block.loc.vi="__________________________________"
    //% blockId="network_wifi_setconnect"
    //% blockHidden=false
    //% tag.fieldEditor="label"
    //% tag.defl="tag_wifi_action"
    //% group="Wifi"
    export function network_wifi_setconnect(tag: string, ssid: string, password: string) { }


    //% block="$tag is connected"
    //% block.loc.vi="__________________________________"
    //% blockId="network_wifi_isconnected"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_wifi"
    //% group="Wifi"
    export function network_wifi_isconnected(tag: string): boolean {
        return false
    }

    //% block="$tag connected wifi name"
    //% block.loc.vi="__________________________________"
    //% blockId="network_wifi_getssid"
    //% group="Wifi"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_wifi"
    export function network_wifi_getssid(tag: string): string {
        return ""
    }

}

//% color="#20bf6b" weight=1003 icon="\uf0c2"
namespace loops {
    //% block="wait until $cond"`
    //% block.loc.vi="__________________________________"
    //% blockId="wait_until"
    export function wait_until(cond: boolean) {

    }
    //% block="run in parallel"
    //% block.loc.vi="__________________________________"
    //% handlerStatement
    //% blockId="run_in_background"
    //% blockHidden=true
    export function run_in_background(handler: () => void) {

    }

    //% blockId="pxt-on-start"
    //% blockHidden=true
    export function pxt_on_start_shadow(handler: () => void) {

    }

}

enum VariableLocation {
    Flash,
    Cloud
}

//% color="#45aaf2" weight=1002 icon="\uf0c2"
namespace Logic { }
//% color="#ec3b59" weight=1001 icon="\uf0c2"
namespace variables {
    //% block="set location of $variable to $type"
    //% block.loc.vi="__________________________________"
    //% blockId="variable_set_location"
    export function varaible_set_location(variable: any, type: VariableLocation) {

    }

}
//% color="#a5eeaF" weight=1000 icon="\uf0c2"
namespace Math { }

enum GBMoveMotor {
    //% block="Move Forward"
    //% block.loc.vi="__________________________________"
    MoveForward,
    //% block="Move Backward"
    //% block.loc.vi="__________________________________"
    MoveBackward,
    //% block="Rotate Left"
    //% block.loc.vi="__________________________________"
    RotateLeft,
    //% block="Rotate Right"
    //% block.loc.vi="__________________________________"
    RotateRight,
    //% block="Turn Left"
    //% block.loc.vi="__________________________________"
    TurnLeft,
    //% block="Turn Right"
    //% block.loc.vi="__________________________________"
    TurnRight,
}
enum MotorSelection {
    M1,
    M2,
}
enum PressOrRelease {
    Pressed,
    Released,
}
enum LineSensorSelector {
    //% block="Sensor 1"
    //% block.loc.vi="__________________________________"
    Sensor1,
    //% block="Sensor 2"
    //% block.loc.vi="__________________________________"
    Sensor2,
    //% block="Sensor 3"
    //% block.loc.vi="__________________________________"
    Sensor3,
    //% block="Sensor 4"
    //% block.loc.vi="__________________________________"
    Sensor4,
}
enum LineSensorSelector2 {
    //% block="Left"
    //% block.loc.vi="Trái"
    Sensor1,
    //% block="Right"
    //% block.loc.vi="Phải"
    Sensor2,
}
enum MusicSongSelector {
    //% block="Happy Birthday"
    HappyBirthday,
    //% block="Happy New Year"
    HappyNewYear,
    //% block="Kìa con bướm vàng"
    KiaConBuomVang,
    //% block="Kiss The Rain"
    KissTheRain,
    //% block="Jingle Bell"
    JingleBell,
}

enum Programe {
    //% block="Programe 1"
    Programe_1,
    //% block="Programe 2"
    Programe_2,
    //% block="Programe 3"
    Programe_3,
    // //% block="Programe 4"
    // Programe_4,
    // //% block="Programe 5"
    // Programe_5,
}

enum WheelType {
    //% block="yellow wheel"
    YellowVariant,
    //% block="white wheel"
    WhiteVariant,
}

//% color="#0a909f" weight=1000 icon="\uf013" blockGap=6
namespace grobot {

    //% blockId="grobot_attach_encoder"
    //% block="Grobot: attach speedometer to %port"
    //% block.loc.vi = "Grobot: kết nối đo tốc độ bánh vào $port"
    //% advanced=true
    //% group="Settings"
    //% weight=10
    export function grobot_attach_encoder(port: ControllerSub) {

    }

    //% blockId="grobot_select_wheel"
    //% block="GRobot: using %wheel"
    //% advanced=true
    //% blockHidden=true
    //% group="Settings"
    //% weight=9
    export function grobot_select_wheel(wheel: WheelType) {

    }


    //% blockId="grobot_set_default_speed"
    //% block="GRobot: set speed %speed"
    //% advanced=true
    //% group="Settings"
    //% speed.defl=50
    //% weight=8
    export function grobot_set_default_speed(speed: number) {

    }

    //% blockId="grobot_set_speed_range"
    //% block="Config: set motor power from $min % to $max %"
    //% advanced=true
    //% group="Config"
    //% min.defl="40"
    //% max.defl="100"
    export function grobot_set_speed_range(min: number, max: number) {

    }




    //% blockId="grobot_go_distance"
    //% block="GRobot: go %direction %dist cm"
    //% advanced=true
    //% group="Control"
    //% weight=8
    //% dist.defl=10
    export function grobot_go_distance(direction: Direction, dist: number) {

    }


    //% blockId="grobot_rotate_angle"
    //% block="GRobot: rotate %angle degrees"
    //% advanced=true
    //% angle.defl=90
    //% group="Control"
    //% weight=7
    export function grobot_rotate_angle(angle: number) {

    }








    /**
       * Get the frequency of a note.
       * @param note the note name
       */
    //% blockId=device_note block="$note"
    //% shim=TD_ID
    //% color="#ffffff" colorSecondary="#ffffff" colorTertiary="#D83B01"
    //% note.fieldEditor="note" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% blockHidden=true
    export function noteFrequency(note: Note): number {
        return note;
    }


    //% blockId="grobot_general_onstart"
    //% block="GRobot Program"
    //% block.loc.vi="Chương trình"
    //% blockGap=6
    //% blockAllowMultiple=0
    //% undeletable=1
    //% blockHidden=true
    //! [Event] GRobot-Progam
    export function GB_StartPrograme(handler: () => void) { }

    //% blockId="grobot_set_mode"
    //% block="Config: Start your program on start"
    export function grobot_set_mode() {

    }


    //% blockId="grobot_calibrate"
    //% block="Config: Set motor calibration %calib"
    export function grobot_calibrate(calib: number) {

    }
    //% blockId="grobot_calibrate_state"
    //% block="Config: Turn calibration %state"
    //% state.shadow="toggleOnOff"

    export function grobot_calibrate_state(state: boolean) {

    }

    //% blockId="grobot_set_programe"
    //% block="Config: Set this sketch to $program"
    export function grobot_set_programe(program: Programe) {

    }

    //% block="$tag Move forward at %power power"
    //% block.loc.vi="$tag đi thẳng ở mức %power (%)"
    //% blockId="GRobot_Foward_"
    //% group="Motor"
    //% weight=100
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g1"
    export function GRobot_Foward(tag: string, power: number) { }
    //% block="$tag Move forward at $power % power for $time ms"
    //% block.loc.vi="$tag tới ở mức %power (%) trong $time (ms)"
    //% blockId="GRobot_Foward_ms"
    //% group="Motor"
    //% weight=99
    //% time.shadow="timePicker_"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g2"
    export function GRobot_Foward_ms(tag: string, power: number, time: number) { }

    //% block="$tag Move backward at $power % power"
    //% block.loc.vi="$tag "
    //% blockId="GRobot_Back_"
    //% group="Motor"
    //% weight=98
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g3"
    export function GRobot_Back_(tag: string, power: number) { }
    //% block="$tag Move backward at $power % power for $time ms"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_Back_ms"
    //% group="Motor"
    //% weight=97
    //% time.shadow="timePicker_"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g4"
    export function GRobot_Back_ms(tag: string, power: number, time: number) { }

    //% block="$tag Stop moving"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_Stop"
    //% group="Motor"
    //% weight=96
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g5"
    export function GRobot_Stop(tag: string) { }

    //% block="$tag Rotate left at $power % power"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_RotateLeft_"
    //% group="Motor"
    //% weight=95
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g6"
    export function GRobot_RotateLeft_(tag: string, power: number) { }



    //% block="$tag Rotate right at $power % power"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_RotateRight_"
    //% group="Motor"
    //% weight=94
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g7"
    export function GRobot_RotateRight_(tag: string, power: number) { }

    //% block="$tag Turn left at $power % power"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_TurnLeft_"
    //% group="Motor"
    //% weight=93
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g8"
    export function GRobot_TurnLeft_(tag: string, power: number) { }

    //% block="$tag Turn right at $power % power"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_TurnRight_"
    //% group="Motor"
    //% weight=92
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g9"
    export function GRobot_TurnRight_(tag: string, power: number) { }

    //% block="$tag Spin motor M1 at $power % power"
    //% block.loc.vi="__________________________________"
    //% blockId="GRobot_motor_1_"
    //% group="Motor"
    //% weight=91
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g10"
    export function GRobot_motor_1_(tag: string, power: number) { }

    //% block="$tag Spin motor M2 at $power % power"
    //% block.loc.vi="$tag Xoay động cơ M2 với tốc độ là $power"
    //% blockId="GRobot_motor_2_"
    //% group="Motor"
    //% weight=90
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g11"
    export function GRobot_motor_2_(tag: string, power: number) { }

    //% block="$tag Turn Buzzer $state for $time ms"
    //% block.loc.vi="$tag Buzzer: điều khiển $state"
    //% blockId="SetBuzzer"
    //% group="Buzzer"
    //% weight=89
    //% state.shadow="toggleOnOff"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g12"
    //% blockHidden=true
    export function SetBuzzer(tag: string, state: boolean) { }

    //% block="$tag Turn Buzzer $state for $time ms"
    //% block.loc.vi="$tag Buzzer: điều khiển $state"
    //% blockId="grobot_set_buzzer"
    //% group="Buzzer"
    //% weight=89
    //% state.shadow="toggleOnOff"
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g12"
    //% blockHidden=true
    //% time.shadow="timePicker_"
    export function grobot_set_buzzer(tag: string, state: boolean, time: number) { }

    //% block="$tag Button onboard is being pressed"
    //% block.loc.vi="$tag "
    //% blockId="GetButtonOnboard"
    //% group="Button"
    //% weight=88
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g13"
    export function GetButtonOnboard(tag: string): boolean {
        return false;
    }

    //% block="$tag Follow Line 5 Channel: read $channel"
    //% block.loc.vi="__________________________________"
    //% blockId="GetFL5Channel"
    //% group="Line Sensor"
    //% weight=87
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g14"
    export function GetFL5Channel(tag: string, channel: FL5Channel): boolean {
        return false;
    }

    //% block="$state"
    //% blockId="ls_state_picker_"
    //% group="Line Sensor"
    //% weight=87
    export function ls_state_picker_(state: LineSensorState): boolean {
        return false
    }


    //% block="$tag Follow Line 5 Channel: $state $channel"
    //% block.loc.vi="__________________________________"
    //% blockId="GetFL5Channel_V2"
    //% group="Line Sensor"
    //% weight=87
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g14"
    //% state.shadow="ls_state_picker_"
    //% blockHidden=true
    export function GetFL5Channel_V2(tag: string, channel: FL5Channel, state: boolean): boolean {
        // this block can't be use because firmware doesnt support masking :(
        return false;
    }




    //% block="$tag Follow Line 5 Channel: check if C1$c1 C2$c2 C3$c3 C4$c4"
    //% block.loc.vi="__________________________________"
    // tag Check Follow-line 5 Channel sensor: Channel 1 = $c1, Channel 2 = $c2, Channel 3 = $c3, Channel 4 = $c4"
    //% blockId="GetFL5Channel_B"
    //% group="Line Sensor"
    //% weight=86
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g15"
    //% inlineInputMode=inline
    //% c1.shadow="ls_state_picker_"
    //% c2.shadow="ls_state_picker_"
    //% c3.shadow="ls_state_picker_"
    //% c4.shadow="ls_state_picker_"

    export function GetFL5Channel_B(
        tag: string,
        c1: boolean,
        c2: boolean,
        c3: boolean,
        c4: boolean
    ): boolean {
        return false;
    }



    //% block="$tag Music: Song $song"
    //% block.loc.vi="__________________________________"
    //% blockId="Musics_Soundtrack"
    //% group="Music"
    //% weight=85
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g16"
    //% blockHidden=true
    export function Musics_Soundtrack(tag: string, song: MusicSongSelector) { }

    //% block="$tag Music: Play note $note for $beat "
    //% block.loc.vi="__________________________________"
    //% blockId="Musics_Basic"
    //% group="Music"
    //% weight=84
    //% beat.defl=0.25
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g17"
    //% note.fieldEditor="note" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    export function Musics_Basic(tag: string, note: Note, beat: NoteLength) { }

    //% block="$tag Music: Play a tone at frequency $freq for $time milliseconds"
    //% block.loc.vi="__________________________________"
    //% blockId="PlayTone"
    //% group="Music"
    //% weight=83
    //% freq.defl=636
    //% time.defl=1000
    //% time.shadow=timePicker_
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g18"
    export function PlayTone(tag: string, freq: number, time: number) { }

    //% block="$tag Music: Play note $note for $time milliseconds"
    //% block.loc.vi="$tag Music: Chơi nốt $note trong $time ms"
    //% blockId="PlayNote"
    //% group="Music"
    //% weight=82
    //% time.shadow=timePicker_
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g19"
    //% note.fieldEditor="note" note.defl="262"
    //% note.fieldOptions.decompileLiterals=true
    //% useEnumVal=1  
    export function PlayNote(tag: string, note: Note, time: number) { }

    //% block="$tag Music: Set beats per minute to $bpm"
    //% block.loc.vi="$tag Music: chỉnh tốc độ nhạc thành $bpm"
    //% blockId="SetBPM"
    //% group="Music"
    //% weight=81
    //% bpm.defl=120
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g20"
    export function SetBPM(tag: string, bpm: number) { }

    //% block="$tag Music: Wait for $beat"
    //% block.loc.vi="$tag Music: đợi trong $beat nhịp"
    //% blockId="PlayMute"
    //% group="Music"
    //% weight=80
    //% beat.defl=1
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g21"
    export function PlayMute(tag: string, beat: NoteLength) { }

    //% block="$tag Music: Play $semi semitones from middle C for $beat beats"
    //% block.loc.vi="$tag Music: chơi nốt thứ $semi tính từ phím C trưởng trong $beats nhịp"
    //% blockId="PlayNote_"
    //% group="Music"
    //% weight=79
    //% beat.defl=1
    //% tag.fieldEditor="label"
    //% tag.defl="tag_g22"
    //% blockHidden=true
    export function PlayNote_(tag: string, semi: number, beat: number) { }






    //% group="Pixel"
    //% blockId="grobot_pixel_setcolourall"
    //% block="$module Pixel: set colour $colour"
    //% block.loc.vi="$module Pixel: đổi màu thành $colour"
    //% module.fieldEditor="label"
    //% module.defl="tag_g23"
    //% colour.shadow="colorNumberPicker"
    //% weight=100
    export function GB_PixelSetAll(module: string, colour: number) { }

    //% group="Pixel"
    //% blockId="grobot_pixel_setcoloursingle"
    //% block="$module Pixel: set colour $colour at position %position"
    //% block.loc.vi="$module Pixel: đổi màu của LED $position thành màu $colour"
    //% module.fieldEditor="label"
    //% module.defl="tag_g24"
    //% colour.shadow="colorNumberPicker"
    //% position.min=0 position.max=12
    //% weight=99
    export function GB_PixelSetSingle(
        module: string,
        colour: number,
        position: number
    ) { }

    //% group="Pixel"
    //% blockId="grobot_pixel_setoff"
    //% block="$module Pixel: turn OFF"
    //% block.loc.vi="$module Pixel: Tắt đèn"
    //% module.fieldEditor="label"
    //% module.defl="tag_g25"
    //% colour.shadow="colorNumberPicker"
    //% position.min=0 position.max=12
    //% state.shadow="toggleOnOff"
    //% weight=98
    export function GB_PixelSetOff(module: string) { }


    //% group="Pixel"
    //% blockId="grobot_pixel_setwipe"
    //% block="$module Pixel: wipe colour %colour=colorNumberPicker at speed $speed (ms/LED)"
    //% block.loc.vi="$module Pixel: chơi hiệu ứng %colour=colorNumberPicker với tốc độ $speed (ms/LED)"
    //% module.fieldEditor="label"
    //% module.defl="tag_g26"
    //% speed.min=0 speed.max=1000
    //% speed.defl=30
    //% weight=97
    export function GB_PixelSetWipe(
        module: string,
        colour: number,
        speed: number
    ) { }



    //% group="Pixel"
    //% blockId="pixel_colour"
    //% block="R$r G$g B$b"
    //% block.loc.vi="R$r G$g B$b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% inlineInputMode=inline
    //% weight=96
    export function PixelColour(
        r: number,
        g: number,
        b: number
    ): any {
        return '#000';
    }

    //% group="Motion Sesor"
    //% blockId="motion_read"
    //% block="$module is detecting motion"
    //% port.fieldEditor="gridpicker"
    //% port.defl=[["Heheheh","WWW"]]
    //% port.fieldOptions.column=5
    //% port.fieldOptions.width=220
    //% module.fieldEditor="label"
    //% module.defl="tag_motion"
    export function motion_read(module: string): boolean {
        return false
    }

    //% group="Time"
    //% blockId="current_ticksms"
    //% block="current runtime in $type"
    //% block.loc.vi="thời gian hiện tại dưới dạng %type"
    export function current_ticksms(type: TimeUnit): any {
        return 0
    }




    //% group="Data storage"
    //% block="auto save $variable to $location"
    //% block.loc.vi="tự động lưu biến $variable vào $location"
    //% blockId="grobot_set_state_location"
    //% variable.shadow=variables_get
    //% blockNamespace=Variables
    export function grobot_set_state_location(variable: any, location: VariableLocation) {

    }




    /*
      Line Following API
      set following speed
      follow line
      if in intersection
      if can turn left
      if can turn right
  
    */
    // Prioritize this block
    //% weight=10000
    //% group="Navigator"
    //% block="Navigator: %action"
    //% blockId="navigator_noarg_action"
    //% colour=#4285f4
    //% blockHidden=true
    export function navigator_noarg_action(action: NavigatorAction) {

    }

    //% group="Navigator"
    //% block="Navigator: if %event"
    //% blockId="navigator_check_event"
    //% colour=#4285f4
    //% blockHidden=true
    export function navigator_check_event(event: NavigatorEvent): boolean {
        return false
    }

    //% group="Navigator"
    //% block="Navigator: set follow speed %speed"
    //% blockId="navigator_set_speed"
    //% colour=#4285f4
    //% blockHidden=true
    export function navigator_set_speed(speed: number) {

    }




    /*
      Extension via a port protocol
      Extension via a bluetooth protocol
  
  
    */
    //% group="Extension"
    //% block="▣ using expander on $port"
    //% block.loc.vi="__________________________________"
    //% handlerStatement
    //% blockId="grobot_extender_scoped"
    //% advance=true 
    export function grobot_extender_scoped(port: ControllerSub, handler: () => void) {

    }


}

enum NavigatorAction {
    Start,
    Stop,
    TurnLeft,
    TurnRight,
    GoBackward
}
enum NavigatorEvent {
    //% block="need attention"
    NeedAttention,
    //% block="can turn left"
    CanTurnLeft,
    //% block="can turn right"
    CanTurnRight,
    //% block="is in intersection"
    IsIntersection,
    //% block="is in line"
    IsInLine,
    //% block="is in flag point"
    IsInFlag,
    //% block="is lost"
    IsLost,
    //% block="is ready"
    IsReady,

}

//% color="#a5268b" weight=2000
namespace App {
    //% blockId="app_input_text"
    //% block="prompt with title $title and text $text"
    //% block.loc.vi="lấy thông tin được nhập với tiêu đề $title và nội dung $text"
    //% group="Input"
    //% blockHidden=true
    export function app_input_text(title: string, text: string): string {
        return ''
    }

    //% blockId="webcam_selector"
    //% block="$webcam"
    //% block.loc.vi="$webcam"
    //% blockHidden=true
    export function webcam_sector(webcam: WebcamType): any {
        return ''
    }

    //% blockId="webcam_frame"
    //% block="$webcam webcam"
    //% block.loc.vi="$webcam webcam"
    //% group="Webcam"
    //% blockHidden=true
    export function webcam_frame(webcam: WebcamType): any {
        return ''
    }



    //% blockId="grobot_general_oncontrolkey"
    //% block="when press $hotkey"
    //% block.loc.vi="khi nhấn nút $key"
    //% blockGap=6
    //% hotkey.fieldEditor="gridpicker"
    //% hotkey.defl=[["Heheheh","WWW"]]
    //% hotkey.fieldOptions.column=5
    //% hotkey.fieldOptions.width=220
    //% blockAllowMultiple=false
    //! [Event] GRobot-Progam
    //% blockHidden=true
    export function GB_OnControlKey(hotkey: ControlKey, handler: () => void) { }
    //% blockId="grobot_general_getcontrolkey"
    //% block="key $hotkey was pressed"
    //% block.loc.vi="khi nút $key được nhấn"
    //% blockGap=6
    //% inlineInputMode=inline
    //% hotkey.fieldEditor="gridpicker"
    //% hotkey.fieldOptions.column=5
    //% hotkey.fieldOptions.width=220
    //% hotkey.defl=[["Heheheh","WWW"]]
    //! [Bool] Is onboard button PRESS/RELEAST
    //% blockHidden=true
    export function GB_GetControlKey(hotkey: ControlKey): boolean {
        return true;
    }


    //% blockId="makecode_screen_turn"
    //% block="turn on camera"
    //% block.loc.vi="bật camera"
    //% group="Screen"
    //% blockHidden=true
    export function makecode_screen_turn(state: boolean) {

    }

    //% blockId="makecode_webcam_image"
    //% block="$module read image"
    //% block.loc.vi="$module lấy hình ảnh"
    //% group="Camera"
    //% blockGap=6
    //% inlineInputMode=inline
    //% module.fieldEditor="label"
    //% module.defl="WEBCAM"
    //% group="Webcam"
    //% blockHidden=true
    export function makecode_webcam_image(module: string): any {
        return 1;
    }



    //% block="$webcam"
    //% block.loc.vi="$webcam"
    //% blockId="webcam_stream"
    //% blockHidden=true
    export function webcam_stream(webcam: StreamType) {
        return "model"
    }


    //% block="say $text"
    //% block.loc.vi="nói $text"
    //% blockId="makecode_speaker_say"
    //% text.shadow="text"
    //% group="Sound"
    //% text.defl="Good morning"
    //% blockHidden=true
    export function makecode_speaker_say(text: any) {

    }
    //% block="play music from link $url"
    //% block.loc.vi="chơi nhạc từ link $url"
    //% blockId="makecode_speaker_playurl"
    //% url.shadow="text"
    //% group="Sound"
    //% url.defl="www.youtube.com"
    //% blockHidden=true
    export function makecode_speaker_playurl(url: any) {

    }

    //% group="Graph"
    //% blockId="makecode_graph_plot"
    //% block="$module plot $value to stream $topic of graph $graph"
    //% block.loc.vi="$module vẽ giá trị $value lên đường $topic của đồ thị $graph"
    //% module.fieldEditor="label"
    //% module.defl="GRAPH"
    //% inlineInputMode=inline
    //% blockHidden=true
    //% blockHidden=true
    export function makecode_graph_plot(module: string, value: any, topic: string, graph: string) {

    }
    //% group="Graph"
    //% blockId="makecode_graph_create"
    //% block="$module create graph with title $title"
    //% block.loc.vi="$module tạo biểu đồ với tiêu đề $title"
    //% module.fieldEditor="label"
    //% module.defl="GRAPH"
    //% blockHidden=true
    //% blockHidden=true
    export function makecode_graph_create(module: string, title: string) {

    }


}



// namespace logic {
//   //% group="Event"
//   //% blockId="logic_stayed"
//   //% block="$cond being true for at least $time"
//% block.loc.vi="__________________________________"//   
//% time.shadow="timePicker_"

//   export function logic_stayed(cond: boolean, time: number): boolean {
//     return false;
//   }

//   //% group="Event"
//   //% blockId="logic_recently"
//   //% block="$cond was true in the last $time"
//% block.loc.vi="__________________________________"//   
//% time.shadow="timePicker_"
//   export function logic_recently(cond: boolean, time: number): boolean {
//     return false;
//   }
// }




// //% block="$tag Music: Play %d.Intervals from middle C, %d.IntervalDirection by %n octave(s) and %d. by $note semitone(s) for $beat beats"
//% block.loc.vi="__________________________________"//
//% blockId="PlayNote_"
// //% group="Music"
// export function PlayNote_(note: number, beat: number){
// }

// //% block="24. Reset timer"
//% block.loc.vi="__________________________________"//
//% blockId="Reset_Timing"
// //% group="Timer"
// //% weight=100
// export function Reset_Timing() { }
// //% block="25. Timer"
//% block.loc.vi="__________________________________"//
//% blockId="Get_Timing"
// //% group="Timer"
// //% weight=99
// export function Get_Timing(): number {
//   return 0;
// }

// //% block="26. Timing: $time second"
//% block.loc.vi="__________________________________"//
//% blockId="Timing"
// //% group="Timer"
// //% number.defl=0.0
// //% weight=98
// export function Timing(time: number): boolean {
//   return false;
// }

// //% group="Infrared"
// //% blockId="grobot_infrared_setsignal"
// //% block="$module send signal to channel %channel"
//% block.loc.vi="__________________________________"//
//% module.fieldEditor="label"
// //% module.defl="INFRARED"
// //% channel.min=0 channel.max=12
// export function GB_Infrared_SetSignal(module: string, channel: number) { }
// //% group="Infrared"
// //% blockId="grobot_infrared_readavailable"
// //% block="$module if receive signal from channel %channel"
//% block.loc.vi="__________________________________"//
//% module.fieldEditor="label"
// //% module.defl="INFRARED"
// //% channel.min=0 channel.max=12
// //% blockHidden=true
// export function GB_Infrared_ReadAvailable(
//   module: string,
//   channel: number
// ): boolean {
//   return true;
// }

