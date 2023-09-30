import {
  ABOUTUS_PAGE,
  ADVANTAGES_PAGE,
  APARTAMENTS_PAGE,
  CHAT_GENERAL_PAGE,
  CHAT_RENT_PAGE,
  CHAT_SALE_PAGE,
  COMMERICAL_PAGE,
  CONDITION_PAGE,
  COOPERATION_PAGE,
  COUNTRY_PAGE,
  FESTIVAL_PAGE,
  FORMING_PAGE,
  INFO_PAGE,
  LANDMARK_PAGE,
  LANDS_PAGE,
  LOGIN_PAGE,
  PRIVATEHOUSES_PAGE,
  PRODUCT_PAGE,
  SLIDER_PAGE,
  TRANSFER_PAGE,
  USERS_PAGE,
  WISH_PAGE,
} from "./urls";
import house from "../../images/house.png";
import about from "../../images/about.png";
import advantages from "../../images/advantages.png";
import armenia from "../../images/armenia.png";
import concert from "../../images/concert.png";
import cooperate from "../../images/cooperate.png";
import gallery from "../../images/gallery.png";
import info from "../../images/info.png";
import flat from "../../images/apartment.jpg";
import land from "../../images/lend_area.jpg";
import computer from "../../images/computer.png";
import commerical from "../../images/commerical.png";
import sightseeing from "../../images/sightseeing.png";
import condition from "../../images/terms-and-conditions.png";
import conversation from "../../images/conversation.png";
import bus from "../../images/bus.png";
import AboutUsComponent from "../../components/about";
import InfoComponent from "../../components/info/Info";
import SliderComponent from "../../components/slider";
import WishComponent from "../../components/wish";
import CooperateComponent from "../../components/cooperate";
import CountryComponent from "../../components/country";
import AdvantagesComponent from "../../components/advantages";
import LandmarkComponent from "../../components/landmark";
import FestivalComponent from "../../components/festival";
import ApartamentsComponent from "../../components/apartament";
import HouseComponent from "../../components/house";
import CommericalComponent from "../../components/commerical";
import LandsComponent from "../../components/lands";
import Login from "../../components/login/Login";
import UsersComponent from "../../components/users";
import ChatGeneralComponent from "../../components/chatgeneral";
import ChatRentComponent from "../../components/chatrent";
import TrasferComponent from "../../components/transfer";
import ChatSaleComponent from "../../components/chatsale";
import ConditionComponent from "../../components/condition";
import FormingComponent from "../../components/forming";

export const isAuthPages = [
  {
    id: 1,
    path: PRIVATEHOUSES_PAGE,
    pathtrue: "/privatehouses/1/type=Sale&archive=0",
    name: "Առանձնատներ",
    Component: HouseComponent,
    image: house,
  },
  {
    id: 2,
    path: APARTAMENTS_PAGE,
    pathtrue: "/apartaments/1/type=Sale&archive=0",
    name: "Բնակարաններ",
    Component: ApartamentsComponent,
    image: flat,
  },
  {
    id: 3,
    path: LANDS_PAGE,
    pathtrue: "/lands/1/type=Sale&archive=0",
    name: "Հողատարածքներ",
    Component: LandsComponent,
    image: land,
  },
  {
    id: 4,
    path: COMMERICAL_PAGE,
    pathtrue: "/commercial/1/type=Sale&archive=0",
    name: "Կոմերցիոն",
    Component: CommericalComponent,
    image: commerical,
  },
  {
    id: 5,
    path: FORMING_PAGE,
    name: "Վճարումներ",
    Component: FormingComponent,
    image: cooperate,
  },
  {
    id: 6,
    path: USERS_PAGE,
    name: "Օգտատերեր",
    Component: UsersComponent,
    image: computer,
  },
  {
    id: 7,
    path: CHAT_SALE_PAGE,
    name: "Վաճառքի չատ",
    Component: ChatSaleComponent,
    image: conversation,
  },
  {
    id: 8,
    path: CHAT_RENT_PAGE,
    name: "Վարձույթի չատ",
    Component: ChatRentComponent,
    image: conversation,
  },
  {
    id: 9,
    path: CHAT_GENERAL_PAGE,
    name: "Ընդահանուր չատ",
    Component: ChatGeneralComponent,
    image: conversation,
  },
  {
    id: 10,
    path: COOPERATION_PAGE,
    name: "Համագործակցություն",
    Component: CooperateComponent,
    image: cooperate,
  },
  {
    id: 11,
    path: INFO_PAGE,
    name: "Կոնտակտային տվյալներ",
    Component: InfoComponent,
    image: info,
  },
  {
    id: 12,
    path: SLIDER_PAGE,
    name: "Սլայդեր",
    Component: SliderComponent,
    image: gallery,
  },
  {
    id: 13,
    path: CONDITION_PAGE,
    name: "Պայմաններ և կանոններ",
    Component: ConditionComponent,
    image: condition,
  },
  {
    id: 14,
    path: WISH_PAGE,
    name: "Պայմաններ և կանոններ",
    Component: WishComponent,
    image: condition,
  },
  {
    id: 15,
    path: ABOUTUS_PAGE,
    name: "Մեր մասին և հաջողությունները",
    Component: AboutUsComponent,
    image: about,
  },
  {
    id: 16,
    path: ADVANTAGES_PAGE,
    name: "Առավելությունները",
    Component: AdvantagesComponent,
    image: advantages,
  },
  {
    id: 17,
    path: COUNTRY_PAGE,
    name: "Երկրի մասին",
    Component: CountryComponent,
    image: armenia,
  },
  {
    id: 18,
    path: LANDMARK_PAGE,
    name: "Տեսարժան վայրեր",
    Component: LandmarkComponent,
    image: sightseeing,
  },
  {
    id: 19,
    path: FESTIVAL_PAGE,
    name: "Փառատոններ",
    Component: FestivalComponent,
    image: concert,
  },
];

export const adminPages = [
  {
    id: 1,
    path: PRIVATEHOUSES_PAGE,
    pathtrue: "/privatehouses/1/type=Sale&archive=0",
    name: "Առանձնատներ",
    Component: HouseComponent,
    image: house,
  },
  {
    id: 2,
    path: APARTAMENTS_PAGE,
    pathtrue: "/apartaments/1/type=Sale&archive=0",
    name: "Բնակարաններ",
    Component: ApartamentsComponent,
    image: flat,
  },
  {
    id: 3,
    path: LANDS_PAGE,
    pathtrue: "/lands/1/type=Sale&archive=0",
    name: "Հողատարածքներ",
    Component: LandsComponent,
    image: land,
  },
  {
    id: 4,
    path: COMMERICAL_PAGE,
    pathtrue: "/commercial/1/type=Sale&archive=0",
    name: "Կոմերցիոն",
    Component: CommericalComponent,
    image: commerical,
  },
  {
    id: 5,
    path: FORMING_PAGE,
    name: "Վճարումներ",
    Component: FormingComponent,
    image: cooperate,
  },
  {
    id: 6,
    path: USERS_PAGE,
    name: "Օգտատերեր",
    Component: UsersComponent,
    image: computer,
  },
  {
    id: 7,
    path: CHAT_SALE_PAGE,
    name: "Վաճառքի չատ",
    Component: ChatSaleComponent,
    image: conversation,
  },
  {
    id: 8,
    path: CHAT_RENT_PAGE,
    name: "Վարձույթի չատ",
    Component: ChatRentComponent,
    image: conversation,
  },
  {
    id: 9,
    path: CHAT_GENERAL_PAGE,
    name: "Ընդահանուր չատ",
    Component: ChatGeneralComponent,
    image: conversation,
  },
  {
    id: 10,
    path: COOPERATION_PAGE,
    name: "Համագործակցություն",
    Component: CooperateComponent,
    image: cooperate,
  },
  {
    id: 11,
    path: INFO_PAGE,
    name: "Կոնտակտային տվյալներ",
    Component: InfoComponent,
    image: info,
  },
  {
    id: 12,
    path: SLIDER_PAGE,
    name: "Սլայդեր",
    Component: SliderComponent,
    image: gallery,
  },
  {
    id: 13,
    path: CONDITION_PAGE,
    name: "Պայմաններ և կանոններ",
    Component: ConditionComponent,
    image: condition,
  },
  {
    id: 14,
    path: WISH_PAGE,
    name: "Ուղեցույց",
    Component: WishComponent,
    image: condition,
  },
  {
    id: 15,
    path: ABOUTUS_PAGE,
    name: "Մեր մասին և հաջողությունները",
    Component: AboutUsComponent,
    image: about,
  },
  {
    id: 16,
    path: ADVANTAGES_PAGE,
    name: "Առավելությունները",
    Component: AdvantagesComponent,
    image: advantages,
  },
  {
    id: 17,
    path: COUNTRY_PAGE,
    name: "Երկրի մասին",
    Component: CountryComponent,
    image: armenia,
  },
  {
    id: 18,
    path: LANDMARK_PAGE,
    name: "Տեսարժան վայրեր",
    Component: LandmarkComponent,
    image: sightseeing,
  },
  {
    id: 19,
    path: FESTIVAL_PAGE,
    name: "Փառատոններ",
    Component: FestivalComponent,
    image: concert,
  },
];

export const sellerPages = [
  {
    id: 1,
    path: PRIVATEHOUSES_PAGE,
    pathtrue: "/privatehouses/1/type=Sale&archive=0",
    name: "Առանձնատներ",
    Component: HouseComponent,
    image: house,
  },
  {
    id: 2,
    path: APARTAMENTS_PAGE,
    pathtrue: "/apartaments/1/type=Sale&archive=0",
    name: "Բնակարաններ",
    Component: ApartamentsComponent,
    image: flat,
  },
  {
    id: 3,
    path: LANDS_PAGE,
    pathtrue: "/lands/1/type=Sale&archive=0",
    name: "Հողատարածքներ",
    Component: LandsComponent,
    image: land,
  },
  {
    id: 4,
    path: COMMERICAL_PAGE,
    pathtrue: "/commercial/1/type=Sale&archive=0",
    name: "Կոմերցիոն",
    Component: CommericalComponent,
    image: commerical,
  },
  {
    id: 5,
    path: CHAT_SALE_PAGE,
    name: "Վաճառքի չատ",
    Component: ChatSaleComponent,
    image: conversation,
  },
  {
    id: 6,
    path: CHAT_GENERAL_PAGE,
    name: "Ընդահանուր չատ",
    Component: ChatGeneralComponent,
    image: conversation,
  },
];

export const dailyPages = [
  {
    id: 1,
    path: PRIVATEHOUSES_PAGE,
    pathtrue: "/privatehouses/1/type=For+Rent&archive=0",
    name: "Առանձնատներ",
    Component: HouseComponent,
    image: house,
  },
  {
    id: 2,
    path: APARTAMENTS_PAGE,
    pathtrue: "/apartaments/1/type=For+Rent&archive=0",
    name: "Բնակարաններ",
    Component: ApartamentsComponent,
    image: flat,
  },
  {
    id: 3,
    path: LANDS_PAGE,
    pathtrue: "/lands/1/type=For+Rent&archive=0",
    name: "Հողատարածքներ",
    Component: LandsComponent,
    image: land,
  },
  {
    id: 4,
    path: COMMERICAL_PAGE,
    pathtrue: "/commercial/1/type=Sale&archive=0",
    name: "Կոմերցիոն",
    Component: CommericalComponent,
    image: commerical,
  },
  {
    id: 5,
    path: FORMING_PAGE,
    name: "Վճարումներ",
    Component: FormingComponent,
    image: cooperate,
  },
  {
    id: 6,
    path: CHAT_RENT_PAGE,
    name: "Վարձույթի չատ",
    Component: ChatRentComponent,
    image: conversation,
  },
  {
    id: 7,
    path: CHAT_GENERAL_PAGE,
    name: "Ընդահանուր չատ",
    Component: ChatGeneralComponent,
    image: conversation,
  },
];

export const inNotAuthPages = [{ id: 1, path: LOGIN_PAGE, Component: Login }];
