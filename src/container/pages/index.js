import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import EditAppartament from "../../components/editappartament";
import EditCommercial from "../../components/editcommercial";
import EditHouse from "../../components/edithouses";
import EditLand from "../../components/editland";
import Main from "../../components/Main";
import Statement from "../../components/statement";
import { adminPages, dailyPages, inNotAuthPages, isAuthPages, sellerPages } from "../../utils/routing/routes";

const Pages = () => {

    const isAuth = useSelector(state => state?.isAuthReducer?.isAuth)
    const Admins = useSelector(state => state?.isAuthReducer?.roleType)
    return (
        <Routes>
            {isAuth && <>
                <Route path="/" element={<Main />} />
                <Route path="/new" element={<Statement />} />
                <Route path="/editappartament/:currentId" element={<EditAppartament />} />
                <Route path="/edithouse/:currentId" element={<EditHouse />} />
                <Route path="/editland/:currentId" element={<EditLand />} />
                <Route path="/editcommercial/:currentId" element={<EditCommercial />} />
            </>}
            {isAuth ? Admins?.[0].type === 'admin' ? adminPages.map((i) => {
                return <Route path={i.path} element={<i.Component />} key={i.id} />
            }) : Admins?.[0].type === 'seller' ? sellerPages.map((i) => {
                return <Route path={i.path} element={<i.Component />} key={i.id} />
            }) : Admins?.[0].type === 'daily' && dailyPages.map((i) => {
                return <Route path={i.path} element={<i.Component />} key={i.id} />
            }) :
                inNotAuthPages.map((i) => {
                    return <Route path={i.path} element={<i.Component />} key={i.id} />
                })
            }
        </Routes>
    );
}

export default Pages;