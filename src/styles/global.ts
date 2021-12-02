import { createGlobalStyle } from "styled-components";

const primaryColor = "indigo";
const grayPallete = "blueGray";
const fontFamily = "Montserrat";

export const GlobalStyle = createGlobalStyle`
  :root {
    //colors
    --secondary: #FF227D;
    --white: #FFFFFF;
    --black: #000000;
    --info: #029BE5;
    --success: #0CD7A0;
    --warning: #FAAE42;
    --danger: #E62E4D;
    --background: var(--${grayPallete}50);
    --title: var(--${grayPallete}800);
    --textBody: var(--${grayPallete}600);
    --textCaption: var(--${grayPallete}400);
    --border: var(--${grayPallete}200);

    //primary
    --primary: var(--${primaryColor}500);
    --primary50: var(--${primaryColor}50);
    --primary100: var(--${primaryColor}100);
    --primary200: var(--${primaryColor}200);
    --primary300: var(--${primaryColor}300);
    --primary400: var(--${primaryColor}400);
    --primary500: var(--${primaryColor}500);
    --primary600: var(--${primaryColor}600);
    --primary700: var(--${primaryColor}700);
    --primary800: var(--${primaryColor}800);
    --primary900: var(--${primaryColor}900);

    //red
    --red: var(--red500);
    --red50: #FEF2F2;
    --red100: #FEE2E2;
    --red200: #FECACA;
    --red300: #FCA5A5;
    --red400: #F87171;
    --red500: #EF4444;
    --red600: #DC2626;
    --red700: #B91C1C;
    --red800: #991B1B;
    --red900: #7F1D1D;

    //pink
    --pink: var(--pink500);
    --pink50: #FDF2F8;
    --pink100: #FCE7F3;
    --pink200: #FBCFE8;
    --pink300: #F9A8D4;
    --pink400: #F472B6;
    --pink500: #EC4899;
    --pink600: #DB2777;
    --pink700: #BE185D;
    --pink800: #9D174D;
    --pink900: #831843;

    //purple
    --purple: var(--purple500);
    --purple50: #F4E6F5;
    --purple100: #CE94D9;
    --purple200: #BC69C8;
    --purple300: #AC48BC;
    --purple400: #9C28AF;
    --purple500: #8E26AA;
    --purple600: #7C20A1;
    --purple700: #7C20A1;
    --purple800: #6A1C98;
    --purple900: #4B158C;

    //violet
    --violet: var(--violet500);
    --violet50: #F5F3FF;
    --violet100: #EDE9FE;
    --violet200: #DDD6FE;
    --violet300: #C4B5FD;
    --violet400: #A78BFA;
    --violet500: #8B5CF6;
    --violet600: #7C3AED;
    --violet700: #6D28D9;
    --violet800: #5B21B6;
    --violet900: #4C1D95;

    //indigo
    --indigo: var(--indigo500);
    --indigo50: #EEF2FF;
    --indigo100: #E0E7FF;
    --indigo200: #C7D2FE;
    --indigo300: #A5B4FC;
    --indigo400: #818CF8;
    --indigo500: #6366F1;
    --indigo600: #4F46E5;
    --indigo700: #4338CA;
    --indigo800: #3730A3;
    --indigo900: #312E81;

    //blue
    --blue: var(--blue500);
    --blue50: #EFF6FF;
    --blue100: #DBEAFE;
    --blue200: #BFDBFE;
    --blue300: #93C5FD;
    --blue400: #60A5FA;
    --blue500: #3B82F6;
    --blue600: #2563EB;
    --blue700: #1D4ED8;
    --blue800: #1E40AF;
    --blue900: #1E3A8A;

    //light blue
    --lightBlue: var(--lightBlue500);
    --lightBlue50: #E1F5FE;
    --lightBlue100: #B3E5FC;
    --lightBlue200: #81D4FA;
    --lightBlue300: #4FC3F7;
    --lightBlue400: #29B6F6;
    --lightBlue500: #03A9F4;
    --lightBlue600: #039BE5;
    --lightBlue700: #0288D1;
    --lightBlue800: #0277BD;
    --lightBlue900: #01579B;

    //cyan
    --cyan: var(--cyan500);
    --cyan50: #E0F7FA;
    --cyan100: #B2EBF2;
    --cyan200: #80DEEA;
    --cyan300: #4DD0E1;
    --cyan400: #26C6DA;
    --cyan500: #00BCD4;
    --cyan600: #00ACC1;
    --cyan700: #0097A7;
    --cyan800: #00838F;
    --cyan900: #006064;

    //teal
    --teal: var(--teal500);
    --teal50: #E0F2F1;
    --teal100: #B2DFDB;
    --teal200: #80CBC4;
    --teal300: #4DB6AC;
    --teal400: #26A69A;
    --teal500: #009688;
    --teal600: #00897B;
    --teal700: #00796B;
    --teal800: #00695C;
    --teal900: #004D40;

    //emerald
    --emerald: var(--emerald500);
    --emerald50: #ECFDF5;
    --emerald100: #D1FAE5;
    --emerald200: #A7F3D0;
    --emerald300: #6EE7B7;
    --emerald400: #34D399;
    --emerald500: #10B981;
    --emerald600: #059669;
    --emerald700: #047857;
    --emerald800: #065F46;
    --emerald900: #064E3B;

    //green
    --green: var(--green500);
    --green50: #E8F5E9;
    --green100: #C8E6C9;
    --green200: #A5D6A7;
    --green300: #81C784;
    --green400: #66BB6A;
    --green500: #4CAF50;
    --green600: #43A047;
    --green700: #388E3C;
    --green800: #2E7D32;
    --green900: #1B5E20;

    //light green
    --lightGreen: var(--lightGreen500);
    --lightGreen50: #F1F8E9;
    --lightGreen100: #DCEDC8;
    --lightGreen200: #C5E1A5;
    --lightGreen300: #AED581;
    --lightGreen400: #9CCC65;
    --lightGreen500: #8BC34A;
    --lightGreen600: #7CB342;
    --lightGreen700: #689F38;
    --lightGreen800: #558B2F;
    --lightGreen900: #33691E;

    //lime
    --lime: var(--lime500);
    --lime50: #F9FBE7;
    --lime100: #F0F4C3;
    --lime200: #E6EE9C;
    --lime300: #DCE775;
    --lime400: #D4E157;
    --lime500: #CDDC39;
    --lime600: #C0CA33;
    --lime700: #AFB42B;
    --lime800: #9E9D24;
    --lime900: #827717;

    //yellow
    --yellow: var(--yellow500);
    --yellow50: #FFFDE7;
    --yellow100: #FFF9C4;
    --yellow200: #FFF59D;
    --yellow300: #FFF176;
    --yellow400: #FFEE58;
    --yellow500: #FFEB3B;
    --yellow600: #FDD835;
    --yellow700: #FBC02D;
    --yellow800: #F9A825;
    --yellow900: #F57F17;

    //amber
    --amber: var(--amber500);
    --amber50: #FFFBEB;
    --amber100: #FEF3C7;
    --amber200: #FDE68A;
    --amber300: #FCD34D;
    --amber400: #FBBF24;
    --amber500: #F59E0B;
    --amber600: #D97706;
    --amber700: #B45309;
    --amber800: #92400E;
    --amber900: #78350F;

    //orange
    --orange: var(--orange500);
    --orange50: #FFF3E0;
    --orange100: #FFE0B2;
    --orange200: #FFCC80;
    --orange300: #FFB74D;
    --orange400: #FFA726;
    --orange500: #FF9800;
    --orange600: #FB8C00;
    --orange700: #F57C00;
    --orange800: #EF6C00;
    --orange900: #E65100;

    //deep orange
    --deepOrange: var(--deepOrange500);
    --deepOrange50: #FBE9E7;
    --deepOrange100: #FFCCBC;
    --deepOrange200: #FFAB91;
    --deepOrange300: #FF8A65;
    --deepOrange400: #FF7043;
    --deepOrange500: #FF5722;
    --deepOrange600: #F4511E;
    --deepOrange700: #E64A19;
    --deepOrange800: #D84315;
    --deepOrange900: #BF360C;

    //brow
    --brow: var(--brow400);
    --brow50: #EFEBE9;
    --brow100: #D7CCC8;
    --brow200: #BCAAA4;
    --brow300: #A1887F;
    --brow400: #8D6E63;
    --brow500: #795548;
    --brow600: #6D4C41;
    --brow700: #5D4037;
    --brow800: #4E342E;
    --brow900: #3E2723;
    
    //gray
    --gray: var(--gray500);
    --gray50: #FAFAFA;
    --gray100: #F5F5F5;
    --gray200: #EEEEEE;
    --gray300: #E0E0E0;
    --gray400: #BDBDBD;
    --gray500: #9E9E9E;
    --gray600: #757575;
    --gray700: #616161;
    --gray800: #424242;
    --gray900: #212121;

    //teal gray
    --tealGray: var(--tealGray500);
    --tealGray50: #ECEFF1;
    --tealGray100: #CFD8DC;
    --tealGray200: #B0BEC5;
    --tealGray300: #90A4AE;
    --tealGray400: #78909C;
    --tealGray500: #607D8B;
    --tealGray600: #546E7A;
    --tealGray700: #455A64;
    --tealGray800: #37474F;
    --tealGray900: #263238;

    //blue gray
    --blueGray: var(--blueGray500);
    --blueGray50: #F9FAFB;
    --blueGray100: #F3F4F6;
    --blueGray200: #E5E7EB;
    --blueGray300: #D1D5DB;
    --blueGray400: #9CA3AF;
    --blueGray500: #6B7280;
    --blueGray600: #4B5563;
    --blueGray700: #374151;
    --blueGray800: #1F2937;
    --blueGray900: #111827;

    //border-radious
    --radius-squared: .4rem;
    --radius-rounded: .8rem;
    --radius-full: 1.6rem;

    //margin
    --margin-xs: .2rem;
    --margin-sm: .4rem;
    --margin-md: .8rem;
    --margin-lg: 1rem;
    --margin-xlg: 1.2rem;

    //paddings
    --margin-none: 0;
    --padding-xs: .2rem;
    --padding-sm: .4rem;
    --padding-md: .8rem;
    --padding-lg: 1rem;
    --padding-xlg: 1.2rem;

    //gap
    --gap-none: 0;
    --gap-xs: .2rem;
    --gap-sm: .4rem;
    --gap-md: .8rem;
    --gap-lg: 1.6rem;
    --gap-xlg: 3.2rem;

    //justify content
    --justify-start: start;
    --justify-end: end;
    --justify-center: center;
    --justify-between: space-between;
    --justify-around: space-around;
    --justify-evenly: space-evenly;

    //align items
    --items-start: flex-start;
    --items-end: flex-end;
    --items-center: center;
    --items-baseline: baseline;
    --items-stretch: stretch;

    //font size
    --heading1: 2.75rem;
    --heading2: 2rem;
    --heading3: 1.75rem;
    --heading4: 1.5rem;
    --heading5: 1.25rem;
    --heading6: 1rem;
    --body: .9rem;
    --caption: .8rem;
    --label: .7rem;

    //font weight
    --thin: 200;
    --normal: 400;
    --bold: 700;

    //line height
    --leading-none: 1;
    --leading-xs: 1.25;
    --leading-sm: 1.375;
    --leading-md: 1.5;
    --leading-lg: 1.625;
    --leading-xlg: 2;

    //text align
    --text-left: left;
    --text-center: center;
    --text-right: right;
    --text-justify: justify;

    //text decoration
    --underline: underline;
    --lineThrough: line-through;

    //text trasnform
    --uppercase: uppercase;
    --lowercase: lowercase;
    --capitalize: capitalize;

    //shadows
    --shadow-card: 1px 3px 10px 0 rgb(0 0 0 / 6%);

    //none
    --none: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${fontFamily}, sans-serif;
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
