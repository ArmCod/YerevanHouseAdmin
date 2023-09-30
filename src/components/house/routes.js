import Test from "../../components/Test";
import { ABOUTUS_PAGE, ADVANTAGES_PAGE, APARTAMENTS_PAGE, COMMERICAL_PAGE, CONDITION_PAGE, COOPERATION_PAGE, COUNTRY_PAGE, FESTIVAL_PAGE, INFO_PAGE, LANDMARK_PAGE, LANDS_PAGE, PRIVATEHOUSES_PAGE, PRODUCT_PAGE, SLIDER_PAGE } from "./urls";
import house from "../../images/house.png"
import about from "../../images/about.png"
import advantages from "../../images/advantages.png"
import armenia from "../../images/armenia.png"
import concert from "../../images/concert.png"
import cooperate from "../../images/cooperate.png"
import gallery from "../../images/gallery.png"
import info from "../../images/info.png"
import flat from "../../images/flat.png"
import land from "../../images/land.png"
import commerical from "../../images/commerical.png"
import sightseeing from "../../images/sightseeing.png"
import condition from "../../images/terms-and-conditions.png"
import AboutUsComponent from "../../components/about";
import InfoComponent from "../../components/info/Info";
import SliderComponent from "../../components/slider";
import ConditionComponent from "../../components/condition";
import CooperateComponent from "../../components/cooperate";
import CountryComponent from "../../components/country";
import AdvantagesComponent from "../../components/advantages";
import LandmarkComponent from "../../components/landmark";
import FestivalComponent from "../../components/festival";
import ApartamentsComponent from "../../components/apartament";
import HouseComponent from "../../components/house";
import CommericalComponent from "../../components/commerical";
import LandsComponent from "../../components/lands";

export const isAuthPages = [
    { id: 1, path: PRIVATEHOUSES_PAGE, name: "Առանձնատներ", Component: HouseComponent, image: house },
    { id: 2, path: APARTAMENTS_PAGE, name: "Բնակարաններ", Component: ApartamentsComponent, image: flat },
    { id: 3, path: LANDS_PAGE, name: "Հողատարածքներ", Component: LandsComponent, image: land },
    { id: 4, path: COMMERICAL_PAGE, name: "Կոմերցիոն", Component: CommericalComponent, image: commerical },
    { id: 6, path: SLIDER_PAGE, name: "Սլայդեր", Component: SliderComponent, image: gallery },
    { id: 7, path: ABOUTUS_PAGE, name: "Մեր մասին և հաջողությունները", Component: AboutUsComponent, image: about },
    { id: 8, path: ADVANTAGES_PAGE, name: "Առավելությունները", Component: AdvantagesComponent, image: advantages },
    { id: 9, path: INFO_PAGE, name: "Կոնտակտային տվյալներ", Component: InfoComponent, image: info },
    { id: 10, path: CONDITION_PAGE, name: "Պայմաններ և կանոններ", Component: ConditionComponent, image: condition },
    { id: 11, path: COOPERATION_PAGE, name: "Համագործակցություն", Component: CooperateComponent, image: cooperate },
    { id: 12, path: COUNTRY_PAGE, name: "Երկրի մասին", Component: CountryComponent, image: armenia },
    { id: 13, path: LANDMARK_PAGE, name: "Տեսարժան վայրեր", Component: LandmarkComponent, image: sightseeing },
    { id: 14, path: FESTIVAL_PAGE, name: "Փառատոններ", Component: FestivalComponent, image: concert },
]